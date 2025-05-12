import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10 dark:bg-grid-small-white/[0.2]"></div>
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-3/4 h-3/4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Jay Mewada</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">Data Scientist & Machine Learning Engineer</p>
            <p className="text-lg md:text-xl text-primary font-medium">Seeking Fall 2025 Co-op</p>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jay--mewada/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:jaymewada2001@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
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
