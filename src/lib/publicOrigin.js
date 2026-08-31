export async function guessLanIp() {
  if (typeof window === "undefined" || !window.RTCPeerConnection) return "";
  return new Promise((resolve) => {
    let settled = false;
    const finish = (ip) => {
      if (settled) return;
      settled = true;
      try {
        pc.close();
      } catch {
        /* ignore */
      }
      resolve(ip || "");
    };
    const pc = new RTCPeerConnection({ iceServers: [] });
    const timer = window.setTimeout(() => finish(""), 1800);
    try {
      pc.createDataChannel("lan");
      pc.onicecandidate = (event) => {
        const line = event.candidate?.candidate || "";
        const match = line.match(/([0-9]{1,3}(?:\.[0-9]{1,3}){3})/);
        const ip = match?.[1] || "";
        if (
          ip &&
          !ip.startsWith("127.") &&
          !ip.startsWith("0.") &&
          !ip.startsWith("169.254.") &&
          ip !== "255.255.255.255"
        ) {
          window.clearTimeout(timer);
          finish(ip);
        }
      };
      pc.createOffer()
        .then((offer) => pc.setLocalDescription(offer))
        .catch(() => finish(""));
    } catch {
      window.clearTimeout(timer);
      finish("");
    }
  });
}

export async function scanOrigin() {
  if (typeof window === "undefined") return "";
  const { protocol, hostname, port } = window.location;
  if (hostname && hostname !== "localhost" && hostname !== "127.0.0.1") {
    return window.location.origin;
  }
  const ip = await guessLanIp();
  if (!ip) return window.location.origin;
  const host = port ? `${ip}:${port}` : ip;
  return `${protocol}//${host}`;
}
