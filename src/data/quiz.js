export const quizSteps = [
  {
    id: "work",
    kicker: "DESAFÍO DE IA DE 28 DÍAS",
    q: "¿Cómo se describiría?",
    type: "photos",
    options: [
      {
        value: "Trabajo para una empresa",
        label: "Trabajo para una empresa",
        image: "/quiz/quiz-work-company.png",
      },
      {
        value: "Trabajo por mi cuenta",
        label: "Trabajo por mi cuenta",
        image: "/quiz/quiz-work-freelance.png",
      },
    ],
  },
  {
    id: "age",
    q: "¿Cuál es tu rango de edad?",
    type: "list",
    options: ["18–24", "25–34", "35–44", "45–54", "55 o más"],
  },
  {
    id: "gender",
    q: "¿Cómo te identificas?",
    type: "list",
    options: ["Hombre", "Mujer", "Prefiero no decir"],
  },
  {
    id: "goal",
    q: "¿Qué quieres lograr con la IA?",
    type: "list",
    options: [
      "Ser más productivo en el trabajo",
      "Conseguir un mejor puesto",
      "Lanzar o hacer crecer mi negocio",
      "Aprender una habilidad nueva",
    ],
  },
  {
    id: "experience",
    q: "¿Cuánta experiencia tienes con herramientas de IA?",
    type: "list",
    options: ["Nunca las he usado", "Las he probado un poco", "Las uso con frecuencia"],
  },
  {
    id: "time",
    q: "¿Cuánto rato le puedes meter al día?",
    type: "list",
    options: ["5 minutos", "10–15 minutos", "30 minutos o más"],
  },
  {
    id: "industry",
    q: "¿En qué te mueves más?",
    type: "list",
    options: ["Crecimiento y ventas", "Operaciones", "Diseño y creación", "Escuela o formación", "Otra cosa"],
  },
  {
    id: "block",
    q: "¿Qué te frena hoy?",
    type: "list",
    options: [
      "No sé por dónde empezar",
      "No tengo tiempo",
      "Me da cosa equivocarme",
      "No veo resultados claros",
    ],
  },
  {
    id: "proof",
    type: "proof",
    title: "Ya hay más de 2 millones de personas en el desafío",
    body: "Empiezan con 10 minutos al día. Tú también puedes armar el hábito.",
  },
  {
    id: "loading",
    type: "loading",
    title: "Estamos armando tu plan",
    body: "Con tus respuestas preparamos el desafío de 28 días.",
  },
  {
    id: "account",
    type: "account",
    kicker: "Último paso",
    q: "Crea tu cuenta para guardar el progreso",
    body: "Sin registro no puedes entrar a la app. Completa nombre, correo y clave.",
  },
];
