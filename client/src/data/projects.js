// This mirrors the shape returned by GET /api/projects on the Express server.
// You can either keep this static list, or fetch from the API via src/services/api.js.
export const PROJECTS = [
  {
    id: "teacher-parent-system",
    name: "Teacher–Parent Interaction System",
    category: "Full Stack",
    description:
      "A web-based platform designed to improve communication between kindergarten teachers and parents while allowing parents to monitor student performance.",
    longDescription:
      "Kindergartens often rely on paper notebooks and ad-hoc group chats to keep parents informed. This platform centralizes that communication into role-based dashboards.",
    problem: "Teachers had no structured way to report daily performance, and parents lacked visibility between conferences.",
    solution: "Built role-based dashboards, a REST API, real-time messaging, and structured performance reports per student.",
    technologies: ["HTML", "CSS", "Bootstrap", "MySql"],
    features: ["Parent dashboard", "Teacher dashboard", "Student performance tracking", "Teacher-parent messaging", "Reports"],
    challenges: "Designing a data model flexible enough for varied grading approaches without making the teacher UI feel like a spreadsheet.",
    results: "Piloted with 3 classrooms; reduced teacher reporting time and gave parents a single place to check in.",
    image: "/assets/projects/teacher-parent-system.png",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "project-two",
    name: "Captive Portal",
    category: "Backend and Security",
    description: "An online access platform that allows users to connect to a wireless internet network by purchasing a subscription. It provides a convenient payment system through e-wallet services such as GCash or Maya, where users can select a subscription plan, complete their payment, and gain internet access once the transaction is verified.",
    problem: "The problem this project solves is that users need a way to access the internet without having to install a physical SIM card or use a physical card reader.",
    solution: "The solution to this problem is to create an online access platform that allows users to connect to a wireless internet network by purchasing a subscription. It provides a convenient payment system through e-wallet services such as GCash or Maya, where users can select a subscription plan, complete their payment, and gain internet access once the transaction is verified.",
    technologies: ["React", "MongoDB", "WifiDog", "HTML", "CSS", "Node.js","PayMongo"],
    features: ["User authentication", "Payment processing", "Subscription management", "Internet access", "User management"],
    challenges: "The challenges of this project are the security of the payment system and the management of the internet access.",
    results: "The results of this project are that users can access the internet without having to install a physical SIM card or use a physical card reader.",
    image: null,
    githubUrl: "#",
    liveUrl: "#",
  },
];
