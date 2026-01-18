import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaWordpress, FaFigma, FaMusic
} from 'react-icons/fa'; 

import { 
  SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiMysql, SiMongodb,
  SiDjango, SiFlask, SiExpress, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiOpencv, 
  SiDocker, SiRedis, SiPostman, SiGit, SiFirebase
} from "react-icons/si";

export const personalInfo = {
  name: "Bhanuja Karumuru",
  title: "M.S. Computer Engineering @ New York University",
  email: "bk3170@nyu.edu",
  phone: "+1 347-445-9258",
  location: "New York, USA",
  linkedin: "https://linkedin.com/in/bhanujakarumuru",
  github: "https://github.com/Bhanuu01",
  resumeLink: "https://drive.google.com/file/d/1_j7_mTMGtIHMALpIj2zeo_86rbvEyj8-/view?usp=sharing", 
  bio: "M.S. Computer Engineering student at NYU with experience building scalable backend services and ML-powered products. Previously an SDE at SalesUp (Yellowlake Technologies), where I optimized Flask microservices, designed async task pipelines, and built LLM-driven automation features. Currently contributing to OS security research for multi-tenant ML systems.",
  shortBio: "Backend & ML Systems Engineer" 
};

export const education = [
  {
    institution: "New York University",
    degree: "M.S. in Computer Engineering",
    duration: "Expected May 2027",
    location: "New York, USA",
    coursework: "High Performance Machine Learning, MLOps, Data Center & Cloud Computing, Internet Architecture",
  },
  {
    institution: "National Institute of Technology, Sikkim",
    degree: "B.Tech in Electronics and Communication Engineering",
    duration: "Dec 2020 – May 2024",
    location: "Sikkim, India",
    coursework: "Data Structures & Algorithms, Machine Learning, Neural Networks, Computer Networks",
  },
];

export const projects = [
  {
    title: "StyleSync — Large-Scale Recommendation System",
    tech: ["TensorFlow Recommenders", "FAISS", "FastAPI", "Docker"],
    description: "Built a two-tower deep retrieval recommender to learn user–item embeddings and enable efficient top-k candidate generation. Designed scalable offline training and FAISS-based ANN indexing pipelines to achieve sub-100 ms end-to-end inference latency. Productionized the system with containerized FastAPI services, model versioning, and health checks for seamless rollout of retrained models.",
    date: "Selected Project",
    githubLink: null,
    liveLink: null,
    category: "ML Systems",
    icon: <FaCode size={24} className="text-accent-1"/>
  },
  {
    title: "End-to-End Fraud Detection Platform",
    tech: ["Scikit-learn", "XGBoost", "Python", "Docker"],
    description: "Developed a real-time fraud detection system using ensemble models (logistic regression, random forest, gradient boosting), achieving 0.96 AUC and reducing false positives by 35% through feature engineering and threshold tuning. Built automated batch and streaming pipelines to simulate large-scale transaction flows, supporting scheduled retraining and offline validation. Deployed containerized ML services with logging, monitoring, and rollback support for reliable versioned updates.",
    date: "Selected Project",
    githubLink: null,
    liveLink: null,
    category: "Machine Learning",
    icon: <FaDatabase size={24} className="text-accent-1"/>
  },
  {
    title: "Generative AI Customer Support Assistant",
    tech: ["LLaMA-2", "LoRA", "RAG", "HuggingFace"],
    description: "Built a domain-specific chatbot using LLaMA-2 fine-tuned with LoRA and a RAG pipeline, achieving 92% answer accuracy. Optimized inference pipelines for scalability, reducing response latency from 2.5s to 0.7s per query for high-throughput usage. Implemented feedback loops and monitoring to continuously improve responses, increasing user satisfaction by 20%.",
    date: "Selected Project",
    githubLink: null,
    liveLink: null,
    category: "Generative AI",
    icon: <FaCode size={24} className="text-accent-1"/>
  },
  {
    title: "Retail Analytics with Computer Vision",
    tech: ["YOLOv8", "ResNet", "OpenCV", "MLOps"],
    description: "Developed a YOLOv8 and ResNet-based pipeline for real-time product and shelf detection, achieving mAP 0.89 across 50+ store layouts. Applied transfer learning to adapt models across environments, reducing labeling effort by 60%. Built an end-to-end MLOps workflow with automated versioning, monitoring, and cloud deployment to enable weekly model updates.",
    date: "Selected Project",
    githubLink: null,
    liveLink: null,
    category: "Computer Vision",
    icon: <SiOpencv size={24} className="text-accent-1"/>
  },
];

export const skills = {
  languages: [
    { name: "Python", icon: <SiPython /> },
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaCode /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Bash", icon: <FaCode /> },
  ],
  webFrameworks: [
    { name: "Flask", icon: <SiFlask /> },
    { name: "FastAPI", icon: <FaCode /> },
    { name: "REST APIs", icon: <FaCode /> },
  ],
  mlLibraries: [
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "Scikit-learn", icon: <SiScikitlearn /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PyTorch", icon: <FaCode /> },
    { name: "HuggingFace Transformers", icon: <FaCode /> },
    { name: "FAISS", icon: <FaCode /> },
  ],
  toolsAndPlatforms: [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <FaCode /> },
    { name: "Jenkins", icon: <FaCode /> },
    { name: "MLflow", icon: <FaCode /> },
    { name: "AWS (EC2, S3, Lambda)", icon: <FaCode /> },
  ],
  coreCompetencies: [
    "MLOps",
    "Model Deployment",
    "Model Monitoring",
    "Backend Scaling & Optimization",
    "System Design"
  ]
};

export const experience = [
  {
    role: "Software Development Engineer, SalesUp - Yellowlake Technologies Services Private Limited",
    organization: "SalesUp",
    location: "Kolkata, India",
    duration: "July 2024 – July 2025",
    points: [
      "Backend Scaling & Optimization: Engineered Flask-based microservices for a high-traffic CRM platform; improved system throughput by 40% by refactoring synchronous REST endpoints into asynchronous task pipelines and optimizing database queries.",
      "LLM-Driven Automation Engine: Architected an end-to-end generative AI feature for automated email campaigns using vector embeddings and GPT APIs, increasing user engagement by 25%. Designed a RAG pipeline to retrieve context-aware user data and implemented feedback loops to monitor hallucinations and improve audience segmentation.",
      "DevOps & CI/CD: Containerized services using Docker and automated deployments with Jenkins, reducing release overhead by 30% and enabling zero-downtime rollouts.",
      "Infrastructure Tuning: Profiled AWS/Linux production environments, optimized connection pooling and system-level configurations, reducing P99 API latency by 25%.",
    ],
  },
  {
    role: "Graduate Research Contributor",
    organization: "New York University — LIND Project (Virtualization-Based OS Security for ML Systems)",
    location: "New York, USA",
    duration: "Sep 2025 – Present",
    points: [
      "Enhanced a Linux security framework to ensure kernel isolation and efficient resource sandboxing for multi-tenant ML workloads.",
      "Implemented hypervisor-level privilege controls to reduce cross-VM attack surfaces, ensuring isolated model training environments.",
      "Collaborated on integrating namespace confinement and secure virtualization to support robust, high-performance OS isolation.",
    ],
  },
];

export const publications = [
  {
    title: "In-Domain Data Augmentation for Dysarthria Severity Classification",
    venue: "SPCOM",
    year: "2024",
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> },
};
