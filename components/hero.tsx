"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [nameChars, setNameChars] = useState<{ char: string; visible: boolean }[]>([])
  const [originalName, setOriginalName] = useState("")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const initialLoadTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize the name characters
  useEffect(() => {
    const name = "Jay Mewada"
    setOriginalName(name)
    setNameChars(name.split("").map((char) => ({ char, visible: true })))

    // Trigger the initial load animation
    setIsInitialLoad(true)

    // Stop the initial animation after 2 seconds
    initialLoadTimerRef.current = setTimeout(() => {
      setIsInitialLoad(false)
    }, 2000)

    return () => {
      if (initialLoadTimerRef.current) {
        clearTimeout(initialLoadTimerRef.current)
      }
    }
  }, [])

  // Handle the disappear/reappear effect
  useEffect(() => {
    // Run the effect if hovering OR during initial load
    if (isHovering || isInitialLoad) {
      // Start the effect
      intervalRef.current = setInterval(() => {
        setNameChars((prev) =>
          prev.map((charObj, index) => {
            // Keep "Ja" in "Jay" and "Me" in "Mewada" stable
            if (index < 2 || (index >= 4 && index <= 5)) {
              return { ...charObj, visible: true }
            }

            // Keep spaces visible
            if (charObj.char === " ") {
              return { ...charObj, visible: true }
            }

            // For other characters, randomly toggle visibility
            return {
              ...charObj,
              visible: Math.random() > 0.3, // 70% chance to be visible
            }
          }),
        )
      }, 80) // Faster interval for quicker flicker
    } else {
      // Stop the effect and reset to original name with all characters visible
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      setNameChars(originalName.split("").map((char) => ({ char, visible: true })))
    }

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isHovering, isInitialLoad, originalName])

  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10 dark:bg-grid-small-white/[0.2]"></div>
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-3/4 h-3/4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl cursor-pointer text-foreground"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {nameChars.map((charObj, index) => (
                <span
                  key={index}
                  className={`inline-block transition-opacity duration-75 ${
                    charObj.visible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ width: charObj.char === " " ? "0.5em" : "auto" }}
                >
                  {charObj.char}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground transition-transform duration-300 hover:scale-110 cursor-pointer">
              Data Scientist, Machine Learning Engineer & Data Engineer
            </p>
            <p className="text-lg md:text-xl text-foreground font-medium transition-transform duration-300 hover:scale-110 cursor-pointer">
              2+ Years of Experience | Open to Full-time Opportunities
            </p>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-transform duration-300 hover:scale-105 cursor-pointer">
            Transforming complex data into actionable insights through innovative machine learning solutions, MLOps best
            practices, and advanced AI applications.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link href="#contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resume.html" target="_blank">
                View Resume <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Link
              href="https://github.com/whojayy"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-125 transform duration-200"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jay--mewada/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-125 transform duration-200"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:jaymewada2001@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-125 transform duration-200"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
