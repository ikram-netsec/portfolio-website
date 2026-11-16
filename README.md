# Ikram Ullah — Cybersecurity & Network Security Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **"Securing Networks. Defending Infrastructure. Building Digital Trust."**

A modern, high-performance portfolio website for **Ikram Ullah**, showcasing practical engineering experience across enterprise networking, network defence, firewall management, SOC operations, and network intrusion detection.

---

## 👨‍💻 About Ikram Ullah

- **Title:** Cybersecurity & Network Security Engineer
- **Education:** Bachelor of Science in Software Engineering (BSSE), University of Malakand, Pakistan (2023 – 2027)
- **Certifications:**
  - ISC2 Certified in Cybersecurity (CC)
  - Cisco CCNA – Introduction to Networks (ITN)
  - Cisco CCNA – Switching, Routing, and Wireless Essentials (SRWE)
  - Cisco CCNA – Enterprise Networking, Security, and Automation (ENSA)
  - Google Cybersecurity Professional Certificate
  - Google Network Security Specialization
  - IBM Cybersecurity Analyst
  - TryHackMe SOC Level 1
- **GitHub:** [@ikram-netsec](https://github.com/ikram-netsec)
- **LinkedIn:** [Ikram Ullah](https://linkedin.com/in/ikram-ullah-b18b0331a)
- **Email:** [ikraamullahse@gmail.com](mailto:ikraamullahse@gmail.com)
- **Location:** Sakhakot, Malakand, Khyber Pakhtunkhwa, Pakistan

---

## 🚀 Key Sections & Features

- **Hero Section:** Dynamic role typewriter animation, live status indicator, customizable terminal profile card, and quick CV download.
- **About & Neural Orb:** Interactive network security visualization, key academic milestones, and metrics (3+ Internships, 35+ Departments Audited, 100+ Students Trained).
- **Professional Journey:** Interactive timeline featuring 6 roles across Cisco Academy UET Peshawar, SECOMS Institute, Cyberster Network Security, ITSOLERA, Arch Technology, and SECOMS Girls College.
- **Skills Matrix:** 6 categorized skill sets in clean badge format (Networking & Infrastructure, Network Security, SOC & Threat Detection, Security & Networking Tools, Scripting & OS, Security Concepts & Frameworks) plus an accredited certifications banner.
- **Services & Working Process:** 4 specialized service offerings with a structured 3-phase engineering workflow (*Discovery & Assessment* → *Implementation & Configuration* → *Testing & Continuous Improvement*).
- **Project Showcase:** Filterable project showcase across *Network Security*, *SOC & Threat Detection*, *Enterprise Networking*, and *Cybersecurity Research*, featuring detailed modal dialogs.
- **Contact Form:** Fully configured EmailJS integration for direct inbox delivery with real-time feedback.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with custom glassmorphism design system
- **Icons:** Lucide React
- **Contact Form:** EmailJS (`@emailjs/browser`)
- **Animation & UI:** CSS animations, custom canvas particle grid, Radix UI primitives

---

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Theme tokens, custom utility classes & glassmorphism
│   ├── layout.tsx           # SEO metadata, OpenGraph, font configurations
│   └── page.tsx             # Main single-page layout composition
├── components/
│   ├── about.tsx            # About bio, metrics, and security orb visualization
│   ├── contact.tsx          # Contact info cards and EmailJS form
│   ├── experience.tsx       # Interactive career timeline
│   ├── footer.tsx           # Footer with navigation and copyright
│   ├── hero.tsx             # Hero section with canvas particles & profile card
│   ├── navbar.tsx           # Responsive floating navigation bar
│   ├── projects.tsx         # Filterable project grid with detail modal
│   ├── services.tsx         # Service offerings and working process
│   └── skills.tsx           # Category skills and certification banner
├── lib/
│   ├── portfolio-data.ts    # ⭐ SINGLE SOURCE OF TRUTH: edit all content here
│   └── utils.ts             # Tailwind class merging utility
├── public/
│   ├── resume.pdf           # Ikram Ullah's Resume (PDF)
│   ├── icon.svg             # Favicon
│   └── ...
├── .env.example             # Template for environment variables
└── README.md
```

---

## ⚙️ Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/ikram-netsec/portfolio-website.git
cd portfolio-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the project root:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_15xia03
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_nl6ldnd
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Jo8rA4YNv2pftbp2
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploying on Vercel

The portfolio is fully optimized for **zero-configuration deployment on Vercel**:

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New"** → **"Project"**.
3. Import your repository: `ikram-netsec/portfolio-website`.
4. In the **Environment Variables** section, add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_15xia03`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_nl6ldnd`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `Jo8rA4YNv2pftbp2`
5. Click **"Deploy"**. Vercel will build and assign you a live production URL (e.g. `https://portfolio-website-ikram.vercel.app`).

---

## 📝 Updating Website Content

To update any content on your website (name, bio, jobs, skills, projects, links), you only need to edit **one single file**:

👉 **[`lib/portfolio-data.ts`](lib/portfolio-data.ts)**

All components dynamically import their content from this file, so no JSX or layout editing is required for content updates.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

**Built for Ikram Ullah | Cybersecurity & Network Security Engineer**
