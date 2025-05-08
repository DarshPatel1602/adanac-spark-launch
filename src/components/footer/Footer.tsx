
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-5">
              <img 
                src="/lovable-uploads/ddab4652-3b97-4ec5-94a7-6216b5c7797a.png" 
                alt="Adanac Logo" 
                className="h-16"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Data-driven performance marketing solutions that deliver measurable results for your business.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Performance Marketing</FooterLink>
              <FooterLink href="#">PPC Management</FooterLink>
              <FooterLink href="#">Conversion Optimization</FooterLink>
              <FooterLink href="#">SEO Services</FooterLink>
              <FooterLink href="#">Analytics & Reporting</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Get the latest marketing insights and strategies delivered to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l outline-none flex-1"
              />
              <button className="bg-adanac-blue px-4 py-2 rounded-r hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-gray-800 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Adanac. All rights reserved.
          </p>
          <div className="flex space-x-6 justify-center sm:justify-end">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a
      href="#"
      className="bg-gray-800 rounded-full h-10 w-10 flex items-center justify-center hover:bg-adanac-blue transition"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-white transition">
        {children}
      </a>
    </li>
  );
};

export default Footer;
