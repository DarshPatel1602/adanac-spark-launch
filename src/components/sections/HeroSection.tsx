
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-blue-50 to-transparent opacity-70 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Boost Your 
              <span className="gradient-text block"> Marketing Performance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Data-driven advertising strategies that deliver measurable results for your business. Transform your marketing ROI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-gradient text-base px-8 py-6" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-base px-8 py-6" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-adymize-blue to-adymize-purple rounded-lg blur-xl opacity-50"></div>
              <div className="bg-white rounded-lg p-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
                  alt="Digital Marketing Dashboard" 
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-adymize-purple/10 w-40 h-40 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
