"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { navLinks, profile, socials } from "@/lib/portfolio-data"

const socialLinks = [
  { icon: Github, href: socials.github.href, label: socials.github.label },
  { icon: Linkedin, href: socials.linkedin.href, label: socials.linkedin.label },
  { icon: Mail, href: socials.email.href, label: socials.email.label },
]

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#05070d]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#3b82f6] flex items-center justify-center">
              <span className="text-[#05070d] font-bold text-lg font-mono">{profile.logoText}</span>
            </div>
            <span className="text-[#cbd5e1] font-semibold text-lg">{profile.shortName}</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#cbd5e1]/60 hover:text-[#00e5ff] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              const isExternal = social.href.startsWith("http")
              return (
                <a
                  key={index}
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-[#cbd5e1]/60 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-[#00e5ff]/10" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#cbd5e1]/50">
          <p>
            &copy; Copyright {profile.copyrightStartYear} – {currentYear} All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#ef4444]" /> by {profile.fullName}
          </p>
        </div>
      </div>
    </footer>
  )
}
