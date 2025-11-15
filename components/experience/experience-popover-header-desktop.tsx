import {Experience} from '@/types/experience';
import {X} from 'lucide-react';
import {useIsSmallScreen} from '@/hooks/use-mobile';

type ExperiencePopoverHeaderDesktopProps = {
  experience: Experience;
  index: number;
  onClose: () => void;
};

export const ExperiencePopoverHeaderDesktop: React.FC<ExperiencePopoverHeaderDesktopProps>
  = ({experience, index, onClose}) => {
    const isSmallScreen = useIsSmallScreen();

    return (
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
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close details"
            aria-controls={`experience-popover-${index}`}
          >
            <X size={16} className="text-white/70" />
          </button>
        )}
      </header>
    );
  };
