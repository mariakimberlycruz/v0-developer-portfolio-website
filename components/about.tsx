"use client"

import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skillCategories = [
  {
    title: "Software & Web Development",
    skills: ["ASP.Net MVC", "C#", "Python", "PHP", "Java", "Kotlin", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "WordPress"],
  },
  {
    title: "Databases & Data Management",
    skills: ["MS SQL", "MySQL", "Data Warehousing", "Data Modeling", "Query Optimization", "Database Architecture", "ETL"],
  },
  {
    title: "Hardware & Electronics",
    skills: ["Circuit Board Building", "Electronic Wiring", "Sensor Building", "Arduino IDE", "EMU8086"],
  },
  {
    title: "Productivity Tools",
    skills: ["Microsoft Office", "Google Workspace"],
  },
]

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24 px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
        >
          <h2 className="text-2xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div
            className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-muted-foreground leading-relaxed">
              {"I'm an experienced IT Software Engineer with a Bachelor of Science in Computer Engineering from Dr. Yanga's College, Inc. (2015-2020). I specialize in software development, database architecture, and enterprise system integration."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"Throughout my career, I've had the privilege of working at Sacred Heart Hospital of Malolos Inc. as an IT Supervisor and Sr. Software Developer, and currently at Firefly Electric and Lighting Corporation (FELCO) as an IT Software Engineer 2. I'm skilled in designing, developing, and optimizing applications with a focus on data integrity and seamless system integration."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"I'm committed to continuous learning and delivering impactful technical solutions. Whether it's architecting complex database systems, leading development teams, or building full-stack applications, I bring dedication and expertise to every project."}
            </p>
          </div>

          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h3 className="text-lg font-semibold text-foreground">Education</h3>
            <div className="space-y-2 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors">
              <p className="text-sm font-medium text-foreground">BS Computer Engineering</p>
              <p className="text-sm text-muted-foreground">{"Dr. Yanga's College, Inc."}</p>
              <p className="text-xs text-muted-foreground">2015 - 2020</p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <h3
            className={`text-xl font-semibold text-foreground transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Skills & Expertise
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`space-y-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${400 + categoryIndex * 100}ms` }}
              >
                <h4 className="text-sm font-medium text-primary">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 cursor-default"
                      style={{
                        animationDelay: `${skillIndex * 50}ms`,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
