"use client"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import AnimatedSection from "./animated-section"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useEffect } from "react"

// Add a global style to ensure popovers appear on top
const PopoverStyles = () => {
  useEffect(() => {
    // Add a style tag to ensure popovers appear on top
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      [data-radix-popper-content-wrapper] {
        z-index: 9999 !important;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return null;
};

// Experience data array - can be edited to add new experiences
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
    type: "work" // work or project
  },
  {
    title: "Personal Portfolio",
    company: "Side Project",
    period: "April 2024",
    location: "Personal Project",
    description:
      "Designed and developed a personal portfolio website with a retro cyberpunk aesthetic. Built with Next.js, React, and Tailwind CSS featuring custom animations and responsive design.",
    achievements: [
      "Implemented custom neon timeline component",
      "Created responsive design that works across all devices",
      "Optimized for accessibility and performance"
    ],
    link: "https://github.com/seanblonien/portfolio",
    type: "project"
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
    type: "work"
  },
  {
    title: "AI-Powered Fitness App",
    company: "Hackathon Project",
    period: "January 2023",
    location: "Virtual Event",
    description:
      "Created an AI-powered fitness application that analyzes workout form using computer vision and provides real-time feedback to users. Won first place in the health tech category.",
    achievements: [
      "Implemented TensorFlow pose estimation model",
      "Built React Native mobile interface",
      "Completed project in 48 hours and won first place"
    ],
    link: "https://github.com/seanblonien",
    type: "project"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <PopoverStyles />
      <AnimatedSection>
        <h2 className="section-title">EXPERIENCE</h2>

        {/* Legend */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-neon-blue shadow-[0_0_5px_rgba(42,253,255,0.7)]"></div>
            <span className="text-sm text-white/80">Work Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-neon-pink shadow-[0_0_5px_rgba(255,42,255,0.7)]"></div>
            <span className="text-sm text-white/80">Projects</span>
          </div>
        </div>

        {/* Neon Timeline Container */}
        <div className="relative mt-12">
          {/* Center neon line - positioned differently on mobile */}
          <div className="absolute md:left-1/2 left-[20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-pink to-neon-blue
                         shadow-[0_0_8px_rgba(42,253,255,0.7)] z-10"></div>

          {/* Timeline entries */}
          <div className="relative z-10">
            {experiences.map((experience, index) => (
              <AnimatedSection
                key={`${experience.company}-${index}`}
                delay={index * 0.2}
                className="mb-16 relative"
              >
                {/* Timeline node - different color based on type, positioned differently on mobile */}
                <div className={`absolute md:left-1/2 left-[20px] top-6 w-4 h-4 rounded-full bg-dark-blue border-2
                               ${experience.type === 'work' ? 'border-neon-blue shadow-[0_0_8px_rgba(42,253,255,0.7)]' : 'border-neon-pink shadow-[0_0_8px_rgba(255,42,255,0.7)]'}
                               transform md:-translate-x-1/2 z-20`}></div>

                {/* Content container - alternating left/right on desktop, all on right for mobile */}
                <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-end relative z-30`}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div
                        className={`w-full md:w-[calc(50%-2rem)] cursor-pointer ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} ml-auto`}
                      >
                        <Card className={`card ${experience.type === 'work'
                          ? 'border-neon-blue/30 hover:border-neon-blue/70 hover:shadow-[0_0_15px_rgba(42,253,255,0.5)]'
                          : 'border-neon-pink/30 hover:border-neon-pink/70 hover:shadow-[0_0_15px_rgba(255,42,255,0.5)]'}
                          transition-all duration-300`}>
                          <CardHeader>
                            <div className="flex flex-col gap-1">
                              <CardTitle className={`text-xl font-vt323 ${experience.type === 'work' ? 'neon-text-blue' : 'neon-text-pink'}`}>
                                {experience.title}
                              </CardTitle>
                              <CardDescription className={`text-lg ${experience.type === 'work' ? 'text-neon-pink' : 'text-neon-blue'}`}>
                                {experience.company}
                              </CardDescription>
                              <div className="text-sm text-white/70 mt-1">{experience.period}</div>
                            </div>
                          </CardHeader>
                        </Card>
                      </div>
                    </PopoverTrigger>

                    <PopoverContent
                      className={`w-80 bg-dark-blue/95 backdrop-blur-sm border ${experience.type === 'work'
                        ? 'border-neon-blue/50 shadow-[0_0_15px_rgba(42,253,255,0.3)]'
                        : 'border-neon-pink/50 shadow-[0_0_15px_rgba(255,42,255,0.3)]'}
                        text-white p-4 z-[9999]`}
                      side={index % 2 === 0 ? "right" : "left"}
                      align="start"
                      sideOffset={20}
                    >
                      <div className="space-y-3">
                        <div>
                          <h4 className={`text-lg font-vt323 ${experience.type === 'work' ? 'neon-text-blue' : 'neon-text-pink'}`}>
                            {experience.title}
                          </h4>
                          <p className={`text-sm ${experience.type === 'work' ? 'text-neon-pink' : 'text-neon-blue'}`}>
                            {experience.company} • {experience.location}
                          </p>
                        </div>

                        <p className="text-sm text-white/90">{experience.description}</p>

                        {experience.achievements && experience.achievements.length > 0 && (
                          <div>
                            <h5 className="text-xs uppercase text-white/60 mb-1">Key Achievements</h5>
                            <ul className="list-disc pl-4 text-white/80 text-xs space-y-1">
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
                          className={`inline-flex items-center text-xs ${experience.type === 'work'
                            ? 'text-neon-blue hover:text-neon-pink'
                            : 'text-neon-pink hover:text-neon-blue'} transition-colors`}
                        >
                          {experience.type === 'work' ? 'View on LinkedIn' : 'View Project'} <ExternalLink size={12} className="ml-1" />
                        </a>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
