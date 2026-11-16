/**
 * ============================================================
 *  PORTFOLIO DATA — the ONLY file you need to edit to update
 *  the content of your portfolio website.
 * ============================================================
 *
 * TODO: Every value below is still the PREVIOUS OWNER's content.
 *       Replace it with your own details (see implementation plan
 *       questionnaire sections A–M).
 */

import type { LucideIcon } from "lucide-react"
import {
  Brain,
  Cpu,
  Sparkles,
  Workflow,
  Target,
  GraduationCap,
  Code2,
  Layers,
  Database,
  Wrench,
  MessageSquareCode,
  BrainCircuit,
  Bot,
  Rocket,
  Lightbulb,
  Cog,
  BarChart3,
  ShieldCheck,
  Network,
  Briefcase,
  Shield,
  Activity,
  Search,
  Lock,
  Server,
  ShieldAlert,
} from "lucide-react"

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------
export interface SocialLink {
  label: "GitHub" | "LinkedIn" | "Email" | string
  href: string
  /** Text shown in the contact cards (e.g. username) */
  display: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
  color: string
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  color: string
  description: string
  skills: { name: string; level?: number }[]
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
  color: string
}

export interface Project {
  title: string
  category: string
  /** Optional status label (e.g. "Research in Progress – Unpublished") */
  status?: string
  description: string
  problem: string
  approach: string | string[]
  technologies: string[]
  outcome: string | string[]
  color: string
  featured: boolean
  /** Optional link to the source code. Button is hidden if empty. */
  githubUrl?: string
  /** Optional link to a live demo. Button is hidden if empty. */
  liveUrl?: string
}

// ------------------------------------------------------------
// Profile / identity  (Questionnaire A, B, J)
// ------------------------------------------------------------
export const profile = {
  fullName: "Ikram Ullah",
  /** Hero heading is split across two lines */
  nameLine1: "Ikram",
  nameLine2: "Ullah",
  /** Shown on the hero profile card */
  cardName: "Ikram Ullah",
  /** Navbar / footer short name */
  shortName: "Ikram",
  /** Navbar / footer logo letter(s) */
  logoText: "IK",
  title: "Cybersecurity Engineer",
  handle: "@ikramullah",
  terminalUser: "ikram@cybersec:~",
  /** Set to "" to hide the status badge */
  statusBadge: "Open to Cybersecurity & Network Security Opportunities",
  /** Put your photo in /public and reference it as "/profile.jpg" */
  photo: "https://i.postimg.cc/YCtGch2K/Whats-App-Image-2026-11-16-at-12-30-09-PM.jpg",
  resumeUrl: "/resume.pdf",
  location: "Sakhakot, Malakand, Khyber Pakhtunkhwa, Pakistan",
  email: "ikraamullahse@gmail.com",
  copyrightStartYear: 2023,
}

export const socials = {
  github: {
    label: "GitHub",
    href: "https://github.com/ikram-netsec",
    display: "ikram-netsec",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ikram-ullah-b18b0331a",
    display: "Ikram Ullah",
  },
  email: {
    label: "Email",
    href: "mailto:ikraamullahse@gmail.com",
    display: "ikraamullahse@gmail.com",
  },
} satisfies Record<string, SocialLink>

// ------------------------------------------------------------
// Hero  (Questionnaire A4, B)
// ------------------------------------------------------------
export const hero = {
  roles: [
    "Network Security Engineer",
    "SOC Analyst",
    "Information Security Researcher",
    "Firewall Security Engineer",
    "Network Engineer",
  ],
  /** Tagline: intro + three highlighted words + closing sentence */
  taglineIntro: "Securing digital infrastructures through",
  taglineWords: ["network defence", "threat detection", "proactive cybersecurity"] as [string, string, string],
  taglineOutro: "Passionate about building resilient networks and protecting critical systems.",
  stats: [
    { value: "3+", label: "Cybersecurity Internships" },
    { value: "3", label: "Cisco CCNA Modules (ITN, SRWE, ENSA)" },
    { value: "1+ Yr", label: "Teaching & Tech Experience" },
  ],
  techStack: [
    { name: "Cisco Networking", icon: "🌐" },
    { name: "Wireshark", icon: "🦈" },
    { name: "Nmap", icon: "🔍" },
    { name: "Linux", icon: "🐧" },
    { name: "Splunk", icon: "📊" },
    { name: "Python", icon: "🐍" },
  ],
  /** Code snippet on the hero card, split over two lines */
  missionLine1: "Defending networks, securing infrastructure,",
  missionLine2: "and building a safer digital world.",
  badge: "NETWORK SECURITY",
}

