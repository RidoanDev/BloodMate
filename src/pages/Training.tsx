
import { useState } from "react";
import { Award, BookOpen, Calendar, CheckCircle, Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Training = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  
  const firstAidCourses = [
    {
      id: 1,
      title: "Basic First Aid Certification",
      description: "Learn essential first aid skills including wound care, CPR basics, and emergency response.",
      duration: "4 hours",
      price: "$75",
      level: "Beginner",
      upcoming: ["May 28, 2023", "June 15, 2023", "July 2, 2023"],
      rating: 4.8,
      reviews: 124,
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      id: 2,
      title: "Advanced First Aid & Trauma Care",
      description: "Advanced techniques for managing serious injuries, medical emergencies, and trauma situations.",
      duration: "8 hours",
      price: "$150",
      level: "Intermediate",
      upcoming: ["June 10, 2023", "July 22, 2023"],
      rating: 4.9,
      reviews: 86,
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      id: 3,
      title: "First Aid for Parents & Caregivers",
      description: "Specialized first aid training focused on injuries and emergencies common with infants and children.",
      duration: "6 hours",
      price: "$95",
      level: "Beginner",
      upcoming: ["June 3, 2023", "June 24, 2023", "July 15, 2023"],
      rating: 4.7,
      reviews: 92,
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
  ];
  
  const cprCourses = [
    {
      id: 4,
      title: "Basic CPR Certification",
      description: "Learn how to perform cardiopulmonary resuscitation (CPR) correctly to help save lives in emergency situations.",
      duration: "4 hours",
      price: "$85",
      level: "Beginner",
      upcoming: ["May 27, 2023", "June 17, 2023", "July 8, 2023"],
      rating: 4.9,
      reviews: 156,
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      id: 5,
      title: "Healthcare Provider CPR & AED",
      description: "Professional-level CPR training for healthcare workers, including AED use and special circumstances.",
      duration: "6 hours",
      price: "$125",
      level: "Professional",
      upcoming: ["June 10, 2023", "June 24, 2023", "July 15, 2023"],
      rating: 4.8,
      reviews: 112,
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      id: 6,
      title: "Pediatric CPR & Choking Response",
      description: "Specialized CPR techniques for infants and children, plus responding to choking emergencies.",
      duration: "5 hours",
      price: "$95",
      level: "Intermediate",
      upcoming: ["June 3, 2023", "July 1, 2023", "July 22, 2023"],
      rating: 4.9,
      reviews: 78,
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
  ];

  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Emergency Medicine Physician",
      image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9jdG9yfHx8fHx8MTY4ODE2OTI0Ng&ixlib=rb-4.0.3&q=80&w=300",
      bio: "Dr. Johnson has 15 years of experience in emergency medicine and is passionate about teaching life-saving skills to the community.",
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      title: "Paramedic & Lead Trainer",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFyYW1lZGljfHx8fHx8MTY4ODE2OTMyNQ&ixlib=rb-4.0.3&q=80&w=300",
      bio: "Alex has been a paramedic for over a decade and specializes in CPR training and emergency response techniques.",
    },
    {
      id: 3,
      name: "Michelle Lee",
      title: "RN & First Aid Specialist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bnVyc2V8fHx8fHwxNjg4MTY5Mzgy&ixlib=rb-4.0.3&q=80&w=300",
      bio: "Michelle brings her nursing expertise to our training program, focusing on practical first aid skills for everyday emergencies.",
    },
  ];

  const renderCourseCards = (courses: any[]) => {
    return courses.map((course) => (
      <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="bg-accent p-4 flex items-center">
          <div className="bg-white rounded-full p-2 mr-3">
            {course.icon}
          </div>
          <div>
            <Badge variant="secondary" className="mb-1">
              {course.level}
            </Badge>
            <h3 className="font-bold text-lg">{course.title}</h3>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-gray-700 mb-4">{course.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm">{course.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm">12 max per class</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm">{course.rating} ({course.reviews} reviews)</span>
            </div>
            <div className="text-primary font-bold">
              {course.price}
            </div>
          </div>
          <div className="mb-4">
            <p className="font-medium mb-2">Upcoming Sessions:</p>
            <div className="flex flex-wrap gap-2">
              {course.upcoming.map((date: string) => (
                <Button
                  key={date}
                  variant={selectedDate === date ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDate(date)}
                  className="text-xs"
                >
                  {date}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 p-4">
          <Button className="w-full">Register Now</Button>
        </CardFooter>
      </Card>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-accent">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Life-Saving Training & <span className="text-primary">Certification</span>
                </h1>
                <p className="text-lg text-gray-700 max-w-lg">
                  Learn essential skills that could help save a life. Our certification courses in First Aid and CPR are taught by healthcare professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="#courses">Browse Courses</a>
                  </Button>
                  <Button variant="outline" size="lg">
                    Group Training
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1516841273335-e39b37888115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDN8fENQUnx8ZW58MHx8fHwxNjg4MTY4OTUwfDA&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="CPR Training" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-8 w-8 text-yellow-500" />
                    <div>
                      <p className="font-bold text-gray-900">Nationally Recognized</p>
                      <p className="text-sm text-gray-600">Certification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Train with BloodMate?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our certification programs provide comprehensive training from experienced healthcare professionals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Certified Instructors</h3>
                  <p className="text-gray-600">
                    All our instructors are healthcare professionals with extensive field experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Small Class Sizes</h3>
                  <p className="text-gray-600">
                    Maximum of 12 participants per class ensures personalized attention.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Nationally Recognized</h3>
                  <p className="text-gray-600">
                    Our certifications are recognized nationwide by employers and organizations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Available Courses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from our range of certified training programs in First Aid and CPR.
              </p>
            </div>
            
            <Tabs defaultValue="first-aid" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="first-aid">First Aid</TabsTrigger>
                <TabsTrigger value="cpr">CPR</TabsTrigger>
              </TabsList>
              
              <TabsContent value="first-aid" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {renderCourseCards(firstAidCourses)}
                </div>
              </TabsContent>
              
              <TabsContent value="cpr" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {renderCourseCards(cprCourses)}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Instructors</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our certified trainers bring years of real-world experience to every class.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {instructors.map((instructor) => (
                <Card key={instructor.id} className="border-none shadow-md overflow-hidden">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-64 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{instructor.name}</CardTitle>
                    <p className="text-gray-500">{instructor.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{instructor.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Get Certified?</h2>
                <p className="text-white/90 mb-8">
                  Whether you're looking for individual certification or group training for your organization, we have flexible options to meet your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg">
                    Register for a Course
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" size="lg">
                    Group Training
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-lg">
                  <Calendar className="h-10 w-10 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-white/90">Weekend, evening, and weekday classes available.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <Users className="h-10 w-10 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">Corporate Training</h3>
                  <p className="text-white/90">On-site training available for organizations.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <Clock className="h-10 w-10 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">Recertification</h3>
                  <p className="text-white/90">Quick refresher courses for renewal.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <BookOpen className="h-10 w-10 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">Online Resources</h3>
                  <p className="text-white/90">Access to additional learning materials.</p>
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

export default Training;
