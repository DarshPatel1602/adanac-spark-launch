
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
    <section id="services" className="py-20 bg-adanac-grey">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
    <Card className="p-6 hover:shadow-lg transition-shadow border-none bg-white animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </Card>
  );
};

export default ServicesSection;
