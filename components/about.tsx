import { Button } from "@/components/ui/button"
import { Download, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
            <p className="text-muted-foreground">Passionate about data science and machine learning</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="flex flex-col space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Halifax, NS, Canada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 782 882 6984</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>jaymewada2001@gmail.com</span>
                </div>
              </div>
              <div className="space-y-4">
                <p>
                  I'm a Data Scientist and Machine Learning Engineer with expertise in developing innovative solutions
                  for complex data problems. Currently pursuing a Master of Digital Innovation with a focus on Data
                  Science at Dalhousie University.
                </p>
                <p>
                  My technical expertise spans across machine learning, MLOps, computer vision, and AI application
                  development. I specialize in building end-to-end ML pipelines from data ingestion to production
                  deployment, with a strong focus on creating scalable and maintainable AI systems.
                </p>
                <p>
                  With over 1.5 years of professional experience at TechVida Labs, I've implemented production-grade
                  machine learning solutions, developed agentic AI applications, and built RAG systems that deliver real
                  business value. I'm passionate about applying best practices in software engineering to data science
                  projects.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild>
                  <Link href="/resume.html" target="_blank">
                    Download Resume <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-full h-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-lg blur-xl"></div>
                <div className="relative bg-card border rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/20 p-1 rounded-full">
                        <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Data Science & Machine Learning specialist</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/20 p-1 rounded-full">
                        <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Computer Vision & Deep Learning expert</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/20 p-1 rounded-full">
                        <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Data Analytics & Visualization professional</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/20 p-1 rounded-full">
                        <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Cloud & Deployment solutions architect</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/20 p-1 rounded-full">
                        <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Full-stack development capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
