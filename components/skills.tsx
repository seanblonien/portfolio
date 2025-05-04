"use client"

import { Badge } from "@/components/ui/badge"
import AnimatedSection from "./animated-section"

const skillGroups = [
  {
    category: "Frontend",
    skills: ["TypeScript", "JavaScript", "React", "React Native", "Expo", "CSS", "Tailwind", "Next.js"],
  },
  {
    category: "Backend",
    skills: ["NodeJs", "Java", "Python", "Firebase", "NoSQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["GCP", "AWS", "DevOps", "Cloud Architecture"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">SKILLS</h2>

        <div className="card">
          <div className="flex flex-wrap gap-2">
            {skillGroups.flatMap((group, groupIndex) =>
              group.skills.map((skill, skillIndex) => (
                <AnimatedSection
                  key={skill}
                  delay={(groupIndex * group.skills.length + skillIndex) * 0.05}
                  className="inline-block"
                >
                  <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300">
                    {skill}
                  </Badge>
                </AnimatedSection>
              )),
            )}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
