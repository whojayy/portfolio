"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { getAssetPath } from "@/lib/asset-path"

export default function Resume() {
  const [resumeError, setResumeError] = useState(false)

  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Resume</h2>
            <p className="text-muted-foreground">View or download my professional resume</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>My Professional Resume</CardTitle>
              <CardDescription>
                Get a comprehensive overview of my skills, experience, and qualifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
                <div className="relative aspect-[8.5/11] w-full max-w-[250px] overflow-hidden rounded-lg border">
                  {resumeError ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/20 p-4 text-center">
                      <p>Resume preview unavailable. Please click "View Resume" to see the full document.</p>
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                      <iframe
                        src={getAssetPath("/resume.html")}
                        className="absolute inset-0 w-full h-full border-0"
                        title="Resume Preview"
                        onError={() => setResumeError(true)}
                        sandbox="allow-same-origin allow-scripts"
                      ></iframe>
                    </>
                  )}
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start">
                  <p className="text-muted-foreground max-w-md text-center md:text-left">
                    My resume details my professional experience, educational background, technical skills, and
                    certifications in the field of data science and machine learning.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href={getAssetPath("/resume.html")} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-4 w-4" />
                        View Resume
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={getAssetPath("/resume.html")}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          const win = window.open(getAssetPath("/resume.html"), "_blank")
                          if (win) {
                            setTimeout(() => {
                              win.print()
                            }, 1000)
                          }
                        }}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
