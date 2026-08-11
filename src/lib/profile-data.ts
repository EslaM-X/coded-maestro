export const PROFILE = {
  name: "EslaM HeshAM",
  alias: "MR-X",
  handle: "EslaM-X",
  location: "Cairo, Egypt · Remote Worldwide",
  email: "eslamhesham.x@gmail.com",
  roles: [
    "SOVEREIGN ENGINEER",
    "WEB3 & PROTOCOL ARCHITECT",
    "CYBER SECURITY AUTHORITY",
    "FULL-STACK · AI SYSTEMS",
  ],
  headline:
    "Lead Technical Architect · Business Operations Executive · Web3 & Cyber Security",
  tagline:
    "Most people play within the rules. I write the code that defines them.",
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/EslaM-X", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eslam-hesham-359964192",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/EslaM_HeshAM_X", icon: "x" },
  {
    label: "Instagram",
    href: "https://instagram.com/eslam_hesham_x_",
    icon: "instagram",
  },
  { label: "Facebook", href: "https://facebook.com/EslaM.HeshAM.X", icon: "facebook" },
  { label: "Medium", href: "https://medium.com/@eslam_hesham_x", icon: "medium" },
] as const;

export const STATS = [
  { value: 44000, suffix: "+", label: "Contributions this year" },
  { value: 7, suffix: " yrs", label: "Engineering in Web3" },
  { value: 60, suffix: "+", label: "Repositories shipped" },
  { value: 4, suffix: "", label: "Global orgs contributed to" },
];

export const SKILL_GROUPS = [
  {
    title: "Web3 & Blockchain",
    items: [
      "Protocol Design",
      "Smart Contracts",
      "Solidity / Foundry",
      "Stellar Core",
      "Consensus (BFT)",
      "DeFi Mechanics",
      "Pi SDK",
      "Tokenomics",
    ],
  },
  {
    title: "Full-Stack Engineering",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "Docker",
      "Go",
      "Python",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "Neural Networks",
      "AI Agents",
      "LLM Integration",
      "Embodied Robotics",
      "Sim-to-Sim (MuJoCo)",
      "Trading Automation",
    ],
  },
  {
    title: "Cyber Security",
    items: [
      "Threat Modeling",
      "Zero-Trust Design",
      "Smart Contract Auditing",
      "Invariant Testing",
      "Penetration Testing",
      "Cryptography",
    ],
  },
  {
    title: "Business & Operations",
    items: [
      "Operations Strategy",
      "ERP Architecture",
      "KPI & Analytics",
      "Brand Launch",
      "Supply & Inventory",
      "Executive Coordination",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Lead Technical Architect",
    org: "Map of Pi",
    period: "Feb 2026 — Present",
    place: "United States · Remote",
    points: [
      "Leading architectural design of high-scale MERN systems for Map of Pi v2.0.",
      "Integrating AI neural networks into a self-evolving Web3 commerce ecosystem.",
      "Implementing military-grade encryption and security layers for millions of users.",
    ],
  },
  {
    role: "Web3 Core Systems Contributor & Cyber Security Vanguard",
    org: "Pi Network Ecosystem",
    period: "2019 — Present",
    place: "Remote",
    points: [
      "Authored PiRC protocol standards; proposals reviewed and endorsed by Pi Network's founder.",
      "Adversarial threat modeling, BFT consensus research and cryptographic state-machine design.",
      "Zero-knowledge validation vectors and formal verification for mission-critical contracts.",
    ],
  },
  {
    role: "Business Operations Manager — Office of the CEO & Board",
    org: "S.I.G — El-Sharbatly International Group",
    period: "Feb 2026 — Present",
    place: "New Cairo, Egypt",
    points: [
      "Working directly with the CEO and Board on strategic operations and executive decisions.",
      "Leading KPI monitoring, cross-functional performance and operational excellence.",
      "Led design and development of the S.I.G corporate digital presence.",
    ],
  },
  {
    role: "Business Operations Manager · Founding Team",
    org: "Steinheim",
    period: "Feb 2026 — Present",
    place: "Cairo, Egypt · Hybrid",
    points: [
      "Launched a premium sanitaryware brand in Egypt from the ground up.",
      "Built invoicing, inventory, reporting and audit systems used daily across the business.",
      "Owned stock control, product database, sales processes and go-to-market readiness.",
    ],
  },
  {
    role: "Founder",
    org: "PiEat-Me",
    period: "May 2025 — Feb 2026",
    place: "Remote · Worldwide",
    points: [
      "Founded and shipped a consumer product inside the Pi Network ecosystem.",
    ],
  },
  {
    role: "Cost Controller & Data Systems",
    org: "Orascom Construction PLC",
    period: "2021 — Jan 2026",
    place: "Cairo, Egypt",
    points: [
      "Cost control, financial data pipelines and reporting for large-scale construction operations.",
    ],
  },
];

export const IMPACT = [
  {
    org: "Pi Network",
    title: "PiRC — Pi Requests for Comment",
    href: "https://github.com/PiNetwork/PiRC/pull/2",
    summary:
      "Authored the PiRC1 utility standards proposal: escrow lock proofs, dynamic p_floor calculation, engagement-weighted PiPower and Sybil-resistant reporting.",
    quote:
      "\u201cBoth of these are good ideas. Implementation seems possible.\u201d \u2014 Dr. Nicolas Kokkalis, Founder of Pi Network",
  },
  {
    org: "Stellar",
    title: "stellar-core — consensus layer contribution",
    href: "https://github.com/stellar/stellar-core/pull/5409",
    summary:
      "Contribution to the reference peer-to-peer implementation powering the Stellar network's consensus protocol.",
    quote: null,
  },
  {
    org: "Fabric Foundation",
    title: "RoboPay — machine-payable robotics",
    href: "https://github.com/fabricfoundation/RoboPay/pull/86",
    summary:
      "Connecting robots, simulators and physical devices to a payment network — x402 payment gating with no-settle-on-failure guarantees.",
    quote: null,
  },
];

