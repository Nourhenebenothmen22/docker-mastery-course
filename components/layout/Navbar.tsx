'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { navLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';
import DockerLogo from '@/components/DockerLogo';

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
      'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
      isActive
        ? 'text-white bg-gradient-to-r from-docker-500/20 to-blue-600/10 shadow-sm shadow-docker-500/10 border border-docker-500/20'
        : 'text-gray-400 hover:text-white hover:bg-white/5'
    );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300 h-[72px]',
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/10'
          : 'bg-dark-900/70 backdrop-blur-xl border-b border-transparent'
      )}
      role="banner"
    >
      <nav className="container-custom flex items-center justify-between h-full px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Docker Mastery Home"
        >
          <DockerLogo size={34} className="transition-transform duration-300 group-hover:scale-110" />
          <span className="text-lg font-bold gradient-text">Docker Mastery</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(pathname === link.href)}
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
          <span className={cn('block w-6 h-[2px] bg-gray-300 rounded transition-all duration-300', mobileOpen && 'rotate-45 translate-y-[7px]')} />
          <span className={cn('block w-6 h-[2px] bg-gray-300 rounded transition-all duration-300', mobileOpen && 'opacity-0')} />
          <span className={cn('block w-6 h-[2px] bg-gray-300 rounded transition-all duration-300', mobileOpen && '-rotate-45 -translate-y-[7px]')} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-40 bg-dark-900/90 backdrop-blur-xl" onClick={() => setMobileOpen(false)}>
          <div className="container-custom px-4 py-6 flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(linkClass(pathname === link.href), 'px-5 py-3.5 text-base')}
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
