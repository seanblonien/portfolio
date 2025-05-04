"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import AnimatedSection from "./animated-section"

const experiences = [
  {
    title: "Director of Engineering",
    company: "Fly Bodies",
    period: "May 2024 - Present",
    location: "Remote/Los Angeles, CA",
    description:
      "Leading development of cross-platform mobile fitness apps and architecting serverless, event-driven backends with real-time functionality.",
    link: "https://linkedin.com/in/seanblonien",
  },
  {
    title: "Senior Software Consultant",
    company: "Pariveda Solutions",
    period: "July 2020 - May 2024",
    location: "Dallas, TX",
    description:
      "Led technical delivery for enterprise clients including UnitedHealthcare, Southwest Airlines, and Toyota Financial Services, focusing on front-end migrations, data pipelines, and cloud architecture.",
    link: "https://linkedin.com/in/seanblonien",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.company} delay={index * 0.2}>
              <Card className="card border-neon-blue/30 hover:border-neon-pink/70">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-2xl font-vt323 neon-text-blue">{exp.title}</CardTitle>
                      <CardDescription className="text-xl text-neon-pink">{exp.company}</CardDescription>
                    </div>
                    <div className="text-sm text-white/70">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4">{exp.description}</p>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-neon-blue hover:text-neon-pink transition-colors"
                  >
                    View on LinkedIn <ExternalLink size={14} className="ml-1" />
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
