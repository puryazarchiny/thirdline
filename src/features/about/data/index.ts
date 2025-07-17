// #############################################################################
// # Types
// #############################################################################

type Story = [
  string[],
  {
    count: number;
    text: string[];
  }[],
];

// #############################################################################
// # Data
// #############################################################################

export const BELIEFS = [
  {
    title: "Mission Statement",
    subTitle: "What are we building and why?",
    description:
      "We turn ideas into reality—through the design, development, and commercialization of sustainable solutions. Our mission is to connect innovators, businesses, and investors in a path that reduces the risk of failure and increases market readiness.",
  },
  {
    title: "Vision Statement",
    subTitle: "What future are we aiming for?",
    description:
      "We are building a future where solutions transcend mental and geographic boundaries, having real, sustainable, and human impact. Our vision is the next generation of innovations you can live with—not just invest in.",
  },
  {
    title: "Social Responsibility",
    subTitle: "Innovation is not just about creating wealth",
    description:
      "We consider social responsibility a part of our identity. From empowering Gen Z to public education and building experience-sharing structures with universities, our mission is to create opportunities for a better future—for everyone, not just for investees.",
  },
  {
    title: "Work Culture",
    subTitle: "How we think and work",
    description:
      "At Thirdline, culture means daily behavior. We work through mutual trust, continuous learning, and real dialogue—not with rigid structures, but with maturity. This culture is our human foundation for building realistic projects.",
  },
];

export const STORY: Story = [
  [
    "In November 2020, during a friendly conversation, Kian Zareh spoke of the lack of 'good' investors, and Ali Mousavi, the CEO of an investment fund, of the difficulty in finding 'good' and trustworthy teams. That’s when a key question emerged: what does 'good' even mean? The answer was clear;",
    "There was no precise definition of 'good'—neither for investors nor for investees. Right there, the idea of creating a platform to redefine this relationship was born. Kian and Ghazaleh Ghanbari, a UX designer, designed models that redefined the process of investment and team building. Later, Behzad Boostanchi, a developer with international experience at major companies like Apple, joined them.",
    "In February 2021, the co-founding agreement for Thirdline Studio was signed by Kian, Ali, Ghazaleh, and Behzad. In July 2021, the team was accepted as a tech core in the Prosperity Plan of the University of Tehran’s Science and Technology Park, and in January 2023, Thirdline Studio was officially registered as a company.",
    "From the start, we weren’t looking to build just a commercial entity. Our goal was to create a space where ideas don’t just get pitched—they get built. Our journey was full of doubts, challenges, and iterations, but each step brought us closer to a more refined structure.",
    "Today, Thirdline Studio is a shared space for designers, developers, entrepreneurs, researchers, and investors. A place with a clear philosophy: true value creation comes not from hype, but from deep understanding of problems, bold design, and disciplined execution.",
  ],
  [
    {
      count: 4,
      text: ["Years of Activity", "Years", "of Activity"],
    },
    {
      count: 6,
      text: ["Successful Businesses", "Businesses", "Successful"],
    },
    {
      count: 50,
      text: ["Jobs Created", "Job", "Created"],
    },
  ],
];

export const TIMELINE = [
  {
    year: "2020",
    details: [
      { month: "November", event: "Initial idea formation" },
      { month: "February", event: "Signing co-founding agreement" },
    ],
  },
  {
    year: "2021",
    details: [
      {
        month: "July",
        event:
          "Accepted into University of Tehran's Science Park Prosperity Plan",
      },
      {
        month: "March",
        event: "First version of the virtual innovation ecosystem released",
      },
    ],
  },
  {
    year: "2022",
    details: [
      {
        month: "July",
        event: "Selected project in Tehran Province’s TANA event",
      },
      {
        month: "December",
        event:
          "Accepted into Growth Stage at University of Tehran’s Science Park",
      },
      {
        month: "January",
        event: "Official registration of Thirdline Khat-e Sevom company",
      },
    ],
  },
  {
    year: "2023",
    details: [
      {
        month: "May",
        event:
          "MoU with Presidential Office for launching virtual innovation ecosystem",
      },
      {
        month: "July",
        event: "Launch of Thirdline Virtual Innovation Ecosystem",
      },
      {
        month: "March",
        event:
          "Relocated to University of Tehran’s Science and Technology Park",
      },
    ],
  },
  {
    year: "2024",
    details: [
      { month: "June", event: "Redefinition of studio's key activities" },
      { month: "August", event: "Design of Thirdline Innovation Gateway" },
      {
        month: "September",
        event: "Launch of digital health spin-off",
      },
      {
        month: "October",
        event: "Studio joins National ICT Trade Association",
      },
      {
        month: "November",
        event: "Launch of silver economy spin-off under 'Risheh' brand",
      },
      {
        month: "January",
        event: "Raised seed round for Risheh project",
      },
      {
        month: "February",
        event: "Obtained Business Consulting License from Ministry of Industry",
      },
    ],
  },
  {
    year: "",
    details: [{ month: "", event: "" }],
  },
  {
    year: "",
    details: [{ month: "", event: "" }],
  },
];

export const VALUES = [
  {
    number: "1.",
    title: ["Thinking", "and Creativity"],
    description:
      "We believe every transformation and innovation begins with thought. That’s why creative thinking and problem-solving are at the heart of everything we do.",
  },
  {
    number: "2.",
    title: ["Responsibility", "and Commitment"],
    description:
      "We are committed to our teams, projects, and partners, and we genuinely take responsibility for their success.",
  },
  {
    number: "3.",
    title: ["Transparency", "and Honesty"],
    description:
      "In all our collaborations, communications, and decisions, we act transparently, honestly, and reliably.",
  },
  {
    number: "4.",
    title: ["Synergy", "and Collaboration"],
    description:
      "We believe success comes from the collective strength of individuals. That’s why we focus on smart collaboration and shared growth.",
  },
  {
    number: "5.",
    title: ["Creating", "Sustainable Value"],
    description:
      "Our mission isn’t just to build businesses; we aim to create values that remain impactful in the long run for society, businesses, and the innovation ecosystem.",
  },
];
