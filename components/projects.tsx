import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Folder } from "lucide-react"

const felcoProjects = [
  {
    title: "Performance Dashboard",
    description: "Backend development for performance analytics dashboard, providing real-time insights and KPI tracking.",
    technologies: ["Python", "MS SQL"],
  },
  {
    title: "Sales and Return System",
    description: "Backend system for managing sales transactions and product returns with data integrity.",
    technologies: ["Python", "MS SQL"],
  },
  {
    title: "Expense Revamp",
    description: "Complete backend overhaul of the expense management system for improved efficiency.",
    technologies: ["Python", "MS SQL"],
  },
  {
    title: "Product Carousel",
    description: "Backend implementation for dynamic product display and catalog management.",
    technologies: ["Python", "MS SQL"],
  },
  {
    title: "Performance Dashboard Phase 2",
    description: "Extended features and optimizations for the performance analytics platform.",
    technologies: ["Python", "MS SQL"],
  },
  {
    title: "Main Sync Revamp",
    description: "Backend system for synchronizing data across multiple platforms and databases.",
    technologies: ["Python", "MS SQL"],
  },
]

const hospitalProjects = [
  {
    title: "Room Management System",
    description: "Web-based system for hospital room allocation, tracking, and management.",
    technologies: ["ASP.Net MVC", "C#", "MS SQL"],
  },
  {
    title: "Queuing System",
    description: "Patient queuing and management system for improved hospital workflow.",
    technologies: ["ASP.Net MVC", "C#", "MS SQL"],
  },
  {
    title: "Sacred Heart Website Revamp",
    description: "Complete redesign and development of the hospital's official website.",
    technologies: ["ASP.Net MVC", "C#", "Bootstrap"],
  },
  {
    title: "Document Management System",
    description: "Digital document storage, retrieval, and management for hospital records.",
    technologies: ["ASP.Net MVC", "C#", "MS SQL"],
  },
  {
    title: "IT Ticketing System",
    description: "Internal ticketing system for IT support requests and issue tracking.",
    technologies: ["ASP.Net MVC", "C#", "MS SQL"],
  },
  {
    title: "Clinical System",
    description: "Comprehensive clinical management system for patient care and records.",
    technologies: ["ASP.Net MVC", "C#", "MS SQL"],
  },
  {
    title: "Billing Portal",
    description: "Patient billing and payment management portal with reporting features.",
    technologies: ["ASP.Net MVC", "C#", "MS SQL"],
  },
  {
    title: "One Login",
    description: "Single sign-on solution for unified access across hospital systems.",
    technologies: ["ASP.Net MVC", "C#", "Authentication"],
  },
  {
    title: "Administrator Access",
    description: "Role-based access control system for hospital administration.",
    technologies: ["ASP.Net MVC", "C#", "MS SQL"],
  },
  {
    title: "HR E-Learning",
    description: "E-learning platform for hospital staff training and development.",
    technologies: ["ASP.Net MVC", "C#", "MS SQL"],
  },
  {
    title: "Central Ticketing",
    description: "Centralized ticketing system for hospital-wide issue management.",
    technologies: ["ASP.Net MVC", "C#", "MS SQL"],
  },
  {
    title: "ER Decking System",
    description: "Emergency room patient decking and management application.",
    technologies: ["C# Windows Forms", "MS SQL"],
  },
]

const jotformProjects = [
  {
    title: "AR Approval",
    description: "Automated accounts receivable approval workflow.",
    technologies: ["JotForm", "Workflow Automation"],
  },
  {
    title: "HMO Approval",
    description: "HMO request and approval management system.",
    technologies: ["JotForm", "Workflow Automation"],
  },
  {
    title: "LOA Approval",
    description: "Letter of Authorization approval workflow system.",
    technologies: ["JotForm", "Workflow Automation"],
  },
]

const academicProjects = [
  {
    title: "COMRAD Robotic Dog Companion",
    description: "Capstone project - A robotic dog companion with sensors and interactive features.",
    technologies: ["Arduino", "Sensors", "Electronics"],
  },
  {
    title: "Electronic Cafeteria",
    description: "Point-of-sale and inventory management system for cafeteria operations.",
    technologies: ["VB Forms", "Database"],
  },
  {
    title: "Plantita Halamanan",
    description: "E-commerce website for plant selling and gardening supplies.",
    technologies: ["WordPress", "E-commerce"],
  },
  {
    title: "Payroll System (OJT)",
    description: "Payroll management system developed during internship at Chooseyourshoes Ph Inc.",
    technologies: ["C# Windows Forms", "MS SQL"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Accomplished Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* FELCO Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="text-primary border-primary">FELCO</Badge>
            <h3 className="text-lg font-semibold text-foreground">Firefly Electric and Lighting Corporation</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {felcoProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all group"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="h-5 w-5 text-primary" />
                    <Badge variant="secondary" className="text-xs">Backend Developer</Badge>
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
                      <span key={tech} className="text-xs font-mono text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hospital Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="text-primary border-primary">SHHMI</Badge>
            <h3 className="text-lg font-semibold text-foreground">Sacred Heart Hospital of Malolos Inc.</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hospitalProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border hover:border-primary/50 transition-all group"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="h-5 w-5 text-primary" />
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
                      <span key={tech} className="text-xs font-mono text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* JotForm Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="text-primary border-primary">Automation</Badge>
            <h3 className="text-lg font-semibold text-foreground">JotForm Workflow Automations</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {jotformProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border hover:border-primary/50 transition-all group"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="h-5 w-5 text-primary" />
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
                      <span key={tech} className="text-xs font-mono text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Projects */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="text-primary border-primary">Academic</Badge>
            <h3 className="text-lg font-semibold text-foreground">{"Dr. Yanga's College, Inc. & OJT"}</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {academicProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border hover:border-primary/50 transition-all group"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="h-5 w-5 text-primary" />
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
                      <span key={tech} className="text-xs font-mono text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
