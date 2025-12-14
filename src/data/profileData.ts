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
  title: "uwaterloo math/business | product @ arteria ai",
  bio: "building",
  location: "toronto | van | sf",
  email: "jiya.anadkat@uwaterloo.ca",
  linkedin: "linkedin.com/in/jiya-anadkat",
  avatar: "/avatar.jpg",
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Arteria AI",
    role: "Product Owner Co-op",
    duration: "Sept. 2025 - Present",
    description: "Leading product strategy for B2B SaaS platform serving 500+ enterprise clients. Drove 40% increase in user engagement through data-driven feature prioritization.",
    skills: ["Product Strategy", "Roadmapping", "A/B Testing", "SQL"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=300&fit=crop",
  },
  {
    id: "exp-2",
    company: "UWPM Club",
    role: "VP of Content",
    duration: "Sept. 2025 - Dec. 2025",
    description: "Launched 3 major product features from ideation to market. Collaborated with engineering and design teams to reduce time-to-market by 30%.",
    skills: ["Agile", "User Research", "Jira", "Analytics"],
    image: "/uwpm.jpg",
  },
  {
    id: "exp-3",
    company: "Mondex Corp.",
    role: "Product Management Intern",
    duration: "Jan. 2025 - Apr. 2025",
    description: "Managed product lifecycle for client-facing web applications. Conducted user interviews and usability testing to inform product decisions.",
    skills: ["Wireframing", "Figma", "Sprint Planning", "Stakeholder Management"],
    image: "/mond.jpg",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Stanford University",
    degree: "MBA, Technology Management",
    duration: "2015 - 2017",
    description: "Focused on product management and entrepreneurship. Led a team project that won the Stanford Entrepreneurship Challenge.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=300&fit=crop",
  },
  {
    id: "edu-2",
    institution: "UC Berkeley",
    degree: "B.S. Computer Science",
    duration: "2011 - 2015",
    description: "Strong foundation in software engineering and human-computer interaction. Graduated with honors.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=300&fit=crop",
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "AI-Powered Analytics Dashboard",
    description: "Designed and launched an analytics platform that uses ML to predict user churn with 85% accuracy.",
    technologies: ["Python", "React", "TensorFlow", "AWS"],
    link: "https://github.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop",
  },
  {
    id: "proj-2",
    title: "Mobile Commerce Redesign",
    description: "Led complete UX overhaul of e-commerce mobile app, resulting in 25% increase in conversion rate.",
    technologies: ["Figma", "React Native", "Firebase"],
    link: "https://github.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop",
  },
  {
    id: "proj-3",
    title: "Customer Feedback Tool",
    description: "Built internal tool for collecting and analyzing customer feedback across multiple channels.",
    technologies: ["Node.js", "PostgreSQL", "Slack API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "4 Lessons from My First 4 Months in Product.",
    excerpt: "There is a massive difference between reading about Product Management through case studies and Marty Cagan’s books and actually sitting in on a sprint planning meeting.",
    date: "Dec 2025",
    readTime: "3 min read",
    link: "https://medium.com/@jiyaanadkat/4-lessons-from-my-first-4-months-in-product-d755192edbbd",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=300&h=300&fit=crop",
  },
  {
    id: "blog-2",
    title: "From Engineer to PM: My Journey",
    excerpt: "Lessons learned transitioning from software engineering to product management.",
    date: "Nov 2024",
    readTime: "6 min read",
    link: "https://medium.com",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=300&fit=crop",
  },
  {
    id: "blog-3",
    title: "Building Products Users Love",
    excerpt: "How to conduct effective user research and translate insights into features.",
    date: "Oct 2024",
    readTime: "10 min read",
    link: "https://medium.com",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=300&h=300&fit=crop",
  },
  {
    id: "blog-4",
    title: "Metrics That Matter for PMs",
    excerpt: "Understanding the key metrics every product manager should track and optimize.",
    date: "Sep 2024",
    readTime: "7 min read",
    link: "https://medium.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop",
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
