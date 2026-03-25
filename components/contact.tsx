import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-primary font-mono text-sm mb-4">{"What's Next?"}</p>
        <h2 className="text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
        <p className="text-muted-foreground leading-relaxed mb-10 text-pretty">
          {"I'm currently open to new opportunities and would love to hear from you. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!"}
        </p>
        
        <Button asChild size="lg" className="font-medium">
          <Link href="mailto:hello@yourname.com">
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </Link>
        </Button>

        <div className="mt-16 flex justify-center gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
