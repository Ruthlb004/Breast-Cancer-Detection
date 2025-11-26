import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function BlogsSection() {
  const events = [
    {
      title: "Pink Ribbon Walk 2025",
      date: "November 15, 2025",
      location: "Central Park, New York",
      description: "Join thousands of women in the annual breast cancer awareness walk. Raise funds and awareness for early detection programs.",
      image: "https://images.unsplash.com/photo-1711202675927-b81cc42a479c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MTIzNjM0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Community Event",
      attendees: "5000+",
      link: "https://www.komen.org/walk/"
    },
    {
      title: "Free Mammogram Screening Camp",
      date: "October 25-27, 2025",
      location: "Mumbai, India",
      description: "Three-day free mammogram screening camp for women in rural areas. Professional healthcare providers and counselors available.",
      image: "https://images.unsplash.com/photo-1698943510941-47b51df8bad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhlYWx0aCUyMHN1cHBvcnR8ZW58MXx8fHwxNzYxMjE3NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Health Camp",
      attendees: "500+",
      link: "https://www.nationalbreastcancer.org/nbcf-programs/national-mammography-program/"
    },
    {
      title: "Survivors' Support Group Meeting",
      date: "Every Saturday",
      location: "Online & Local Chapters",
      description: "Weekly support group meetings for breast cancer survivors and their families. Share experiences, get support, and inspire others.",
      image: "https://images.unsplash.com/photo-1511212269845-02902bfd3ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhc3QlMjBjYW5jZXIlMjBhd2FyZW5lc3MlMjByaWJib258ZW58MXx8fHwxNzYxMjMwOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Support Group",
      attendees: "100+",
      link: "https://www.cancersupportcommunity.org/breast-cancer"
    }
  ];

  const blogs = [
    {
      title: "Breast Cancer: Symptoms and Causes",
      excerpt: "Comprehensive guide to understanding breast cancer symptoms, risk factors, and when to see a doctor. Learn the warning signs and prevention strategies.",
      date: "October 15, 2025",
      readTime: "8 min read",
      link: "https://www.mayoclinic.org/diseases-conditions/breast-cancer/symptoms-causes/syc-20352470"
    },
    {
      title: "Breast Cancer Screening: What You Need to Know",
      excerpt: "Information about mammograms, clinical breast exams, and breast self-awareness from the Centers for Disease Control and Prevention.",
      date: "October 10, 2025",
      readTime: "6 min read",
      link: "https://www.cdc.gov/breast-cancer/screening/index.html"
    },
    {
      title: "Treatment Options for Breast Cancer",
      excerpt: "Detailed overview of surgery, chemotherapy, radiation therapy, hormone therapy, and targeted therapy options for breast cancer treatment.",
      date: "October 5, 2025",
      readTime: "10 min read",
      link: "https://www.cancer.org/cancer/types/breast-cancer/treatment.html"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-black">Events & Blog</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest events, support groups, and educational content about breast cancer awareness.
          </p>
        </div>

        {/* Events Section */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-black">Upcoming Events for Women</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="border-2 border-pink-900 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-pink-900 text-white border-0">
                    {event.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-black">{event.title}</CardTitle>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-pink-900" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-pink-900" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-pink-900" />
                      <span>{event.attendees} Expected</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">{event.description}</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-pink-900 to-pink-700 hover:from-pink-800 hover:to-pink-600"
                    onClick={() => window.open(event.link, '_blank')}
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div>
          <h3 className="text-2xl mb-8 text-black">Recent Blog Posts</h3>
          <div className="space-y-6">
            {blogs.map((blog, index) => (
              <Card key={index} className="border-2 border-pink-900 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl mb-2 text-black">{blog.title}</h4>
                      <p className="text-gray-700 mb-3">{blog.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-pink-900" />
                          {blog.date}
                        </span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-pink-900 text-pink-900 hover:bg-pink-900 hover:text-white"
                      onClick={() => window.open(blog.link, '_blank')}
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
