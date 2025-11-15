export const ExperienceLegend: React.FC = () => (
  <div className="flex justify-center gap-8 mb-8" role="group" aria-label="Timeline categories">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full border-2 border-neon-blue shadow-neon-blue" aria-hidden="true"></div>
      <span className="text-base text-text-white-80">Work Experience</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full border-2 border-neon-pink shadow-neon-pink" aria-hidden="true"></div>
      <span className="text-base text-text-white-80">Projects</span>
    </div>
  </div>
);
