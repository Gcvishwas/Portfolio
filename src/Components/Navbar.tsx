import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
};
const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenu]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScroll ? "py-4 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">VGcode</span>
          </span>
        </a>

        {/* Desktop nav */}

        <div className="hidden md:flex space-x-8 transform -translate-x-1/2 left-1/2 absolute">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile nav */}

        <button
          onClick={() => setIsMenu((prev) => !prev)}
          className="md:hidden p-1 mr-2 text-foreground z-50"
          aria-label={isMenu ? "Close Menu" : "Open Menu"}
        >
          {isMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 h-screen bg-background backdrop-blur-lg px-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenu ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col text-xl space-y-8 ">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => {
                  setIsMenu(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
