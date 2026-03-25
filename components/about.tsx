import { Badge } from "@/components/ui/badge"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "REST APIs",
  "Tailwind CSS",
  "Git",
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {"Hello! I'm a software developer with a passion for creating elegant solutions to complex problems. My journey into development started when I built my first website in college, and since then I've been hooked on building things that live on the internet."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"Fast-forward to today, and I've had the privilege of working at various startups, agencies, and large corporations. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"When I'm not at the computer, I'm usually reading, hiking, or exploring new technologies. I'm always interested in hearing about new projects, so feel free to reach out!"}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
