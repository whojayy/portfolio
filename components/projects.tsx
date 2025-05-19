"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Github, FileText } from "lucide-react"
import { getAssetPath } from "@/lib/asset-path"

// Project data
const projects = [
  {
    id: 1,
    title: "Multimodal Emotion Analyzer on Live Video, Audio and Text",
    description:
      "A comprehensive multimodal emotion analysis system that processes video, audio, and text inputs to classify emotions with high accuracy.",
    images: ["/1_3.png", "/1_2.png", "/1_1.png"],
    tags: ["PyTorch", "TensorFlow", "3D ResNet", "BERT", "CNN", "Next.js", "TypeScript", "AWS SageMaker"],
    github: "https://github.com/whojayy/multimodal-emotion-analyzer-from-Live-Video-Audio-and-Subtitles",
    readme: "https://github.com/whojayy/multimodal-emotion-analyzer-from-Live-Video-Audio-and-Subtitles/blob/main/README.md",
    features: [
      "Built a multimodal deep learning model combining 3D ResNet (video), BERT (text), and CNN (audio), achieving 85%+ accuracy on 7-label emotion classification using the 10GB+ MELD dataset.",
      "Developed a SaaS platform with Next.js and TypeScript, including secure API key management and usage quota tracking for enterprise clients.",
      "Designed a video processing pipeline with AWS S3 and SageMaker, creating scalable endpoints and reducing latency by 40%.",
      "Created a responsive Tailwind CSS dashboard showing real-time emotion analysis with confidence scores and utterance-level insights.",
    ],
  },
  {
    id: 2,
    title: "Hybrid YOLOV8 TensorFlow Realtime Target Detector",
    description:
      "A real-time object detection system comparing YOLOv8 and TensorFlow implementations for high-performance gesture recognition.",
    images: ["/3_1.gif", "/3_2.png", "/3_3.png"],
    tags: ["YOLOv8", "TensorFlow", "OpenCV", "CVAT", "Docker", "MobileNetV2"],
    github: "https://github.com/whojayy/hybrid-yolo-tf-realtime-target-detector",
    readme: "https://github.com/whojayy/hybrid-yolo-tf-realtime-target-detector/blob/main/README.md",
    features: [
      "Developed a 4-class real-time object detection system with 95% mAP@0.5 and 20–30 FPS performance.",
      "Compared a custom TensorFlow/Keras (MobileNetV2) model with a fine-tuned YOLOv8 version.",
      "Deployed Dockerized CVAT for annotating 200 balanced images across gesture classes.",
      "Created scripts for annotation format conversion (XML, TFRecord, YOLO) to support diverse training pipelines.",
    ],
  },
  {
    id: 3,
    title: "PCC: Predicting Chronic Conditions Using Machine Learning",
    description:
      "A risk assessment tool for predicting chronic health conditions using machine learning models trained on the Canadian Community Health Survey dataset.",
    images: ["/2_1.png", "/2_1.jpg", "/2_3.jpg"],
    tags: ["Scikit-learn", "Deep Neural Networks", "SMOTE", "Streamlit", "Statistical Analysis", "XGBoost"],
    github: "https://github.com/whojayy/PCC-Predicting-Chronic-Conditions",
    readme: "https://github.com/whojayy/PCC-Predicting-Chronic-Conditions/blob/main/README.md",
    features: [
      "Built a risk assessment tool for hypertension, diabetes, and cardiovascular disease using the Canadian Community Health Survey (100K+ rows, 650+ features).",
      "Implemented ML pipelines (Logistic Regression, XGBoost, DNNs) optimized for recall using Youden's J statistic, achieving 95%+ recall.",
      "Reduced dimensionality from 650+ to 32 features via Chi-square and bivariate analysis.",
      "Deployed an interactive Streamlit app for real-time risk predictions and visual health indicators.",
    ],
  },
  {
    id: 4,
    title: "Gen AI Llama3.1 VectorDB Bidding Software",
    description:
      "An end-to-end AI tool that automates LinkedIn job scraping, tracking, and personalized cold email generation for consultants using RAG and LLMs.",
    images: ["/4_3.png", "/4_2.png", "/4_1.png"],
    tags: ["RAG", "Llama 3.1", "ChromaDB", "LangChain", "BeautifulSoup4", "Tkinter", "Groq API"],
    github: "https://github.com/whojayy/Gen_AI_Llama3.1_VectorDB_Bidding_Software",
    readme: "https://github.com/whojayy/Gen_AI_Llama3.1_VectorDB_Bidding_Software/blob/main/README.md",
    features: [
      "Developed an end to end AI tool to automate LinkedIn job scraping, tracking, and personalized cold email generation for consultants.",
      "Integrated ChromaDB to store and query team portfolios based on semantic similarity, enabling precise matching job matching via vector search.",
      "Leveraged Llama 3.1 (8B) via Groq API and ChromaDB to extract job insights and match team portfolios using semantic search.",
      "Built a multithreaded, Tkinter GUI without UI freezing and CLI for responsive job tracking and email generation.",
    ],
  },
  {
    id: 5,
    title: "Bank Loan Data Analysis",
    description:
      "A comprehensive analysis of U.S. bank loan data for 2021 using SQL queries and Tableau visualizations to extract insights on lending patterns and risk factors.",
    images: ["/5_1.gif", "/5_2.gif", "/5_3.gif"],
    tags: ["MySQL", "Tableau", "Data Visualization", "Financial Analysis", "SQL", "KPI Dashboard"],
    github: "https://github.com/whojayy/bank-loan-data-analysis",
    readme: "https://github.com/whojayy/bank-loan-data-analysis/blob/main/README.md",
    features: [
      "Conducted comprehensive analysis of U.S. bank loan data for 2021 using SQL queries to extract, transform, and analyze lending patterns and risk factors.",
      "Designed an interactive Tableau visualization report with three interconnected dashboards (Summary, Overview, Details) featuring dynamic filters and drill-down capabilities.",
      "Implemented key performance indicators including Total Funded Amount, Debt-to-Income Ratio, and Month-over-Month growth rates with interactive filtering.",
      "Created geospatial visualizations of loan distribution across U.S. states, alongside detailed breakdowns by loan purpose, term, verification status, and borrower characteristics.",
    ],
  },
  {
    id: 6,
    title: "Brain Tumor Detection Web Application",
    description:
      "A Flask-based web application for detecting and classifying brain tumors from MRI scans using a deep learning model with VGG16 architecture.",
    images: ["/6_1.png", "/6_2.png", "/6_3.png"],
    tags: ["Python", "Flask", "Deep Learning", "VGG16", "Computer Vision", "Medical Imaging", "CNN"],
    github: "https://github.com/whojayy/tummor_detection",
    readme: "https://github.com/whojayy/tummor_detection/blob/main/README.md",
    features: [
      "Developed a multi-class classification model using VGG16 architecture to detect and classify brain tumors with 93.2% accuracy.",
      "Built a responsive Flask web application with a user-friendly interface for uploading and analyzing MRI scans.",
      "Implemented detailed analysis features providing confidence scores and probability distribution for each tumor class (Glioma, Meningioma, Pituitary).",
      "Created comprehensive model performance dashboards and evaluation metrics including precision, recall, and F1-scores for each tumor type.",
      "Designed the system to assist medical professionals in early detection and classification of brain tumors as a supportive diagnostic tool.",
    ],
  },
]

export default function Projects() {
  // State to track the current image for each project
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({})

  // Function to navigate to the next image for a specific project
  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }))
  }

  // Function to navigate to the previous image for a specific project
  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
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
                    {/* Image carousel */}
                    <div className="relative w-full h-full">
                      <img
                        src={getAssetPath(project.images[currentImageIndex[project.id] || 0]) || "/placeholder.jpg"}
                        alt={`${project.title} - Image ${(currentImageIndex[project.id] || 0) + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.onerror = null
                          target.src = getAssetPath("/placeholder.jpg")
                        }}
                      />

                      {/* Navigation buttons */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              prevImage(project.id, project.images.length)
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              nextImage(project.id, project.images.length)
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
                            aria-label="Next image"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>

                          {/* Image indicators */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {project.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.preventDefault()
                                  setCurrentImageIndex((prev) => ({
                                    ...prev,
                                    [project.id]: index,
                                  }))
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  (currentImageIndex[project.id] || 0) === index ? "bg-white scale-125" : "bg-white/50"
                                }`}
                                aria-label={`Go to image ${index + 1}`}
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
