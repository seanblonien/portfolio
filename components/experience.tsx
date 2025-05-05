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
      "Leading development of cross-platform mobile fitness applications and architecting serverless, event-driven backends with real-time functionality. Using React Native for mobile and AWS for cloud infrastructure.",
    achievements: [
      "Launched MVP in 3 months with 4.8 star App Store rating",
      "Built real-time workout tracking with WebSockets",
      "Reduced cloud costs by 40% through architecture optimizations"
    ],
    link: "https://linkedin.com/in/seanblonien",
  },
  {
    title: "Senior Software Consultant",
    company: "Pariveda Solutions",
    period: "July 2020 - May 2024",
    location: "Dallas, TX",
    description:
      "Led technical delivery for enterprise clients including UnitedHealthcare, Southwest Airlines, and Toyota Financial Services, focusing on front-end migrations, data pipelines, and cloud architecture.",
    achievements: [
      "Led a team of 8 developers on the UnitedHealthcare project",
      "Reduced page load times by 60% through code splitting and optimization",
      "Implemented CI/CD pipelines that cut deployment time from days to minutes"
    ],
    link: "https://linkedin.com/in/seanblonien",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <AnimatedSection key={`${experience.company}-${index}`} delay={index * 0.2}>
              <Card className="card border-neon-blue/30 hover:border-neon-pink/70">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-2xl font-vt323 neon-text-blue">{experience.title}</CardTitle>
                      <CardDescription className="text-xl text-neon-pink">{experience.company}</CardDescription>
                    </div>
                    <div className="text-sm text-white/70">
                      <div>{experience.period}</div>
                      <div>{experience.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4">{experience.description}</p>

                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="mt-3 mb-4">
                      <h4 className="text-sm uppercase text-white/60 mb-2">Key Achievements</h4>
                      <ul className="list-disc pl-5 text-white/80 text-sm space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a
                    href={experience.link}
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
