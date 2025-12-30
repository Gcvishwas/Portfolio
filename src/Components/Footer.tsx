import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

//React.ReactNode is a type that represents any node that can be rendered in React, including strings, numbers, elements, and fragments.
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}
// React.FC represents functional component.It is generic type that takes props type as an argument.
// In this case, SocialLink becomes functional component that takes SocialLinkProps as its props type

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        p-2 border border-border rounded-full
        transition-all duration-300
        hover:scale-110 hover:border-transparent
        hover:${hoverColor}
      `}
    >
      {icon}
    </a>
  );
};
const Footer = () => {
  return (
    <footer className="bg-background/50 relative  text-foreground">
      <div className="mt-4 mb-4 h-px bg-border border-solid border-black"></div>
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold tracking-wide">Vishwas GC</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Building modern web experiences with extensive technology.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted foregground">
              <li className="hover:text-primary transition-colors cursor-pointer">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex gap-4 items-center justify-center">
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook />}
                hoverColor={"text-primary"}
              />
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram />}
                hoverColor={"text-primary"}
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<Linkedin />}
                hoverColor={"text-primary"}
              />
              <SocialLink
                href="https://github.com/Gcvishwas"
                icon={<Github />}
                hoverColor={"text-primary"}
              />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="mt-4 mb-4 h-px bg-border border-solid border-black"></div>

        {/* Ending */}
        <p className="text-sm text-muted-foreground text-center italic flex justify-center items-center gap-1">
          यो मनदेखि त्यो मनसम्म{" "}
          <span className="text-primary animate-pulse ">❤</span>
        </p>
        <p className="text-base text-muted-foreground">
          &copy; {new Date().getFullYear()} Vishwas GC. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
