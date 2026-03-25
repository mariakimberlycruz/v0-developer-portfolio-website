"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Frontend Engineer",
    company: "Tech Company",
    url: "https://example.com",
    description:
      "Lead development of the core product interface, implementing new features and optimizing performance. Collaborate with cross-functional teams to deliver high-quality user experiences.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS"],
  },
  {
    period: "2021 — 2023",
    title: "Full Stack Developer",
    company: "Digital Agency",
    url: "https://example.com",
    description:
      "Built and maintained multiple client projects from concept to deployment. Worked closely with designers and project managers to deliver pixel-perfect implementations.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    period: "2019 — 2021",
    title: "Frontend Developer",
    company: "Startup Inc",
    url: "https://example.com",
    description:
      "Developed responsive web applications and contributed to the company's design system. Implemented A/B testing and analytics to improve user engagement.",
    technologies: ["JavaScript", "Vue.js", "SCSS", "Firebase"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Link
              key={index}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg p-6 transition-all hover:bg-secondary/50"
            >
              <div className="grid gap-4 lg:grid-cols-4">
                <div className="text-sm font-mono text-muted-foreground lg:col-span-1">
                  {exp.period}
                </div>
                <div className="lg:col-span-3 space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title} · {exp.company}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/resume.pdf"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
          >
            View Full Resume
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
