import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
            <p className="text-muted-foreground">Reach out for opportunities or just to say hello</p>
          </div>

          <div className="flex justify-center">
            <Card className="bg-card dark:bg-slate-900 border-slate-200 dark:border-slate-800 max-w-xl w-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Alternative ways to reach me</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:jaymewada2001@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      jaymewada2001@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a
                      href="tel:+17828826984"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +1 782 882 6984
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Halifax, NS, Canada</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium mb-3">Connect with Me</h3>
                  <div className="flex gap-4">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
