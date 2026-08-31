import { createContext, useContext, useMemo, useState } from "react";
import { userSeed } from "./data";
import { OFFER_MINUTES } from "./data/offer.js";

const StoreContext = createContext(null);
const SESSION_KEY = "mauri.app.session";
const DONE_KEY = "mauri.app.done";
const WEEK_KEY = "mauri.app.week";
const PAID_KEY = "mauri.app.paid";
const PROMPT_PACK_KEY = "mauri.app.promptpack";
const OFFER_KEY = "mauri.app.offer";
const ACCOUNTS_KEY = "mauri.app.accounts";
const WEEK_GOAL = 5;
const ROOT_EMAIL = "root@mauri.local";
const ROOT_NAME = "Carlos Ludwin Zevallos Gonzales";

export function isRootEmail(email) {
  return String(email || "").trim().toLowerCase() === ROOT_EMAIL;
}

export function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function loadAccounts() {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "{}") || {};
  } catch {
    return {};
  }
}

function saveAccounts(map) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(map));
}

function seedRootAccount(map) {
  if (map[ROOT_EMAIL]) return map;
  const next = {
    ...map,
    [ROOT_EMAIL]: {
      email: ROOT_EMAIL,
      password: "root",
      name: ROOT_NAME,
      isRoot: true,
      profile: {},
    },
  };
  saveAccounts(next);
  return next;
}

