'use client';
import {ExternalLink} from 'lucide-react';
import {Experience} from '@/types/experience';

type ExperiencePopoverContentProps = {
  experience: Experience;
  index: number;
};

export const ExperiencePopoverContent: React.FC<ExperiencePopoverContentProps>
  = ({experience, index}) => (
    <>
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
    </>
  );
