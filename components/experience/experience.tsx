'use client';
import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {AnimatedSection} from '../animated-section';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {experiences} from '@/data/experience';
import {useExperiencePopover} from '@/hooks/use-experience-popover';
import {useIsSmallScreen} from '@/hooks/use-mobile';
import {ExperienceLegend} from '@/components/experience/experience-legend';
import {ExperienceTimelineLegend} from '@/components/experience/experience-timeline-legend';
import {ExperienceTimelineNode} from '@/components/experience/experience-timeline-node';
import {ExperiencePopoverHeaderMobile} from '@/components/experience/experience-popover-header-mobile';
import {ExperiencePopoverHeaderDesktop} from '@/components/experience/experience-popover-header-desktop';
import {ExperiencePopoverContent} from '@/components/experience/experience-popover-content';

export const ExperienceSection: React.FC = () => {
  const isSmallScreen = useIsSmallScreen();
  const {
    openPopoverIndex, setOpenPopoverIndex, handleTouchStart, handleTouchEnd,
  } = useExperiencePopover();

  return (
    <section id="experience" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">EXPERIENCE</h2>

        {/* Legend */}
        <ExperienceLegend />

        {/* Neon Timeline Container */}
        <div className="relative mt-12" role="region" aria-label="Experience Timeline">

          {/* Center neon line  */}
          <ExperienceTimelineLegend />

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
                  <ExperienceTimelineNode experience={experience} />

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
                          <ExperiencePopoverHeaderMobile
                            experience={experience}
                            index={index}
                            onClose={() => setOpenPopoverIndex(null)}
                          />

                          {/* Scrollable content area */}
                          <div className={isSmallScreen ? 'flex-1 overflow-y-auto pb-6' : ''}>
                            <div className="flex justify-center w-full">
                              <div className="space-y-3 w-full max-w-[540px] px-3 md:px-6 pb-safe">
                                <ExperiencePopoverHeaderDesktop
                                  experience={experience}
                                  index={index}
                                  onClose={() => setOpenPopoverIndex(null)}
                                />

                                <ExperiencePopoverContent
                                  experience={experience}
                                  index={index}
                                />
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
};
