"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"

// Project data
const projects = [
  {
    id: 1,
    title: "Soccer Player Detection and Match Analysis System",
    description:
      "A comprehensive soccer match analysis system using computer vision for player detection, team classification, and spatial analytics.",
    image: "/soccer-analysis-system.png",
    tags: ["Python", "YOLOv8", "Amazon SageMaker", "PyTorch", "OpenCV", "UMAP", "ByteTrack"],
    github: "https://github.com",
    features: [
      "Computer Vision Pipeline for player, ball, and referee detection",
      "Team Classification using SigLIP embeddings with 94% accuracy",
      "Pitch Mapping with homography-based view transformer",
      "Ball Trajectory Analysis using ByteTrack",
      "Model Deployment with SageMaker Endpoints",
    ],
  },
  {
    id: 2,
    title: "Predicting Chronic Conditions Using Machine Learning",
    description:
      "A machine learning system to predict chronic health conditions using the Canadian Community Health Survey dataset.",
    image: "/chronic-conditions-prediction.png",
    tags: ["Python", "Scikit-learn", "TensorFlow", "XGBoost", "Streamlit", "SMOTE", "Pandas"],
    github: "https://github.com",
    features: [
      "Data Processing Pipeline for health survey data",
      "Multi-Target Modeling for three chronic conditions",
      "Class Imbalance Handling with SMOTE techniques",
      "Threshold Optimization using modified Youden's J statistic",
      "Interactive Screening Tool deployed as Streamlit application",
    ],
  },
  {
    id: 3,
    title: "Hand Gesture Recognition with TensorFlow",
    description:
      "A real-time hand gesture recognition system using TensorFlow Object Detection API for interactive applications.",
    image: "/hand-gesture-recognition.png",
    tags: ["Python", "TensorFlow", "OpenCV", "TensorFlow.js", "TFLite", "Computer Vision"],
    github: "https://github.com",
    features: [
      "Custom Dataset Creation for four distinct hand gestures",
      "Transfer Learning with SSD MobileNet V2 FPNLite model",
      "Multi-Platform Deployment (web and mobile)",
      "Real-Time Detection System using OpenCV integration",
      "Model Optimization with 75% size reduction",
    ],
  },
]

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    if (expandedProject === id) {
      setExpandedProject(null)
    } else {
      setExpandedProject(id)
    }
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Projects</h2>
            <p className="text-muted-foreground">A showcase of my data science and machine learning projects</p>
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative aspect-video overflow-hidden md:order-last">
                    <Image
                      src={project.image || "/placeholder.svg?height=400&width=600&query=project"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/project-management-team.png"
                      }}
                    />
                  </div>
                  <div className="flex flex-col p-6">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pb-4 flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {expandedProject === project.id && (
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Key Features:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {project.features.map((feature, index) => (
                              <li key={index} className="text-sm text-muted-foreground">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="p-0 flex justify-between items-center">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/whojayy" target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => toggleExpand(project.id)}>
                        {expandedProject === project.id ? "Show Less" : "Show More"}
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
