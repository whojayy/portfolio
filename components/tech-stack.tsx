import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAssetPath } from "@/lib/asset-path"

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
                {/* Python */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Python</h3>
                </div>

                {/* TensorFlow */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">TensorFlow</h3>
                </div>

                {/* PyTorch */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">PyTorch</h3>
                </div>

                {/* Scikit-learn */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Scikit-learn</h3>
                </div>

                {/* Pandas */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Pandas</h3>
                </div>

                {/* NumPy */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">NumPy</h3>
                </div>

                {/* OpenCV */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">OpenCV</h3>
                </div>

                {/* AWS */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">AWS</h3>
                </div>

                {/* Power BI */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Power BI</h3>
                </div>

                {/* Tableau */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Tableau</h3>
                </div>

                {/* Flask */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Flask</h3>
                </div>

                {/* Docker */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Docker</h3>
                </div>

                {/* Streamlit */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Streamlit</h3>
                </div>

                {/* React */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">React</h3>
                </div>

                {/* Next.js */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Next.js</h3>
                </div>

                {/* Node.js */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Node.js</h3>
                </div>

                {/* Tailwind CSS */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Tailwind CSS</h3>
                </div>

                {/* MLflow */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">MLflow</h3>
                </div>

                {/* Airflow */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Airflow</h3>
                </div>

                {/* Azure */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">Azure</h3>
                </div>

                {/* SQL */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">SQL</h3>
                </div>

                {/* MongoDB */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">MongoDB</h3>
                </div>

                {/* FastAPI */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
                  <h3 className="font-medium">FastAPI</h3>
                </div>

                {/* NLP */}
                <div className="bg-card border rounded-lg p-6 flex items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-primary/50">
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