export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  skills: string[];
  image: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  image: string;
}

export const profile = {
  name: "jiya anadkat",
  title: "uwaterloo math & business | product @ arteria ai",
  bio: "building",
  location: "toronto | van | sf",
  email: "jiya.anadkat@uwaterloo.ca",
  linkedin: "linkedin.com/in/jiya-anadkat",
  avatar: "/avatar.JPG",
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Arteria AI",
    role: "Product Owner Co-op",
    duration: "September 2025 - April 2026",
    description: "Drove E2E delivery of core features and API specs to enhance user experience of a B2B SaaS AI-powered platform.",
    skills: ["Jira", "Roadmapping", "API Design", "SDLC", "Scrum", "Figma"],
    image: "/office.jpg",
  },
  {
    id: "exp-2",
    company: "UW Cube",
    role: "Project Lead",
    duration: "Jan. 2026 - April. 2026",
    description: "Designing an AI-assisted healthcare platform by defining product strategy, conducting market and stakeholder research.",
    skills: ["Figma", "UX/UI Design", "Industry Research", "Stakeholder Research"],
    image: "/health.jpeg",
  },
  {
    id: "exp-3",
    company: "UW PM",
    role: "VP of Content",
    duration: "Sept. 2025 - Dec. 2025",
    description: "Led a content team in delivering a weekly product newsletter and developed a case study for 100+ students to cultivate product thinking and discovery skills.",
    skills: ["Product Discovery", "Market Research", "Content Creation"],
    image: "/uwpm.jpg",
  },
  {
    id: "exp-4",
    company: "Mondex Corp.",
    role: "Product Management Intern",
    duration: "Jan. 2025 - Apr. 2025",
    description: "Improved project delivery and decision-making by implementing Scrum and conducting UX testing for an internal application.",
    skills: ["User Testing", "ClickUp", "Sprint Planning", "Information Architecture"],
    image: "/mond.jpg",
  },
  {
    id: "exp-5",
    company: "Kelseys Original Roadhous",
    role: "Growth & Digital Marketing Intern ",
    duration: "July 2022 - Aug. 2022",
    description: "Increased brand engagement and follower growth by 16.7% through A/B testing, performanct analytics, and targeted digital marketing campaigns.",
    skills: ["A/B Testing", "Trend Analysis", "Audience Segmentation", "Social Media Strategy"],
    image: "/kelseys.jpeg",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "University of Waterloo",
    degree: "Bachelor of Mathematics in Mathematics/Business Administration",
    duration: "2023 - 2028",
    description: "roduct Management Club Executive, Quantify Case Comp., Cheese Club Executive, Women in Math",
    image: "/waterloo.jpg",
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "LifeMap",
    description: "Designed a web app that blends the visual inspiration of a mood board with the structure of a calendar, allowing users to map out long-term goals on a dynamic timeline while curating them with image-based milestones.",
    technologies: ["Bubble", "User-Testing", "MVP Development"],
    link: "https://bit.ly/LifeMap-App",
    image: "/moodboard.jpg",
  },
  {
    id: "proj-2",
    title: "Spotify Automating Playlist",
    description: "Developed a Python Flask web application that leverages the Spotify API to automate the process of archiving \"Discover Weekly\" tracks into a permanent playlist for long-term discovery.",
    technologies: ["Python", "Spotify API", "OAuth"],
    link: "https://github.com/jiya-anadkat/spotifyautomating",
    image: "/spot4.jpg",
  },
  {
    id: "proj-3",
    title: "Stock Predictor",
    description: "Built a Streamlit-based stock prediction application using Python that leverages LSTM neural networks for time series analysis to simulate market behavior.",
    technologies: ["Python", "LSTM Neural Network", "Time Series Analysis"],
    link: "https://github.com/jiya-anadkat/stockpredictor",
    image: "/stock2.jpg",
  },
  {
    id: "proj-4",
    title: "McMaster University Youth Leadership Program: Online Forum",
    description: "Developed an inclusive online forum using JavaScript and HTML to provide a supportive community for English Language Learners, earning recognition from McMaster University faculty for its role in reducing social isolation during the pandemic.",
    technologies: ['JavaScript', 'HTML'],
    image: "/mcmaster.jpg",
  },
  {
    id: "proj-5",
    title: "TD Invent Case Competition",
    description: "Proposed a scalable roll-out strategy for TD’s VR onboarding pilot and designed a prototype employee development app featuring progress tracking and performance analytics.",
    technologies: ['Figma', 'Prototyping', 'Presentation Design'],
    image: "/td.jpeg",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "4 Lessons from My First 4 Months in Product.",
    excerpt: "Tracking my journey breaking into product management.",
    date: "Dec 2025",
    readTime: "3 min read",
    link: "https://medium.com/@jiyaanadkat/4-lessons-from-my-first-4-months-in-product-d755192edbbd",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=300&h=300&fit=crop",
  },
  {
    id: "blog-2",
    title: "Product Management Post-SaaSpocalypse",
    excerpt: "Reflections on the changing landscape of product management in the post-SaaS era.",
    date: "March 2026",
    readTime: "3 min read",
    link: "https://medium.com/@jiyaanadkat/product-management-post-saaspocalypse-6ec32a329e26",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=300&fit=crop",
  },
];

export type LibraryItem = {
  type: 'experience' | 'education' | 'project' | 'blog';
  data: Experience | Education | Project | BlogPost;
};

export const getAllLibraryItems = (): LibraryItem[] => {
  return [
    ...experiences.map(exp => ({ type: 'experience' as const, data: exp })),
    ...education.map(edu => ({ type: 'education' as const, data: edu })),
    ...projects.map(proj => ({ type: 'project' as const, data: proj })),
    ...blogPosts.map(blog => ({ type: 'blog' as const, data: blog })),
  ];
};
