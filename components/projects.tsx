import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import AnimatedSection from "./animated-section"

const projects = [
  {
    title: "FlyFit Mobile App",
    description: "Cross-platform fitness app with health platform integrations",
    technologies: ["React Native", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Learning Platform",
    description: "Interactive web app teaching ML concepts through gamified experiences",
    technologies: ["React", "TensorFlow.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">PROJECTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <Card className="card flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-vt323 neon-text-blue">{project.title}</CardTitle>
                  <CardDescription className="text-white/80">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-neon-pink/20 text-neon-pink hover:bg-neon-pink/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-4 border-t border-neon-blue/20">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github size={16} /> Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10"
                    asChild
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