// ------------------------------------------------------------
// About  (Questionnaire C)
// ------------------------------------------------------------
export const about = {
  headingLine1: "Securing Networks. Defending Infrastructure.",
  headingLine2: "Building Digital Trust.",
  subtitle:
    "Focused on protecting enterprise networks through proactive defence, intelligent threat detection, and robust security engineering.",
  /** First paragraph starts with "I'm <fullName>, " */
  bioIntro:
    "a Network Engineer and Cybersecurity Professional, currently pursuing a Bachelor of Science in Software Engineering at the University of Malakand, Pakistan. I hold the ISC2 Certified in Cybersecurity (CC) certification and have completed Cisco Networking Academy's CCNA curriculum (ITN, SRWE, and ENSA). My professional experience includes network infrastructure support, Cisco networking instruction, and SOC Analyst L1 internships at Cyberster Network Security, ITSOLERA, and Arch Technology.",
  bioSecondary:
    "My expertise and interests focus on enterprise networking, network defence, firewall security, SOC operations, threat detection, and network traffic analysis. I have contributed to network infrastructure assessment across 35+ university departments, worked on network security projects, and trained 100+ students in IT and networking. My professional goal is to specialize in Network Security Engineering and help organizations build secure, resilient, and reliable digital infrastructures.",
  education: [
    {
      degree: "Bachelor of Science in Software Engineering (BSSE)",
      institution: "University of Malakand, Pakistan",
      period: "2023 – 2027",
      /** Set to "" to hide */
      grade: "",
    },
  ],
  stats: [
    { value: 3, suffix: "+", label: "Cybersecurity Internships", color: "#00e5ff" },
    { value: 35, suffix: "+", label: "University Departments Audited", color: "#3b82f6" },
    { value: 100, suffix: "+", label: "Students Trained", color: "#8b5cf6" },
    { value: 1, suffix: "+ Year", label: "Network Engineering Experience", color: "#10b981" },
  ],
  focusAreas: [
    { text: "Enterprise Networking & Infrastructure Management", icon: Server },
    { text: "Network Defence & Firewall Security", icon: Shield },
    { text: "SOC Operations & Threat Detection", icon: ShieldAlert },
    { text: "Network Traffic Analysis & Security Monitoring", icon: Activity },
    { text: "Vulnerability Assessment & Incident Response", icon: Search },
  ] as { text: string; icon: LucideIcon }[],
  /** Icons orbiting the center security visual */
  orbitIcons: [Network, Shield, GraduationCap, Activity, Lock] as LucideIcon[],
}

// ------------------------------------------------------------
// Experience  (Questionnaire D)
// ------------------------------------------------------------
export const experienceSection = {
  enabled: true,
  subtitle:
    "Building secure networks through hands-on engineering, cybersecurity operations, technical instruction, and continuous learning.",
}

