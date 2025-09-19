"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Zap, Brain, Users, Calendar, Award, ExternalLink } from "lucide-react"


import { useRouter } from "next/navigation"



// Floating neural connection component
const FloatingNeuron = ({ delay = 0, size = "small" }: { delay?: number; size?: "small" | "medium" | "large" }) => {
  const sizeClasses = {
    small: "w-2 h-2",
    medium: "w-3 h-3",
    large: "w-4 h-4",
  }





  return (
    <div
      className={`absolute ${sizeClasses[size]} bg-accent rounded-full neural-flow opacity-60`}
      style={{
        animationDelay: `${delay}s`,
        top: `${Math.random() * 80 + 10}%`,
        left: "-20px",
      }}
    />
  )
}

// Interactive company card component
const CompanyCard = ({
  name,
  prizes,
  description,
  color,
  index,
  pic,
}: {
  name: string
  prizes: { first: string; second: string; third: string }
  description: string
  color: string
  pic: string
  index: number
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer ${isHovered ? "pulse-glow" : ""
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`} />
      <CardContent className="relative p-6 space-y-4">
        <div className="flex items-center justify-between">
          {/* Left side: Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src={pic}
              alt={name}
              className="w-10 h-10 object-contain rounded-full shadow-md"
            />
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
          </div>

          {/* Right side: Badge */}
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            Partner
          </Badge>
        </div>


        <p className="text-muted-foreground text-sm">{description}</p>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-secondary/20 rounded-lg">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium">1st Prize</span>
            </div>
            <span className="font-bold text-primary">{prizes.first}</span>
          </div>

          <div className="flex items-center justify-between p-2 bg-secondary/10 rounded-lg">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium">2nd Prize</span>
            </div>
            <span className="font-semibold">{prizes.second}</span>
          </div>

          <div className="flex items-center justify-between p-2 bg-secondary/5 rounded-lg">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium">3rd Prize</span>
            </div>
            <span className="font-semibold">{prizes.third}</span>
          </div>
        </div>

        {/* {isHovered && (
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-4 transition-all duration-300 transform hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Learn More <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        )} */}
      </CardContent>
    </Card>
  )
}

// Countdown timer component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-card border border-border rounded-lg p-3 min-w-[60px]">
            <div className="text-2xl font-bold text-primary">{value.toString().padStart(2, "0")}</div>
          </div>
          <div className="text-xs text-muted-foreground mt-1 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  )
}

export default function SolvrithmLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const companies = [
    {
      name: "KIBOTIX",
      prizes: { first: "₹15,000", second: "₹10,000", third: "₹5,000" },
      description: "Leading robotics and automation solutions provider",
      color: "from-red-500 to-pink-500",
      pic: "11.jpg"
    },
    {
      name: "Appinfoedge",
      prizes: { first: "₹15,000", second: "₹10,000", third: "₹5,000" },
      description: "Innovative mobile and web application development",
      color: "from-blue-500 to-cyan-500",
      pic: "22.jpg"
    },
    {
      name: "30 Days Technologies",
      prizes: { first: "₹11,000", second: "₹5,100", third: "₹2,100" },
      description: "Rapid prototyping and technology consulting",
      color: "from-green-500 to-emerald-500",
      pic: "33.jpg"
    },
  ]


  const router = useRouter()


  const gotoSignUp = () => {
    router.push("/Components/Auth/SignUp")
  }

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Floating neural connections */}
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingNeuron key={i} delay={i * 0.5} size={i % 3 === 0 ? "large" : i % 2 === 0 ? "medium" : "small"} />
      ))}

      {/* Mouse follower effect */}
      <div
        className="fixed w-96 h-96 neural-bg rounded-full pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-15 h-15 rounded-full flex items-center justify-center ">
              {/* <Brain className="w-6 h-6 text-primary-foreground" /> */}
              <img
                style={{ borderRadius: "200px" }}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2015.14.03_6a8a5e43.jpg-eyPg52sjdDdnxuuYDmv5SYAa17rub3.jpeg"
                alt="SOLVRITHM Logo"
                className="w-full h-full object-contain "
              />
            </div>
            <div>
              <h1 style={{ color: "white" }} className="text-xl font-bold">SOLVRITHM</h1>
              <p className="text-sm text-muted-foreground">Your Rhythm to Success</p>
            </div>
          </div>

          <Button onClick={() => {gotoSignUp()}} style={{ backgroundColor: "#F59E0B" }} className="bg-primary hover:bg-primary/90 text-primary-foreground">Register Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}

          <div className="relative mx-auto w-full max-w-3xl mb-12">
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/40 transition-all duration-500">
              <img
                src="/KIET.JPG" // <-- replace with uploaded path
                alt="KIET MCA Banner"
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Floating glow effect behind */}
            <div className="absolute -inset-6 -z-10 animate-pulse bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30"></div>
          </div>


          <div className="relative flex flex-col items-center text-center space-y-8">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-text-shine">
                SOLVRITHM
              </span>
            </h1>

            {/* Logo Container */}
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Glowing rotating aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-3xl animate-spin-slow"></div>

              {/* Subtle pulsing ring */}
              <div className="absolute inset-4 rounded-full border-4 border-purple-400/40 animate-pulse"></div>

              {/* Main logo */}
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-19%20at%2015.14.03_6a8a5e43.jpg-eyPg52sjdDdnxuuYDmv5SYAa17rub3.jpeg"
                  alt="SOLVRITHM Logo"
                  className="w-48 h-48 object-contain relative z-10"
                />
              </div>
            </div>
          </div>




          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Real Problems, Real Solutions
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="secondary" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Open to All Students
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Flagship Event
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Innovation Challenge
            </Badge>
          </div>

          {/* Countdown */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold">Registration Closes In:</h3>
            <CountdownTimer />
          </div> */}

          <Button
            style={{ backgroundColor: "#F59E0B" }}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg pulse-glow"
            onClick={() => {gotoSignUp()}}
          >
            Join the Challenge
          </Button>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ color: "white" }} className="text-4xl font-bold mb-4">Our Partners</h2>
            <p style={{ color: "white" }} className="text-xl text-muted-foreground">
              Collaborating with industry leaders to bring you the best opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <CompanyCard key={company.name} {...company} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      {/* <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8 space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Event Details</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Eligibility
                  </h4>
                  <p className="text-muted-foreground">All Students pursuing A Degree Course</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Total Prizes
                  </h4>
                  <p className="text-muted-foreground">Over ₹80,000 in prizes across all categories</p>
                </div>
              </div>

              <div className="text-center pt-6">
                <h4 className="text-lg font-semibold mb-4">Core Committee Members</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="outline">Dr. Ankit Verma</Badge>
                  <Badge variant="outline">Dr. Vipin Kumar</Badge>
                  <Badge variant="outline">Ms. Mahima Tayal</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="relative z-10 py-12 px-8 border-t border-white/10 bg-gradient-to-b from-gray-900 via-black to-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

          {/* Core Committee */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">
              Core Committee Members
            </h3>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Dr. Ankit Verma
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Dr. Vipin Kumar
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Ms. Mahima Tayal
              </li>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="flex flex-col items-center justify-center">
            <div className="px-6 py-4 rounded-xl bg-gradient-to-tr from-orange-500 via-yellow-500 to-red-500 text-white font-semibold text-center shadow-lg animate-pulse">
              Eligibility: <br />
              <span className="text-lg">All Students pursuing a Degree Course</span>
            </div>
          </div>

          {/* QR Code */}
          {/* <div className="flex flex-col items-center justify-center space-y-2">
            <img
              src="/qr.png"
              alt="Scan for Registration"
              className="w-32 h-32 rounded-lg shadow-lg border border-white/20 hover:scale-105 transition"
            />
            <p className="text-gray-400 text-sm">📲 Scan for Registration</p>
          </div> */}
        </div>
      </footer>

    </div>
  )
}
