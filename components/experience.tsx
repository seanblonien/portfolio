"use client"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, X } from "lucide-react"
import AnimatedSection from "./animated-section"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState, useEffect } from "react"
import type { Experience } from "@/types/experience"
import { useIsSmallScreen } from "@/hooks/use-mobile"



// Experience data array - can be edited to add new experiences
const experiences: Experience[] = [
  {
    title: "Director of Engineering",
    company: "Fly Bodies",
    period: "May 2024 - Present",
    location: "Remote/Los Angeles, CA",
    challenge: "The core challenge was building a robust, real-time backend capable of handling simultaneous workout data and social updates from hundreds of users, while also integrating diverse health data sources (Apple Health, Fitbit, etc.) efficiently and securely. On the frontend, ensuring a smooth, native-like experience across iOS and Android with complex real-time features was paramount.",
    solution: "I designed and engineered a serverless, event-driven architecture utilizing Node.js and Firestore on GCP for real-time data handling and scalability. React Native and TypeScript provided a robust, cross-platform mobile front-end. We implemented WebSockets for instantaneous updates crucial for workout tracking and leaderboards. I established a weekly release cadence with CI/CD via GitHub Actions/Expo EAS to iterate rapidly based on user feedback collected through surveys, reviews, and analytics. I also integrated Apple Health, Health Connect, and Fitbit platforms to provide comprehensive tracking.",
    impact: [
      "Spearheaded the full product lifecycle from roadmap definition to technical design and App Store releases.",
      "Launched the MVP in just 3 months, achieving a 4.8-star App Store rating.",
      "Built real-time workout tracking and leaderboards with WebSockets for zero-refresh UX.",
      "Achieved over 1,500 organic downloads and $30K+ in first-year revenue with zero marketing spend.",
      "Engineered and implemented a real-time, serverless backend supporting 300+ MAUs with autoscaling.",
      "Designed and implemented key gamification features (streaks, quizzes, goals), resulting in a 210% increase in user engagement.",
      "Reduced initial cloud infrastructure costs by 40% through architecture optimizations."
    ],
    learnings: "This role significantly deepened my experience in full-stack mobile development, particularly in architecting scalable, real-time systems and managing a product through its full lifecycle. It underscored the power of iterative development driven by direct user feedback and the challenges and rewards of leading technical strategy for a new product.",
    visuals: [
      {
        type: "image",
        url: "/images/flybodies/app-screenshot-1.png",
        caption: "Screenshot of the FlyFit app dashboard."
      },
      {
        type: "image",
        url: "/images/flybodies/engagement-chart.png",
        caption: "Graph showing 210% increase in user engagement post-gamification."
      },
      {
        type: "diagram",
        url: "/images/flybodies/architecture-diagram.svg",
        caption: "Simplified diagram of the serverless backend architecture."
      }
    ],
    callToAction: {
      text: "View on LinkedIn",
      url: "https://www.linkedin.com/in/your-linkedin-profile-link-here"
    },
    type: "work"
  },
  {
    title: "Personal Portfolio",
    company: "Side Project",
    period: "April 2024",
    location: "Personal Project",
    challenge: "Creating a personal portfolio that stands out in a sea of templates while showcasing my skills and personality in a unique way.",
    solution: "Designed and developed a personal portfolio website with a retro cyberpunk aesthetic. Built with Next.js, React, and Tailwind CSS featuring custom animations and responsive design.",
    impact: [
      "Implemented custom neon timeline component",
      "Created responsive design that works across all devices",
      "Optimized for accessibility and performance"
    ],
    learnings: "This project reinforced my skills in modern front-end development while allowing me to express my creativity through design. I learned valuable lessons about balancing aesthetics with performance and accessibility.",
    callToAction: {
      text: "View on GitHub",
      url: "https://github.com/seanblonien/portfolio"
    },
    type: "project"
  },
  {
    title: "Senior Software Consultant",
    company: "Pariveda Solutions",
    period: "July 2020 - May 2024",
    location: "Dallas, TX",
    challenge: "Delivering high-quality technical solutions for enterprise clients with complex requirements and legacy systems while meeting tight deadlines and managing stakeholder expectations.",
    solution: "Led technical delivery for enterprise clients including UnitedHealthcare, Southwest Airlines, and Toyota Financial Services, focusing on front-end migrations, data pipelines, and cloud architecture.",
    impact: [
      "Led a team of 8 developers on the UnitedHealthcare project",
      "Reduced page load times by 60% through code splitting and optimization",
      "Implemented CI/CD pipelines that cut deployment time from days to minutes"
    ],
    learnings: "Working across multiple industries and technologies taught me to quickly adapt to new domains and technical challenges. I developed strong skills in client communication, technical leadership, and delivering value in complex enterprise environments.",
    callToAction: {
      text: "View on LinkedIn",
      url: "https://linkedin.com/in/seanblonien"
    },
    type: "work"
  },
  {
    title: "AI-Powered Fitness App",
    company: "Hackathon Project",
    period: "January 2023",
    location: "Virtual Event",
    challenge: "Building a functional AI-powered fitness application in just 48 hours that could accurately analyze workout form and provide real-time feedback.",
    solution: "Created an AI-powered fitness application that analyzes workout form using computer vision and provides real-time feedback to users. Won first place in the health tech category.",
    impact: [
      "Implemented TensorFlow pose estimation model",
      "Built React Native mobile interface",
      "Completed project in 48 hours and won first place"
    ],
    learnings: "This hackathon taught me how to rapidly prototype and deliver a functional product under extreme time constraints. I gained valuable experience with TensorFlow and computer vision while learning to focus on core features that deliver the most value.",
    callToAction: {
      text: "View on GitHub",
      url: "https://github.com/seanblonien"
    },
    type: "project"
  }
]

