
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CTASection = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to a backend service
    // For now, we'll just show a success message
    toast({
      title: "Consultation Scheduled",
      description: `Thank you ${formData.name}! We'll confirm your consultation for ${formData.date} shortly.`,
    });
    
    // Reset the form
    setFormData({ name: "", email: "", phone: "", date: "" });
    setShowBookingForm(false);
  };

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
          
          {!showBookingForm ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-adanac-blue hover:bg-white/90 transition-opacity text-base px-8 py-6" 
                size="lg"
                onClick={() => setShowBookingForm(true)}
              >
                Schedule a Free Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6" size="lg">
                See Case Studies
              </Button>
            </div>
          ) : (
            <Card className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-adanac-blue mb-4">Schedule Your Free Consultation</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-adanac-blue/20"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-adanac-blue/20"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Your Phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-adanac-blue/20"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="pl-10 border-adanac-blue/20"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      type="submit" 
                      className="bg-adanac-blue hover:bg-adanac-blue/90 text-white w-full"
                    >
                      Book Now
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="border-adanac-blue text-adanac-blue"
                      onClick={() => setShowBookingForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </form>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
