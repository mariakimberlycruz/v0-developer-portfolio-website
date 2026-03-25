import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4">Hi, my name is</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-foreground">
          Your Name.
        </h1>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-muted-foreground text-balance">
          I build things for the web.
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl text-pretty">
          {"I'm a software developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using modern web technologies."}
        </p>
        <div className="mt-10 flex items-center gap-4 flex-wrap">
          <Button asChild size="lg" className="font-medium">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-medium">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <Link href="#about">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </Link>
      </div>
    </section>
  )
}
