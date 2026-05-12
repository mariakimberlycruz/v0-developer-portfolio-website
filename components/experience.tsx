"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    period: "June 23, 2025 — Present",
    title: "IT Mid Software Engineer 2",
    company: "Firefly Electric and Lighting Corporation (FELCO)",
    location: "Ermita Manila",
    description: [
      "Architected and optimized complex database systems for web and mobile applications.",
      "Led database normalization, indexing, and query optimization.",
      "Designed and maintained secure RESTful APIs for internal and third-party integrations.",
      "Managed Data Warehouse architecture, ETL pipelines, and reporting frameworks.",
      "Provided technical guidance and mentoring on database design and API security.",
      "Supported data-related concerns, ensuring 100% data integrity and accurate reporting.",
    ],
    technologies: ["ASP.Net MVC", "C#", "MS SQL", "RESTful APIs", "Data Warehouse", "ETL"],
  },
  {
    period: "May 2024 — June 16, 2025",
    title: "IT Supervisor - Software Development",
    company: "Sacred Heart Hospital of Malolos Inc.",
    location: "Malolos City",
    description: [
      "Led software development projects from planning to deployment.",
      "Managed and mentored developers, ensuring adherence to coding standards.",
      "Designed system architecture and specifications, implementing advanced SQL scripting and database solutions.",
      "Conducted user and technical training sessions and delivered post-implementation support.",
    ],
    technologies: ["ASP.Net MVC", "C#", "MS SQL", "Team Leadership", "System Architecture"],
  },
  {
    period: "January 2023 — May 2024",
    title: "Sr. Software Developer",
    company: "Sacred Heart Hospital of Malolos Inc.",
    location: "Malolos City",
    description: [
      "Developed and maintained enterprise healthcare applications.",
      "Implemented complex business logic and database solutions.",
      "Collaborated with stakeholders to gather requirements and deliver solutions.",
    ],
    technologies: ["ASP.Net MVC", "C#", "MS SQL", "jQuery", "Bootstrap"],
  },
  {
    period: "June 2021 — January 2023",
    title: "Software Developer",
    company: "Sacred Heart Hospital of Malolos Inc.",
    location: "Malolos City",
    description: [
      "Built and maintained healthcare management systems.",
      "Developed full-stack web applications using ASP.Net MVC.",
      "Worked on database design and query optimization.",
    ],
    technologies: ["ASP.Net MVC", "C#", "MS SQL", "JavaScript", "HTML/CSS"],
  },
]

export function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-card/50" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <div 
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group block rounded-lg p-6 transition-all duration-500 hover:bg-secondary/50 hover:shadow-lg hover:shadow-primary/5 border border-transparent hover:border-primary/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid gap-4 lg:grid-cols-4">
                <div className="text-sm font-mono text-muted-foreground lg:col-span-1">
                  <span className="relative">
                    {exp.period}
                    {index === 0 && (
                      <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                  </span>
                </div>
                <div className="lg:col-span-3 space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-primary">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.location}</p>
                  </div>
                  <ul className="space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2 group-hover:text-foreground/80 transition-colors">
                        <span className="text-primary mt-1.5 shrink-0">{">"}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-12 flex items-center gap-6 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button asChild variant="outline" className="font-medium group hover:border-primary">
            <Link href="/resume.pdf" target="_blank" download>
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Full Resume
            </Link>
          </Button>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
          >
            View Resume
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
