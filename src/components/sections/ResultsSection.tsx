
import React from "react";
import { 
  AreaChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  BarChart as RechartsBarChart
} from "recharts";
import { Card } from "@/components/ui/card";

const performanceData = [
  {
    month: "Jan",
    ROI: 120,
    Conversions: 35,
  },
  {
    month: "Feb",
    ROI: 150,
    Conversions: 40,
  },
  {
    month: "Mar",
    ROI: 180,
    Conversions: 55,
  },
  {
    month: "Apr",
    ROI: 220,
    Conversions: 70,
  },
  {
    month: "May",
    ROI: 280,
    Conversions: 85,
  },
  {
    month: "Jun",
    ROI: 340,
    Conversions: 90,
  },
];

const testimonials = [
  {
    text: "Adanac transformed our marketing strategy. We've seen a 215% increase in qualified leads since partnering with them.",
    author: "Michael Chen",
    company: "TechVision Inc.",
  },
  {
    text: "Their data-driven approach to PPC management has reduced our cost per acquisition by over 40% while increasing conversions.",
    author: "Sarah Johnson",
    company: "Retail Solutions",
  },
  {
    text: "The team at Adanac consistently delivers results. Our e-commerce revenue has grown 150% year-over-year thanks to their strategies.",
    author: "David Miller",
    company: "ModernCart",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We don't just promise results—we deliver them. See how our
            performance marketing strategies create measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <Card className="p-6 shadow-lg border-none bg-white">
            <h3 className="text-xl font-semibold mb-6">ROI Performance</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={performanceData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="ROI"
                    stroke="#0D4BA0"
                    fill="#0D4BA0"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          <Card className="p-6 shadow-lg border-none bg-white">
            <h3 className="text-xl font-semibold mb-6">Conversion Growth</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={performanceData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Conversions" fill="#564DC8" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold mb-2">Client Success Stories</h3>
          <p className="text-gray-700">Don't take our word for it—hear what our clients have to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-lg border-none bg-gradient-to-br from-white to-gray-50">
              <div className="mb-4">
                <svg className="h-8 w-8 text-adanac-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
