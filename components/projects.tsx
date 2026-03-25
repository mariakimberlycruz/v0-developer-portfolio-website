import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Folder } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, payment processing, and inventory management. Built with a focus on performance and user experience.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces. Features intuitive UI and powerful filtering.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/projects/taskapp.png",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using OpenAI's GPT models.",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/projects/aicontent.png",
  },
]

const otherProjects = [
  {
    title: "Weather Dashboard",
    description: "A sleek weather dashboard with location-based forecasts and interactive maps.",
    technologies: ["React", "Weather API", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers with dark mode support.",
    technologies: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with end-to-end encryption and file sharing.",
    technologies: ["React", "Firebase", "WebRTC"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Markdown Editor",
    description: "A minimalist markdown editor with live preview and export functionality.",
    technologies: ["TypeScript", "React", "CodeMirror"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "URL Shortener",
    description: "A URL shortening service with analytics and custom link management.",
    technologies: ["Node.js", "Redis", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Recipe Finder",
    description: "A recipe search app with filters for dietary restrictions and ingredients.",
    technologies: ["Vue.js", "Spoonacular API", "Vuex"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Featured Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-xl font-bold text-foreground">Other Noteworthy Projects</h3>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border hover:border-primary/50 transition-all group"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Folder className="h-6 w-6 text-primary" />
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-base text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
