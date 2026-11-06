import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from "@/types";

export const PERSONAL_INFO = {
  name: "Arka Deb",
  role: "Data Analyst | Data Scientist | Machine Learning Developer",
  headline: "TURNING COMPLEX DATA INTO ACTIONABLE BUSINESS STRATEGY.",
  secondaryTagline: "I BUILD INTELLIGENT DATA EXPERIENCES.",
  summary:
    "A Computer Science graduate passionate about data analytics, machine learning, artificial intelligence and building intelligent applications. Interested in transforming complex datasets into meaningful insights and developing practical AI-powered solutions.",
  location: "Greater Kolkata Area, India",
  timezone: "Asia/Kolkata (IST, UTC+5:30)",
  availability: "Available immediately for full-time opportunities",
  availabilityStatus: "OPEN TO WORK",
  education: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Amity University Noida",
    cgpa: "8.5",
  },
  socials: {
    github: "https://github.com/Arka0507",
    linkedin: "https://www.linkedin.com/in/arkadeb-das",
    email: "arkadeb0507@gmail.com",
    resume: "/resume.pdf",
  },
  stats: [
    { label: "ACADEMIC CGPA", value: "8.5", detail: "B.Tech Computer Science" },
    { label: "SPECIALIZATION", value: "AI / ML", detail: "Data Analytics & Modeling" },
    { label: "RESEARCH FOCUS", value: "AGENTIC AI", detail: "Singapore Research Experience" },
    { label: "ARCHITECTURES", value: "04", detail: "Flagship Engineering Systems" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "federated-healthcare-ai",
    number: "01",
    title: "FEDERATED AI HEALTHCARE SYSTEM",
    tagline: "Privacy-Preserving Distributed Medical Intelligence",
    description:
      "Designing lightweight transformer-based federated learning for healthcare applications using clinical medical text and distributed model training across isolated nodes.",
    status: "COMPLETED",
    technologies: ["Python", "BioBERT", "PyTorch", "Federated Learning", "FedAvg", "NLP"],
    keyDetails: [
      "Simulated two distinct hospital client environments with isolated non-IID medical text distributions.",
      "Fine-tuned BioBERT transformer weights locally to maintain strict patient data confidentiality.",
      "Implemented Federated Averaging (FedAvg) algorithm for global model parameter aggregation.",
      "Evaluated privacy-aware convergence dynamics across multiple distributed training rounds.",
    ],
    architecture: {
      overview: "Decentralized privacy-first topology where medical data never leaves hospital client silos.",
      components: [
        { name: "Hospital Node A & B", role: "Local BioBERT fine-tuning on domain-specific EHR texts" },
        { name: "FedAvg Coordinator", role: "Weighted parameter aggregation & global broadcast" },
        { name: "Evaluation Harness", role: "Per-epoch validation against central clinical benchmark" },
      ],
    },
    metrics: [
      { label: "Client Nodes", value: "2 Simulated" },
      { label: "Base Backbone", value: "BioBERT" },
      { label: "Aggregation", value: "FedAvg" },
    ],
    image: "/images/project-federated-healthcare.jpg",
    githubUrl: "https://github.com/Arka0507",
    demoUrl: undefined,
    featured: true,
  },
  {
    id: "cineverse-recommender",
    number: "02",
    title: "CINEVERSE – MOVIE RECOMMENDATION ENGINE",
    tagline: "Hybrid Collaborative & Content Discovery Engine",
    description:
      "A movie recommendation application combining recommendation algorithms with a fast, interactive movie discovery API service.",
    status: "COMPLETED",
    technologies: ["Python", "FastAPI", "MovieLens 100K", "Recommendation Systems", "Scikit-Learn"],
    keyDetails: [
      "Built collaborative filtering and cosine similarity matrix computations on the MovieLens 100K dataset.",
      "Exposed low-latency recommendation endpoints through a modern, asynchronous FastAPI backend.",
      "Designed intelligent cold-start fallback handling based on genre popularity scoring.",
      "Structured modular data pipelines for real-time inference and ranking queries.",
    ],
    architecture: {
      overview: "High-performance inference pipeline serving personalized ranking vectors via REST APIs.",
      components: [
        { name: "Vector Engine", role: "Item-item cosine similarity & matrix factorization" },
        { name: "FastAPI Layer", role: "Async route handling with pydantic schema validation" },
        { name: "Data Store", role: "Pre-indexed MovieLens matrices for sub-50ms query response" },
      ],
    },
    metrics: [
      { label: "Dataset", value: "100K Ratings" },
      { label: "API Framework", value: "FastAPI" },
      { label: "Latency", value: "<50ms P95" },
    ],
    image: "/images/project-cineverse.jpg",
    githubUrl: "https://github.com/Arka0507",
    demoUrl: undefined,
    featured: true,
  },
  {
    id: "emergency-room-analytics",
    number: "03",
    title: "HOSPITAL EMERGENCY ROOM DASHBOARD",
    tagline: "Operational Intelligence & Clinical Patient Flow Optimization",
    description:
      "An analytical dashboard designed to explore hospital emergency room performance, patient wait times, triage efficiency, and operational bottlenecks.",
    status: "COMPLETED",
    technologies: ["Microsoft Excel", "Data Analytics", "Data Visualization", "Operational Research"],
    keyDetails: [
      "Analyzed clinical admission records to model patient arrival distribution patterns across emergency shifts.",
      "Engineered dynamic KPI cards monitoring triage turnaround, bed occupancy, and discharge latencies.",
      "Built interactive slice-and-dice data visualizations allowing department heads to identify bottleneck shifts.",
      "Formulated data-backed operational recommendations to minimize peak-hour patient congestion.",
    ],
    architecture: {
      overview: "Structured multi-tiered analytical spreadsheet data model with automated pivot aggregations.",
      components: [
        { name: "Data Ingestion & Cleaning", role: "Outlier filtering, timestamps standardization" },
        { name: "Analytical Engine", role: "Calculated fields, multi-criteria triage indexing" },
        { name: "Executive Dashboard", role: "Interactive visual controls with dynamic KPI summaries" },
      ],
    },
    metrics: [
      { label: "Focus", value: "ER Operations" },
      { label: "Tooling", value: "Advanced Excel" },
      { label: "KPIs Tracked", value: "12+ Metrics" },
    ],
    image: "/images/project-hospital-er.jpg",
    githubUrl: "https://github.com/Arka0507",
    demoUrl: undefined,
    featured: true,
  },
  {
    id: "ipl-analytics-dashboard",
    number: "04",
    title: "IPL MATCH ANALYTICS & PERFORMANCE DASHBOARD",
    tagline: "Historical Match Dynamics, Toss Impact & Performance Intelligence",
    description:
      "An end-to-end analytical sports intelligence dashboard exploring IPL historical match outcomes, team win margins, venue dependencies, and Player of the Match metrics across seasons 2008 to present.",
    status: "COMPLETED",
    technologies: ["Microsoft Excel", "Python", "Pandas", "Data Analytics", "Data Visualization", "Sports Analytics"],
    keyDetails: [
      "Analyzed comprehensive match records from 2008 to present, exploring over 1,000+ IPL fixture results and target defense patterns.",
      "Engineered dynamic KPI slices evaluating toss-winner decision impact on match victory percentages across major venues (Wankhede, Eden Gardens, Chinnaswamy, Mohali).",
      "Designed team head-to-head comparison matrices and run-chase conversion rate indicators.",
      "Formulated interactive dashboard visualizations facilitating intuitive exploratory data analysis of season champions and MVP distribution.",
    ],
    architecture: {
      overview: "Multi-layered sports analytics pipeline merging raw historical match fixture distributions with automated pivot aggregations and KPI scorecards.",
      components: [
        { name: "Data Harmonization Layer", role: "Handling DLS adjustments, missing super overs, and franchise renames" },
        { name: "Analytical Engine", role: "Toss impact indexing, venue scoring averages, and victory margin calculations" },
        { name: "Interactive Visual Suite", role: "Multi-parameter slicers, team comparisons, and season trend trajectories" },
      ],
    },
    metrics: [
      { label: "Dataset Scope", value: "1000+ Matches" },
      { label: "Timeframe", value: "2008 – Present" },
      { label: "Key Focus", value: "Toss & Venue Impact" },
    ],
    image: "/images/IPL Dashboard.png",
    githubUrl: "https://github.com/Arka0507",
    demoUrl: undefined,
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    number: "01",
    category: "PROGRAMMING",
    description: "Core algorithmic foundations and high-performance computing languages.",
    iconName: "Code2",
    skills: [
      { name: "Python", proficiency: "Project Experience", highlight: true },
      { name: "Java", proficiency: "Working Knowledge" },
      { name: "C", proficiency: "Working Knowledge" },
      { name: "C++", proficiency: "Working Knowledge" },
    ],
  },
  {
    id: "data-analytics",
    number: "02",
    category: "DATA ANALYTICS",
    description: "Extracting actionable business intelligence from unstructured and structured datasets.",
    iconName: "BarChart3",
    skills: [
      { name: "Pandas", proficiency: "Project Experience", highlight: true },
      { name: "NumPy", proficiency: "Project Experience", highlight: true },
      { name: "SQL", proficiency: "Project Experience", highlight: true },
      { name: "PostgreSQL", proficiency: "Project Experience" },
      { name: "Microsoft Excel", proficiency: "Project Experience", highlight: true },
      { name: "Data Visualization", proficiency: "Project Experience" },
    ],
  },
  {
    id: "machine-learning",
    number: "03",
    category: "MACHINE LEARNING",
    description: "Designing, evaluating, and fine-tuning predictive algorithms.",
    iconName: "BrainCircuit",
    skills: [
      { name: "Scikit-learn", proficiency: "Project Experience", highlight: true },
      { name: "Supervised Learning", proficiency: "Project Experience", highlight: true },
      { name: "Unsupervised Learning", proficiency: "Working Knowledge" },
      { name: "Model Evaluation", proficiency: "Project Experience" },
      { name: "Feature Engineering", proficiency: "Project Experience" },
    ],
  },
  {
    id: "artificial-intelligence",
    number: "04",
    category: "ARTIFICIAL INTELLIGENCE",
    description: "Modern deep learning architectures, language models, and agentic workflows.",
    iconName: "Cpu",
    skills: [
      { name: "NLP", proficiency: "Project Experience", highlight: true },
      { name: "Transformers", proficiency: "Project Experience", highlight: true },
      { name: "BioBERT", proficiency: "Project Experience" },
      { name: "LLM Fundamentals", proficiency: "Working Knowledge", highlight: true },
      { name: "RAG Fundamentals", proficiency: "Working Knowledge" },
      { name: "Federated Learning", proficiency: "Project Experience" },
    ],
  },
  {
    id: "development",
    number: "05",
    category: "DEVELOPMENT",
    description: "Building scalable backend services and responsive client interfaces.",
    iconName: "Layers",
    skills: [
      { name: "FastAPI", proficiency: "Project Experience", highlight: true },
      { name: "Next.js", proficiency: "Working Knowledge" },
      { name: "JavaScript", proficiency: "Working Knowledge" },
      { name: "HTML / CSS", proficiency: "Working Knowledge" },
      { name: "Git & GitHub", proficiency: "Project Experience", highlight: true },
    ],
  },
  {
    id: "tools",
    number: "06",
    category: "TOOLS & ENVIRONMENTS",
    description: "Exploration, notebook prototyping, and collaborative analytics environments.",
    iconName: "Terminal",
    skills: [
      { name: "Jupyter Notebook", proficiency: "Project Experience", highlight: true },
      { name: "VS Code", proficiency: "Project Experience", highlight: true },
      { name: "Google Colab", proficiency: "Project Experience" },
      { name: "Power BI / Excel", proficiency: "Working Knowledge" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ulavi-technologies",
    period: "2024",
    role: "Research Intern – AI and Agentic AI",
    company: "ULAVI Technologies Pte. Ltd.",
    location: "Singapore (Remote / Research)",
    type: "Research Internship",
    summary:
      "Conducted foundational research and technical conceptualization for an AI-powered tour package itinerary and automated quotation-building solution.",
    highlights: [
      "Researched multi-agent coordination architectures and evaluated Agentic AI workflows for dynamic itinerary generation.",
      "Investigated Large Language Model (LLM) and Natural Language Processing (NLP) prompt strategies to parse complex traveler constraints.",
      "Explored real-time third-party travel APIs including Google Places API, OpenWeatherMap, and global flight and accommodation services.",
      "Conducted comparative architecture assessments of conversation frameworks including LangChain, Rasa, and Dialogflow.",
      "Documented technical design proposals outlining stateful agent memory, API fallback routing, and itinerary optimization algorithms.",
    ],
    technologies: ["Agentic AI", "LLM Integration", "NLP", "LangChain", "Travel APIs", "Technical Conceptualization"],
    badge: "RESEARCH & CONCEPTUALIZATION",
  },
  {
    id: "london-exposure",
    period: "Academic Program",
    role: "Global Academic Immersion",
    company: "Three Continent Program",
    location: "London, United Kingdom",
    type: "Academic Exposure",
    summary:
      "Participated in prestigious cross-continental academic exposure program expanding technical perspective, international technology standards, and global engineering practices.",
    highlights: [
      "Engaged in academic sessions focused on emerging computational technologies and global tech ecosystems.",
      "Collaborated with international peer cohorts on cross-cultural technical problem solving.",
      "Broadened perspective on enterprise software engineering, scalable architectures, and international data standards.",
    ],
    technologies: ["Global Technology Standards", "Cross-Cohort Collaboration", "Systems Design"],
    badge: "INTERNATIONAL ACADEMIC",
  },
  {
    id: "icetm-volunteering",
    period: "2025",
    role: "Technical Volunteer & Session Coordinator",
    company: "ICETM 2025 International Conference",
    location: "New Delhi / Greater Noida, India",
    type: "Academic Volunteering",
    summary:
      "Contributed to the organization and technical session coordination for the International Conference on Emerging Technologies and Management.",
    highlights: [
      "Assisted distinguished international researchers, keynote speakers, and presenters during technical paper tracks.",
      "Coordinated presentation infrastructure and digital session streaming for cutting-edge computing tracks.",
      "Gained firsthand exposure to peer-reviewed research in machine learning, cloud architectures, and data systems.",
    ],
    technologies: ["Technical Coordination", "Academic Research Engagement", "Conference Operations"],
    badge: "RESEARCH VOLUNTEER",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "amity-btech",
    degree: "B.Tech in Computer Science Engineering",
    institution: "Amity University Noida",
    location: "Noida, Uttar Pradesh, India",
    period: "Graduated with Distinction",
    score: "8.5 CGPA",
    details: [
      "Rigorous core curriculum in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Distributed Computing.",
      "Hands-on specializations in Machine Learning, Artificial Intelligence, and Applied Data Analytics.",
      "Selected for Three Continent Global Immersion Program.",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "nptel-cloud-computing",
    title: "Cloud Computing",
    issuer: "NPTEL / IIT Kharagpur (Ministry of Education, Govt. of India)",
    date: "Certified",
    skills: ["Cloud Architecture", "Virtualization", "Resource Scheduling", "Distributed Storage"],
    status: "Verified",
  },
  {
    id: "nptel-python-data-science",
    title: "Python for Data Science",
    issuer: "NPTEL / IIT Madras (Ministry of Education, Govt. of India)",
    date: "Certified",
    skills: ["Python", "Pandas", "NumPy", "Statistical Analysis", "Data Manipulation"],
    status: "Verified",
  },
];
