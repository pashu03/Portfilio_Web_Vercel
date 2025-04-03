"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  // Fix for smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
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
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
      {/* Navigation */}
      <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-primary font-bold text-xl">PN</span>
            <span className="text-white font-bold text-xl">PRASAD NIKAM</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-white hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-white hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-white hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-white hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-white hover:text-primary transition-colors">
              Contact
            </Link>
            <Link
              href="https://drive.google.com/file/d/1GjDOjg9rt1SRTJ8toOfQhln1fMZgdRnc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              Resume
            </Link>
          </nav>
          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <div className="h-2 w-16 rounded-full bg-primary"></div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Hi, I'm <span className="text-primary">Prasad</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 mb-6">
                I do <span className="text-primary">Software Development</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-lg">
                A passionate software developer with experience in web development, project planning, and customer
                service. Based in Nashik, Maharashtra.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/pashu03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:nikamprashu03@gmail.com"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prasad-nikam-0a91171a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full flex justify-center">
                <div className="w-[300px] h-[300px] relative">
                  <Image
                    // src="/prasad-profile.png"
                    src="/pro.jpg"
                    alt="Prasad Nikam"
                    width={500}
                    height={300}
                    className="rounded-full object-cover border-[2px] border-white/100"
                    priority
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <a href="#about" className="animate-bounce">
              <ChevronDown className="text-primary" size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/80 mb-6 text-lg">
                I'm a Software Developer with a Bachelor's degree in Electronics & Telecommunication Engineering. My
                journey in tech has equipped me with strong problem-solving skills and a passion for creating efficient,
                user-friendly applications.
              </p>
              <p className="text-white/80 mb-6 text-lg">
                With experience in both technical roles and customer service, I bring a unique perspective to software
                development that focuses on both functionality and user experience.
              </p>
              <p className="text-white/80 text-lg">
                I'm constantly learning and expanding my skillset, with particular interest in web development, data
                analysis, and cloud technologies.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="mb-6">
                <h4 className="text-primary font-medium">Bachelor of Engineering</h4>
                <p className="text-white/80">Electronics & Telecommunication</p>
                <p className="text-white/60">State University, Nashik | 2020 - 2023</p>
                <p className="text-white/60">CGPA: 8.4</p>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Relevant Coursework</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-700/50 px-3 py-2 rounded text-white/80">Data Structures</div>
                <div className="bg-slate-700/50 px-3 py-2 rounded text-white/80">Software Methodology</div>
                <div className="bg-slate-700/50 px-3 py-2 rounded text-white/80">Data Analysis</div>
                <div className="bg-slate-700/50 px-3 py-2 rounded text-white/80">Database Management</div>
                <div className="bg-slate-700/50 px-3 py-2 rounded text-white/80">Artificial Intelligence</div>
                <div className="bg-slate-700/50 px-3 py-2 rounded text-white/80">Internet Technology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Representative, Advisor</h3>
                  <p className="text-primary">Concentrix, Bangalore</p>
                </div>
                <p className="text-white/60 mt-2 md:mt-0">Jan 2024 - Aug 2024</p>
              </div>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Achieved 98% customer satisfaction by resolving queries on the first contact.</li>
                <li>
                  Improved overall customer experience through strong communication and efficient problem-solving.
                </li>
                <li>Proactively implemented solutions that had a significant positive impact.</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Planning Engineer Intern</h3>
                  <p className="text-primary">Nash Robotics, Nashik</p>
                </div>
                <p className="text-white/60 mt-2 md:mt-0">Oct 2024 - March 2025</p>
              </div>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Responsible for project scheduling, resource planning, and workflow optimization.</li>
                <li>
                  Ensured timely execution of manufacturing processes by coordinating with cross-functional           teams.
                </li>
                <li>Improved efficiency through data-driven analysis.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg overflow-hidden">
              <div className="h-48 bg-slate-700 relative">
                <Image src="/virtual-dressing.png" alt="Virtual Dressing Room" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Virtual Dressing Room</h3>
                <p className="text-white/70 mb-4">
                  An innovative smart mirror solution that allows shoppers to virtually try on clothes using Kinect
                  sensor and image processing technology.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-white/80">C#</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-white/80">MySQL</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-white/80">.NET</span>
                </div>
                <a href="#" className="text-primary hover:underline" target="_blank">
                  {" "}
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg overflow-hidden">
              <div className="h-48 bg-slate-700 relative">
                <div className="absolute inset-0 bg-[url('/todo-bg.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/todo-bg.png" alt="Todo List App" width={300} height={200} className="object-contain" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Todo List App</h3>
                <p className="text-white/70 mb-4">
                  A dynamic To-Do List application using Next.js with full CRUD functionality, allowing users to manage
                  their daily tasks efficiently.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-white/80">Next.js</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-white/80">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-white/80">VS Code</span>
                </div>
                <a href="https://pashu03-todo-list-nextjs-app.vercel.app/" className="text-primary hover:underline" target="_blank">
                  View Project →
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg overflow-hidden">
              <div className="h-48 bg-slate-700 relative">
                <Image src="/auth-system.png" alt="Authentication System" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Authentication System GUI</h3>
                <p className="text-white/70 mb-4">
                  A secure authentication system with login and signup functionality, featuring a modern dark-themed UI
                  with intuitive user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-white/80">PHP</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-white/80">MySQL</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-white/80">UI/UX</span>
                </div>
                <a href="#" className="text-primary hover:underline" target="_blank">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">Python</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">C</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">C++</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">HTML/CSS</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">JavaScript</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">TypeScript</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">SQL</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">PHP</span>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">VS Code</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">Sublime Text</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">Google Cloud</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">PyCharm</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">PowerBI</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">Tableau</span>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Technologies/Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">Linux</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">Git</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">GitHub</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">Excel</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">WordPress</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">Next.js</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">Bootstrap</span>
                <span className="px-3 py-2 bg-slate-700 rounded text-white/80">Reactjs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Leadership & <span className="text-primary">Certifications</span>
          </h2>
          <div className="max-w-3xl mx-auto bg-slate-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Google Cloud Arcade Program</h3>
            <ul className="list-disc list-inside text-white/80 space-y-3">
              <li>Certified 180 Days Google Cloud Arcade facilitator Program.</li>
              <li>Participated in Google Cloud Study Jam Cohort 2023.</li>
              <li>Won Badge of Google Cloud Fly Cup Challenge.</li>
              <li>Certified Data Analytics Essentials program by Cisco.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="max-w-md mx-auto bg-slate-800/50 p-6 rounded-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-primary hover:bg-primary/80 text-white font-medium rounded transition-colors">
                <a href="mailto:nikamprashu03@gmail.com" className="hover:text-primary">
                  Send Message
                </a>
              </button>
            </form>
            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-white mb-4">Or reach me directly at:</p>
              <div className="flex items-center gap-2 text-white/80 mb-2">
                <Mail size={16} />
                <a href="mailto:nikamprashu03@gmail.com" className="hover:text-primary">
                  nikamprashu03@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>9604451908</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">© {new Date().getFullYear()} Prasad Nikam. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/pashu03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a href="mailto:nikamprashu03@gmail.com" className="text-white/60 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/prasad-nikam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

