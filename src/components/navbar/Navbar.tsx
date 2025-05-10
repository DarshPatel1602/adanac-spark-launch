
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-soft py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/ddab4652-3b97-4ec5-94a7-6216b5c7797a.png" 
                alt="Adanac Logo" 
                className="h-14"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#results">Results</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <Button className="btn-gradient">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              className="p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="bg-white shadow-elevated py-5 px-6 mx-4 my-2 rounded-lg">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink href="#services" onClick={toggleMenu}>Services</MobileNavLink>
            <MobileNavLink href="#results" onClick={toggleMenu}>Results</MobileNavLink>
            <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <div className="pt-4">
              <Button className="btn-gradient w-full">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-gray-800 font-medium transition-all hover:text-adanac-blue relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-adanac-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-adanac-blue hover:bg-gray-50 rounded-md transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
