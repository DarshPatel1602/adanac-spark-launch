
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values);
    toast({
      title: "Message sent successfully",
      description: "We'll get back to you as soon as possible.",
    });
    setIsSubmitted(true);
    form.reset();
  }

  return (
    <section id="contact" className="py-20 bg-white">
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
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="rounded-full bg-green-100 p-3 text-green-600 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-medium mb-2">Thank You!</h4>
                <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Name" className="bg-gray-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Email" type="email" className="bg-gray-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Company (Optional)" className="bg-gray-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="h-32 bg-gray-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="btn-gradient w-full">
                    Submit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            )}
          </Card>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<MapPin className="h-6 w-6" />}
                  title="Address"
                  details={["E10, Green Glen Layout, Outer Ring Road", "Bellandur, Bengaluru, Karnataka, India - 560103"]}
                />
                
                <ContactInfo 
                  icon={<Mail className="h-6 w-6" />}
                  title="Email"
                  details={["info@adanac.live", "support@adanac.live"]}
                />
                
                <ContactInfo 
                  icon={<Phone className="h-6 w-6" />}
                  title="Phone"
                  details={["+91 9998909758"]}
                />
              </div>
            </div>
            
            <Card className="p-6 mt-8 bg-gradient-to-r from-adanac-blue to-adanac-purple text-white">
              <h4 className="text-xl font-semibold mb-4">Ready to get started?</h4>
              <p className="mb-6">
                Schedule a free 30-minute consultation with our marketing experts.
              </p>
              <Button 
                className="bg-white text-adanac-blue hover:bg-white/90"
                onClick={() => {
                  document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
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
