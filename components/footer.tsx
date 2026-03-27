import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Designed & Built by <span className="text-foreground">Kimberly Cruz</span>
        </p>
        <Link
          href="https://github.com/mariakimberlycruz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-4 w-4" />
          View Source
        </Link>
      </div>
    </footer>
  )
}
