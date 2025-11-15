import {useIsSmallScreen} from '@/hooks/use-mobile';
import {Experience} from '@/types/experience';
import {X} from 'lucide-react';

type ExperiencePopoverHeaderMobileProps = {
  experience: Experience;
  index: number;
  onClose: () => void;
};

export const ExperiencePopoverHeaderMobile: React.FC<ExperiencePopoverHeaderMobileProps>
  = ({experience, index, onClose}) => {
    const isSmallScreen = useIsSmallScreen();
    return isSmallScreen && (
      <header className="sticky top-0 left-0 right-0 pb-2 mb-2 border-b border-white/10 bg-[rgba(10,10,32,0.98)] z-10 pr-[17px]">
        <div className="flex justify-center w-full">
          <div className="flex justify-between items-center w-full max-w-[540px] px-3 md:px-6">
            <h3 className={`text-2xl font-vt323 ${experience.type === 'work' ? 'neon-text-blue' : 'neon-text-pink'} truncate`}>
              Details
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors flex-shrink-0"
              aria-label="Close details"
              aria-controls={`experience-popover-${index}`}
            >
              <X size={20} className="text-white/70" />
            </button>
          </div>
        </div>
      </header>
    );
  };
