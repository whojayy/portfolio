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
                  <CardTitle>Junior Data Scientist</CardTitle>
                  <Badge variant="outline">Apr 2023 - Jul 2024</Badge>
                </div>
                <CardDescription className="text-base">TechVida Labs, Ahmedabad, India</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">ML Model Development & Deployment:</span> Led end-to-end machine
                    learning projects from data collection to production deployment on AWS SageMaker, implementing CI/CD
                    pipelines for automated model updates.
                  </li>
                  <li>
                    <span className="font-medium">MLOps Implementation:</span> Established MLOps practices including
                    model versioning, monitoring, and A/B testing frameworks that improved model reliability by 35% and
                    reduced deployment time by 60%.
                  </li>
                  <li>
                    <span className="font-medium">Agentic AI Development:</span> Architected intelligent AI agents using
                    LangChain and custom frameworks that could autonomously perform complex tasks and reasoning,
                    resulting in 40% efficiency improvements for client workflows.
                  </li>
                  <li>
                    <span className="font-medium">RAG Systems:</span> Developed production-grade Retrieval-Augmented
                    Generation systems with vector databases (Pinecone, Weaviate) and large language models, achieving
                    92% accuracy on domain-specific knowledge retrieval.
                  </li>
                  <li>
                    <span className="font-medium">Data Pipeline Optimization:</span> Designed and implemented scalable
                    data ingestion and processing pipelines using Airflow and AWS services, reducing data processing
                    time by 45% while ensuring data quality and validation.
                  </li>
                  <li>
                    <span className="font-medium">Cross-Functional Collaboration:</span> Worked closely with product
                    managers, software engineers, and domain experts to translate business requirements into technical
                    solutions and communicate complex ML concepts to stakeholders.
                  </li>
                  <li>
                    <span className="font-medium">Model Monitoring & Maintenance:</span> Implemented comprehensive
                    monitoring systems to detect model drift and performance degradation, ensuring continuous model
                    reliability in production environments.
                  </li>
                  <li>
                    <span className="font-medium">Technical Documentation:</span> Created detailed technical
                    documentation, model cards, and knowledge transfer materials that improved team collaboration and
                    onboarding efficiency by 25%.
                  </li>
                </ul>
                <div className="mt-4">
                  <p className="font-medium">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">AWS SageMaker</Badge>
                    <Badge variant="outline">PyTorch</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">MLflow</Badge>
                    <Badge variant="outline">Airflow</Badge>
                    <Badge variant="outline">LangChain</Badge>
                    <Badge variant="outline">Vector Databases</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Kubernetes</Badge>
                    <Badge variant="outline">CI/CD</Badge>
                    <Badge variant="outline">Streamlit</Badge>
                    <Badge variant="outline">FastAPI</Badge>
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
                    <span className="font-medium">Developed RESTful APIs:</span> Designed and deployed scalable
                    Flask-based APIs for data-driven applications, improving system efficiency.
                  </li>
                  <li>
                    <span className="font-medium">Web Scraping:</span> Built automated web scrapers using BeautifulSoup
                    and Selenium to extract real-time data for analysis.
                  </li>
                  <li>
                    <span className="font-medium">Data Analysis:</span> Performed extensive data cleaning and analysis
                    using Pandas, NumPy, Excel, Power BI, Tableau, SQL and SQL Server, leading to actionable business
                    insights.
                  </li>
                  <li>
                    <span className="font-medium">Team Collaboration:</span> Collaborated with cross-functional teams,
                    refining development workflows and reducing project delivery time by 10%.
                  </li>
                  <li>
                    <span className="font-medium">Visualization Dashboards:</span> Developed interactive dashboards in
                    Tableau to showcase key trends and predictive insights.
                  </li>
                  <li>
                    <span className="font-medium">Machine Learning Models:</span> Implemented machine learning pipelines
                    and ensemble predictive models using Scikit-learn, TensorFlow, Keras and PyTorch and Pickle to save
                    and load model to improve decision-making processes.
                  </li>
                </ul>
                <div className="mt-4">
                  <p className="font-medium">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">Flask</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">NumPy</Badge>
                    <Badge variant="outline">Power BI</Badge>
                    <Badge variant="outline">SQL</Badge>
                    <Badge variant="outline">SQL Server</Badge>
                    <Badge variant="outline">BeautifulSoup</Badge>
                    <Badge variant="outline">Selenium</Badge>
                    <Badge variant="outline">Scikit-learn</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">Keras</Badge>
                    <Badge variant="outline">PyTorch</Badge>
                    <Badge variant="outline">Machine Learning Pipelines</Badge>
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
