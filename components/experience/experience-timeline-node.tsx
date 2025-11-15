import {Experience} from '@/types/experience';

export const ExperienceTimelineNode: React.FC<{experience: Experience}> = ({experience}) => (
  <div
    className={`absolute md:left-1/2 left-[20px] top-6 w-4 h-4 rounded-full bg-dark-blue border-2
                               ${experience.type === 'work'
    ? 'border-neon-blue shadow-neon-blue'
    : 'border-neon-pink shadow-neon-pink'}
                               md:-translate-x-1/2 z-20`}
    aria-hidden="true"
  >
  </div>
);
