'use client';
import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ExternalLink, X} from 'lucide-react';
import AnimatedSection from './animated-section';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {useState, useEffect} from 'react';
import type {Experience} from '@/types/experience';
import {useIsSmallScreen} from '@/hooks/use-mobile';

const experiences: Experience[] = [
  {
    projectName: 'Forever Fest Website',
    role: 'Full-Stack Developer',
    period: 'August 2025',
    location: 'Personal Project',
    challenge: 'I was engaged and needed a wedding website. I met the love of my life, Eva, at the Lights All Night (LAN) EDM festival in 2022 and proposed at LAN 2024. Since a music festival is central to our story, we created “Forever Fest 2026” as our wedding theme—our own festival brand. The site had to match the vibe: playful, vibrant, and totally us.',
    solution: 'Eva designed a colorful disco-inspired pink and purple theme, and I brought her vision to life. With her design background and my dev chops, we built the wedding website of our dreams from scratch. Using Next.js, React, and Tailwind CSS, we created a unique, non-cookie-cutter site that stands out from the all-too-common templates. Those work fine, but as a web developer I wanted something custom and polished for the biggest day of my life.',
    impact: [
      'Mobile-first responsive design that works across all devices',
      'Optimized for a 100% Google Chrome Lighthouse score',
    ],
    learnings: 'I loved collaborating with Eva co-creating an idea and turning it into something real. It was a fun, creative project that pushed me to make deliberate design and UX decisions while keeping everything functional and easy to use.',
    visuals: [],
    callToAction: {
      text: 'Visit Forever Fest 2026 Website',
      url: 'https://www.foreverfest.wedding/',
    },
    type: 'project',
  },
  {
    projectName: 'myLexia Platform Modernization',
    role: 'Senior Software Engineer',
    company: 'Lexia Learning',
    period: 'July 2025 - Present',
    location: 'Remote',
    challenge: 'Lexia is a 40-year-old language learning company focused on improving K-12 English literacy for students. Serving 1 in 3 public school districts, Lexia serves 7+ million students and 300k educators helping to address the national literacy crisis. I joined the myLexia team, which is the educator-facing product that teachers and school admins use to manage students, monitor progress, and manage their classrooms. I was brought in to help modernize the frontend migrating from AngularJs to Angular.',
    solution: 'This being my 2nd large codebase migration from AngularJs to a modern web dev framework, it was not my first rodeo. I joined as an individual contributor, but quickly have become an integral part of the team bringing my expertise in modern component-based frontend development, agile process improvement, and product thinking to the team.',
    impact: [],
    learnings: 'Learnings to come! Still very new to the role.',
    visuals: [],
    callToAction: {
      text: 'Lexia Learning Website',
      url: 'https://www.lexialearning.com',
    },
    type: 'work',
  },
  {
    projectName: 'Portfolio Website',
    role: 'Full-Stack Developer',
    period: 'April 2025',
    location: 'Personal Project',
    challenge: 'Creating a personal portfolio website that stands out in a sea of templates while showcasing my skills and personality in a unique way.',
    solution: 'This website! I designed this portfolio website with an Outrun, synthwave, and retro aesthetic. Built with Next.js, React, and Tailwind CSS featuring custom animations and responsive design. The initial mockup was done with v0.dev and then built out from there.',
    impact: [
      'Brushed up on modern Next.js best practice patterns and practices',
      'Created responsive design that works across all devices',
      'Optimized for a 100% Google Chrome Lighthouse score',
    ],
    learnings: 'This project was a fun way to keep my front-end web development skills up-to-date when building a Next.js/React web app from scratch for this website. since I had been working on a mobile app for the previous year. optimized, and reinforced my skills in modern front-end development while allowing me to express my creativity through design. I learned valuable lessons about balancing aesthetics with performance and accessibility.',
    callToAction: {
      text: 'View on GitHub',
      url: 'https://github.com/seanblonien/portfolio',
    },
    type: 'project',
  },
  {
    projectName: 'FlyFit Mobile App & Platform',
    role: 'Director of Engineering',
    company: 'Fly Bodies',
    period: 'May 2024 - July 2025',
    location: 'Remote/Los Angeles, CA',
    challenge: 'Fly Bodies is a health and wellness startup that helps schools and small organizations keep their communities active in a simple, motivating way. Our users are teachers, staff, and small teams who want to move more but struggle with consistency and accountability. Many do not have time for complex tools or the budget for enterprise wellness platforms. They need something that feels fun and social, works on the phones and wearables they already use, and respects privacy. The core problem to solve was making daily activity feel rewarding and shared through challenges, streaks, and personal goals. The platform needed to be easy to onboard, reliable across iOS and Android, and securely sync activity from Apple Health, Health Connect, and Fitbit in real time so people could see progress and cheer each other on without friction.',
    solution: 'I joined as the 1st engineer and took the product from 0 to 1. I led discovery, planning, design, architecture, development, testing, and releases to ship the FlyFit mobile app and supporting backend. At a high level, I built a modern, cross-platform app using React Native and TypeScript, paired with a serverless Node.js backend on GCP and Firebase. The system delivers real time updates for leaderboards, feeds, and shared workouts so the app feels instant and never needs a manual refresh. I integrated Apple Health, Health Connect, and Fitbit for seamless activity sync, and set up a solid CI/CD pipeline with GitHub Actions and Expo EAS to support weekly releases and fast iteration based on user feedback.',
    impact: [
      'Product and delivery: Shipped the MVP in 3 months, sustained weekly releases, and earned a 5-star App Store rating.',
      'Growth and outcomes: Achieved 1,500+ organic downloads and $30K+ in first-year revenue with zero marketing spend.',
      'Architecture and scale: Designed a real time, serverless platform on GCP/Firebase that supported 300+ MAUs with autoscaling and a local-first, zero-refresh UX.',
      'Engagement: Implemented gamification features including streaks, quizzes, and goals that increased engagement by 210%.',
      'Cost efficiency: Reduced initial cloud costs by 40% through architecture and data model optimizations.',
      'Leadership and communication: Owned the full lifecycle from roadmap and technical design to integrations, security, testing, and App Store releases while aligning stakeholders and communicating progress clearly with nontechnical partners and customers.',
    ],
    learnings: 'This role sharpened my product engineering skills. I translated user needs into a focused roadmap, kept scope tight, and iterated quickly based on what we heard from schools and teams using the app. In a true startup environment, I wore multiple hats and enjoyed it. I acted as an IC, architect, product partner, and delivery lead while building modern, scalable infrastructure that I designed end to end. It reinforced how to make pragmatic, cost-aware technical decisions, work on the cutting edge with real time systems and serverless tech, and lead early stage product development and technical strategy under tight budget constraints.',
    callToAction: {
      text: 'View on Fly Bodies website',
      url: 'https://www.fly-bodies.com/flyfit-app',
    },
    type: 'work',
  },
  {
    projectName: 'UnitedHealthcare Platform Migration',
    role: 'Technical Lead',
    company: 'Pariveda Solutions',
    client: 'UnitedHealthcare',
    period: 'Jan. 2024 - May 2024',
    location: 'Dallas, TX',
    challenge: 'UnitedHealthcare needed to migrate their $200M+ DTC eCommerce platform from AngularJS to React while maintaining business continuity and improving performance for millions of users.',
    solution: 'Led the front-end migration as Technical Lead, delivering a 5× faster UI with responsive design and modern component architecture. Coordinated with cross-functional teams to ensure seamless transition.',
    impact: [
      'Led a team of 6 developers through complete platform migration',
      'Achieved 5× performance improvement in UI responsiveness',
      'Delivered modern component architecture serving millions of users',
      'Maintained zero downtime during critical business operations',
    ],
    learnings: 'Leading a large-scale migration taught me the importance of incremental delivery, stakeholder communication, and balancing technical excellence with business continuity. The experience reinforced my expertise in React architecture and team leadership.',
    callToAction: {
      text: 'View on LinkedIn',
      url: 'https://linkedin.com/in/seanblonien',
    },
    type: 'work',
  },
  {
    projectName: 'Southwest Airlines Data Pipeline',
    role: 'Senior Software Consultant',
    company: 'Pariveda Solutions',
    client: 'Southwest Airlines',
    period: 'Aug. 2022 - May 2024',
    location: 'Dallas, TX',
    challenge: 'Southwest Airlines needed a scalable, event-driven data pipeline to process information for 90,000+ employees while integrating with legacy enterprise applications and ensuring high availability.',
    solution: 'Architected and implemented a cloud-native data processing system using Kafka, GraphQL, and Java/Python microservices to integrate Workday with internal enterprise applications.',
    impact: [
      'Built scalable pipeline processing data for 90,000+ employees',
      'Implemented event-driven architecture with Kafka for real-time processing',
      'Integrated legacy systems with modern cloud-native solutions',
      'Delivered high-availability system with enterprise-grade reliability',
    ],
    learnings: 'This project deepened my understanding of enterprise-scale data architecture and the complexities of integrating modern solutions with legacy systems. I gained valuable experience in event-driven design and microservices architecture.',
    callToAction: {
      text: 'View on LinkedIn',
      url: 'https://linkedin.com/in/seanblonien',
    },
    type: 'work',
  },
  {
    projectName: 'Toyota Financial Services Optimization',
    role: 'Senior Software Consultant',
    company: 'Pariveda Solutions',
    client: 'Toyota Financial Services',
    period: 'Aug. 2022 - May 2024',
    location: 'Dallas, TX',
    challenge: 'Toyota FS needed to analyze and optimize their technical architecture to support 1,500 dealerships and handle 300K+ daily quotes while identifying performance bottlenecks and scalability issues.',
    solution: 'Conducted comprehensive technical architecture assessment, identifying key bottlenecks and recommending enhancements to support massive scale and improve system efficiency.',
    impact: [
      'Analyzed architecture supporting 1,500+ dealerships',
      'Identified optimizations for 300K+ daily quote processing',
      'Delivered actionable recommendations for scalability improvements',
      'Provided technical roadmap for enhanced system performance',
    ],
    learnings: 'This assessment project taught me how to quickly understand complex enterprise architectures and identify optimization opportunities. I developed skills in technical analysis, stakeholder communication, and strategic technical planning.',
    callToAction: {
      text: 'View on LinkedIn',
      url: 'https://linkedin.com/in/seanblonien',
    },
    type: 'work',
  },
  {
    projectName: 'Optum ETL Platform Development',
    role: 'Senior Software Consultant',
    company: 'Pariveda Solutions',
    client: 'Optum',
    period: 'Aug. 2022 - May 2024',
    location: 'Dallas, TX',
    challenge: 'Optum required a robust ETL platform to handle complex healthcare data transformations with strict compliance requirements and high data integrity standards for their enterprise operations.',
    solution: 'Led development and delivery of a Medicare compliance ETL platform using Azure Data Factory, Azure Data Pipelines, and Terraform for infrastructure as code, ensuring scalable and compliant data processing.',
    impact: [
      'Delivered Medicare-compliant ETL platform for healthcare data',
      'Implemented infrastructure as code using Terraform',
      'Built scalable data processing with Azure Data Factory',
      'Ensured strict compliance with healthcare data regulations',
    ],
    learnings: 'Working in healthcare taught me the critical importance of data compliance and security. I gained deep experience with Azure cloud services and infrastructure automation while navigating complex regulatory requirements.',
    callToAction: {
      text: 'View on LinkedIn',
      url: 'https://linkedin.com/in/seanblonien',
    },
    type: 'work',
  },
  {
    projectName: 'Girl Scouts Progress Library',
    role: 'Senior Software Consultant',
    company: 'Pariveda Solutions',
    client: 'Girl Scouts',
    period: 'Aug. 2022 - May 2024',
    location: 'Dallas, TX',
    challenge: 'Girl Scouts needed to centralize and automate 150+ business workflows via a SharePoint-based Process Library, requiring significant process improvement and workflow optimization.',
    solution: 'Managed and mentored a team of 6 interns to centralize business processes, implementing automated workflows and creating a comprehensive digital process library with improved efficiency.',
    impact: [
      'Centralized and automated 150+ business workflows',
      'Led and mentored team of 6 interns through complex project',
      'Significantly improved organizational process efficiency',
      'Delivered comprehensive SharePoint-based solution',
    ],
    learnings: 'This project taught me valuable lessons in process optimization, team mentorship, and working with non-profit organizations. I developed skills in workflow automation and learned how to guide junior team members through complex business challenges.',
    callToAction: {
      text: 'View on LinkedIn',
      url: 'https://linkedin.com/in/seanblonien',
    },
    type: 'work',
  },
  {
    projectName: 'Girl Scouts AI Learning Platform',
    role: 'Software Consultant',
    company: 'Pariveda Solutions',
    client: 'Girl Scouts',
    period: 'May 2019 - Aug. 2019',
    location: 'Dallas, TX',
    challenge: 'Girl Scouts wanted to create an innovative AI learning platform to teach 2,200+ STEM camp participants about machine learning concepts through interactive, gamified experiences using computer vision.',
    solution: 'Developed and mentored an interactive AI learning web app using Angular, .NET Core, and OpenCV, incorporating image detection, facial recognition, and reinforcement learning in a gamified experience.',
    impact: [
      'Built interactive platform serving 2,200+ STEM camp participants',
      'Implemented cutting-edge ML concepts in accessible format',
      'Created gamified learning experience with computer vision',
      'Successfully taught complex AI concepts to young learners',
    ],
    learnings: 'This early project sparked my passion for making complex technology accessible and educational. I learned how to translate advanced technical concepts into engaging, understandable experiences while working with emerging AI technologies.',
    callToAction: {
      text: 'View on LinkedIn',
      url: 'https://linkedin.com/in/seanblonien',
    },
    type: 'work',
  },
];

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
          wrappers.forEach((wrapper) => {
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
          >
          </div>

          {/* Timeline entries */}
          <div className="relative z-10">
            {experiences.map((experience, index) => (
              <AnimatedSection
                key={`${experience.company}-${index}`}
                delay={0.2}
                className="mb-16 relative"
              >
                <article className="experience-entry">
                  {/* Timeline node */}
                  <div
                    className={`absolute md:left-1/2 left-[20px] top-6 w-4 h-4 rounded-full bg-dark-blue border-2
                               ${experience.type === 'work'
                ? 'border-neon-blue shadow-neon-blue'
                : 'border-neon-pink shadow-neon-pink'}
                               md:-translate-x-1/2 z-20`}
                    aria-hidden="true"
                  >
                  </div>

                  {/* Content container */}
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
                          aria-label={`View details about ${experience.projectName}${experience.company ? ` at ${experience.company}` : ''}`}
                          className={`w-full md:w-[calc(50%-2rem)] text-left ${index % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-auto'} ml-auto`}
                          onClick={() =>
                            setOpenPopoverIndex(openPopoverIndex === index ? null : index)}
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
                            transition-all duration-300 rounded-xl overflow-hidden relative`}
                          >
                            <CardHeader>
                              <div className="flex flex-col gap-1">
                                <CardTitle className={`text-xl font-vt323 ${experience.type === 'work' ? 'neon-text-blue' : 'neon-text-pink'}`}>
                                  {experience.projectName}
                                </CardTitle>
                                <CardDescription className={`text-lg ${experience.type === 'work' ? 'text-neon-pink' : 'text-neon-blue'}`}>
                                  {experience.company ? `${experience.role} @${experience.company}` : experience.role}
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
                          ...(isSmallScreen
                            ? {
                                position: 'fixed',
                                inset: 0,
                                width: '100vw',
                                height: '100vh',
                                maxWidth: '100vw',
                                maxHeight: '100vh',
                                overflow: 'hidden',
                                transform: 'none !important',
                              }
                            : {}),
                        }}
                        side={isSmallScreen ? 'bottom' : 'left'}
                        align={isSmallScreen ? 'center' : 'start'}
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
                          <div className={isSmallScreen ? 'flex-1 overflow-y-auto pb-6' : ''}>
                            <div className="flex justify-center w-full">
                              <div className="space-y-3 w-full max-w-[540px] px-3 md:px-6 pb-safe">
                                <header className={`flex justify-between items-start ${isSmallScreen ? '' : 'mb-3'}`}>
                                  <div>
                                    <h4 id={`experience-title-${index}`} className={`text-xl font-vt323 ${experience.type === 'work' ? 'neon-text-blue' : 'neon-text-pink'}`}>
                                      {experience.projectName}
                                    </h4>
                                    <p className={`text-base ${experience.type === 'work' ? 'text-neon-pink' : 'text-neon-blue'}`}>
                                      {experience.company ? `${experience.role} at ${experience.company}` : experience.role}
                                      {' '}
                                      •
                                      {experience.location}
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
                                    {experience.callToAction.text}
                                    {' '}
                                    <ExternalLink size={16} className="ml-1" />
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
  );
}
