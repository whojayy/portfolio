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
                  I have worn multiple hats across 2+ years of my professional journey, serving as a Data Scientist, Machine Learning Engineer, and Data Engineer, most recently at Nova Scotia Health, where I developed interpretable ML models and implemented MLOps practices on healthcare data to support real-world clinical decision-making and operational efficiency.
                </p>
                <p>
                  I hold a Master of Digital Innovation – Data Science from Dalhousie University. My expertise spans machine learning, MLOps, computer vision, and AI application software development, with hands-on experience in building end-to-end ML pipelines and software development. I’m passionate about developing robust, explainable, and scalable AI software systems that integrate seamlessly with enterprise workflows.
                </p>
                <p>
                  Previously at TechVida Labs, I implemented production-grade ML and AI systems, built RAG-based and agentic AI applications, and engineered cloud-native data pipelines that delivered measurable business value.
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
                      <span>Data Science, ML & Data Engineering specialist</span>
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
