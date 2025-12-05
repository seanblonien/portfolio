import Image from 'next/image';
import { ArrowDown, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VHSTitle } from './vhs-title';

export const Hero: React.FC = () => (
  <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
    <div className='absolute inset-0 z-0'>
      <Image
        fill
        priority
        alt='Vaporwave background'
        className='object-cover opacity-60'
        src='/images/vaporwave-bg.webp'
      />
    </div>

    <div className='section-container flex flex-col items-center text-center z-10'>
      <VHSTitle />
      <h2 className='text-3xl md:text-5xl font-vt323 mb-8 neon-text-orange'>SENIOR SOFTWARE ENGINEER</h2>
      <p className='text-xl max-w-2xl mb-8 text-text-white-90'>
        Building modern reactive web & mobile apps with a focus on product development.
        Specializing in React, TypeScript, and serverless cloud architecture.
      </p>

      <div className='flex flex-col sm:flex-row gap-4 mb-12'>
        <Button
          asChild
          className='bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink-10 hover:shadow-neon-pink-lg rounded-xl'
        >
          <a className='flex items-center gap-2' href='#about'>
            EXPLORE
            {' '}
            <ArrowDown size={16} />
          </a>
        </Button>

        <Button
          asChild
          className='bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue-10 hover:shadow-neon-blue-lg rounded-xl'
        >
          <a
            className='flex items-center gap-2'
            href='/resume.pdf'
          >
            RESUME
            {' '}
            <FileText size={16} />
          </a>
        </Button>
      </div>
    </div>
  </section>
);
