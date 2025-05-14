"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Github, FileText } from "lucide-react"
import { getAssetPath } from "@/lib/asset-path"

// Project data with support for both images and videos
const projects = [
  {
    id: 1,
    title: "Soccer Player Detection and Match Analysis System",
    description:
      "A comprehensive soccer match analysis system using computer vision for player detection, team classification, and spatial analytics.",
    media: [
      { path: "/soccer-analysis-system.png", type: "image" },
      { path: "/project-management-team.png", type: "image" },
      { path: "/ai-image-generator-app.png", type: "image" },
    ],
    tags: ["Python", "YOLOv8", "Amazon SageMaker", "PyTorch", "OpenCV", "UMAP", "ByteTrack"],
    github: "https://github.com",
    readme: "https://github.com/readme",
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
    media: [
      { path: "/chronic-conditions-prediction.png", type: "image" },
      { path: "/input_vid.gif", type: "image" },
      { path: "/input_vid.mp4", type: "video" },
    ],
    tags: ["Python", "Scikit-learn", "TensorFlow", "XGBoost", "Streamlit", "SMOTE", "Pandas"],
    github: "https://github.com",
    readme: "https://github.com/readme",
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
    media: [
      { path: "/hand-gesture-recognition.png", type: "image" },
      { path: "/gesture-demo.mp4", type: "video" },
      { path: "/abstract-tech-logo.png", type: "image" },
    ],
    tags: ["Python", "TensorFlow", "OpenCV", "TensorFlow.js", "TFLite", "Computer Vision"],
    github: "https://github.com",
    readme: "https://github.com/readme",
    features: [
      "Custom Dataset Creation for four distinct hand gestures",
      "Transfer Learning with SSD MobileNet V2 FPNLite model",
      "Multi-Platform Deployment (web and mobile)",
      "Real-Time Detection System using OpenCV integration",
      "Model Optimization with 75% size reduction",
    ],
  },
  {
    id: 4,
    title: "Intelligent Document Processing System",
    description:
      "An end-to-end document processing system that extracts, classifies, and analyzes information from various document types using deep learning.",
    media: [
      { path: "/project-management-team.png", type: "image" },
      { path: "/document-processing.mp4", type: "video" },
      { path: "/blockchain-explorer-interface.png", type: "image" },
    ],
    tags: ["Python", "PyTorch", "Transformers", "OCR", "NLP", "FastAPI", "React"],
    github: "https://github.com",
    readme: "https://github.com/readme",
    features: [
      "Document Classification with 98% accuracy across 15 document types",
      "Information Extraction using custom-trained BERT models",
      "Table Detection and Extraction with specialized CV models",
      "Automated Data Validation and Error Correction",
      "Interactive Dashboard for document management and analytics",
    ],
  },
  {
    id: 5,
    title: "Personalized Recommendation Engine",
    description:
      "A hybrid recommendation system combining collaborative filtering and content-based approaches for e-commerce product recommendations.",
    media: [
      { path: "/overview-sample.gif", type: "image" },
      { path: "/summary-sample.gif", type: "image" },
      { path: "/details-sample.gif", type: "image" },
    ],
    tags: ["Python", "TensorFlow", "AWS", "Neo4j", "Redis", "FastAPI", "A/B Testing"],
    github: "https://github.com",
    readme: "https://github.com/readme",
    features: [
      "Hybrid Recommendation Model combining collaborative and content-based filtering",
      "Real-time Personalization using user behavior and context",
      "Graph-based Product Relationships using Neo4j",
      "Scalable Architecture handling 10,000+ requests per second",
      "A/B Testing Framework for continuous model improvement",
    ],
  },
  {
    id: 6,
    title: "Conversational AI Assistant for Healthcare",
    description:
      "A specialized healthcare assistant that provides medical information, symptom assessment, and medication reminders using advanced NLP techniques.",
    media: [
      { path: "/ai-image-generator-app.png", type: "image" },
      { path: "/healthcare-assistant.mp4", type: "video" },
      { path: "/project-management-team.png", type: "image" },
    ],
    tags: ["Python", "LangChain", "RAG", "Vector Database", "FastAPI", "React Native", "AWS"],
    github: "https://github.com",
    readme: "https://github.com/readme",
    features: [
      "Medical Knowledge Base with verified healthcare information",
      "Symptom Assessment using structured medical reasoning",
      "Medication Tracking and Reminder System",
      "HIPAA-Compliant Data Handling and Privacy Controls",
      "Multi-Platform Support (web, iOS, Android)",
    ],
  },
]

export default function Projects() {
  // State to track the current media item for each project
  const [currentMediaIndex, setCurrentMediaIndex] = useState<Record<number, number>>({})

  // Function to navigate to the next media item for a specific project
  const nextMedia = (projectId: number, totalMedia: number) => {
    setCurrentMediaIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalMedia,
    }))
  }

  // Function to navigate to the previous media item for a specific project
  const prevMedia = (projectId: number, totalMedia: number) => {
    setCurrentMediaIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalMedia) % totalMedia,
    }))
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
                    {/* Media carousel */}
                    <div className="relative w-full h-full">
                      {project.media[currentMediaIndex[project.id] || 0].type === "video" ? (
                        <video
                          src={project.media[currentMediaIndex[project.id] || 0].path}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
                          controls
                          autoPlay
                          muted
                          loop
                          onError={(e) => {
                            const target = e.target as HTMLVideoElement
                            console.error("Video failed to load:", target.src)
                          }}
                        />
                      ) : (
                        <img
                          src={project.media[currentMediaIndex[project.id] || 0].path}
                          alt={`${project.title} - Image ${(currentMediaIndex[project.id] || 0) + 1}`}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.onerror = null
                            target.src = "/placeholder.jpg"
                          }}
                        />
                      )}

                      {/* Navigation buttons */}
                      {project.media.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              prevMedia(project.id, project.media.length)
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
                            aria-label="Previous media"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              nextMedia(project.id, project.media.length)
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
                            aria-label="Next media"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>

                          {/* Media indicators */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {project.media.map((item, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.preventDefault()
                                  setCurrentMediaIndex((prev) => ({
                                    ...prev,
                                    [project.id]: index,
                                  }))
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  (currentMediaIndex[project.id] || 0) === index ? "bg-white scale-125" : "bg-white/50"
                                }`}
                                aria-label={`Go to media ${index + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
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
                    </CardContent>
                    <CardFooter className="p-0 flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                        <Button variant="default" size="sm" asChild>
                          <Link href={project.readme} target="_blank">
                            <FileText className="mr-2 h-4 w-4" />
                            View README
                          </Link>
                        </Button>
                      </div>
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