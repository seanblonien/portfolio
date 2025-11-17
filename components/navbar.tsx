'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { debounce } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/seanblonien', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/seanblonien', icon: Linkedin },
];

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = debounce(() => {
      setHasScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute('id') || '';
        }
      });

      setActiveSection(currentSection);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('nav')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? 'backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
      style={hasScrolled ? { backgroundColor: 'var(--dark-blue-80, rgba(10, 10, 32, 0.8))' } : undefined}
    >
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <Link
            className='font-vt323 text-2xl neon-text-pink hover:scale-105 transition-transform'
            href='/'
          >
            SEAN.BLONIEN
          </Link>

          {/* Desktop menu */}
          <div className='hidden md:flex items-center space-x-8'>
            <div className='flex space-x-6'>
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  className={`font-vt323 text-lg transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'neon-text-blue'
                      : 'text-white hover:neon-text-blue'
                  }`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className='flex space-x-4 border-l border-white/20 pl-6'>
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    aria-label={item.name}
                    className='text-white/70 hover:text-neon-pink transition-colors'
                    href={item.href}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className='text-white hover:text-neon-blue p-1'
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden absolute w-full backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: 'var(--dark-blue-95, rgba(10, 10, 32, 0.95))' }}
      >
        <div className='px-4 py-2 space-y-3'>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              className={`block py-2 font-vt323 text-lg ${
                activeSection === item.href.slice(1)
                  ? 'neon-text-blue'
                  : 'text-white hover:neon-text-blue'
              }`}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className='flex space-x-6 pt-2 border-t border-white/20'>
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  aria-label={item.name}
                  className='text-white/70 hover:text-neon-pink transition-colors'
                  href={item.href}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