export const experiences: Experience[] = [
  {
    title: "Network Support Engineer",
    company: "Cisco Academy, UET Peshawar",
    period: "May 2025 – Present",
    description:
      "Supporting network infrastructure operations, troubleshooting connectivity issues, and helping maintain secure and reliable network environments.",
    highlights: [
      "Supported LAN/WAN network monitoring and troubleshooting",
      "Assisted with network configuration and connectivity management",
      "Worked with VLANs, routing, and switching concepts",
      "Contributed to firewall and IDS/IPS security reviews",
    ],
    technologies: ["Cisco IOS", "Packet Tracer", "VLANs", "TCP/IP", "Routing & Switching", "IDS/IPS"],
    color: "#00e5ff",
  },
  {
    title: "Cisco Networking Academy Instructor",
    company: "SECOMS Institute, Badraga",
    period: "July 2026 – Present",
    description:
      "Delivering Cisco Networking Academy training and practical networking lessons to students through structured coursework and hands-on lab activities.",
    highlights: [
      "Delivered networking lessons based on Cisco Networking Academy curriculum",
      "Guided students through networking concepts and practical configurations",
      "Prepared lab exercises, assessments, and learning materials",
      "Helped students develop foundational networking and troubleshooting skills",
    ],
    technologies: ["Cisco Packet Tracer", "Cisco IOS", "Networking Fundamentals", "Routing & Switching", "VLANs"],
    color: "#3b82f6",
  },
  {
    title: "SOC Analyst L1 Intern",
    company: "Cyberster Network Security",
    period: "March 2026 – June 2026",
    description:
      "Supported security operations by reviewing SIEM alerts, analyzing security logs, identifying suspicious activities, and assisting with incident escalation.",
    highlights: [
      "Analyzed security alerts and system logs",
      "Assisted with identifying suspicious network activities",
      "Supported initial incident investigation and alert triage",
      "Prepared security observations and escalated relevant incidents",
    ],
    technologies: ["SIEM", "Security Logs", "Network Traffic Analysis", "Threat Detection", "Incident Triage"],
    color: "#8b5cf6",
  },
  {
    title: "SOC Analyst L1 Intern",
    company: "ITSOLERA Pvt. Ltd.",
    period: "January 2026 – April 2026",
    description:
      "Gained practical experience in SOC operations, security alert monitoring, basic threat analysis, and incident response workflows.",
    highlights: [
      "Monitored and reviewed security alerts",
      "Performed initial investigation of suspicious events",
      "Assisted with alert classification and prioritization",
      "Supported incident documentation and escalation procedures",
    ],
    technologies: ["SIEM", "Log Analysis", "Security Monitoring", "Threat Detection", "Incident Response"],
    color: "#10b981",
  },
  {
    title: "Cybersecurity Engineer L1 Intern",
    company: "Arch Technology Ltd.",
    period: "November 2025 – February 2026",
    description:
      "Explored network security concepts, cybersecurity threats, and mitigation techniques through practical security analysis and research.",
    highlights: [
      "Studied security risks across the OSI model",
      "Identified common network-level threats and vulnerabilities",
      "Documented appropriate security controls and mitigation strategies",
      "Strengthened understanding of network defence and cybersecurity fundamentals",
    ],
    technologies: ["OSI Model", "TCP/IP", "Network Security", "Threat Analysis", "Security Documentation"],
    color: "#f59e0b",
  },
  {
    title: "DIT Instructor",
    company: "SECOMS Girls College, Malakand",
    period: "October 2025 – May 2026",
    description:
      "Taught information technology, computer fundamentals, networking, programming basics, and office productivity applications.",
    highlights: [
      "Trained more than 100 students in IT-related subjects",
      "Conducted three practical learning bootcamps",
      "Developed teaching materials and practical exercises",
      "Helped students improve their technical and computer skills",
    ],
    technologies: ["MS Office", "Computer Fundamentals", "Networking Basics", "Programming Fundamentals", "Google Workspace"],
    color: "#06b6d4",
  },
]

