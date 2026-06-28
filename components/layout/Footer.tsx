import Link from 'next/link';
import { navLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import DockerLogo from '@/components/DockerLogo';
import { WhatsAppIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from '@/data/icons';

const socialLinks = [
  { label: 'WhatsApp', href: siteConfig.author.whatsapp, icon: WhatsAppIcon },
  { label: 'LinkedIn', href: siteConfig.author.linkedin, icon: LinkedInIcon },
  { label: 'GitHub', href: siteConfig.author.github, icon: GitHubIcon },
  { label: 'Instagram', href: siteConfig.author.instagram, icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-900" role="contentinfo">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <DockerLogo size={32} />
              <span className="text-lg font-bold gradient-text">{siteConfig.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Master Docker from zero to deployment. A complete hands-on course covering containers, images, Compose,
              networking, and real-world deployment strategies.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-docker-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm mb-4">{siteConfig.author.name}</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-dark-700 text-gray-400 hover:text-docker-400 hover:bg-docker-500/10 border border-white/5 transition-all duration-200"
                    aria-label={`Visit ${link.label}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="text-gray-500 text-xs">
            Built with Next.js by{' '}
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-docker-400 hover:text-docker-300 transition-colors"
            >
              {siteConfig.author.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
