"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Zap, Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural Network Animation */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full neural-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary rounded-full neural-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full neural-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-secondary rounded-full neural-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(8, 145, 178)" />
              <stop offset="100%" stopColor="rgb(234, 88, 12)" />
            </linearGradient>
          </defs>
          <line
            x1="25%"
            y1="25%"
            x2="66%"
            y2="33%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="neural-pulse"
          />
          <line
            x1="33%"
            y1="33%"
            x2="33%"
            y2="66%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="neural-pulse"
            style={{ animationDelay: "1s" }}
          />
          <line
            x1="33%"
            y1="66%"
            x2="75%"
            y2="75%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="neural-pulse"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Floating Icons */}
        <div className="absolute -top-20 -left-20 text-primary/30 float-animation">
          <Brain size={60} />
        </div>
        <div className="absolute -top-16 -right-16 text-secondary/30 float-animation" style={{ animationDelay: "2s" }}>
          <Zap size={50} />
        </div>
        <div className="absolute -bottom-16 left-10 text-primary/30 float-animation" style={{ animationDelay: "4s" }}>
          <Target size={40} />
        </div>

        {/* Main Content */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Solvrithm</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
          Your Rhythm to Success
        </p>

        <p className="text-lg text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto">
          Harness the power of AI-driven solutions to unlock your potential and achieve unprecedented success. Join the
          neural revolution that's transforming how we think, learn, and grow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow text-lg px-8 py-6"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
