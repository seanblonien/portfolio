import { ExternalLink } from 'lucide-react';
import { Experience } from '@/types/experience';

type ExperiencePopoverContentProps = {
  experience: Experience;
  index: number;
};

export const ExperiencePopoverContent: React.FC<ExperiencePopoverContentProps> =
  ({ experience, index }) => (
    <>
      {/* Challenge */}
      <section aria-labelledby={`challenge-heading-${index}`}>
        <h5 className='text-lg uppercase text-text-white-60 mb-1' id={`challenge-heading-${index}`}>Challenge</h5>
        <p className='text-base text-text-white-90 break-words'>{experience.challenge}</p>
      </section>

      {/* Solution */}
      <section aria-labelledby={`solution-heading-${index}`}>
        <h5 className='text-lg uppercase text-text-white-60 mb-1' id={`solution-heading-${index}`}>Solution</h5>
        <p className='text-base text-text-white-90 break-words'>{experience.solution}</p>
      </section>

      {/* Impact */}
      {experience.impact && experience.impact.length > 0 && (
        <section aria-labelledby={`impact-heading-${index}`}>
          <h5 className='text-lg uppercase text-text-white-60 mb-1' id={`impact-heading-${index}`}>Key Impact</h5>
          <ul className='list-disc pl-4 text-text-white-80 text-base space-y-2'>
            {experience.impact.map((item, i) => (
              <li key={i} className='break-words'>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Learnings */}
      <section aria-labelledby={`learnings-heading-${index}`}>
        <h5 className='text-lg uppercase text-text-white-60 mb-1' id={`learnings-heading-${index}`}>Learnings</h5>
        <p className='text-base text-text-white-90 break-words'>{experience.learnings}</p>
      </section>

      {/* Call to Action */}
      <footer>
        <a
          className={`inline-flex items-center text-base ${experience.type === 'work'
            ? 'text-neon-blue hover:text-neon-pink'
            : 'text-neon-pink hover:text-neon-blue'} transition-colors`}
          href={experience.callToAction.url}
          rel='noopener noreferrer'
          target='_blank'
        >
          {experience.callToAction.text}
          {' '}
          <ExternalLink className='ml-1' size={16} />
        </a>
      </footer>
    </>
  );
