'use client';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { experiences } from '@/data/experience';
import { useExperiencePopover } from '@/hooks/use-experience-popover';
import { useIsSmallScreen } from '@/hooks/use-mobile';
import { ExperienceLegend } from '@/components/experience/experience-legend';
import { ExperienceTimelineLegend } from '@/components/experience/experience-timeline-legend';
import { ExperienceTimelineNode } from '@/components/experience/experience-timeline-node';
import { ExperiencePopoverHeaderMobile } from '@/components/experience/experience-popover-header-mobile';
import { ExperiencePopoverHeaderDesktop } from '@/components/experience/experience-popover-header-desktop';
import { ExperiencePopoverContent } from '@/components/experience/experience-popover-content';
import { AnimatedSection } from '../animated-section';

// eslint-disable-next-line max-lines-per-function -- large static component
export const ExperienceSection: React.FC = () => {
  const isSmallScreen = useIsSmallScreen();
  const {
    handleTouchEnd, handleTouchStart, openPopoverIndex, setOpenPopoverIndex,
  } = useExperiencePopover();

  return (
    <section className='section-container' id='experience'>
      <AnimatedSection>
        <h2 className='section-title'>EXPERIENCE</h2>

        {/* Legend */}
        <ExperienceLegend />

        {/* Neon Timeline Container */}
        <div aria-label='Experience Timeline' className='relative mt-12' role='region'>

          {/* Center neon line  */}
          <ExperienceTimelineLegend />

          {/* Timeline entries */}
          <div className='relative z-10'>
            {/* eslint-disable-next-line max-lines-per-function -- large static component */}
            {experiences.map((experience, index) => (
              <AnimatedSection
                key={`${experience.company}-${experience.projectName}`}
                className='mb-16 relative'
                delay={0.2}
              >
                <article className='experience-entry'>
                  {/* Timeline node */}
                  <ExperienceTimelineNode experience={experience} />

                  {/* Content container */}
                  <div className='flex md:justify-end justify-end relative z-30'>
                    <Popover
                      open={openPopoverIndex === index}
                      onOpenChange={(isOpen) => {
                        setOpenPopoverIndex(isOpen ? index : null);
                      }}
                    >
                      <PopoverTrigger asChild>
                        <button
                          aria-controls={`experience-popover-${index}`}
                          aria-expanded={openPopoverIndex === index}
                          aria-haspopup='dialog'
                          aria-label={(() => {
                            const companyPart = experience.company ? ` at ${experience.company}` : '';

                            return `View details about ${experience.projectName}${companyPart}`;
                          })()}
                          className={`w-full md:w-[calc(50%-2rem)] text-left ${index % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-auto'} ml-auto`}
                          type='button'
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
                              <div className='flex flex-col gap-1'>
                                <CardTitle className={`text-xl font-vt323 ${experience.type === 'work' ? 'neon-text-blue' : 'neon-text-pink'}`}>
                                  {experience.projectName}
                                </CardTitle>
                                <CardDescription className={`text-lg ${experience.type === 'work' ? 'text-neon-pink' : 'text-neon-blue'}`}>
                                  {experience.company ? `${experience.role} @${experience.company}` : experience.role}
                                </CardDescription>
                                <time className='text-base text-text-white-70 mt-1' dateTime={experience.period.replaceAll(/\s/g, '')}>
                                  {experience.period}
                                </time>
                              </div>
                            </CardHeader>
                            {/* Mobile tap indicator */}
                            <div
                              aria-hidden='true'
                              className={`absolute bottom-2 right-2 ${isSmallScreen ? '' : 'hidden'} rounded-full w-5 h-5 flex items-center justify-center
                                ${experience.type === 'work'
                ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/50'
                : 'bg-neon-pink/20 text-neon-pink border border-neon-pink/50'}`}
                            >
                              <span className='text-xs'>+</span>
                            </div>
                          </Card>
                        </button>
                      </PopoverTrigger>

                      <PopoverContent
                        align={isSmallScreen ? 'center' : 'start'}
                        alignOffset={isSmallScreen ? 0 : undefined}
                        className={`${isSmallScreen
                          ? 'w-screen h-screen fixed inset-0 max-w-[100vw] max-h-[100vh]'
                          : 'w-[500px] max-h-[600px]'}
                        backdrop-blur-sm border ${experience.type === 'work'
                ? 'border-neon-blue-50 shadow-neon-blue-lg'
                : 'border-neon-pink-50 shadow-neon-pink-lg'}
                        text-white p-3 md:p-4 z-[9999] ${isSmallScreen ? '' : 'rounded-xl'} overflow-y-auto`}
                        data-experience-popover='true'
                        id={`experience-popover-${index}`}
                        side={isSmallScreen ? 'bottom' : 'left'}
                        sideOffset={isSmallScreen ? 0 : 20}
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
                        onTouchEnd={handleTouchEnd}
                        onTouchStart={handleTouchStart}
                      >
                        <article aria-labelledby={`experience-title-${index}`} className={`${isSmallScreen ? 'h-full flex flex-col' : 'space-y-3'}`}>
                          {/* Mobile header with close button */}
                          <ExperiencePopoverHeaderMobile
                            experience={experience}
                            index={index}
                            onClose={() => setOpenPopoverIndex(null)}
                          />

                          {/* Scrollable content area */}
                          <div className={isSmallScreen ? 'flex-1 overflow-y-auto pb-6' : ''}>
                            <div className='flex justify-center w-full'>
                              <div className='space-y-3 w-full max-w-[540px] px-3 md:px-6 pb-safe'>
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