// ------------------------------------------------------------
// Skills  (Questionnaire E)
// ------------------------------------------------------------
export const skillsSection = {
  subtitle:
    "Practical expertise in enterprise networking, network defence, security operations, and threat detection — focused on building secure and resilient digital infrastructure.",
  /** Show percentage bars (true) or plain badges (false) */
  showLevels: false,
  banner: {
    enabled: true,
    title: "Certifications & Professional Training",
    description:
      "Industry certifications and specialized hands-on training in cybersecurity, networking, and SOC operations.",
    tags: [
      "ISC2 Certified in Cybersecurity (CC)",
      "Cisco CCNA – ITN",
      "Cisco CCNA – SRWE",
      "Cisco CCNA – ENSA",
      "Google Cybersecurity Professional Certificate",
      "Google Network Security Specialization",
      "IBM Cybersecurity Analyst",
      "TryHackMe SOC Level 1",
    ],
  },
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Networking & Infrastructure",
    icon: Network,
    color: "#00e5ff",
    description: "Enterprise routing, switching & LAN/WAN",
    skills: [
      { name: "Cisco IOS" },
      { name: "Routing & Switching" },
      { name: "VLANs" },
      { name: "Inter-VLAN Routing" },
      { name: "OSPF" },
      { name: "TCP/IP" },
      { name: "LAN/WAN" },
      { name: "Network Troubleshooting" },
    ],
  },
  {
    title: "Network Security",
    icon: Shield,
    color: "#3b82f6",
    description: "Perimeter defence, ACLs & network hardening",
    skills: [
      { name: "Firewall Security" },
      { name: "IDS/IPS" },
      { name: "Access Control Lists (ACLs)" },
      { name: "VPN Technologies" },
      { name: "Network Segmentation" },
      { name: "Network Defence" },
      { name: "Network Hardening" },
    ],
  },
  {
    title: "SOC & Threat Detection",
    icon: ShieldAlert,
    color: "#8b5cf6",
    description: "Alert monitoring, log analysis & triage",
    skills: [
      { name: "SOC Operations" },
      { name: "SIEM Monitoring" },
      { name: "Security Alert Analysis" },
      { name: "Log Analysis" },
      { name: "Threat Detection" },
      { name: "Incident Triage" },
      { name: "Incident Response" },
    ],
  },
  {
    title: "Security & Networking Tools",
    icon: Wrench,
    color: "#10b981",
    description: "Packet analysis, simulation & monitoring platforms",
    skills: [
      { name: "Wireshark" },
      { name: "Cisco Packet Tracer" },
      { name: "VMware Workstation" },
      { name: "Linux Security Tools" },
      { name: "SIEM Platforms" },
    ],
  },
  {
    title: "Programming & Operating Systems",
    icon: Code2,
    color: "#f59e0b",
    description: "Scripting, CLI & core operating environments",
    skills: [
      { name: "Python Fundamentals" },
      { name: "Linux" },
      { name: "Windows" },
      { name: "Command-Line Interface (CLI)" },
      { name: "Bash Fundamentals" },
    ],
  },
  {
    title: "Security Concepts & Frameworks",
    icon: ShieldCheck,
    color: "#ef4444",
    description: "Core architecture, risk & assessment principles",
    skills: [
      { name: "OSI Model" },
      { name: "CIA Triad" },
      { name: "Network Protocols" },
      { name: "Vulnerability Assessment" },
      { name: "Risk Management" },
      { name: "Security Fundamentals" },
      { name: "TCP/IP Architecture" },
    ],
  },
]

// ------------------------------------------------------------
// Services  (Questionnaire F)
// ------------------------------------------------------------
export const servicesSection = {
  enabled: true,
  subtitle:
    "Specialized networking, cybersecurity, and SOC services to secure and optimize your digital infrastructure.",
  showProcess: true,
}

