
import { useState } from "react";
import { Bell, Calendar, ChevronDown, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const Notice = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const notices = [
    {
      id: 1,
      title: "Urgent: Type O- Blood Shortage",
      date: "May 15, 2023",
      category: "Urgent",
      content: "We are currently experiencing a critical shortage of Type O- blood across multiple hospitals in the region. If you are Type O-, please consider donating as soon as possible."
    },
    {
      id: 2,
      title: "Memorial Day Blood Drive Schedule Changes",
      date: "May 12, 2023",
      category: "Announcement",
      content: "Please note that our blood donation centers will have modified hours during the Memorial Day weekend. Check the schedule for specific hours at your preferred donation location."
    },
    {
      id: 3,
      title: "New BloodMate Mobile App Now Available",
      date: "May 5, 2023",
      category: "News",
      content: "We're excited to announce the launch of our new BloodMate mobile app, making it easier than ever to schedule donations, track your donation history, and find nearby blood drives. Download now on iOS and Android."
    },
    {
      id: 4,
      title: "COVID-19 Vaccination and Blood Donation Guidelines Updated",
      date: "April 28, 2023",
      category: "Policy",
      content: "We have updated our guidelines regarding blood donation eligibility following COVID-19 vaccination. Most vaccinated individuals can donate immediately with no waiting period required."
    },
    {
      id: 5,
      title: "Summer Blood Drive Campaign Kicks Off June 1st",
      date: "April 25, 2023",
      category: "Event",
      content: "Our annual summer blood drive campaign will begin on June 1st. This year's theme is 'Every Drop Counts' with special events and donor recognition planned throughout the summer months."
    },
  ];
  
  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notice.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notice.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "urgent":
        return "bg-red-500";
      case "event":
        return "bg-green-500";
      case "news":
        return "bg-blue-500";
      case "policy":
        return "bg-purple-500";
      case "announcement":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-accent py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Notices & Announcements</h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Stay up to date with the latest news, events, and important information from BloodMate.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                className="pl-10"
                placeholder="Search notices and announcements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Notices List */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Urgent Notices Banner */}
              <div className="md:col-span-3">
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <Bell className="h-8 w-8 text-primary mr-4" />
                      <div>
                        <h3 className="font-bold text-xl">Urgent: Type O- Blood Shortage</h3>
                        <p className="text-gray-700">We need Type O- donors immediately across all centers</p>
                      </div>
                    </div>
                    <Button className="whitespace-nowrap">Donate Now</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Notices Sidebar */}
              <div className="md:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>Urgent (1)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span>Announcements (1)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>News (1)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span>Policy (1)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Events (1)</span>
                    </div>
                  </CardContent>
                  
                  <CardHeader className="pt-2">
                    <CardTitle>Archive</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>May 2023</span>
                      <span className="text-gray-500 text-sm">4 notices</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>April 2023</span>
                      <span className="text-gray-500 text-sm">2 notices</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>March 2023</span>
                      <span className="text-gray-500 text-sm">5 notices</span>
                    </div>
                    <Button variant="link" className="p-0">View older archives</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Main Notices Content */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Recent Notices</h2>
                {filteredNotices.length > 0 ? (
                  <div className="space-y-4">
                    <Accordion type="single" collapsible className="space-y-4">
                      {filteredNotices.map((notice) => (
                        <AccordionItem key={notice.id} value={`notice-${notice.id}`} className="bg-white border rounded-md overflow-hidden">
                          <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                            <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between text-left">
                              <div>
                                <Badge variant="secondary" className={getCategoryColor(notice.category)}>
                                  {notice.category}
                                </Badge>
                                <h3 className="text-lg font-semibold mt-2">{notice.title}</h3>
                              </div>
                              <div className="flex items-center mt-2 md:mt-0 text-gray-500">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span className="text-sm">{notice.date}</span>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 py-3">
                            <p className="text-gray-700">{notice.content}</p>
                            <div className="mt-4 flex justify-end">
                              <Button variant="link" className="p-0">Read full notice</Button>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ) : (
                  <div className="bg-white border rounded-md p-6 text-center">
                    <p className="text-gray-500">No notices found matching your search criteria.</p>
                  </div>
                )}
                
                <div className="mt-8 flex justify-center">
                  <Button variant="outline" className="mr-2">Previous</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-primary/5 border-t border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-gray-700 mb-8">
                Subscribe to our newsletter to receive important notices and announcements directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="Enter your email" className="sm:flex-1" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Notice;
