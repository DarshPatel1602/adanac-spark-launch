
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  MapPin,
  Mail,
  Phone,
  ArrowRight 
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to boost your marketing performance? Contact us today for a
            free consultation and discover how we can help grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 shadow-lg border-none bg-white">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form>
              <div className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="bg-gray-50" />
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" className="bg-gray-50" />
                </div>
                <div>
                  <Input placeholder="Company (Optional)" className="bg-gray-50" />
                </div>
                <div>
                  <Textarea 
                    placeholder="How can we help you?" 
                    className="h-32 bg-gray-50" 
                  />
                </div>
                <Button className="btn-gradient w-full">
                  Submit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </Card>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<MapPin className="h-6 w-6" />}
                  title="Address"
                  details={["123 Marketing Avenue", "San Francisco, CA 94105"]}
                />
                
                <ContactInfo 
                  icon={<Mail className="h-6 w-6" />}
                  title="Email"
                  details={["info@adanac.com", "support@adanac.com"]}
                />
                
                <ContactInfo 
                  icon={<Phone className="h-6 w-6" />}
                  title="Phone"
                  details={["+1 (555) 123-4567"]}
                />
              </div>
            </div>
            
            <Card className="p-6 mt-8 bg-gradient-to-r from-adanac-blue to-adanac-purple text-white">
              <h4 className="text-xl font-semibold mb-4">Ready to get started?</h4>
              <p className="mb-6">
                Schedule a free 30-minute consultation with our marketing experts.
              </p>
              <Button className="bg-white text-adanac-blue hover:bg-white/90">
                Book a Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  details 
}: { 
  icon: React.ReactNode, 
  title: string, 
  details: string[] 
}) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 h-12 w-12 bg-adanac-grey rounded-full flex items-center justify-center text-adanac-blue mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium mb-1">{title}</h4>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-700">{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