export const services: Service[] = [
  {
    icon: Network,
    title: "Network Infrastructure & Administration",
    description:
      "Designing, configuring, and troubleshooting reliable LAN/WAN and Cisco routing & switching environments.",
    features: [
      "Cisco Router and Switch Configuration",
      "VLANs, Inter-VLAN Routing and OSPF",
      "LAN/WAN Design and Troubleshooting",
      "Network Performance Optimization",
    ],
    color: "#00e5ff",
  },
  {
    icon: Shield,
    title: "Network Security & Firewall Management",
    description:
      "Hardening network perimeters through firewall policies, ACLs, secure VPN connectivity, and infrastructure audits.",
    features: [
      "Firewall Configuration and Management",
      "ACLs and Network Access Control",
      "VPN Configuration (Site-to-Site & Remote Access)",
      "Network Hardening and Security Audits",
    ],
    color: "#3b82f6",
  },
  {
    icon: ShieldAlert,
    title: "Security Operations & Threat Monitoring",
    description:
      "Proactive SIEM monitoring, log inspection, alert triage, and vulnerability assessment to detect threats early.",
    features: [
      "SIEM Monitoring and Log Analysis",
      "Intrusion Detection and Prevention (IDS/IPS)",
      "Security Alert Analysis and Incident Triage",
      "Vulnerability Assessment and Threat Analysis",
    ],
    color: "#8b5cf6",
  },
  {
    icon: GraduationCap,
    title: "Cybersecurity Training & Technical Mentorship",
    description:
      "Hands-on CCNA networking labs, practical Packet Tracer instruction, and foundational cybersecurity awareness training.",
    features: [
      "CCNA Networking Fundamentals",
      "Practical Cisco Packet Tracer Labs",
      "Network Security Fundamentals",
      "Cybersecurity Awareness Training",
    ],
    color: "#10b981",
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "Understand client requirements and assess existing infrastructure.",
    icon: Search,
    color: "#00e5ff",
  },
  {
    step: "02",
    title: "Implementation & Configuration",
    description: "Design, configure, and implement appropriate networking and security solutions.",
    icon: Cog,
    color: "#3b82f6",
  },
  {
    step: "03",
    title: "Testing & Continuous Improvement",
    description: "Verify performance, troubleshoot issues, and recommend improvements.",
    icon: ShieldCheck,
    color: "#8b5cf6",
  },
]

// ------------------------------------------------------------
// Projects  (Questionnaire G)
// ------------------------------------------------------------
export const projectsSection = {
  subtitle:
    "Engineering secure, scalable, and intelligent network infrastructures through practical implementations, cybersecurity research, and enterprise network security solutions.",
  categories: [
    "All Projects",
    "Network Security",
    "SOC & Threat Detection",
    "Enterprise Networking",
    "Cybersecurity Research",
  ],
}

export const projects: Project[] = [
  {
    title: "Efficient Cascaded Edge-Cloud Network Intrusion Detection with Dynamic Case Memory",
    category: "Cybersecurity Research",
    status: "Research in Progress – Unpublished",
    description:
      "Developing a lightweight, cascaded Edge-Cloud Network Intrusion Detection System (NIDS) combining an ultra-compact edge classifier, dynamic case memory, and cloud-based deep learning for efficient network threat detection.",
    problem:
      "Traditional intrusion detection systems often require substantial computational resources and struggle to provide efficient threat detection in resource-constrained IoT environments.",
    approach: [
      "Developed a 1,985-parameter lightweight edge classifier",
      "Designed dynamic case memory using 16-dimensional representations",
      "Implemented confidence blending and conflict arbitration",
      "Designed cloud escalation using Parallel Stacked Autoencoder (PSSAE)",
    ],
    technologies: ["Python", "Deep Learning", "Neural Networks", "Edge Computing", "PSSAE", "Network Security"],
    outcome: [
      "94.5% of routine network flows resolved directly at the edge",
      "Approximately 7.75 KB edge classifier footprint",
      "Zero on-device backpropagation for memory updates",
      "High-confidence cloud verdicts (≥0.90) returned to edge memory",
    ],
    color: "#00e5ff",
    featured: true,
  },
  {
    title: "Network Intrusion Detection System (NIDS)",
    category: "SOC & Threat Detection",
    description:
      "Designed and deployed a network intrusion detection solution for enterprise threat monitoring, combining packet analysis and signature-based detection mechanisms.",
    problem:
      "Enterprise networks require continuous monitoring to identify suspicious traffic, malicious activities, and potential security threats.",
    approach: [
      "Integrated real-time network packet analysis",
      "Applied signature-based detection mechanisms",
      "Developed alert generation and escalation workflows",
      "Analyzed suspicious network traffic",
    ],
    technologies: ["Wireshark", "Network Security", "IDS/IPS", "Packet Analysis", "TCP/IP"],
    outcome:
      "Achieved 95%+ anomaly detection accuracy across tested enterprise network segments, as reported in the project documentation.",
    color: "#3b82f6",
    featured: true,
  },
  {
    title: "Comprehensive Network Infrastructure Audit – University of Malakand",
    category: "Enterprise Networking",
    description:
      "Conducted a comprehensive network infrastructure assessment covering 35+ university departments, focusing on network configuration, segmentation, performance, and security.",
    problem:
      "Network infrastructure requires proper segmentation, configuration management, and performance optimization to maintain reliability and security.",
    approach: [
      "Audited VLAN configurations",
      "Examined inter-VLAN routing",
      "Evaluated network segmentation",
      "Identified infrastructure vulnerabilities",
      "Documented network topology and remediation recommendations",
    ],
    technologies: ["Cisco IOS", "VLANs", "Routing & Switching", "TCP/IP", "Network Troubleshooting"],
    outcome: [
      "Assessed infrastructure across 35+ departments",
      "Reported 35% latency reduction following infrastructure improvements",
      "Delivered network topology documentation and remediation recommendations",
    ],
    color: "#8b5cf6",
    featured: true,
  },
  {
    title: "Enterprise Network Design & Implementation – CCNA Labs",
    category: "Enterprise Networking",
    description:
      "Designed and configured an enterprise-style network infrastructure using Cisco Packet Tracer, implementing routing, switching, network segmentation, and essential network services.",
    problem:
      "Organizations need reliable, scalable, and secure network infrastructures that support multiple departments and interconnected devices.",
    approach: [
      "Designed multi-layer network topology",
      "Configured VLANs and inter-VLAN routing",
      "Implemented OSPF and static routing",
      "Configured DHCP, DNS, and SSH",
      "Implemented STP and EtherChannel",
    ],
    technologies: ["Cisco Packet Tracer", "Cisco IOS", "OSPF", "VLANs", "DHCP", "STP"],
    outcome:
      "Developed and tested an enterprise-style simulated network with departmental segmentation, routing, and essential network services.",
    color: "#10b981",
    featured: true,
  },
]

