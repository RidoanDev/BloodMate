
import { useState } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BloodTypeCard from "@/components/BloodTypeCard";

const formSchema = z.object({
  patientName: z.string().min(2, { message: "Patient name is required" }),
  bloodType: z.string().min(1, { message: "Blood type is required" }),
  quantity: z.string().min(1, { message: "Quantity is required" }),
  hospital: z.string().min(2, { message: "Hospital name is required" }),
  urgency: z.string().min(1, { message: "Urgency level is required" }),
  contactName: z.string().min(2, { message: "Contact name is required" }),
  contactPhone: z.string().min(10, { message: "Valid contact number is required" }),
  contactEmail: z.string().email({ message: "Invalid email address" }),
  additionalInfo: z.string().optional(),
});

const GetBlood = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: "",
      bloodType: "",
      quantity: "",
      hospital: "",
      urgency: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      additionalInfo: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Request submitted successfully",
        description: "We've received your blood request and will contact you shortly.",
      });
      form.reset();
    }, 1500);
  };

  const bloodTypes = [
    { 
      type: "A+", 
      canDonateTo: ["A+", "AB+"], 
      canReceiveFrom: ["A+", "A-", "O+", "O-"], 
      percentage: 35.7
    },
    { 
      type: "O+", 
      canDonateTo: ["O+", "A+", "B+", "AB+"], 
      canReceiveFrom: ["O+", "O-"], 
      percentage: 37.4
    },
    { 
      type: "B+", 
      canDonateTo: ["B+", "AB+"], 
      canReceiveFrom: ["B+", "B-", "O+", "O-"], 
      percentage: 8.5
    },
    { 
      type: "AB+", 
      canDonateTo: ["AB+"], 
      canReceiveFrom: ["All"], 
      percentage: 3.4
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-accent py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Request Blood</h1>
              <p className="text-lg text-gray-700 mb-8">
                Need blood for a patient? Complete the form below to submit a request, and our team will work to locate compatible donors as quickly as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Blood Request Form</h2>
                
                <Alert className="mb-8">
                  <AlertTriangle className="h-5 w-5" />
                  <AlertTitle>Important Notice</AlertTitle>
                  <AlertDescription>
                    For immediate emergencies, please call our emergency hotline at <strong>+8801712525910</strong> instead of submitting this form.
                  </AlertDescription>
                </Alert>
                
                <Card>
                  <CardContent className="pt-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Patient Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="patientName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Patient Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Full Name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="bloodType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Required Blood Type</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select blood type" />
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
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="quantity"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Units Required</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select quantity" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="1">1 Unit</SelectItem>
                                      <SelectItem value="2">2 Units</SelectItem>
                                      <SelectItem value="3">3 Units</SelectItem>
                                      <SelectItem value="4">4 Units</SelectItem>
                                      <SelectItem value="5+">5+ Units</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="hospital"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Hospital/Clinic</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Hospital Name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={form.control}
                            name="urgency"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Urgency Level</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select urgency level" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="critical">Critical - Need Immediately</SelectItem>
                                    <SelectItem value="urgent">Urgent - Within 24 hours</SelectItem>
                                    <SelectItem value="high">High - Within 48 hours</SelectItem>
                                    <SelectItem value="standard">Standard - Within 3-5 days</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="space-y-4 pt-4 border-t">
                          <h3 className="text-lg font-semibold">Contact Information</h3>
                          <FormField
                            control={form.control}
                            name="contactName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Contact Person</FormLabel>
                                <FormControl>
                                  <Input placeholder="Full Name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="contactPhone"
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
                            <FormField
                              control={form.control}
                              name="contactEmail"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="email@example.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={form.control}
                            name="additionalInfo"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Additional Information</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Any additional details about the request"
                                    className="min-h-[120px]" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit Blood Request"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Blood Compatibility</h2>
                <div className="space-y-4">
                  {bloodTypes.map((bloodType) => (
                    <BloodTypeCard
                      key={bloodType.type}
                      type={bloodType.type}
                      canDonateTo={bloodType.canDonateTo}
                      canReceiveFrom={bloodType.canReceiveFrom}
                      percentage={bloodType.percentage}
                    />
                  ))}
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-green-800 mb-2">How We Process Requests</h3>
                      <ul className="text-green-700 space-y-2 text-sm">
                        <li>1. We receive your request form</li>
                        <li>2. Our team verifies all information</li>
                        <li>3. We search our donor database for matches</li>
                        <li>4. We contact potential donors</li>
                        <li>5. We coordinate blood delivery to the hospital</li>
                        <li>6. We follow up to ensure receipt and compatibility</li>
                      </ul>
                    </div>
                  </div>
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

export default GetBlood;
