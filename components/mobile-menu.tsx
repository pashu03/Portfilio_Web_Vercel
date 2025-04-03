"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Fix for smooth scrolling in mobile menu
  useEffect(() => {
    const handleMobileAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const targetId = target.getAttribute("href")
        const targetElement = document.querySelector(targetId as string)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          })
          closeMenu()
        }
      }
    }

    document.addEventListener("click", handleMobileAnchorClick)

    return () => {
      document.removeEventListener("click", handleMobileAnchorClick)
    }
  }, [])

  return (
    <div className="md:hidden">
      <Link href="/" className="md:hidden fixed top-4 left-4 z-[60] flex items-center gap-1">
        <span className="text-primary font-bold text-xl">PN</span>
      </Link>
      <button onClick={toggleMenu} className="text-white" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-950 z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} className="text-white" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            <Link href="#about" className="text-white text-xl hover:text-primary transition-colors" onClick={closeMenu}>
              About
            </Link>
            <Link
              href="#experience"
              className="text-white text-xl hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-white text-xl hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-white text-xl hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-white text-xl hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

