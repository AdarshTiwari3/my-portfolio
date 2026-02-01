import { Github, Mail } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarContent {
  initials: string;
  brand: string;
  links: NavLink[];
  githubUrl: string;
  email: string;
}

export function Navbar() {
  const navbar: NavbarContent = {
    initials: "AT",
    brand: "Adarsh Tiwari",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "About", href: "#about" },
    ],
    githubUrl: "https://github.com/AdarshTiwari3",
    email: "adarsh.tiwari.nitjsr@gmail.com",
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-surface/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3 text-textHeading font-semibold"
        >
          <div className="w-8 h-8 rounded-full bg-surfaceAlt border border-border flex items-center justify-center text-sm font-bold text-accent">
            {navbar.initials}
          </div>

          <span className="hidden sm:inline">
            {navbar.brand}
          </span>
        </a>

        <div className="flex items-center gap-6">
          {navbar.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-textSecondary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-3 ml-2">
            <a
              href={navbar.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${navbar.email}`}
              className="text-textSecondary hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
