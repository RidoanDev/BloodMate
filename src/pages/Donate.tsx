
import { useState } from "react";
import { Calendar, Clock, User, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationSteps from "@/components/DonationSteps";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  bloodType: z.string().min(1, { message: "Blood type is required" }),
  donationDate: z.string().min(1, { message: "Date is required" }),
  donationTime: z.string().min(1, { message: "Time is required" }),
  donationCenter: z.string().min(1, { message: "Donation center is required" }),
});

const Donate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      bloodType: "",
      donationDate: "",
      donationTime: "",
      donationCenter: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Appointment scheduled!",
        description: "We've received your donation appointment request.",
      });
      form.reset();
    }, 1500);
  };

  const eligibilityCriteria = [
    "Be at least 17 years old (16 with parental consent in some states)",
    "Weigh at least 110 pounds",
    "Be in good general health",
    "Not have donated blood in the last 56 days",
    "Not have had certain medical conditions or traveled to specific countries",
  ];

  const donationCenters = [
    "Central Blood Bank - Downtown",
    "BloodMate Donation Center - North",
    "Community Hospital Blood Drive",
    "University Medical Center",
    "Mobile Donation Unit - Shopping Mall",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-accent py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Donate Blood, Save Lives</h1>
              <p className="text-lg text-gray-700 mb-8">
                Your blood donation can help save up to three lives. Schedule an appointment today and become a hero.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span>30-45 minutes</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span>Every 56 days</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
                  <User className="h-5 w-5 text-primary mr-2" />
                  <span>Age 17+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Process */}
        <DonationSteps />

        {/* Donation Form & Eligibility */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Appointment Form */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Schedule a Donation</h2>
                <Card>
                  <CardContent className="pt-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} />
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
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+1 (555) 123-4567" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="bloodType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Blood Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your blood type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="A+">A+</SelectItem>
                                  <SelectItem value="A-">A-</SelectItem>
                                  <SelectItem value="B+">B+</SelectItem>
                                  <SelectItem value="B-">B-</SelectItem>
                                  <SelectItem value="AB+">AB+</SelectItem>
                                  <SelectItem value="AB-">AB-</SelectItem>
                                  <SelectItem value="O+">O+</SelectItem>
                                  <SelectItem value="O-">O-</SelectItem>
                                  <SelectItem value="unknown">I don't know</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="donationDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Date</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="donationTime"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Time</FormLabel>
                                <FormControl>
                                  <Input type="time" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="donationCenter"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Donation Center</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a donation center" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {donationCenters.map((center) => (
                                    <SelectItem key={center} value={center}>
                                      {center}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Eligibility & Info */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Eligibility Requirements</h2>
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {eligibilityCriteria.map((criteria, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Donation Centers</h2>
                <div className="space-y-4">
                  {donationCenters.map((center, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">{center}</h3>
                        <p className="text-sm text-gray-600">Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
