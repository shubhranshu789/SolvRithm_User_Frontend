"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Lightbulb, TrendingUp, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Advanced neural networks that adapt to your unique learning patterns and optimize your success journey.",
    delay: "0s",
  },
  {
    icon: Lightbulb,
    title: "Smart Insights",
    description: "Get personalized recommendations and actionable insights that drive meaningful progress.",
    delay: "0.2s",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track your growth with comprehensive analytics and real-time performance metrics.",
    delay: "0.4s",
  },
  {
    icon: Users,
    title: "Collaborative Network",
    description: "Connect with like-minded individuals and build a community that supports your success.",
    delay: "0.6s",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Unlock Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Potential</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover the features that make Solvrithm the ultimate platform for personal and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
              style={{ animationDelay: feature.delay }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit">
                  <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-xl font-semibold text-balance">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-pretty">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