export default function Experience() {
  const isSmallScreen = useIsSmallScreen();
  const [openPopoverIndex, setOpenPopoverIndex] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  // Handle touch events for swipe to close on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isSmallScreen) {
      setTouchStartY(e.touches[0].clientY);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isSmallScreen && touchStartY && e.changedTouches[0].clientY - touchStartY > 70) {
      // Swipe down detected, close the popover
      setOpenPopoverIndex(null);
    }
    setTouchStartY(null);
  };

  // Fix for Radix UI popover positioning on small screens
  useEffect(() => {
    if (isSmallScreen && openPopoverIndex !== null) {
      // Small delay to ensure the popover is rendered
      setTimeout(() => {
        // Try to find the popover wrapper using :has() selector (modern browsers)
        let popperWrapper = document.querySelector('[data-radix-popper-content-wrapper]:has([data-experience-popover="true"])');

        // Fallback for browsers that don't support :has()
        if (!popperWrapper) {
          // Find all popper wrappers
          const wrappers = document.querySelectorAll('[data-radix-popper-content-wrapper]');
          // Find the one that contains our experience popover
          wrappers.forEach(wrapper => {
            if (wrapper.querySelector('[data-experience-popover="true"]')) {
              popperWrapper = wrapper;
            }
          });
        }

        if (popperWrapper) {
          // Apply direct styles to override any transforms
          (popperWrapper as HTMLElement).style.transform = 'none';
          (popperWrapper as HTMLElement).style.top = '0';
          (popperWrapper as HTMLElement).style.left = '0';
          (popperWrapper as HTMLElement).style.width = '100%';
          (popperWrapper as HTMLElement).style.height = '100%';
          (popperWrapper as HTMLElement).style.position = 'fixed';

          // Also apply styles to the popover content directly
          const popoverContent = popperWrapper.querySelector('[data-experience-popover="true"]');
          if (popoverContent) {
            (popoverContent as HTMLElement).style.transform = 'none';
            (popoverContent as HTMLElement).style.maxWidth = '100vw';
            (popoverContent as HTMLElement).style.width = '100vw';
            (popoverContent as HTMLElement).style.maxHeight = '100vh';
            (popoverContent as HTMLElement).style.height = '100vh';
          }
        }
      }, 50); // Small delay to ensure DOM is updated
    }
  }, [isSmallScreen, openPopoverIndex]);

  return (
    <section id="experience" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">EXPERIENCE</h2>

        {/* Legend */}
        <div className="flex justify-center gap-8 mb-8" role="legend" aria-label="Timeline categories">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-neon-blue shadow-neon-blue" aria-hidden="true"></div>
            <span className="text-base text-text-white-80">Work Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-neon-pink shadow-neon-pink" aria-hidden="true"></div>
            <span className="text-base text-text-white-80">Projects</span>
          </div>
        </div>

        {/* Neon Timeline Container */}
        <div className="relative mt-12" role="region" aria-label="Experience Timeline">
          {/* Center neon line - positioned differently on mobile */}
          <div
            className="absolute md:left-1/2 left-[20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-pink to-neon-blue
                     shadow-neon-blue rounded-full z-10"
            aria-hidden="true"
          ></div>

          {/* Timeline entries */}
          <div className="relative z-10">
            {experiences.map((experience, index) => (
              <AnimatedSection
                key={`${experience.company}-${index}`}
                delay={0.2}
                className="mb-16 relative"
              >
                <article className="experience-entry">
                  {/* Timeline node - different color based on type, positioned differently on mobile */}
                  <div
                    className={`absolute md:left-1/2 left-[20px] top-6 w-4 h-4 rounded-full bg-dark-blue border-2
                               ${experience.type === 'work'
                                 ? 'border-neon-blue shadow-neon-blue'
                                 : 'border-neon-pink shadow-neon-pink'}
                               md:-translate-x-1/2 z-20`}
                    aria-hidden="true"
                  ></div>

                  {/* Content container - alternating sides of timeline on desktop, all on right for mobile */}
                  <div className="flex md:justify-end justify-end relative z-30">
                    <Popover
                      open={openPopoverIndex === index}
                      onOpenChange={(open) => {
                        setOpenPopoverIndex(open ? index : null);
                      }}
                    >
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded={openPopoverIndex === index}
                          aria-controls={`experience-popover-${index}`}
                          aria-label={`View details about ${experience.title} at ${experience.company}`}
                          className={`w-full md:w-[calc(50%-2rem)] text-left ${index % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-auto'} ml-auto`}
                          onClick={() => setOpenPopoverIndex(openPopoverIndex === index ? null : index)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setOpenPopoverIndex(openPopoverIndex === index ? null : index);
                            }
                          }}
                        >
                          <Card className={`card ${experience.type === 'work'
                            ? 'border-neon-blue-30 hover:border-neon-blue-70 hover:shadow-neon-blue-lg'
                            : 'border-neon-pink-30 hover:border-neon-pink-70 hover:shadow-neon-pink-lg'}
                            transition-all duration-300 rounded-xl overflow-hidden relative`}>
                            <CardHeader>
                              <div className="flex flex-col gap-1">
                                <CardTitle className={`text-xl font-vt323 ${experience.type === 'work' ? 'neon-text-blue' : 'neon-text-pink'}`}>
                                  {experience.title}
                                </CardTitle>
                                <CardDescription className={`text-lg ${experience.type === 'work' ? 'text-neon-pink' : 'text-neon-blue'}`}>
                                  {experience.company}
                                </CardDescription>
                                <time dateTime={experience.period.replace(/\s/g, '')} className="text-base text-text-white-70 mt-1">
                                  {experience.period}
                                </time>
                              </div>
                            </CardHeader>
                            {/* Mobile tap indicator */}
                            <div
                              className={`absolute bottom-2 right-2 ${!isSmallScreen ? 'hidden' : ''} rounded-full w-5 h-5 flex items-center justify-center
                                ${experience.type === 'work'
                                  ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/50'
                                  : 'bg-neon-pink/20 text-neon-pink border border-neon-pink/50'}`}
                              aria-hidden="true"
                            >
                              <span className="text-xs">+</span>
                            </div>
                          </Card>
                        </button>
                      </PopoverTrigger>

                    <PopoverContent
                      id={`experience-popover-${index}`}
                      className={`${isSmallScreen
                        ? 'w-screen h-screen fixed inset-0 max-w-[100vw] max-h-[100vh]'
                        : 'w-[500px] max-h-[600px]'}
                        backdrop-blur-sm border ${experience.type === 'work'
                        ? 'border-neon-blue-50 shadow-neon-blue-lg'
                        : 'border-neon-pink-50 shadow-neon-pink-lg'}
                        text-white p-3 md:p-4 z-[9999] ${isSmallScreen ? '' : 'rounded-xl'} overflow-y-auto`}
                      style={{
                        backgroundColor: 'rgba(10, 10, 32, 0.95)',
                        ...(isSmallScreen ? {
                          position: 'fixed',
                          inset: 0,
                          width: '100vw',
                          height: '100vh',
                          maxWidth: '100vw',
                          maxHeight: '100vh',
                          overflow: 'hidden',
                          transform: 'none !important'
                        } : {})
                      }}
                      side={isSmallScreen ? "bottom" : "left"}
                      align={isSmallScreen ? "center" : "start"}
                      sideOffset={isSmallScreen ? 0 : 20}
                      alignOffset={isSmallScreen ? 0 : undefined}
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                      data-experience-popover="true"
                    >
                      <article className={`${isSmallScreen ? 'h-full flex flex-col' : 'space-y-3'}`} aria-labelledby={`experience-title-${index}`}>
                        {/* Mobile header with close button */}
                        {isSmallScreen && (
                          <header className="sticky top-0 left-0 right-0 pb-2 mb-2 border-b border-white/10 bg-[rgba(10,10,32,0.98)] z-10 pr-[17px]">
                            <div className="flex justify-center w-full">
                              <div className="flex justify-between items-center w-full max-w-[540px] px-3 md:px-6">
                                <h3 className={`text-2xl font-vt323 ${experience.type === 'work' ? 'neon-text-blue' : 'neon-text-pink'} truncate`}>
                                  Details
                                </h3>
                                <button
                                  onClick={() => setOpenPopoverIndex(null)}
                                  className="p-2 rounded-full hover:bg-white/10 transition-colors flex-shrink-0"
                                  aria-label="Close details"
                                  aria-controls={`experience-popover-${index}`}
                                >
                                  <X size={20} className="text-white/70" />
                                </button>
                              </div>
                            </div>
                          </header>
                        )}

                        {/* Scrollable content area */}
                        <div className={isSmallScreen ? "flex-1 overflow-y-auto pb-6" : ""}>
                          <div className="flex justify-center w-full">
                            <div className="space-y-3 w-full max-w-[540px] px-3 md:px-6 pb-safe">
                            <header className={`flex justify-between items-start ${isSmallScreen ? '' : 'mb-3'}`}>
                              <div>
                                <h4 id={`experience-title-${index}`} className={`text-xl font-vt323 ${experience.type === 'work' ? 'neon-text-blue' : 'neon-text-pink'}`}>
                                  {experience.title}
                                </h4>
                                <p className={`text-base ${experience.type === 'work' ? 'text-neon-pink' : 'text-neon-blue'}`}>
                                  {experience.company} • {experience.location}
                                </p>
                              </div>
                              {/* Close button - only visible on desktop */}
                              {!isSmallScreen && (
                                <button
                                  onClick={() => setOpenPopoverIndex(null)}
                                  className="p-1 rounded-full hover:bg-white/10 transition-colors"
                                  aria-label="Close details"
                                  aria-controls={`experience-popover-${index}`}
                                >
                                  <X size={16} className="text-white/70" />
                                </button>
                              )}
                            </header>

                            {/* Challenge */}
                            <section aria-labelledby={`challenge-heading-${index}`}>
                              <h5 id={`challenge-heading-${index}`} className="text-lg uppercase text-text-white-60 mb-1">Challenge</h5>
                              <p className="text-base text-text-white-90 break-words">{experience.challenge}</p>
                            </section>

                            {/* Solution */}
                            <section aria-labelledby={`solution-heading-${index}`}>
                              <h5 id={`solution-heading-${index}`} className="text-lg uppercase text-text-white-60 mb-1">Solution</h5>
                              <p className="text-base text-text-white-90 break-words">{experience.solution}</p>
                            </section>

                            {/* Impact */}
                            {experience.impact && experience.impact.length > 0 && (
                              <section aria-labelledby={`impact-heading-${index}`}>
                                <h5 id={`impact-heading-${index}`} className="text-lg uppercase text-text-white-60 mb-1">Key Impact</h5>
                                <ul className="list-disc pl-4 text-text-white-80 text-base space-y-2">
                                  {experience.impact.map((item, i) => (
                                    <li key={i} className="break-words">{item}</li>
                                  ))}
                                </ul>
                              </section>
                            )}

                            {/* Learnings */}
                            <section aria-labelledby={`learnings-heading-${index}`}>
                              <h5 id={`learnings-heading-${index}`} className="text-lg uppercase text-text-white-60 mb-1">Learnings</h5>
                              <p className="text-base text-text-white-90 break-words">{experience.learnings}</p>
                            </section>

                            {/* Call to Action */}
                            <footer>
                              <a
                                href={experience.callToAction.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center text-base ${experience.type === 'work'
                                  ? 'text-neon-blue hover:text-neon-pink'
                                  : 'text-neon-pink hover:text-neon-blue'} transition-colors`}
                              >
                                {experience.callToAction.text} <ExternalLink size={16} className="ml-1" />
                              </a>
                            </footer>
                            </div>
                          </div>
                        </div>
                      </article>
                    </PopoverContent>
                  </Popover>
                </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
