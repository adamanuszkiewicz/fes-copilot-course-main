'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const contactEmail = 'anuszkiewicz9@gmail.com'

interface PortfolioProject {
  title: string
  description: string
  stack: string[]
  href: string
  imageSrc?: string
  imageAlt?: string
}

const featuredProjects: PortfolioProject[] = [
  {
    title: 'CarePulse',
    description:
      'CarePulse is an appointment scheduling app designed for booking appointments with doctors. It features a modern UI, secure authentication, and real-time appointment management using React, Tailwind CSS, TypeScript, and Appwrite.',
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'Appwrite'],
    href: 'https://caerpulse-vq8r.vercel.app/',
    imageSrc: '/assets/module-5-portfolio/projects/portfolio-2026/CarePulse-img.png',
    imageAlt: 'Preview of the Learning Dashboard project',
  },
  {
    title: 'Spotify Clone',
    description:
      'This Spotify app was made using React, HTML, Tailwind CSS and JavaScript. You can browse music, create playlists, and enjoy a modern, responsive UI. The app features interactive music controls, playlist management, and a seamless user experience inspired by Spotify.',
    stack: ['React', 'HTML', 'Tailwind CSS', 'JavaScript'],
    href: 'https://spotify-clone-ruby-five-19.vercel.app/',
    imageSrc: '/assets/module-5-portfolio/projects/portfolio-2026/shopify img.png',
    imageAlt: 'Preview of the Design System Lab project',
  },
  {
    title: 'Skinstric AI',
    description:
      'Skinstric AI is an AI-powered skincare startup company that is transforming the skincare industry. It uses artificial intelligence to analyze skin conditions, recommend personalized skincare routines, and match users with the best products for their needs. The platform features a modern UI, interactive user experience, and leverages React and JavaScript to deliver real-time, data-driven insights for optimal skincare results.',
    stack: ['React', 'HTML', 'CSS', 'JavaScript'],
    href: 'https://skinstric-internship-drab.vercel.app/',
    imageSrc: '/assets/module-5-portfolio/projects/portfolio-2026/skinstric.img.png',
    imageAlt: 'Preview of the Insight Reports project',
  },
]

const aboutSkills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Accessibility',
  'UI Design',
  'Appwrite',
  'Firebase',
]

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'header' | 'section' | 'footer'
  delay?: number
  id?: string
}

