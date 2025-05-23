import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Experience</h2>
            <p className="text-muted-foreground">My professional journey and work history</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <CardTitle>Machine Learning Engineer</CardTitle>
                  <Badge variant="outline">Apr 2023 - Jul 2024</Badge>
                </div>
                <CardDescription className="text-base">TechVida Labs, Ahmedabad, India</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Integrated OLlama chatbots</span> per custom client needs, enhancing
                    conversational AI capabilities.
                  </li>
                  <li>
                    <span className="font-medium">Developed automated bidding software</span> for TechVida Labs, cutting
                    client acquisition time by 40% and securing 3 new clients.
                  </li>
                  <li>
                    <span className="font-medium">Built a real-time computer vision attendance system</span> using CVAT,
                    YOLOv8, DeepFace, and custom neural networks, achieving 92% accuracy and training on AWS SageMaker.
                  </li>
                  <li>
                    <span className="font-medium">
                      Authored documentation, architecture diagrams, API specs, model performance reports
                    </span>
                    , improving knowledge transfer and reducing onboarding time by 40%.
                  </li>
                  <li>
                    <span className="font-medium">Applied MLOps best practices</span> with AWS, MLflow, Docker, and
                    GitHub Actions, reducing deployment time by 30% and ensuring reproducibility.
                  </li>
                  <li>
                    <span className="font-medium">Mentored 2 data science interns</span> via bi-weekly code reviews and
                    sessions on advanced ML techniques and best practices.
                  </li>
                </ul>
                <div className="mt-4">
                  <p className="font-medium">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">AWS SageMaker</Badge>
                    <Badge variant="outline">PyTorch</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">MLflow</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">YOLOv8</Badge>
                    <Badge variant="outline">DeepFace</Badge>
                    <Badge variant="outline">CVAT</Badge>
                    <Badge variant="outline">GitHub Actions</Badge>
                    <Badge variant="outline">CI/CD</Badge>
                    <Badge variant="outline">OLlama</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <CardTitle>Data Science Intern</CardTitle>
                  <Badge variant="outline">Jan 2023 - Apr 2023</Badge>
                </div>
                <CardDescription className="text-base">TechVida Labs, Ahmedabad, India</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Developed Python-SQL ETL pipelines</span>, unifying multiple data
                    sources and cutting analysis prep time by 65%.
                  </li>
                  <li>
                    <span className="font-medium">Built Tableau dashboards</span> to visualize customer journeys,
                    enabling data-driven decisions for non-technical stakeholders.
                  </li>
                  <li>
                    <span className="font-medium">Presented data insights</span> in cross-functional meetings, enhancing
                    communication and business acumen.
                  </li>
                </ul>
                <div className="mt-4">
                  <p className="font-medium">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">SQL</Badge>
                    <Badge variant="outline">ETL</Badge>
                    <Badge variant="outline">Tableau</Badge>
                    <Badge variant="outline">Data Analysis</Badge>
                    <Badge variant="outline">Data Visualization</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <CardTitle>Data Science Student Representative</CardTitle>
                  <Badge variant="outline">2024 - Present</Badge>
                </div>
                <CardDescription className="text-base">Dalhousie Digital Innovation Society</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Student Advocacy:</span> Representing Data Science students, fostering
                    engagement with faculty, society and peers to enhance learning experiences.
                  </li>
                  <li>
                    <span className="font-medium">Workshop Development:</span> Proposing and organizing workshops to
                    help students develop essential technical and analytical skills in data science.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
