
import React from "react";
import { 
  LineChart, 
  BarChart2, 
  Zap, 
  Search, 
  BarChart, 
  MessageSquare 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Performance Marketing",
    description: "Data-driven campaigns that maximize your ROI across paid channels.",
    icon: <LineChart className="h-10 w-10 text-adanac-blue" />,
  },
  {
    title: "PPC Management",
    description: "Strategic pay-per-click management for Google, Facebook, and beyond.",
    icon: <BarChart2 className="h-10 w-10 text-adanac-blue" />,
  },
  {
    title: "Conversion Rate Optimization",
    description: "Turn more visitors into customers through data-backed optimization.",
    icon: <Zap className="h-10 w-10 text-adanac-blue" />,
  },
  {
    title: "SEO Services",
    description: "Increase organic visibility and drive qualified traffic to your website.",
    icon: <Search className="h-10 w-10 text-adanac-blue" />,
  },
  {
    title: "Analytics & Reporting",
    description: "In-depth analysis and transparent reporting on your marketing performance.",
    icon: <BarChart className="h-10 w-10 text-adanac-blue" />,
  },
  {
    title: "Social Media Marketing",
    description: "Build brand awareness and engagement across major social platforms.",
    icon: <MessageSquare className="h-10 w-10 text-adanac-blue" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-adanac-silver/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold mb-5">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive digital marketing solutions that drive growth
            and deliver measurable results for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  index 
}: { 
  title: string, 
  description: string, 
  icon: React.ReactNode,
  index: number
}) => {
  return (
    <Card 
      className="p-8 hover:shadow-elevated transition-all duration-300 border-none bg-white animate-on-scroll" 
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-6 bg-adanac-silver/30 w-16 h-16 rounded-lg flex items-center justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </Card>
  );
};

export default ServicesSection;
