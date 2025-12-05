import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from './animated-section';

export const Contact: React.FC = () => (
  <section className='section-container' id='contact'>
    <AnimatedSection>
      <h2 className='section-title'>CONTACT</h2>
    </AnimatedSection>

    <AnimatedSection delay={0.1}>
      <div className='card'>
        <div className='flex flex-col items-center text-center'>
          <h3 className='text-2xl font-vt323 neon-text-blue mb-4'>Get In Touch</h3>
          <p className='mb-4 md:mb-6 text-text-white-80 max-w-2xl'>
            {'Feel free to reach out if you\'re looking for a developer, have a question, or just want to connect.'}
          </p>

          <AnimatedSection delay={0.2}>
            <div className='flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8'>
              <Button
                asChild
                className='bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink-10 hover:shadow-neon-pink-lg rounded-xl'
              >
                <a className='flex items-center gap-2' href='mailto:contact@seanblonien.com'>
                  <Mail size={18} />
                  {' '}
                  Email Me
                </a>
              </Button>
              <Button
                asChild
                className='border-neon-blue text-neon-blue hover:bg-neon-blue-10 hover:shadow-neon-blue-lg rounded-xl'
                variant='outline'
              >
                <a
                  className='flex items-center gap-2'
                  href='https://linkedin.com/in/seanblonien'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <Linkedin size={18} />
                  {' '}
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                className='border-neon-orange text-neon-orange hover:bg-neon-orange-10 hover:shadow-neon-orange-lg rounded-xl'
                variant='outline'
              >
                <a
                  className='flex items-center gap-2'
                  href='https://github.com/seanblonien'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <Github size={18} />
                  {' '}
                  GitHub
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  </section>
);
