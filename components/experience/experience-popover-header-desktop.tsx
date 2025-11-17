import { X } from 'lucide-react';
import { Experience } from '@/types/experience';
import { useIsSmallScreen } from '@/hooks/use-mobile';

type ExperiencePopoverHeaderDesktopProps = {
  experience: Experience;
  index: number;
  onClose: () => void;
};

export const ExperiencePopoverHeaderDesktop: React.FC<ExperiencePopoverHeaderDesktopProps> =
  ({ experience, index, onClose }) => {
    const isSmallScreen = useIsSmallScreen();
    const experienceSubtitle = `${experience.company ? `${experience.role} at ${experience.company}` : experience.role} • ${experience.location}`;

    return (
      <header className={`flex justify-between items-start ${isSmallScreen ? '' : 'mb-3'}`}>
        <div>
          <h4 className={`text-xl font-vt323 ${experience.type === 'work' ? 'neon-text-blue' : 'neon-text-pink'}`} id={`experience-title-${index}`}>
            {experience.projectName}
          </h4>
          <p className={`text-base ${experience.type === 'work' ? 'text-neon-pink' : 'text-neon-blue'}`}>
            {experienceSubtitle}
          </p>
        </div>
        {/* Close button - only visible on desktop */}
        {!isSmallScreen && (
          <button
            aria-controls={`experience-popover-${index}`}
            aria-label='Close details'
            className='p-1 rounded-full hover:bg-white/10 transition-colors'
            onClick={onClose}
          >
            <X className='text-white/70' size={16} />
          </button>
        )}
      </header>
    );
  };
