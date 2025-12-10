import { Experience } from '@/types/experience';

type ExperienceSeoContentProps = {
  experience: Experience;
};

export const ExperienceSeoContent: React.FC<ExperienceSeoContentProps> = ({ experience }) => (
  <div className='sr-only'>
    <h3>{experience.projectName}</h3>
    <p>
      {experience.role}
      {experience.company ? ` at ${experience.company}` : ''}
      {experience.client ? ` for ${experience.client}` : ''}
    </p>
    <p>{experience.period} - {experience.location}</p>

    <h4>Challenge</h4>
    <p>{experience.challenge}</p>

    <h4>Solution</h4>
    <p>{experience.solution}</p>

    <h4>Key Impact</h4>
    <ul>
      {experience.impact.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>

    <h4>Learnings</h4>
    <p>{experience.learnings}</p>

    <a href={experience.callToAction.url} rel='noopener noreferrer'>{experience.callToAction.text}</a>
  </div>
);
