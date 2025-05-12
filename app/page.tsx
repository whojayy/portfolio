"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Certifications from "@/components/certifications"
import TechStack from "@/components/tech-stack"
import Resume from "@/components/resume"
import { ErrorBoundary } from "react-error-boundary"

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="p-4 border border-red-500 rounded-md bg-red-50 dark:bg-red-900/20">
      <p className="text-red-500">Something went wrong:</p>
      <pre className="text-sm overflow-auto">{error.message}</pre>
      <button onClick={resetErrorBoundary} className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
        Try again
      </button>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Projects />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Experience />
      </ErrorBoundary>
      <Certifications />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <TechStack />
      </ErrorBoundary>
      <Education />
      <Resume />
      <Contact />
    </main>
  )
}
