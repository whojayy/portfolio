import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Tech Stack</h2>
            <p className="text-muted-foreground">Technologies I use to build data science solutions</p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>My Technical Arsenal</CardTitle>
              <CardDescription>
                The tools and technologies I leverage for data science and machine learning projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <img
                      src="/python-logo.png"
                      alt="Python"
                      className="w-6 h-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.onerror = null
                        target.src = "/abstract-tech-logo.png"
                      }}
                    />
                  </div>
                  <h3 className="font-medium">Python</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <img
                      src="/tensorflow-logo.png"
                      alt="TensorFlow"
                      className="w-6 h-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.onerror = null
                        target.src = "/abstract-tech-logo.png"
                      }}
                    />
                  </div>
                  <h3 className="font-medium">TensorFlow</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <img
                      src="/pytorch-logo.png"
                      alt="PyTorch"
                      className="w-6 h-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.onerror = null
                        target.src = "/abstract-tech-logo.png"
                      }}
                    />
                  </div>
                  <h3 className="font-medium">PyTorch</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <img
                      src="/scikit-learn-logo.png"
                      alt="Scikit-learn"
                      className="w-6 h-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.onerror = null
                        target.src = "/abstract-tech-logo.png"
                      }}
                    />
                  </div>
                  <h3 className="font-medium">Scikit-learn</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <img
                      src="/pandas-logo.png"
                      alt="Pandas"
                      className="w-6 h-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.onerror = null
                        target.src = "/abstract-tech-logo.png"
                      }}
                    />
                  </div>
                  <h3 className="font-medium">Pandas</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <img
                      src="/numpy-logo.png"
                      alt="NumPy"
                      className="w-6 h-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.onerror = null
                        target.src = "/abstract-tech-logo.png"
                      }}
                    />
                  </div>
                  <h3 className="font-medium">NumPy</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <img
                      src="/opencv-logo.png"
                      alt="OpenCV"
                      className="w-6 h-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.onerror = null
                        target.src = "/abstract-tech-logo.png"
                      }}
                    />
                  </div>
                  <h3 className="font-medium">OpenCV</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <img
                      src="/aws-logo.png"
                      alt="AWS"
                      className="w-6 h-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.onerror = null
                        target.src = "/abstract-tech-logo.png"
                      }}
                    />
                  </div>
                  <h3 className="font-medium">AWS</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <img
                      src="/powerbi-logo.png"
                      alt="Power BI"
                      className="w-6 h-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.onerror = null
                        target.src = "/abstract-tech-logo.png"
                      }}
                    />
                  </div>
                  <h3 className="font-medium">Power BI</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                      <path
                        fill="currentColor"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.6c5.738 0 10.4 4.662 10.4 10.4S17.738 22.4 12 22.4 1.6 17.738 1.6 12 6.262 1.6 12 1.6zm5.5 4.1h-11v2.2h4.4v8.8h2.2v-8.8h4.4V5.7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium">Tableau</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                      <path
                        fill="currentColor"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.6c5.738 0 10.4 4.662 10.4 10.4S17.738 22.4 12 22.4 1.6 17.738 1.6 12 6.262 1.6 12 1.6zm-1.2 14.4h2.4v-4.8h4.8v-2.4h-4.8V4h-2.4v4.8H4.8v2.4h4.8v4.8z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium">Flask</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <img
                      src="/docker-logo.png"
                      alt="Docker"
                      className="w-6 h-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.onerror = null
                        target.src = "/abstract-tech-logo.png"
                      }}
                    />
                  </div>
                  <h3 className="font-medium">Docker</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                      <path
                        fill="currentColor"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.6c5.738 0 10.4 4.662 10.4 10.4S17.738 22.4 12 22.4 1.6 17.738 1.6 12 6.262 1.6 12 1.6zm-1.5 14.4c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm1.5-3c.828 0 1.5-.672 1.5-1.5v-6c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v6c0 .828.672 1.5 1.5 1.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium">Streamlit</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                      <path
                        fill="currentColor"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.6c5.738 0 10.4 4.662 10.4 10.4S17.738 22.4 12 22.4 1.6 17.738 1.6 12 6.262 1.6 12 1.6zm-4.8 8.4c0 2.651 2.149 4.8 4.8 4.8s4.8-2.149 4.8-4.8-2.149-4.8-4.8-4.8-4.8 2.149-4.8 4.8z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium">React</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                      <path
                        fill="currentColor"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.6c5.738 0 10.4 4.662 10.4 10.4S17.738 22.4 12 22.4 1.6 17.738 1.6 12 6.262 1.6 12 1.6zm-6 10.4h12v-2.4H6v2.4z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium">Next.js</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                      <path
                        fill="currentColor"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.6c5.738 0 10.4 4.662 10.4 10.4S17.738 22.4 12 22.4 1.6 17.738 1.6 12 6.262 1.6 12 1.6zm-6 9.6h12v-2.4H6v2.4z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium">Tailwind CSS</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                      <path
                        fill="currentColor"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.6c5.738 0 10.4 4.662 10.4 10.4S17.738 22.4 12 22.4 1.6 17.738 1.6 12 6.262 1.6 12 1.6zm-4.8 6c0 1.325 1.075 2.4 2.4 2.4v2.4c-2.651 0-4.8-2.149-4.8-4.8h2.4zm4.8 0c1.325 0 2.4 1.075 2.4 2.4h2.4c0-2.651-2.149-4.8-4.8-4.8v2.4z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium">MLflow</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                      <path
                        fill="currentColor"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.6c5.738 0 10.4 4.662 10.4 10.4S17.738 22.4 12 22.4 1.6 17.738 1.6 12 6.262 1.6 12 1.6zm0 4.8c-3.092 0-5.6 2.508-5.6 5.6s2.508 5.6 5.6 5.6 5.6-2.508 5.6-5.6-2.508-5.6-5.6-5.6z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium">Airflow</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                      <path
                        fill="currentColor"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.6c5.738 0 10.4 4.662 10.4 10.4S17.738 22.4 12 22.4 1.6 17.738 1.6 12 6.262 1.6 12 1.6zm-2.4 4.8v9.6l7.2-4.8-7.2-4.8z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium">FastAPI</h3>
                </div>

                <div className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                      <path
                        fill="currentColor"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.6c5.738 0 10.4 4.662 10.4 10.4S17.738 22.4 12 22.4 1.6 17.738 1.6 12 6.262 1.6 12 1.6zm-4.8 4.8h9.6v2.4h-9.6V6.4zm0 4.8h9.6v2.4h-9.6v-2.4zm0 4.8h9.6v2.4h-9.6V16z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium">NLP</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
