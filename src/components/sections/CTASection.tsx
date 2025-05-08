
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-adanac-blue to-adanac-purple opacity-90 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800')] bg-cover bg-center mix-blend-overlay -z-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Marketing Performance?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join hundreds of businesses that have achieved measurable growth through our data-driven marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-adanac-blue hover:bg-white/90 transition-opacity text-base px-8 py-6" size="lg">
              Schedule a Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6" size="lg">
              See Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
