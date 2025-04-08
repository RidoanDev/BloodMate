
import { Link } from "react-router-dom";
import { Heart, DropletIcon, Calendar, Award, ArrowRight, Users, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BloodTypeCard from "@/components/BloodTypeCard";

const Index = () => {
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

  const facts = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Every 2 Seconds",
      description: "Someone in the world needs blood"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "One Donation",
      description: "Can save up to three lives"
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "38% of Population",
      description: "Is eligible to donate blood"
    },
    {
      icon: <DropletIcon className="h-10 w-10 text-primary" />,
      title: "1 Pint",
      description: "Is the standard blood donation"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Donate Blood, <span className="text-primary">Save Lives</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                    Your blood donation can be a lifeline for those in need. Join BloodMate's mission to connect donors with recipients and make a difference today.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/donate">Donate Blood</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/get-blood">Request Blood</Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Over 10,000 successful donations</span>
                </div>
              </div>
              <div className="relative">
                <div className="blood-drop relative w-5/6 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDd8fGJsb29kJTIwZG9uYXRpb258ZW58MHx8fHwxNzE3NTQwNDk3fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                    alt="Blood donation" 
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-8 w-8 text-primary animate-pulse" />
                      <div>
                        <p className="font-bold text-gray-900">Emergency Need</p>
                        <p className="text-sm text-gray-600">O- blood type</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blood Type Compatibility Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Blood Type Compatibility</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Understanding blood type compatibility is crucial for successful transfusions. Find out which blood types can donate to and receive from each other.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link to="/donate" className="flex items-center">
                  View All Blood Types
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Blood Donation Facts</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn about the importance of blood donation and how your contribution can make a significant impact.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facts.map((fact, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {fact.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-2">{fact.title}</h3>
                    <p className="text-gray-600">{fact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
                <p className="text-primary-foreground/90 mb-8">
                  Whether you want to donate blood, request blood for a patient, or support our mission financially, every contribution counts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/donate">Donate Blood</Link>
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" size="lg" asChild>
                    <Link to="/financial-donation">Financial Support</Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <DropletIcon className="h-10 w-10 mb-4 text-primary-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Blood Donation</h3>
                  <p className="text-primary-foreground/90">Donate blood and save up to 3 lives with just one donation.</p>
                </div>
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <Calendar className="h-10 w-10 mb-4 text-primary-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Blood Drive</h3>
                  <p className="text-primary-foreground/90">Organize a blood drive in your community or workplace.</p>
                </div>
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <Users className="h-10 w-10 mb-4 text-primary-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
                  <p className="text-primary-foreground/90">Join our team of volunteers and help save more lives.</p>
                </div>
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <Award className="h-10 w-10 mb-4 text-primary-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Get Certified</h3>
                  <p className="text-primary-foreground/90">Take our First Aid and CPR certification courses.</p>
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

export default Index;
