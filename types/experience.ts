/**
 * Types for the experience component
 */

/**
 * Visual media type for experience entries
 */
export type ExperienceVisual = {
  type: 'image' | 'diagram' | 'video';
  url: string;
  caption: string;
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
export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  
  // Detailed content
  challenge: string;
  solution: string;
  impact: string[];
  learnings: string;
  
  // Visual content
  visuals?: ExperienceVisual[];
  
  // Call to action (e.g., link to LinkedIn, GitHub, etc.)
  callToAction: ExperienceCallToAction;
  
  // Type of experience (work or project)
  type: ExperienceType;
}
