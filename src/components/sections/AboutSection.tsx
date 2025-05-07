
import React from "react";
import { Card } from "@/components/ui/card";
import { Award, Target, Users, TrendingUp } from "lucide-react";

const values = [
  {
    title: "Data-Driven",
    description: "We base all marketing decisions on comprehensive data analysis, not guesswork.",
    icon: <TrendingUp className="h-8 w-8 text-adanac-blue" />,
  },
  {
    title: "Results-Focused",
    description: "Our success is measured by the tangible results we deliver for our clients.",
    icon: <Target className="h-8 w-8 text-adanac-blue" />,
  },
  {
    title: "Transparent",
    description: "We provide clear, honest reporting so you always know where your marketing stands.",
    icon: <Award className="h-8 w-8 text-adanac-blue" />,
  },
  {
    title: "Collaborative",
    description: "We work as an extension of your team, aligning with your business goals.",
    icon: <Users className="h-8 w-8 text-adanac-blue" />,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-adanac-grey">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Adanac</h2>
            <p className="text-lg text-gray-700 mb-6">
              Adanac is a performance marketing agency specializing in data-driven advertising strategies. We help businesses of all sizes maximize their marketing ROI through strategic campaign management and optimization.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2018, our team of marketing experts combines technical expertise with creative thinking to deliver exceptional results for our clients across various industries.
            </p>
            <p className="text-lg font-medium gradient-text">
              Our mission is to transform how businesses approach digital advertising, making data-backed decisions that drive measurable growth.
            </p>
          </div>
          
          <div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-adanac-blue to-adanac-purple rounded-lg blur-xl opacity-50"></div>
              <div className="bg-white rounded-lg p-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
                  alt="Team working on marketing strategy" 
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-shadow border-none bg-white"
              >
                <div className="mx-auto mb-4 flex justify-center">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-700">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
