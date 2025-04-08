
import { Phone, AlertCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyCard from "@/components/EmergencyCard";

const Emergency = () => {
  const emergencyContacts = [
    {
      title: "BloodMate Emergency Line",
      phone: "+8801712525910",
      description: "24/7 emergency blood request service for hospitals and patients."
    },
    {
      title: "Ambulance Services",
      phone: "911",
      description: "Call for immediate medical emergency transport services."
    },
    {
      title: "Poison Control Center",
      phone: "1-800-222-1222",
      description: "For emergencies involving exposure to toxic substances."
    },
    {
      title: "Medical Crisis Helpline",
      phone: "1-800-273-8255",
      description: "24/7 crisis support and guidance during medical emergencies."
    },
  ];

  const hospitals = [
    {
      name: "Central City Hospital",
      address: "123 Healthcare Ave, Central City",
      phone: "(555) 123-4567",
      hours: "24/7 Emergency Services"
    },
    {
      name: "Mercy Medical Center",
      address: "456 Wellness Blvd, Northside",
      phone: "(555) 234-5678",
      hours: "24/7 Emergency Services"
    },
    {
      name: "Community General Hospital",
      address: "789 Hope Street, Westview",
      phone: "(555) 345-6789",
      hours: "24/7 Emergency Services"
    },
    {
      name: "University Medical Center",
      address: "101 Medical School Rd, Eastside",
      phone: "(555) 456-7890",
      hours: "24/7 Emergency Services"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-red-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
                <AlertCircle className="h-10 w-10" />
              </div>
              <h1 className="text-4xl font-bold mb-6">Emergency Contacts</h1>
              <p className="text-xl mb-8">
                Access critical emergency contacts for immediate assistance during blood-related and other medical emergencies.
              </p>
              <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-red-50 hover:text-red-700 border-white" asChild>
                <a href="tel:+8801712525910" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Emergency Hotline</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency Alert */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <Alert className="bg-yellow-50 border-yellow-200 text-yellow-800">
              <AlertCircle className="h-5 w-5 text-yellow-800" />
              <AlertTitle className="text-yellow-800 font-bold">Important Notice</AlertTitle>
              <AlertDescription className="text-yellow-700">
                In life-threatening situations, always call 911 immediately before contacting any other service.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Critical Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyContacts.map((contact, index) => (
                <EmergencyCard
                  key={index}
                  title={contact.title}
                  phone={contact.phone}
                  description={contact.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Nearest Hospitals */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Nearest Hospitals & Blood Banks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hospitals.map((hospital, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{hospital.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{hospital.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>{hospital.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>{hospital.hours}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={`tel:${hospital.phone.replace(/[^0-9]/g, '')}`}>
                          <Phone className="h-4 w-4 mr-2" /> Call
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <a href={`https://maps.google.com/?q=${encodeURIComponent(hospital.address)}`} target="_blank" rel="noopener noreferrer">
                          <MapPin className="h-4 w-4 mr-2" /> Directions
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Instructions */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">What To Do In An Emergency</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Blood Loss Emergency</h3>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Apply direct pressure to the wound using a clean cloth or bandage.</li>
                    <li>If possible, elevate the wounded area above the heart.</li>
                    <li>Call 911 or have someone take you to the emergency room.</li>
                    <li>Do not remove the pressure until medical help arrives.</li>
                    <li>If blood soaks through, add another layer without removing the first.</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Emergency Blood Request</h3>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Call our emergency hotline at +880171525910</li>
                    <li>Provide the patient's name, blood type, and location.</li>
                    <li>Specify the quantity of blood needed and urgency level.</li>
                    <li>Provide a callback number for our team to reach you.</li>
                    <li>Our emergency response team will coordinate delivery with the hospital.</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">CPR Emergency Steps</h3>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Check if the person is responsive by tapping them and shouting.</li>
                    <li>If unresponsive, call 911 immediately or have someone else call.</li>
                    <li>Begin chest compressions: Push hard and fast in the center of the chest.</li>
                    <li>Aim for a rate of 100-120 compressions per minute.</li>
                    <li>Continue CPR until professional help arrives.</li>
                  </ol>
                  <div className="mt-6">
                    <Button asChild>
                      <a href="/training">Learn CPR with our training course</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Emergency;
