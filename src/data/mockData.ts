export type VideoCardData = {
  videoNumber: string;
  title: string;
  description: string;
  visitLink: string;
  downloadLink: string;
};

export const mockData: VideoCardData[] = [
  {
    videoNumber: "001",
    title: "React Fundamentals",
    description: "A complete guide to React hooks, state management, and component patterns for modern web development.",
    visitLink: "https://example.com/react",
    downloadLink: "https://example.com/react/download",
  },
  {
    videoNumber: "002",
    title: "TypeScript Deep Dive",
    description: "Advanced TypeScript concepts including generics, utility types, and strict mode best practices.",
    visitLink: "https://example.com/typescript",
    downloadLink: "https://example.com/typescript/download",
  },
  {
    videoNumber: "003",
    title: "Tailwind CSS Mastery",
    description: "Build pixel-perfect UIs with utility-first CSS. Covers responsive design and custom theming.",
    visitLink: "https://example.com/tailwind",
    downloadLink: "https://example.com/tailwind/download",
  },
  {
    videoNumber: "004",
    title: "Vite Build Tool",
    description: "Lightning-fast frontend tooling. Learn how to configure Vite for production-ready applications.",
    visitLink: "https://example.com/vite",
    downloadLink: "https://example.com/vite/download",
  },
  {
    videoNumber: "005",
    title: "Git & Version Control",
    description: "Master branching strategies, rebasing, and collaborative workflows with Git.",
    visitLink: "https://example.com/git",
    downloadLink: "https://example.com/git/download",
  },
  {
    videoNumber: "006",
    title: "System Design Basics",
    description: "Introduction to scalable system design: load balancing, caching, and database sharding.",
    visitLink: "https://example.com/system-design",
    downloadLink: "https://example.com/system-design/download",
  },
];
