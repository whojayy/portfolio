import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Certifications</h2>
            <p className="text-muted-foreground">Professional certifications and credentials</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">IBM Data Science Specialization</CardTitle>
                </div>
                <CardDescription>IBM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mt-2">
                  Comprehensive data science training covering statistical analysis, machine learning, and data
                  visualization.
                </p>
                <div className="mt-3 text-sm text-muted-foreground">
                  <p>Issued: February 2024</p>
                  <p>Credential ID: WAV5UGJLQC8A</p>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium mb-1">Skills:</p>
                  <p className="text-sm text-muted-foreground">
                    Data Visualization, GitHub, Data Science, Analytics, SQL, Jupyter, Data Analysis, Python
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Machine Learning with Python</CardTitle>
                </div>
                <CardDescription>IBM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mt-2">Advanced machine learning techniques and algorithms implementation using Python.</p>
                <div className="mt-3 text-sm text-muted-foreground">
                  <p>Issued: February 2024</p>
                  <p>Credential ID: SYMEN437DMM2</p>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium mb-1">Skills:</p>
                  <p className="text-sm text-muted-foreground">
                    Machine Learning, Python, Scikit-learn, Regression, Classification, Clustering, Neural Networks
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Databases and SQL for Data Science with Python</CardTitle>
                </div>
                <CardDescription>IBM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mt-2">
                  Database design, SQL query optimization, and data management for data science applications.
                </p>
                <div className="mt-3 text-sm text-muted-foreground">
                  <p>Issued: January 2024</p>
                  <p>Credential ID: GT2R8B3UL8DG</p>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium mb-1">Skills:</p>
                  <p className="text-sm text-muted-foreground">
                    SQL, Database Management, Python, Data Analysis, IBM Db2, SQLite
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Data Science Math Skills</CardTitle>
                </div>
                <CardDescription>Duke University | Coursera</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mt-2">
                  Essential mathematical foundations for data science including statistics, calculus, and linear
                  algebra.
                </p>
                <div className="mt-3 text-sm text-muted-foreground">
                  <p>Issued: December 2023</p>
                  <p>Credential ID: NJZESJZH4LQN</p>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium mb-1">Skills:</p>
                  <p className="text-sm text-muted-foreground">
                    Algebra, Graphs, Creative Problem Solving, Bayesian Statistics, Probability, Mathematics,
                    Probability Theory, Statistics, Linear Algebra
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Applied Data Science Capstone</CardTitle>
                </div>
                <CardDescription>IBM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mt-2">
                  Practical application of data science methodologies to solve real-world problems through a
                  comprehensive capstone project.
                </p>
                <div className="mt-3 text-sm text-muted-foreground">
                  <p>Issued: February 2024</p>
                  <p>Credential ID: XWFPCHAFQCG3</p>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium mb-1">Skills:</p>
                  <p className="text-sm text-muted-foreground">
                    Data Science, Machine Learning, Data Visualization, Methodology, Project Management, Python
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">The Complete 2023 Web Development Bootcamp</CardTitle>
                </div>
                <CardDescription>Udemy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mt-2">
                  Comprehensive web development training covering front-end and back-end technologies including HTML5,
                  CSS, JavaScript, React, Node.js, and databases.
                </p>
                <div className="mt-3 text-sm text-muted-foreground">
                  <p>Issued: December 2023</p>
                  <p>Credential ID: UC-b0ebfe21-c916-4535-8261-ca0131fe393c</p>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium mb-1">Skills:</p>
                  <p className="text-sm text-muted-foreground">
                    Bootstrap, PostgreSQL, Node.js, JavaScript, Express.js, CSS, React.js, SQL, HTML5, jQuery
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
