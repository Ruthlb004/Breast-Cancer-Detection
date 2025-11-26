import { useState, useEffect } from "react";
import { LoginSection } from "./components/LoginSection";
import { AwarenessSection } from "./components/AwarenessSection";
import { AICheckSection } from "./components/AICheckSection";
import { SelfCheckSection } from "./components/SelfCheckSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { BlogsSection } from "./components/BlogsSection";
import { AboutUsSection } from "./components/AboutUsSection";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import { Heart, Bot, Hand, Menu } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  if (!isLoggedIn) {
    return (
      <LoginSection
        onLoginSuccess={(email) => {
          setUserEmail(email);
          setIsLoggedIn(true);
        }}
      />
    );
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-pink-900 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-pink-900 to-pink-700 p-2 rounded-full">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5.5c-3.5-2-8.5-1-8.5 3.5 0 3.5 3.5 6.5 8.5 11.5 5-5 8.5-8 8.5-11.5 0-4.5-5-5.5-8.5-3.5z" />
                  <circle cx="12" cy="12" r="1.5" />
                </svg>
              </div>
              <span className="text-2xl bg-gradient-to-r from-pink-900 to-pink-700 bg-clip-text text-transparent">
                Breastly
              </span>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("awareness")}
                className="text-black hover:text-pink-900"
              >
                Awareness
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("detection")}
                className="text-black hover:text-pink-900"
              >
                Detection
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("how-it-works")}
                className="text-black hover:text-pink-900"
              >
                How It Works
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("blogs")}
                className="text-black hover:text-pink-900"
              >
                Events & Blog
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-black hover:text-pink-900"
              >
                About Us
              </Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-900 blur-xl opacity-20 rounded-full"></div>
              <div className="relative bg-gradient-to-br from-pink-900 to-pink-700 p-6 rounded-full shadow-lg">
                <svg
                  className="h-16 w-16 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5.5c-3.5-2-8.5-1-8.5 3.5 0 3.5 3.5 6.5 8.5 11.5 5-5 8.5-8 8.5-11.5 0-4.5-5-5.5-8.5-3.5z" />
                  <circle cx="12" cy="12" r="1.5" />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="notranslate text-5xl mb-4 bg-gradient-to-r from-pink-900 to-pink-700 bg-clip-text text-transparent">
            Breastly
          </h1>
          <p className="text-xl text-pink-900 mb-6">
            Empowering Women's Health Through Early Detection
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Comprehensive breast health monitoring through
            AI-assisted analysis and guided self-examination.
            Early detection is crucial for successful treatment
            and better outcomes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("detection")}
              className="bg-gradient-to-r from-pink-900 to-pink-700 hover:from-pink-800 hover:to-pink-600 text-white px-8 py-6 text-lg"
            >
              Start AI Detection
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("awareness")}
              className="border-2 border-pink-900 text-pink-900 hover:bg-pink-900 hover:text-white px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Awareness Section */}
      <AwarenessSection />

      {/* Detection Section */}
      <section id="detection" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-black">
              Breast Cancer Detection
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose between AI-powered analysis or guided
              self-examination to monitor your breast health.
            </p>
          </div>

          <Tabs defaultValue="ai-check" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white border-2 border-pink-900 p-1 shadow-lg max-w-md mx-auto">
              <TabsTrigger
                value="ai-check"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-900 data-[state=active]:to-pink-700 data-[state=active]:text-white transition-all"
              >
                <Bot className="h-4 w-4" />
                AI Check
              </TabsTrigger>
              <TabsTrigger
                value="self-check"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-900 data-[state=active]:to-pink-700 data-[state=active]:text-white transition-all"
              >
                <Hand className="h-4 w-4" />
                Self Check
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai-check">
              <AICheckSection userEmail={userEmail} />
            </TabsContent>

            <TabsContent value="self-check">
              <SelfCheckSection />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Blogs & Events Section */}
      <BlogsSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-900 to-pink-700 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6" />
                <span className="notranslate text-xl">
                  Breastly
                </span>
              </div>
              <p className="text-sm opacity-90">
                Empowering women's health through accessible
                breast cancer detection.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p
                  className="cursor-pointer hover:opacity-100"
                  onClick={() => scrollToSection("awareness")}
                >
                  Awareness
                </p>
                <p
                  className="cursor-pointer hover:opacity-100"
                  onClick={() => scrollToSection("detection")}
                >
                  Detection
                </p>
                <p
                  className="cursor-pointer hover:opacity-100"
                  onClick={() =>
                    scrollToSection("how-it-works")
                  }
                >
                  How It Works
                </p>
                <p
                  className="cursor-pointer hover:opacity-100"
                  onClick={() => scrollToSection("about")}
                >
                  About Us
                </p>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Contact</h4>
              <p className="text-sm opacity-90 mb-3">
                For support and inquiries, please reach out to
                our team.
              </p>
              <div className="space-y-1 text-xs opacity-80">
                <p>22b09.jovitha@sjec.ac.in</p>
                <p>22b16.leona@sjec.ac.in</p>
                <p>22b19.loren@sjec.ac.in</p>
                <p>22b54.rachel@sjec.ac.in</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-90">
            <p>
              This tool is for educational purposes only and
              should not replace professional medical advice.
              Always consult with qualified healthcare providers
              for medical concerns.
            </p>
            <p className="mt-4">
              © 2025{" "}
              <span className="notranslate">Breastly</span>. All
              rights reserved. Made with ❤️ by four passionate
              students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}