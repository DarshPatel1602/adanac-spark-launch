
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Adanac</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
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
          "md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <MobileNavLink href="#home" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink href="#services" onClick={toggleMenu}>Services</MobileNavLink>
          <MobileNavLink href="#results" onClick={toggleMenu}>Results</MobileNavLink>
          <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
          <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
          <div className="pt-2">
            <Button className="btn-gradient w-full">Get Started</Button>
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
      className="text-gray-800 hover:text-adymize-blue font-medium transition-colors"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