// ------------------------------------------------------------
// Contact  (Questionnaire H, I)
// ------------------------------------------------------------
export const contactSection = {
  heading: "Let's Connect",
  subtitle:
    "Have a networking or cybersecurity project in mind? Let's connect and work together to build secure, reliable, and scalable digital infrastructure. I'm always open to professional opportunities, technical collaborations, research, and knowledge sharing.",
  /**
   * EmailJS credentials. Prefer setting these in `.env.local`:
   *   NEXT_PUBLIC_EMAILJS_SERVICE_ID / _TEMPLATE_ID / _PUBLIC_KEY
   * TODO: these fallback values belong to the PREVIOUS OWNER's account.
   */
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_15xia03",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_nl6ldnd",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Jo8rA4YNv2pftbp2",
  },
}

// ------------------------------------------------------------
// SEO  (Questionnaire K)
// ------------------------------------------------------------
export const seo = {
  title: `${profile.fullName} | ${profile.title}`,
  description:
    "Cybersecurity & Network Security Engineer specializing in enterprise networking, network defence, firewall security, and SOC operations. Building resilient digital infrastructures.",
  shortDescription:
    "Cybersecurity & Network Security Engineer specializing in enterprise networking, network defence, firewall security, and SOC operations.",
  keywords: [
    "Cybersecurity Engineer",
    "Network Security Engineer",
    "SOC Analyst",
    "Network Engineer",
    "Cisco Networking",
    "Network Defence",
    "Firewall Security",
    "Wireshark",
    "SIEM",
    "Packet Analysis",
  ],
  siteName: "Ikram Ullah Portfolio",
}

// ------------------------------------------------------------
// Navigation
// ------------------------------------------------------------
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  ...(experienceSection.enabled ? [{ name: "Experience", href: "#experience" }] : []),
  { name: "Skills", href: "#skills" },
  ...(servicesSection.enabled ? [{ name: "Services", href: "#services" }] : []),
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

/** Re-exported for the hero stats row icons */
export const heroStatIcons: LucideIcon[] = [ShieldCheck, Network, Briefcase]
