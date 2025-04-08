
import { useState } from "react";
import { CheckCircle, CreditCard, DollarSign, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const FinancialDonation = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for your donation!",
      description: `Your $${donationAmount} donation will help save lives.`,
      variant: "default",
    });
    
    setDonationAmount("");
  };

  const donationOptions = [
    {
      amount: "10",
      description: "Provides essential supplies for one blood collection",
    },
    {
      amount: "25",
      description: "Supports blood testing procedures for 3 donations",
    },
    {
      amount: "50",
      description: "Helps fund transportation of blood to hospitals",
    },
    {
      amount: "100",
      description: "Sponsors a small community blood drive event",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Support Our <span className="text-primary">Mission</span>
                </h1>
                <p className="text-lg text-gray-700 max-w-lg">
                  Your financial contribution helps us maintain equipment, expand our reach, and save more lives through our blood donation programs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <DollarSign className="mr-2 text-primary" /> Make a Donation
                </h2>
                <form onSubmit={handleDonation} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {donationOptions.map((option) => (
                      <Button
                        key={option.amount}
                        type="button"
                        variant={donationAmount === option.amount ? "default" : "outline"}
                        className="h-auto py-4 flex flex-col items-center"
                        onClick={() => setDonationAmount(option.amount)}
                      >
                        <span className="text-xl font-bold">${option.amount}</span>
                        <span className="text-xs text-center mt-1">{option.description}</span>
                      </Button>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">Custom Amount ($)</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      min="1"
                      step="any"
                      placeholder="Enter amount"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Payment Method</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card" className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-1" /> Credit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Complete Donation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Impact</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how your financial contributions help support our mission to ensure blood is available to those in need.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Equipment & Supplies</h3>
                  <p className="text-gray-600">
                    Funding helps us purchase and maintain the necessary equipment and supplies for safe blood collection.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Community Outreach</h3>
                  <p className="text-gray-600">
                    Your donations support educational programs and community blood drives in underserved areas.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Research & Innovation</h3>
                  <p className="text-gray-600">
                    We invest in research and new technologies to improve blood collection, testing, and distribution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about financial donations to BloodMate.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <Dialog>
                <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardContent className="p-4 flex justify-between items-center">
                    <div className="font-medium">Is my donation tax-deductible?</div>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                  </CardContent>
                </Card>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Is my donation tax-deductible?</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    Yes, BloodMate is a registered non-profit organization, and all financial donations are tax-deductible to the extent allowed by law. You will receive a receipt for your donation that you can use for tax purposes.
                  </DialogDescription>
                </DialogContent>
              </Dialog>

              <Dialog>
                <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardContent className="p-4 flex justify-between items-center">
                    <div className="font-medium">How is my donation used?</div>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                  </CardContent>
                </Card>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>How is my donation used?</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    Your donation directly supports our blood donation programs, including equipment maintenance, staff training, community outreach, educational materials, and research. We are committed to transparency and publish annual reports detailing the use of all funds.
                  </DialogDescription>
                </DialogContent>
              </Dialog>

              <Dialog>
                <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardContent className="p-4 flex justify-between items-center">
                    <div className="font-medium">Can I make a recurring donation?</div>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                  </CardContent>
                </Card>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Can I make a recurring donation?</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    Yes, we offer monthly, quarterly, and annual recurring donation options. Recurring donations help us plan for the future and ensure consistent funding for our programs. You can set up a recurring donation through our website or by contacting our donor services team.
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialDonation;
