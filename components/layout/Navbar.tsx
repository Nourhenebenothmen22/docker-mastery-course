'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { navLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const linkClass = (isActive: boolean) =>
    cn(
      'rounded-lg text-sm font-medium transition-all duration-200',
      isActive
        ? 'text-docker-400 bg-docker-500/10'
        : 'text-gray-300 hover:text-white hover:bg-white/5'
    );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container-custom flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Docker Mastery Home"
        >
          <img
            src="/docker-logo.png"
            alt="Docker logo"
            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-lg font-bold gradient-text">Docker Mastery</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(linkClass(pathname === link.href), 'px-3 py-2')}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          <span className={cn('block w-6 h-0.5 bg-gray-300 transition-all duration-300', mobileOpen && 'rotate-45 translate-y-2')} />
          <span className={cn('block w-6 h-0.5 bg-gray-300 transition-all duration-300', mobileOpen && 'opacity-0')} />
          <span className={cn('block w-6 h-0.5 bg-gray-300 transition-all duration-300', mobileOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-dark-900/95 backdrop-blur-md" onClick={() => setMobileOpen(false)}>
          <div className="container-custom px-4 py-6 flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(linkClass(pathname === link.href), 'px-4 py-3 text-base')}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
