"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Eye } from 'lucide-react'
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
                {/* CHANGE #1: Replace the iframe with a clickable div */}
                <Link 
                  href={getAssetPath("/resume.html")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative aspect-[8.5/11] w-full max-w-[250px] overflow-hidden rounded-lg border cursor-pointer transition-transform hover:scale-105"
                >
                  {resumeError ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/20 p-4 text-center">
                      <p>Resume preview unavailable. Please click to see the full document.</p>
                    </div>
                  ) : (
                    <>
                      {/* CHANGE #2: Add a static preview instead of iframe */}
                      <div className="absolute inset-0 bg-white p-4 flex flex-col">
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-bold">Jay Mewada</h3>
                          <p className="text-xs text-muted-foreground">Data Scientist & ML Engineer</p>
                        </div>
                        <div className="w-full border-t border-gray-200 my-2"></div>
                        {/* Mock resume content */}
                        <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4 mb-3"></div>
                        <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-2/3 mb-3"></div>
                      </div>
                      {/* CHANGE #3: Add a hover overlay with a message */}
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white font-medium">Click to view full resume</p>
                      </div>
                    </>
                  )}
                </Link>
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
                        onClick={(e) => {
                          e.preventDefault(); // CHANGE #4: Prevent default link behavior
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