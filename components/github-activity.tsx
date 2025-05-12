"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Github } from "lucide-react"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
}

export default function GitHubActivity() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This is a mock function to simulate fetching GitHub repositories
    // In a real application, you would fetch from the GitHub API
    const fetchRepos = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock data
        const mockRepos: Repository[] = [
          {
            id: 1,
            name: "ai-image-generator",
            description: "An AI-powered image generation app using DALL-E API",
            html_url: "https://github.com/johndoe/ai-image-generator",
            stargazers_count: 45,
            forks_count: 12,
            language: "TypeScript",
          },
          {
            id: 2,
            name: "e-commerce-platform",
            description: "Full-stack e-commerce solution with React and Node.js",
            html_url: "https://github.com/johndoe/e-commerce-platform",
            stargazers_count: 32,
            forks_count: 8,
            language: "JavaScript",
          },
          {
            id: 3,
            name: "blockchain-explorer",
            description: "A web application to explore blockchain transactions",
            html_url: "https://github.com/johndoe/blockchain-explorer",
            stargazers_count: 28,
            forks_count: 5,
            language: "TypeScript",
          },
          {
            id: 4,
            name: "task-management-app",
            description: "Collaborative task management with real-time updates",
            html_url: "https://github.com/johndoe/task-management-app",
            stargazers_count: 19,
            forks_count: 3,
            language: "JavaScript",
          },
        ]

        setRepos(mockRepos)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching repositories:", error)
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return (
    <section id="github" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Github className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">GitHub Activity</h2>
            </div>
            <p className="text-muted-foreground">My pinned repositories and recent contributions</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {loading
              ? // Loading skeletons
                Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i}>
                      <CardHeader className="pb-2">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2 mt-2" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-4 w-full mt-2" />
                        <Skeleton className="h-4 w-full mt-2" />
                        <div className="flex justify-between mt-4">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-4 w-16" />
                        </div>
                      </CardContent>
                    </Card>
                  ))
              : // Actual repositories
                repos.map((repo) => (
                  <Card key={repo.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {repo.name}
                        </a>
                      </CardTitle>
                      <CardDescription>{repo.language}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{repo.description}</p>
                      <div className="flex justify-between mt-4 text-sm">
                        <span>⭐ {repo.stargazers_count} stars</span>
                        <span>🍴 {repo.forks_count} forks</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}
