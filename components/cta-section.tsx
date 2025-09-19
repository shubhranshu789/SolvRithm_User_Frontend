"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-8 -left-8 text-primary/20 float-animation">
            <Sparkles size={40} />
          </div>
          <div className="absolute -top-6 -right-6 text-secondary/20 float-animation" style={{ animationDelay: "3s" }}>
            <Sparkles size={30} />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Success Journey?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto">
            Join thousands of users who have already discovered their rhythm to success. Start your transformation today
            with Solvrithm's AI-powered platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow text-lg px-10 py-6"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-10 py-6 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
