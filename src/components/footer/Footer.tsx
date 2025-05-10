
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-adanac-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/ddab4652-3b97-4ec5-94a7-6216b5c7797a.png" 
                alt="Adanac Logo" 
                className="h-16"
              />
            </div>
            <p className="text-gray-300 mb-8 max-w-xs leading-relaxed">
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
            <h3 className="text-xl font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <FooterLink href="#">Performance Marketing</FooterLink>
              <FooterLink href="#">PPC Management</FooterLink>
              <FooterLink href="#">Conversion Optimization</FooterLink>
              <FooterLink href="#">SEO Services</FooterLink>
              <FooterLink href="#">Analytics & Reporting</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Subscribe</h3>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Get the latest marketing insights and strategies delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="btn-gradient w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>E10, Green Glen Layout, Outer Ring Road, Bellandur, Bengaluru, Karnataka, India - 560103</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@adanac.live" className="hover:text-white transition-colors">info@adanac.live</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+919998909758" className="hover:text-white transition-colors">+91 9998909758</a>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-start md:justify-end items-start md:items-center gap-4 md:gap-8">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Adanac. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
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
      className="bg-white/10 rounded-full h-10 w-10 flex items-center justify-center hover:bg-adanac-blue transition-colors"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <li>
      <a href={href} className="text-gray-300 hover:text-white transition-colors">
        {children}
      </a>
    </li>
  );
};

export default Footer;
