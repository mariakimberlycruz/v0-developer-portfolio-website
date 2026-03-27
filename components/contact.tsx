"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-card/50 relative overflow-hidden" ref={ref}>
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <p 
          className={`text-primary font-mono text-sm mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {"What's Next?"}
        </p>
        <h2 
          className={`text-4xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Get In Touch
        </h2>
        <p 
          className={`text-muted-foreground leading-relaxed mb-6 text-pretty transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {"I'm currently open to new opportunities and would love to hear from you. Whether you have a question, a project idea, or just want to connect, feel free to reach out!"}
        </p>

        <div 
          className={`flex flex-col items-center gap-3 mb-10 text-muted-foreground text-sm transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2 hover:text-primary transition-colors">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Bulakan, Bulacan, Philippines</span>
          </div>
          <div className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-4 w-4 text-primary" />
            <span>+63 955 910 9786</span>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Button asChild size="lg" className="font-medium group">
            <Link href="mailto:kimcruz019@gmail.com">
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              kimcruz019@gmail.com
            </Link>
          </Button>
        </div>

        <div 
          className={`mt-16 flex justify-center gap-6 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:kimcruz019@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
