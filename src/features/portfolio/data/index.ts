// #############################################################################
// # Types
// #############################################################################

type Project = [
  string[],
  {
    image: string;
    name: string;
    subject: string;
    category: string[];
    status: string;
    tags: string[];
    href: string;
  }[],
];

// #############################################################################
// # Data
// #############################################################################

export const PROJECTS: Project = [
  [
    "All Samples",
    "Innovation",
    "Health",
    "Investment",
    "Finding & Creation",
    "Development",
    "Commercialization",
    "Investment",
  ],
  [
    {
      image: "/images/project.jpg",
      name: "Risheh",
      subject: "Integrated platform for elderly services",
      category: ["Innovation", "Health"],
      status: "In Development",
      tags: ["Innovation", "Health", "In Development"],
      href: "/portfolio/root",
    },
    {
      image: "/images/project.jpg",
      name: "Lorem Ipsum",
      subject: "Lorem Ipsum dummy text",
      category: ["Innovation", "Health"],
      status: "In Development",
      tags: ["Innovation", "Health", "In Development"],
      href: "#",
    },
    {
      image: "/images/project.jpg",
      name: "Lorem Ipsum",
      subject: "Lorem Ipsum dummy text",
      category: ["Innovation", "Health"],
      status: "In Development",
      tags: ["Innovation", "Health", "In Development"],
      href: "#",
    },
    {
      image: "/images/project.jpg",
      name: "Lorem Ipsum",
      subject: "Lorem Ipsum dummy text",
      category: ["Innovation", "Health"],
      status: "In Development",
      tags: ["Innovation", "Health", "In Development"],
      href: "#",
    },
    {
      image: "/images/project.jpg",
      name: "Lorem Ipsum",
      subject: "Lorem Ipsum dummy text",
      category: ["Innovation", "Health"],
      status: "In Development",
      tags: ["Innovation", "Health", "In Development"],
      href: "#",
    },
    {
      image: "/images/project.jpg",
      name: "Lorem Ipsum",
      subject: "Lorem Ipsum dummy text",
      category: [
        "Innovation",
        "Health",
        "Investment",
        "Finding & Creation",
        "Development",
        "Commercialization",
        "Investment",
      ],
      status: "In Development",
      tags: ["Innovation", "Health", "In Development"],
      href: "#",
    },
  ],
];

export const SELECT = [
  { label: "All Samples", value: "All Samples" },
  { label: "Innovation Area", value: "Innovation" },
  { label: "Health Area", value: "Health" },
  { label: "Investment Area", value: "Investment" },
  { label: "Finding & Creation", value: "Finding & Creation" },
  { label: "Development", value: "Development" },
  { label: "Commercialization", value: "Commercialization" },
  { label: "Investment", value: "Investment" },
];

export const TABS = [
  "All Samples",
  "Innovation Area",
  "Health Area",
  "Investment Area",
  "Finding & Creation",
  "Development",
  "Commercialization",
  "Investment",
];
