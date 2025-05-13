import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Server, Terminal, BarChart, Globe, GitBranch, Workflow } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Skills</h2>
            <p className="text-muted-foreground">My technical expertise and competencies</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <CardTitle>Languages</CardTitle>
                </div>
                <CardDescription>Programming languages I work with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>SQL</Badge>
                  <Badge>NoSQL</Badge>
                  <Badge>R</Badge>
                  <Badge>MATLAB</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>HTML/CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <CardTitle>Machine Learning</CardTitle>
                </div>
                <CardDescription>ML frameworks and algorithms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Scikit-learn</Badge>
                  <Badge>TensorFlow</Badge>
                  <Badge>PyTorch</Badge>
                  <Badge>XGBoost</Badge>
                  <Badge>SMOTE</Badge>
                  <Badge>Random Forest</Badge>
                  <Badge>Logistic Regression</Badge>
                  <Badge>Neural Networks</Badge>
                  <Badge>Transformers</Badge>
                  <Badge>CNN</Badge>
                  <Badge>LSTM</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  <CardTitle>Computer Vision</CardTitle>
                </div>
                <CardDescription>Computer vision tools and techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>YOLOv8</Badge>
                  <Badge>OpenCV</Badge>
                  <Badge>TensorFlow Object Detection API</Badge>
                  <Badge>Transfer Learning</Badge>
                  <Badge>SigLIP</Badge>
                  <Badge>ByteTrack</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Workflow className="h-5 w-5 text-primary" />
                  <CardTitle>MLOps</CardTitle>
                </div>
                <CardDescription>Machine learning operations and best practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>CI/CD for ML</Badge>
                  <Badge>Model Versioning</Badge>
                  <Badge>Model Monitoring</Badge>
                  <Badge>Feature Stores</Badge>
                  <Badge>ML Pipelines</Badge>
                  <Badge>A/B Testing</Badge>
                  <Badge>Model Registry</Badge>
                  <Badge>MLflow</Badge>
                  <Badge>DVC</Badge>
                  <Badge>Kubeflow</Badge>
                  <Badge>Weights & Biases</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  <CardTitle>Cloud & Deployment</CardTitle>
                </div>
                <CardDescription>Cloud services and deployment tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Amazon SageMaker</Badge>
                  <Badge>AWS S3</Badge>
                  <Badge>SageMaker Endpoints</Badge>
                  <Badge>AWS Lambda</Badge>
                  <Badge>AWS EC2</Badge>
                  <Badge>AWS CloudFormation</Badge>
                  <Badge>Azure Machine Learning</Badge>
                  <Badge>Azure Machine Learning Endpoints</Badge>
                  <Badge>Azure Blob Storage</Badge>
                  <Badge>TensorFlow.js</Badge>
                  <Badge>TFLite</Badge>
                  <Badge>Model Optimization</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Model Serving</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <CardTitle>Data Processing</CardTitle>
                </div>
                <CardDescription>Data processing and analysis tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Pandas</Badge>
                  <Badge>NumPy</Badge>
                  <Badge>UMAP</Badge>
                  <Badge>Feature Engineering</Badge>
                  <Badge>Data Pipelines</Badge>
                  <Badge>ETL</Badge>
                  <Badge>SQL Server</Badge>
                  <Badge>Web Scraping</Badge>
                  <Badge>BeautifulSoup</Badge>
                  <Badge>Selenium</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Data Validation</Badge>
                  <Badge>Airflow</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <CardTitle>Full-Stack Development</CardTitle>
                </div>
                <CardDescription>Web development frameworks and tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>MERN Stack</Badge>
                  <Badge>Flask</Badge>
                  <Badge>Streamlit</Badge>
                  <Badge>RESTful APIs</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Bootstrap</Badge>
                  <Badge>jQuery</Badge>
                  <Badge>FastAPI</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <CardTitle>AI Applications</CardTitle>
                </div>
                <CardDescription>Advanced AI application development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Agentic AI</Badge>
                  <Badge>RAG Systems</Badge>
                  <Badge>LangChain</Badge>
                  <Badge>LlamaIndex</Badge>
                  <Badge>Vector Databases</Badge>
                  <Badge>Embeddings</Badge>
                  <Badge>Prompt Engineering</Badge>
                  <Badge>OpenAI API</Badge>
                  <Badge>Hugging Face</Badge>
                  <Badge>Fine-tuning</Badge>
                  <Badge>NLP</Badge>
                  <Badge>NLTK</Badge>
                  <Badge>spaCy</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-primary" />
                  <CardTitle>Best Practices</CardTitle>
                </div>
                <CardDescription>Software engineering and data science best practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Modular Coding</Badge>
                  <Badge>Version Control</Badge>
                  <Badge>Unit Testing</Badge>
                  <Badge>Documentation</Badge>
                  <Badge>Code Reviews</Badge>
                  <Badge>Data Versioning</Badge>
                  <Badge>Experiment Tracking</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Agile/Scrum</Badge>
                  <Badge>Clean Code</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  <CardTitle>Visualization & Tools</CardTitle>
                </div>
                <CardDescription>Visualization and development tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Matplotlib</Badge>
                  <Badge>Seaborn</Badge>
                  <Badge>Plotly</Badge>
                  <Badge>Streamlit</Badge>
                  <Badge>Power BI</Badge>
                  <Badge>Tableau</Badge>
                  <Badge>Git</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Jupyter</Badge>
                  <Badge>VS Code</Badge>
                  <Badge>Dash</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
