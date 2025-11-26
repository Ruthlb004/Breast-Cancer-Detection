import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Mail, Phone, LogIn } from "lucide-react";

interface LoginSectionProps {
  onLoginSuccess: (email: string) => void;
}

export function LoginSection({ onLoginSuccess }: LoginSectionProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onLoginSuccess(email);
    }
  };

  const handlePhoneLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      onLoginSuccess(phone);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-50 p-4">
      <Card className="w-full max-w-md shadow-2xl border-2 border-pink-900">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-900 blur-xl opacity-20 rounded-full"></div>
              <div className="relative bg-gradient-to-br from-pink-900 to-pink-700 p-4 rounded-full shadow-lg">
                <svg 
                  className="h-12 w-12 text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 5.5c-3.5-2-8.5-1-8.5 3.5 0 3.5 3.5 6.5 8.5 11.5 5-5 8.5-8 8.5-11.5 0-4.5-5-5.5-8.5-3.5z"/>
                  <circle cx="12" cy="12" r="1.5"/>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <CardTitle className="text-3xl bg-gradient-to-r from-pink-900 to-pink-700 bg-clip-text text-transparent">
              Welcome to <span className="notranslate">Breastly</span>
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Empowering Women's Health Through Early Detection
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </TabsTrigger>
              <TabsTrigger value="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="email">
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-pink-900/20 focus:border-pink-900"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-900 to-pink-700 hover:from-pink-800 hover:to-pink-600"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Continue with Email
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="phone">
              <form onSubmit={handlePhoneLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="border-pink-900/20 focus:border-pink-900"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-900 to-pink-700 hover:from-pink-800 hover:to-pink-600"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Continue with Phone
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Your privacy is our priority. All information is confidential.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