function todayKey(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

function addDays(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

function startOfWeek(d = new Date()) {
  const x = new Date(d);
  const day = (x.getDay() + 6) % 7;
  x.setHours(0, 0, 0, 0);
  x.setDate(x.getDate() - day);
  return x;
}

function seedWeekIfEmpty(raw) {
  if (raw && Object.keys(raw).length) return raw;
  const start = startOfWeek();
  return {
    [todayKey(start)]: { lessons: 1, prompts: 2 },
    [todayKey(addDays(start, 1))]: { lessons: 2, prompts: 1 },
    [todayKey(addDays(start, 2))]: { lessons: 1, prompts: 3 },
  };
}

function loadSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

function defaultOffer() {
  return { spun: false, discount: 0, bumped: false, expiresAt: null, done: false };
}

function loadOffer() {
  try {
    return { ...defaultOffer(), ...(JSON.parse(localStorage.getItem(OFFER_KEY) || "null") || {}) };
  } catch {
    return defaultOffer();
  }
}

export function StoreProvider({ children }) {
  const [session, setSession] = useState(loadSession);
  const [completed, setCompleted] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(DONE_KEY) || "[]");
    } catch {
      return [];
    }
  });
  const [weekLog, setWeekLog] = useState(() => {
    try {
      const seeded = seedWeekIfEmpty(JSON.parse(localStorage.getItem(WEEK_KEY) || "null"));
      localStorage.setItem(WEEK_KEY, JSON.stringify(seeded));
      return seeded;
    } catch {
      const seeded = seedWeekIfEmpty(null);
      localStorage.setItem(WEEK_KEY, JSON.stringify(seeded));
      return seeded;
    }
  });
  const [messages, setMessages] = useState({});
  const [paid, setPaidState] = useState(() => localStorage.getItem(PAID_KEY) === "1");
  const [promptPack, setPromptPack] = useState(() => localStorage.getItem(PROMPT_PACK_KEY) === "1");
  const [offer, setOfferState] = useState(loadOffer);
  const [accounts, setAccounts] = useState(() => {
    const loaded = seedRootAccount(loadAccounts());
    const sess = loadSession();
    if (sess?.email) {
      const email = normalizeEmail(sess.email);
      if (!loaded[email]) {
        const migrated = {
          ...loaded,
          [email]: {
            email,
            password: sess.isRoot ? "root" : null,
            name: sess.name,
            isRoot: Boolean(sess.isRoot),
            profile: sess.profile || {},
            migrated: !sess.isRoot,
          },
        };
        saveAccounts(migrated);
        return migrated;
      }
    }
    return loaded;
  });
  const isRoot = Boolean(session?.isRoot);

  function persistOffer(next) {
    localStorage.setItem(OFFER_KEY, JSON.stringify(next));
    setOfferState(next);
    return next;
  }

  function bump(field) {
    const key = todayKey();
    setWeekLog((prev) => {
      const cur = prev[key] || { lessons: 0, prompts: 0 };
      const next = { ...prev, [key]: { ...cur, [field]: cur[field] + 1 } };
      localStorage.setItem(WEEK_KEY, JSON.stringify(next));
      return next;
    });
  }

  const value = useMemo(
    () => ({
      session,
      user: session
        ? { ...userSeed, name: session.name, email: session.email, isRoot: Boolean(session.isRoot), profile: session.profile }
        : null,
      completed,
      messages,
      weekLog,
      weekGoal: WEEK_GOAL,
      paid: paid || isRoot,
      hasPromptPack: promptPack || isRoot,
      offer,
      isRoot,
      isRegistered(email) {
        const e = normalizeEmail(email);
        if (!e) return false;
        if (isRootEmail(e)) return true;
        return Boolean(accounts[e]);
      },
      verifyPassword(email, password) {
        const e = normalizeEmail(email);
        if (isRootEmail(e)) return password === "root";
        const acc = accounts[e];
        if (!acc) return false;
        if (!acc.password && acc.migrated) return String(password || "").length >= 4;
        return acc.password === password;
      },
      registerAccount({ email, password, name, profile }) {
        const e = normalizeEmail(email);
        if (!e || isRootEmail(e)) return { ok: false, reason: "invalid" };
        if (accounts[e] && accounts[e].password) return { ok: false, reason: "exists" };
        const next = {
          ...accounts,
          [e]: {
            email: e,
            password,
            name: String(name || "").trim(),
            profile: profile || {},
            isRoot: false,
            createdAt: Date.now(),
          },
        };
        saveAccounts(next);
        setAccounts(next);
        return { ok: true };
      },
      signIn(email, opts = {}) {
        const root = Boolean(opts.isRoot) || isRootEmail(email);
        const e = root ? ROOT_EMAIL : normalizeEmail(email);
        const acc = accounts[e];
        const name = root
          ? ROOT_NAME
          : String(opts.name || acc?.name || email.split("@")[0].replace(/[._]/g, " "));
        const pretty = name.charAt(0).toUpperCase() + name.slice(1);
        if (!root && acc?.migrated && !acc.password && opts.password) {
          const next = {
            ...accounts,
            [e]: { ...acc, password: opts.password, migrated: false },
          };
          saveAccounts(next);
          setAccounts(next);
        }
        const next = {
          email: e,
          name: root ? ROOT_NAME : pretty,
          isRoot: root,
          profile: opts.profile || acc?.profile || {},
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(next));
        setSession(next);
      },
      signOut() {
        localStorage.removeItem(SESSION_KEY);
        setSession(null);
      },
      markDone(key) {
        if (completed.includes(key)) return;
        bump("lessons");
        setCompleted((prev) => {
          const next = prev.includes(key) ? prev : [...prev, key];
          localStorage.setItem(DONE_KEY, JSON.stringify(next));
          return next;
        });
      },
      isDone(key) {
        return completed.includes(key);
      },
      logPromptUse() {
        bump("prompts");
      },
      unlockPaid() {
        localStorage.setItem(PAID_KEY, "1");
        setPaidState(true);
        persistOffer({ ...offer, done: true });
      },
      unlockPromptPack() {
        localStorage.setItem(PROMPT_PACK_KEY, "1");
        setPromptPack(true);
      },
      spinOffer(prize = 50) {
        const expiresAt = offer.expiresAt && offer.expiresAt > Date.now()
          ? offer.expiresAt
          : Date.now() + OFFER_MINUTES * 60 * 1000;
        return persistOffer({
          ...offer,
          spun: true,
          discount: Math.max(offer.discount || 0, prize),
          expiresAt,
        });
      },
      bumpOffer() {
        const expiresAt = offer.expiresAt && offer.expiresAt > Date.now()
          ? offer.expiresAt
          : Date.now() + OFFER_MINUTES * 60 * 1000;
        return persistOffer({
          ...offer,
          spun: true,
          bumped: true,
          discount: 60,
          expiresAt,
        });
      },
      completeOffer() {
        persistOffer({ ...offer, done: true });
      },
      pushMessage(toolId, message) {
        setMessages((prev) => ({
          ...prev,
          [toolId]: [...(prev[toolId] || []), message],
        }));
      },
      weekDays() {
        const start = startOfWeek();
        return Array.from({ length: 7 }, (_, i) => {
          const date = addDays(start, i);
          const key = todayKey(date);
          const log = weekLog[key] || { lessons: 0, prompts: 0 };
          return {
            key,
            date,
            label: ["L", "M", "X", "J", "V", "S", "D"][i],
            name: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"][i],
            isToday: key === todayKey(),
            lessons: log.lessons,
            prompts: log.prompts,
          };
        });
      },
    }),
    [session, completed, messages, weekLog, paid, promptPack, accounts, offer, isRoot]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
