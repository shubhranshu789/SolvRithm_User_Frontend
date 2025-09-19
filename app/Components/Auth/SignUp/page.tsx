"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"

import { useRouter } from "next/navigation"

import { indiaStatesCities } from "./indiaStatesCities";

export default function page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setname] = useState("")


  const [phone, setphone] = useState("")
  const [pincode, setpincode] = useState("")
  const [city, setcity] = useState("")
  const [state, setstate] = useState("")


  const [selectedState, setSelectedState] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");

  const [uniRoll, setuniRoll] = useState("")
  const [member1, setmember1] = useState("")
  const [member2, setmember2] = useState("")
  const [member3, setmember3] = useState("")
  const [member4, setmember4] = useState("")






  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const router = useRouter()


  const gotoSignIn = () => {
    router.push("/Components/Auth/SignIn")
  }

  const chk = () => {
    console.log(name, uniRoll, member1, member2, member3, member4);

  }


  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setstate(selected);

    const stateData = indiaStatesCities.find(s => s.state === selected);
    setCities(stateData ? stateData.cities : []);
    setcity(""); // reset city when state changes
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setcity(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)


    // http://localhost:3000/Components/Auth/SignUp
    try {
      const response = await fetch(`https://solvrithm-user-backend.onrender.com/signup`, {
      // const response = await fetch(`http://localhost:5000/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name, uniRoll, member1, member2, member3, member4 , phone , pincode , city , state}),
      })

      const data = await response.json()
      console.log("Server response:", data)
      gotoSignIn()
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }


  return (


    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>
        <Card className="w-full shadow-lg border-border">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">


              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    className="pl-10 bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
                    required
                  />
                </div>
              </div>




              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="uniRoll" className="text-sm font-medium">
                  University Roll Number
                </Label>
                <div className="relative">
                  {/* <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /> */}
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="uniRoll"
                    type="uniRoll"
                    placeholder="Enter the uniRoll"
                    value={uniRoll}
                    onChange={(e) => setuniRoll(e.target.value)}
                    className="pl-10 bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
                    required
                  />
                </div>
              </div>


              {/* ----------------------------------------------------------------------------------------------------------- */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </Label>
                <div className="relative">
                  {/* <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /> */}
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="phone"
                    placeholder="Enter the phone number"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    className="pl-10 bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
                    required
                  />
                </div>
              </div>



              <div style={{ maxWidth: "400px", margin: "20px auto" }}>
                <label>
                  State:{" "}
                  <select value={state} onChange={handleStateChange}>
                    <option value="">Select State</option>
                    {indiaStatesCities.map((s) => (
                      <option key={s.state} value={s.state}>
                        {s.state}
                      </option>
                    ))}
                  </select>
                </label>

                <br /><br />

                <label>
                  City:{" "}
                  <select value={city} onChange={handleCityChange} disabled={!state}>
                    <option value="">Select City</option>
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>

                <br /><br />

                {/* <div>
                  <strong>Selected State:</strong> {state || "None"} <br />
                  <strong>Selected City:</strong> {city || "None"}
                </div> */}
              </div>



              <div className="space-y-2">
                <Label htmlFor="pincode" className="text-sm font-medium">
                  Pincode
                </Label>
                <div className="relative">
                  {/* <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /> */}
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="pincode"
                    type="pincode"
                    placeholder="Enter the pincode"
                    value={pincode}
                    onChange={(e) => setpincode(e.target.value)}
                    className="pl-10 bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
                    required
                  />
                </div>
              </div>




              {/* ----------------------------------------------------------------------------------------------------------- */}










              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name of Member 1
                </Label>
                <div className="relative">
                  {/* <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /> */}
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="name"
                    placeholder="Enter the name"
                    value={member1}
                    onChange={(e) => setmember1(e.target.value)}
                    className="pl-10 bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name of Member 2
                </Label>
                <div className="relative">
                  {/* <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /> */}
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="name"
                    placeholder="Enter the name"
                    value={member2}
                    onChange={(e) => setmember2(e.target.value)}
                    className="pl-10 bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
                  // required
                  />
                </div>
              </div>


              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name of Member 3
                </Label>
                <div className="relative">
                  {/* <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /> */}
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="name"
                    placeholder="Enter the name"
                    value={member3}
                    onChange={(e) => setmember3(e.target.value)}
                    className="pl-10 bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
                  // required
                  />
                </div>
              </div>


              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name of Member 4
                </Label>
                <div className="relative">
                  {/* <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /> */}
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="name"
                    placeholder="Enter the name"
                    value={member4}
                    onChange={(e) => setmember4(e.target.value)}
                    className="pl-10 bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
                  // required
                  />
                </div>
              </div>



              {/* <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded border-border text-primary focus:ring-ring" />
              <span className="text-muted-foreground">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:text-primary/80 font-medium transition-colors">
              Forgot password?
            </a>
          </div> */}
            </CardContent>

            <CardFooter style={{ marginTop: "20px" }} className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 transition-colors"
                disabled={isLoading}

              >
                {isLoading ? "Signing in..." : "Sign Up"}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                {"Don't have an account? "}
                <a onClick={() => { gotoSignIn() }} href="#" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Sign in
                </a>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  )
}