function FadeInSection({
  children,
  className = '',
  as = 'div',
  delay = 0,
  id,
}: FadeInSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = sectionRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  const Tag = as

  return (
    <div
      ref={sectionRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-4 opacity-0 blur-[2px]'
      }`}
    >
      <Tag id={id} className={className}>
        {children}
      </Tag>
    </div>
  )
}

/**
 * MODULE 5: Final Project - Portfolio Website
 *
 * This is your capstone project! You'll build a complete personal portfolio
 * website using everything you've learned:
 * - Agent Mode for scaffolding large sections
 * - Edit Mode for surgical refinements
 * - Ask Mode for guidance and improvements
 * - Your rules for consistent styling
 *
 * Follow the step-by-step instructions marked below.
 */

export default function Module5Portfolio() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const lastFocusedElementRef = useRef<HTMLElement | null>(null)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const openContactModal = (triggerElement?: HTMLElement | null) => {
    lastFocusedElementRef.current = triggerElement ?? (document.activeElement as HTMLElement)
    setIsContactOpen(true)
  }

  const closeContactModal = () => setIsContactOpen(false)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialDark = storedTheme ? storedTheme === 'dark' : prefersDark
    setIsDarkMode(initialDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light'
    window.localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    if (!isContactOpen) return

    const modalElement = modalRef.current

    if (!modalElement) return

    const focusableSelectors =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const focusableElements = Array.from(
      modalElement.querySelectorAll<HTMLElement>(focusableSelectors)
    )
    const firstFocusableElement = focusableElements[0]
    const lastFocusableElement = focusableElements[focusableElements.length - 1]

    firstFocusableElement?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeContactModal()
        return
      }

      if (event.key !== 'Tab' || focusableElements.length === 0) {
        return
      }

      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault()
        lastFocusableElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
        event.preventDefault()
        firstFocusableElement?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isContactOpen])

  useEffect(() => {
    if (isContactOpen) return

    lastFocusedElementRef.current?.focus()
  }, [isContactOpen])

  useEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior
    }
  }, [])

  const updateContactField = (field: 'name' | 'email' | 'message', value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }))
  }

  const isFormValid =
    contactForm.name.trim().length > 0 &&
    /\S+@\S+\.\S+/.test(contactForm.email) &&
    contactForm.message.trim().length > 0

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isFormValid) return

    const subject = encodeURIComponent(`Portfolio contact from ${contactForm.name}`)
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setContactForm({ name: '', email: '', message: '' })
    closeContactModal()
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#fff7ed_55%,_#ffffff_100%)] text-slate-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.25),_transparent_35%),linear-gradient(180deg,_#020617_0%,_#111827_55%,_#030712_100%)] dark:text-slate-100">
      <a
        href="#main-content"
        className="sr-only rounded-md bg-amber-400 px-4 py-2 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        Skip to main content
      </a>

      {/* ==========================================
       * 📋 PROJECT OVERVIEW
       * ==========================================
       *
       * You'll build a portfolio with these sections:
       * ✓ Header with navigation
       * ✓ Hero section with name and tagline
       * ✓ Projects grid with cards
       * ✓ About section with bio and skills
       * ✓ Contact form
       * ✓ Footer with social links
       *
       * Use Agent Mode (Claude or Auto model) for big sections,
       * then Edit Mode (Inline Chat) for refinements!
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 1: SCAFFOLD BASE LAYOUT
       * ==========================================
       *
       * ✅ TODO: CREATE THE BASIC LAYOUT STRUCTURE
       *
       * Instructions:
       * 1. Open Copilot Chat panel
       * 2. Set model to Claude or Auto
       * 3. Ask: "Create a portfolio layout with header, hero section,
       *         projects grid, and footer"
       * 4. Review the scaffolded structure
       * 5. Accept if it has all four sections
       *
       * IMPORTANT: Replace this entire component with the generated layout!
       *
       * ========================================== */}

      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <FadeInSection
          as="header"
          delay={0}
          className="rounded-[1.75rem] border border-white/70 bg-white/80 px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
                Portfolio
              </p>
              <a href="#hero" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Adam Anuszkiewicz
              </a>
            </div>

            <nav
              aria-label="Primary"
              className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300"
            >
              <a
                className="rounded-md transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 dark:hover:text-white dark:focus-visible:ring-offset-slate-900"
                href="#hero"
                aria-label="Go to home section"
              >
                Home
              </a>
              <a
                className="rounded-md transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 dark:hover:text-white dark:focus-visible:ring-offset-slate-900"
                href="#projects"
                aria-label="Go to projects section"
              >
                Projects
              </a>
              <a
                className="rounded-md transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 dark:hover:text-white dark:focus-visible:ring-offset-slate-900"
                href="#about"
                aria-label="Go to about section"
              >
                About
              </a>
              <button
                type="button"
                onClick={event => openContactModal(event.currentTarget)}
                className="rounded-md transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 dark:hover:text-white dark:focus-visible:ring-offset-slate-900"
                aria-label="Open contact form"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={() => setIsDarkMode(value => !value)}
                className="rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 dark:border-slate-700 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-900"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={isDarkMode}
              >
                {isDarkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </nav>
          </div>
        </FadeInSection>

        <main id="main-content" tabIndex={-1} className="space-y-10 py-10">
          <FadeInSection
            as="section"
            id="hero"
            delay={80}
            className="overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-slate-950 px-6 py-12 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:px-10 dark:border-slate-800"
          >
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-300">
                  Product-minded Frontend Developer
                </p>
                <div className="space-y-4">
                  <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                    Building clear interfaces for people, data, and ambitious ideas.
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                    I design and ship thoughtful web experiences with a focus on accessibility,
                    interaction quality, and clean implementation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    aria-label="View projects section"
                  >
                    View Projects
                  </a>
                  <button
                    type="button"
                    onClick={event => openContactModal(event.currentTarget)}
                    className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    aria-label="Open contact form"
                  >
                    Contact Me
                  </button>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 dark:border-slate-700 dark:bg-slate-900/50">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Current Focus</p>
                <ul className="mt-5 space-y-4 text-sm text-slate-200">
                  <li className="border-b border-white/10 pb-4">Designing resilient React flows</li>
                  <li className="border-b border-white/10 pb-4">
                    Turning rough ideas into polished UI systems
                  </li>
                  <li>Teaching with practical, readable frontend examples</li>
                </ul>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection as="section" id="projects" delay={160} className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                  Selected Work
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                  Projects Grid
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                A few examples of product thinking, interaction design, and frontend delivery.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map(project => (
                <article
                  key={project.title}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="mb-5 rounded-[1.25rem] bg-gradient-to-br from-amber-100 via-orange-50 to-slate-100 p-3">
                    <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/70">
                      {project.imageSrc ? (
                        <Image
                          src={project.imageSrc}
                          alt={project.imageAlt ?? `${project.title} project preview`}
                          width={1600}
                          height={900}
                          className="h-auto w-full object-contain"
                        />
                      ) : (
                        <div className="flex min-h-48 items-center justify-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                          Add project image
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      className="inline-flex items-center rounded-md text-sm font-semibold text-amber-700 transition-colors group-hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 dark:group-hover:text-white dark:focus-visible:ring-offset-slate-900"
                      aria-label={`Explore ${project.title} project`}
                    >
                      Explore project
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection
            as="section"
            id="about"
            delay={220}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_55px_rgba(15,23,42,0.06)] sm:p-10 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="flex h-72 w-72 items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-amber-100 via-orange-50 to-slate-100 p-4 shadow-inner">
                  <Image
                    src="/assets/module-5-portfolio/projects/portfolio-2026/Adam-Headshot-5.jpg"
                    alt="Adam Anuszkiewicz headshot"
                    width={1200}
                    height={1200}
                    className="h-full w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                    About Me
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                    Hey! I'm Adam!
                  </h2>
                </div>

                <p className="text-base leading-7 text-slate-600 dark:text-slate-400">
                  I'm a Frontend Software Engineer passionate about building polished, accessible, and user-focused web experiences. I specialize in developing modern web applications that balance thoughtful design, usability, and performance, with a strong emphasis on understanding and meeting user needs.
                </p>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700 dark:text-slate-300">
                    Core Skills
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {aboutSkills.map(skill => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </main>

        <FadeInSection
          as="footer"
          delay={240}
          className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Adam Anuszkiewicz
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Creating polished interfaces with accessible, durable frontend code.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a
                aria-label="Visit GitHub profile"
                className="rounded-md hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 dark:hover:text-white dark:focus-visible:ring-offset-slate-900"
                href="https://github.com/adamanuszkiewicz"
              >
                GitHub
              </a>
              <a
                aria-label="Visit LinkedIn profile"
                className="rounded-md hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 dark:hover:text-white dark:focus-visible:ring-offset-slate-900"
                href="https://www.linkedin.com/in/adam-anuszkiewicz-36346a121/"
              >
                LinkedIn
              </a>
              <button
                type="button"
                onClick={event => openContactModal(event.currentTarget)}
                className="rounded-md hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 dark:hover:text-white dark:focus-visible:ring-offset-slate-900"
                aria-label="Open contact form"
              >
                Contact
              </button>
            </div>
          </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                &copy; {new Date().getFullYear()} Adam Anuszkiewicz. All rights reserved.
              </p>
        </FadeInSection>
      </div>

      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4"
          role="presentation"
          onClick={event => {
            if (event.target === event.currentTarget) {
              closeContactModal()
            }
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            aria-describedby="contact-modal-description"
            className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 id="contact-modal-title" className="text-2xl font-semibold text-slate-900">
                  Contact Me
                </h2>
                <p id="contact-modal-description" className="mt-1 text-sm text-slate-600">
                  Send a message and your email app will open with everything prefilled.
                </p>
              </div>
              <button
                type="button"
                onClick={closeContactModal}
                className="rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
                aria-label="Close contact form"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={contactForm.name}
                  onChange={event => updateContactField('name', event.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-amber-400 transition focus:ring-2 focus-visible:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={contactForm.email}
                  onChange={event => updateContactField('email', event.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-amber-400 transition focus:ring-2 focus-visible:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={contactForm.message}
                  onChange={event => updateContactField('message', event.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-amber-400 transition focus:ring-2 focus-visible:ring-2"
                />
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeContactModal}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
                  aria-label="Cancel and close contact form"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  aria-label="Send contact email"
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==========================================
       * 🎯 STEP 2: FILL IN THE HERO SECTION
       * ==========================================
       *
       * ✅ TODO: ADD CONTENT TO HERO SECTION
       *
       * Once you have the base layout, enhance the hero:
       *
       * Instructions:
       * 1. Highlight the hero section in your new layout
       * 2. Use Inline Chat (Ctrl/Cmd + I)
       * 3. Ask: "Hero with my name, tagline, and a 'Contact Me' button"
       * 4. Customize with your actual name and tagline
       * 5. Refine: "Make the button a mailto: link to [your-email]"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 3: BUILD THE PROJECTS GRID
       * ==========================================
       *
       * ✅ TODO: ADD PROJECT CARDS
       *
       * Instructions:
       * 1. Highlight the projects section
       * 2. Use Agent Mode
       * 3. Ask: "Projects section with cards: title, description,
       *         image placeholder, and link"
       * 4. Add 3-4 sample projects
       * 5. Refine with Inline Chat: "Add a hover animation for each card"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 4: CREATE THE FOOTER
       * ==========================================
       *
       * ✅ TODO: ADD FOOTER WITH SOCIAL LINKS
       *
       * Instructions:
       * 1. Highlight the footer section
       * 2. Use Inline Chat
       * 3. Ask: "Footer with copyright and links to GitHub,
       *         LinkedIn, Twitter"
       * 4. Refine: "Add aria-labels for social links"
       * 5. Update with your actual social media URLs
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 5: ADD AN ABOUT SECTION
       * ==========================================
       *
       * ✅ TODO: INSERT ABOUT SECTION
       *
       * Instructions:
       * 1. Place cursor between Projects and Footer
       * 2. Use Agent Mode
       * 3. Ask: "About section with my photo placeholder,
       *         short bio, and list of skills"
       * 4. Refine: "Use Tailwind spacing consistent with Hero section"
       * 5. Refine: "Keep the About text in a centered column"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 6: ADD CONTACT FORM
       * ==========================================
       *
       * ✅ TODO: CREATE CONTACT FORM
       *
       * Instructions:
       * 1. Add a new section before the footer
       * 2. Use Agent Mode
       * 3. Ask: "Add a contact form with name, email,
       *         message and basic validation"
       * 4. Use Edit Mode: "Disable submit until all fields are valid"
       * 5. Add: "Show success message after submission"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 7: ADD DARK MODE (OPTIONAL)
       * ==========================================
       *
       * ✅ TODO: IMPLEMENT DARK MODE TOGGLE
       *
       * Instructions:
       * 1. Highlight the header
       * 2. Use Agent Mode
       * 3. Ask: "Add dark mode toggle in the header"
       * 4. Test the toggle works across all sections
       * 5. Refine colors if needed
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 8: POLISH & ANIMATIONS
       * ==========================================
       *
       * ✅ TODO: ADD FINISHING TOUCHES
       *
       * Use Edit Mode for these refinements:
       * 1. "Fade in hero section on page load"
       * 2. "Add smooth scroll behavior for navigation links"
       * 3. "Improve spacing and typography hierarchy"
       * 4. "Ensure all sections are responsive on mobile"
       * 5. "Add loading states where appropriate"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 FINAL REVIEW CHECKLIST
       * ==========================================
       *
       * Before you're done, verify:
       *
       * ✓ Responsive Design
       *   - Test on mobile, tablet, desktop viewports
       *   - Check text is readable at all sizes
       *
       * ✓ Accessibility
       *   - All interactive elements have aria-labels
       *   - Images have alt text
       *   - Keyboard navigation works
       *   - Color contrast is sufficient
       *
       * ✓ Consistency
       *   - Follows your .github/copilot-instructions.md rules
       *   - Uses Tailwind classes consistently
       *   - Arrow functions throughout
       *   - TypeScript types defined
       *
       * ✓ Functionality
       *   - All links work
       *   - Contact form validates input
       *   - Animations are smooth
       *   - No console errors
       *
       * ========================================== */}
    </div>
  )
}

/* ==========================================
 * 💡 TIPS FOR SUCCESS
 * ==========================================
 *
 * 1. START BIG, THEN REFINE
 *    - Use Agent Mode to scaffold entire sections quickly
 *    - Then use Edit Mode (Inline Chat) for small improvements
 *    - Don't try to get everything perfect in one prompt
 *
 * 2. ITERATE IN STEPS
 *    - Build one section at a time
 *    - Test each section before moving to the next
 *    - It's easier to debug small changes
 *
 * 3. USE ASK MODE FOR GUIDANCE
 *    - "What's the best way to structure this component?"
 *    - "How can I improve the performance here?"
 *    - "What accessibility features am I missing?"
 *
 * 4. CUSTOMIZE IT
 *    - Replace placeholder text with your real information
 *    - Add your own projects and achievements
 *    - Make it reflect your personality and style
 *
 * 5. LEARN BY REVIEWING
 *    - Don't just accept code blindly
 *    - Read what Copilot generates
 *    - Ask it to explain anything unclear
 *    - Understand the patterns so you can use them later
 *
 * 6. COMMON ISSUES & FIXES
 *    - Spacing looks off? → "Improve spacing using Tailwind"
 *    - Not responsive? → "Make this section responsive on mobile"
 *    - Missing types? → "Add TypeScript types for props"
 *    - Need animation? → "Add smooth transition animations"
 *
 * ========================================== */

/* ==========================================
 * 🎉 CONGRATULATIONS!
 * ==========================================
 *
 * When you complete this portfolio, you will have:
 *
 * ✓ Built a real, production-ready website with Copilot
 * ✓ Mastered Agent Mode for large scaffolding tasks
 * ✓ Used Edit Mode for precise refinements
 * ✓ Applied Ask Mode for strategic guidance
 * ✓ Leveraged rules for consistent code style
 * ✓ Created something you can actually deploy and share!
 *
 * NEXT STEPS:
 * - Deploy your portfolio to Vercel or Netlify
 * - Share it on LinkedIn and Twitter
 * - Keep practicing with Copilot on real projects
 * - Teach others what you've learned
 *
 * Remember: Copilot is a tool to amplify your skills,
 * not replace them. The more you understand code, the
 * better you'll be at directing Copilot to build
 * exactly what you envision.
 *
 * Happy coding! 🚀
 *
 * ========================================== */
