
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-adanac-silver/30 to-transparent opacity-70 -z-10" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-adanac-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-20 left-10 w-24 h-24 bg-adanac-purple/5 rounded-full blur-2xl -z-10"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0 animate-slow-fade-in">
            <h1 className="font-heading font-bold mb-6">
              Boost Your 
              <span className="gradient-text block"> Marketing Performance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-lg leading-relaxed">
              Data-driven advertising strategies that deliver measurable results for your business. Transform your marketing ROI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button className="btn-gradient text-base px-8 py-6" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-base px-8 py-6 border-adanac-blue text-adanac-blue" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-adanac-blue to-adanac-purple rounded-lg blur-xl opacity-50"></div>
              <div className="bg-white rounded-lg p-4 relative shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
                  alt="Digital Marketing Dashboard" 
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-adanac-purple/10 w-40 h-40 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
