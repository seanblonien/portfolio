/**
 * Visual media type for experience entries
 */
export type ExperienceVisual = {
  caption: string;
  type: 'image' | 'diagram' | 'video';
  url: string;
};

/**
 * Call to action for experience entries
 */
export type ExperienceCallToAction = {
  text: string;
  url: string;
};

/**
 * Experience type - either work experience or project
 */
export type ExperienceType = 'work' | 'project';

/**
 * Experience entry interface
 */
export type Experience = {
  // Call to action (e.g., link to LinkedIn, GitHub, etc.)
  callToAction: ExperienceCallToAction;
  // Detailed content
  challenge: string;
  client?: string;
  company?: string;
  impact: string[];
  learnings: string;

  location: string;
  period: string;
  projectName: string;
  role: string;

  solution: string;

  // Type of experience (work or project)
  type: ExperienceType;

  // Visual content
  visuals?: ExperienceVisual[];
};
