export type Project={
  id:number;
  title:string;
  description:string;
  image:string;
  tags: readonly string[];
  url: string;
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Prakop.AI",
    description:
      "Developed a chatbot interface delivering Nepali-language disaster information Integrated Gemini's API for responses and message streaming UI, error handling, and mobile-first layout.",
    image: "/Projects/prakop-ai.vercel.app_.png",
    tags: ["React", "Tailwind CSS", "MongoDB", "AI"],
    url: "https://prakop-ai.vercel.app",
    githubUrl: "https://github.com/Gcvishwas/Prakop.AI",
  },
  {
    id: 2,
    title: "Abhyasi",
    description:
      "AI-powered interviewer built with modern web technologies.It uses the Gemini API to simulate real interview experiences—generating intelligent questions, model answers, providing feedback, and scoring performance.",
    image: "/Projects/Abhyasi.png",
    tags: ["Typescript", "React", "Tailwind CSS", "Firebase", "Gemini"],
    url: "https://abhyasi-ashen.vercel.app",
    githubUrl: "https://github.com/Gcvishwas/Abhyasi---AI-Interviewer",
  },
  {
    id:3,
    title:"Subscription-Tracker",
    description:
    "API created using Express.js and MongoDB that allows user to sign-up, sign-in, create subscriptions, and also send remainders using Nodemailer.js to the users",
    image:"/Projects/Subscription.jpg",
    tags:["JS", "Node", "Express", "MongoDB"],
    url:"https://github.com/Gcvishwas/Subscription-Tracker",
    githubUrl:"https://github.com/Gcvishwas/Subscription-Tracker"
  }
];