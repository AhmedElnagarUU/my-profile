export interface Project {

  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    title: "DHI luxury Interiot Design",
    description: "Luxury interior design portfolio showcasing sophisticated, elegant, and bespoke spaces.",
    image: "/DHI-design.png",
    tech: ["Next.js", "TypeScript"],
    liveUrl: "https://ahmedelnagaruu.github.io/DHI-design/",
    githubUrl: "https://github.com/AhmedElnagarUU/DHI-design",
  },
  {
    title: "AuraCore Solution",
    description: "Empowering Your Digital Evolution with Cutting-Edge Software Solutions",
    image: "https://img.freepik.com/free-photo/business-people-connecting-puzzle-pieces_53876-13573.jpg?uid=R38908714&ga=GA1.1.1251855254.1725281675&semt=ais_hybrid",
    tech: ["next", "Docker", "MongoDB"],
    liveUrl: "https://auracoresolutions.tech",
    githubUrl: "#",
  },
  {
    title: "Travel Landing Page",
    description: "A captivating travel landing page designed to inspire adventure, featuring stunning destinations, seamless booking options, and tailored experiences.",
    image: "https://img.freepik.com/free-photo/top-view-hands-holding-smartphone_23-2149617652.jpg?uid=R38908714&ga=GA1.1.1251855254.1725281675&semt=ais_hybrid",
    tech: ["Next.js", "Node.js", "Vercel"],
    liveUrl: "https://travel-page-e7j5v86px-ahmedelnagaruus-projects.vercel.app/",
    githubUrl: "https://github.com/AhmedElnagarUU/travel-page",
  },
  {
    title: "Bakery Shop",
    description: "Centralized monitoring and deployment management system",
    image: "bakery.png",
    tech: ["nextjs", "Docker", "Kubernetes"],
    liveUrl: "https://ahmedelnagaruu.github.io/Bakery/",
    githubUrl: "https://github.com/AhmedElnagarUU/Bakery",
  }
];

// Navigation Links
export const NAV_LINKS = {
  home: "#home",
  about: "#about",
  skills: "#skills",
  projects: "#projects",
  contact: "#contact",
} as const;

// Theme Colors
export const THEME_COLORS = {
  blue: "theme-blue",
  purple: "theme-purple",
  green: "theme-green",
  orange: "theme-orange",
} as const;

export const socialLinks = {
  github: "https://github.com/AhmedElnagarUU",
  linkedin: "https://www.linkedin.com/in/ahmed-elnagar-25561b262/",
  facebook: "https://www.facebook.com/profile.php?id=100094263562406",
  email: "ahmedelnagaruu@gmail.com"
} as const;

export const personalInfo = {
  name: "Ahmed Youssry",
  title: "Full-Stack Developer",
  location: "Alexandria, Egypt",
  profileImage: "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?t=st=1734124226~exp=1734127826~hmac=f31f6cd4333e902411f2eb1b7d87d1b5457d7bcb2d3fb97c9d857d8a117cd5ba&w=740",
  tagline: "Building modern web applications with passion and precision",
  about: {
    description: `I'm a passionate Full Stack Developer specializing in modern web technologies.
    With expertise in both front-end and back-end development, I create scalable,
    efficient solutions that deliver exceptional user experiences.`,
    skills: [
      "JavaScript/TypeScript",
      "React/Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Docker"
    ],
    experience: [
      {
        position: "Full Stack Developer",
        company: "Freelance",
        period: "2022 - Present",
        description: "Building scalable web applications and solutions for clients"
      }
    ]
  }
} as const;