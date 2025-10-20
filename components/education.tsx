import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Education</h2>
            <p className="text-muted-foreground">My academic background and qualifications</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <CardTitle>Master of Digital Innovation - Data Science</CardTitle>
                  <Badge variant="outline">Sept 2024 - Dec 2025</Badge>
                </div>
                <CardDescription className="text-base">Dalhousie University, Halifax, NS</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Specializing in advanced data science techniques, machine learning, and artificial intelligence
                  applications.
                </p>
                <p>Focusing on developing innovative solutions for complex data problems across various domains.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
