
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, CheckCircle } from "lucide-react";
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  date: z.string().min(1, {
    message: "Please select a date.",
  }),
});

const CTASection = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [open, setOpen] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values);
    toast({
      title: "Consultation Scheduled",
      description: `Thank you ${values.name}! We'll confirm your consultation for ${values.date} shortly.`,
    });
    
    setShowSuccessMessage(true);
    form.reset();
    
    // Hide success message after 3 seconds and close dialog
    setTimeout(() => {
      setShowSuccessMessage(false);
      setOpen(false);
    }, 3000);
  }

  return (
    <section id="cta-section" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-adanac-blue to-adanac-purple opacity-90 -z-10"
        aria-hidden="true"
      ></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800')] bg-cover bg-center mix-blend-overlay -z-20"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Marketing Performance?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join hundreds of businesses that have achieved measurable growth through our data-driven marketing strategies.
          </p>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button 
                className="bg-white text-adanac-blue hover:bg-white/90 transition-opacity text-base px-8 py-6" 
                size="lg"
              >
                Schedule a Free Consultation
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Schedule Your Free Consultation</DialogTitle>
              </DialogHeader>
              {showSuccessMessage ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="rounded-full bg-green-100 p-3 text-green-600 mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your consultation has been scheduled successfully. We'll send you a confirmation email shortly.</p>
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
                            <Input placeholder="Your Name" {...field} />
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
                            <Input type="email" placeholder="Your Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="tel" placeholder="Your Phone" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                              <Input 
                                type="date" 
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end pt-2">
                      <Button type="submit" className="bg-adanac-blue hover:bg-adanac-blue/90">
                        Book Now
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </DialogContent>
          </Dialog>
          
          <div className="mt-8 flex justify-center">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white max-w-md p-4 rounded-lg">
              <p className="text-white/80">
                "Working with Adanac transformed our marketing approach. Our conversion rates increased by 40% within just three months!"
              </p>
              <div className="mt-3 font-medium">
                — Sarah Thompson, CEO at TechVision Inc.
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