export const PROJECTS = [
  {
    name: "Steinheim ERP & Invoicing",
    tag: "Enterprise",
    desc: "Full internal operations platform: invoicing, inventory, stock audits, customer records, reporting and daily sales performance for a live retail brand.",
    stack: ["TypeScript", "React", "Supabase", "PostgreSQL"],
    href: null,
  },
  {
    name: "RoboPay Spot Tier-1",
    tag: "Robotics · Payments",
    desc: "Boston Dynamics Spot Tier-1 profile — 7 paid embodied skills on MuJoCo + PyBullet sim-to-sim, gated by an x402 payment layer with no-settle-on-failure.",
    stack: ["Python", "MuJoCo", "PyBullet", "x402"],
    href: "https://github.com/EslaM-X/robopay-spot-tier1",
  },
  {
    name: "PiRC1 Standards Pro",
    tag: "Protocol",
    desc: "Reference implementation proposal for PiRC1 Utility Standards and the PEP Protocol — engagement scoring, transparency dashboards and Sybil protection.",
    stack: ["TypeScript", "Protocol Design"],
    href: "https://github.com/EslaM-X/pirc1-standards-pro",
  },
  {
    name: "MapCap IPO Platform",
    tag: "Web3",
    desc: "Frontend and backend systems for a decentralized capital-formation platform inside the Pi ecosystem.",
    stack: ["TypeScript", "Node.js", "MongoDB"],
    href: "https://github.com/EslaM-X/mapcap-ipo-frontendX",
  },
  {
    name: "Pi Local AI Agent",
    tag: "AI",
    desc: "A locally-running autonomous agent for the Pi ecosystem — planning and executing multi-step tasks without a central service.",
    stack: ["TypeScript", "LLM", "Agents"],
    href: "https://github.com/EslaM-X/pi-local-ai-agent",
  },
  {
    name: "S.I.G Corporate Platform",
    tag: "Brand",
    desc: "End-to-end design and build of a diversified business group's corporate presence: UI/UX, content architecture and business data integration.",
    stack: ["React", "TypeScript", "Design Systems"],
    href: null,
  },
  {
    name: "Spin4Pi Vault",
    tag: "Web3",
    desc: "Vault mechanics and reward logic for a gamified Pi ecosystem application.",
    stack: ["TypeScript", "Pi SDK"],
    href: "https://github.com/EslaM-X/spin4pi-vault",
  },
  {
    name: "PiEat-Me",
    tag: "Founder",
    desc: "Founded a food-commerce product inside the Pi Network ecosystem, from concept to live users.",
    stack: ["React", "Node.js", "Pi Payments"],
    href: null,
  },
];

export const CERTS = [
  { name: "Web3 / Blockchain Project Manager", issuer: "Udemy", year: "2023" },
  { name: "Web5 Fundamentals — Data Ownership", issuer: "Udemy", year: "2023" },
  { name: "Postgraduate Diploma: Project Management", issuer: "Udemy", year: "2023" },
  { name: "Introduction to Ethical Hacking", issuer: "Udemy", year: "2023" },
  { name: "Diploma in Blockchain Technology", issuer: "Alison", year: "2022" },
  { name: "Types of Cyber Security", issuer: "Great Learning", year: "2022" },
  { name: "Beginner's Guide to Cyber Security", issuer: "Udemy", year: "2022" },
  { name: "Linux From Zero To Hero", issuer: "M3aarf", year: "2023" },
  { name: "Blockchain Council", issuer: "M3aarf", year: "2023" },
  { name: "Artificial Intelligence for Beginners", issuer: "HP LIFE", year: "2025" },
  { name: "Strategic Planning", issuer: "HP LIFE", year: "2023" },
  { name: "Effective Leadership", issuer: "HP LIFE", year: "2023" },
  { name: "IT for Business Success", issuer: "HP LIFE", year: "2023" },
  { name: "Introduction to Big Data Science", issuer: "Edlal", year: "2022" },
  { name: "AI and Its Future Applications", issuer: "Edlal", year: "2022" },
  { name: "Awareness in Cyber Security", issuer: "Edlal", year: "2022" },
  { name: "Certified Entrepreneurship Skills", issuer: "TeraCourses", year: "2021" },
  { name: "Social Entrepreneurship", issuer: "HP LIFE", year: "2023" },
];

export const RECOMMENDATIONS = [
  {
    quote:
      "Eslam is a highly motivated developer with a strong passion for AI. Beyond diligently focusing on his assigned tasks, he consistently seeks opportunities to optimize and strengthen our organizational projects — improving scalability, enhancing performance, reinforcing security. He actively identifies ways to elevate our infrastructure to enterprise-grade standards.",
    author: "Daniel Lee",
    title: "Software Engineer / Technical Freelancer",
  },
  {
    quote:
      "His technical leadership has been exceptional. He consistently leverages modern architecture and best practices to build scalable, high-performance solutions. His GitHub workflow is top tier — clean pull requests, clear documentation, and thoughtful collaboration that elevates the entire team. He's a rare combination of advanced technical expertise and strategic thinking. Highly recommended.",
    author: "Antony Ciccone",
    title: "Technology Automation Powerhouse · Turtle Enterprises LLC",
  },
];

export const NAV = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Impact", id: "impact" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];
