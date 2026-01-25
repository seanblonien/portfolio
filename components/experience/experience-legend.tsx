export function ExperienceLegend() {
  return (
    <div aria-label='Timeline categories' className='flex justify-center gap-8 mb-8' role='group'>
      <div className='flex items-center gap-2'>
        <div aria-hidden='true' className='w-3 h-3 rounded-full border-2 border-neon-blue shadow-neon-blue' />
        <span className='text-base text-text-white-80'>Work Experience</span>
      </div>
      <div className='flex items-center gap-2'>
        <div aria-hidden='true' className='w-3 h-3 rounded-full border-2 border-neon-pink shadow-neon-pink' />
        <span className='text-base text-text-white-80'>Projects</span>
      </div>
    </div>
  );
}
