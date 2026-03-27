"use client"

import Link from "next/link"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "IT Software Engineer."

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [mounted])

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 lg:px-8 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-4xl">
        <p 
          className={`text-primary font-mono text-sm mb-4 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Hi, my name is
        </p>
        <h1 
          className={`text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-foreground transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Ma. Kimberly Cruz.
        </h1>
        <h2 
          className={`mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-muted-foreground text-balance transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {typedText}
          <span className="animate-pulse text-primary">|</span>
        </h2>
        <p 
          className={`mt-6 text-lg leading-8 text-muted-foreground max-w-2xl text-pretty transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {"Experienced IT Software Engineer specializing in software development, database architecture, and enterprise system integration. Skilled in designing, developing, and optimizing applications with a focus on data integrity and seamless system integration."}
        </p>
        <div 
          className={`mt-10 flex items-center gap-4 flex-wrap transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button asChild size="lg" className="font-medium group">
            <Link href="#projects">
              View My Work
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-medium group hover:border-primary">
            <Link href="/resume.pdf" target="_blank" download>
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <Link href="#about" className="group">
          <ArrowDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      </div>
    </section>
  )
}
