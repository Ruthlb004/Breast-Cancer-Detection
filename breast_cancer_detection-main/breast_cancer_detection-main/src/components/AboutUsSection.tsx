import { Card, CardContent } from "./ui/card";
import { Heart, Target, Users, Lightbulb } from "lucide-react";

export function AboutUsSection() {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compassion",
      description: "We understand the fears and challenges women face regarding breast health."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Accessibility",
      description: "Making breast cancer detection free and available to every woman, everywhere."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Building a supportive network where women feel safe and informed."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Leveraging technology to break barriers in women's healthcare."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-black">About Us</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Four students, one mission: making breast cancer detection accessible to all women
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-800 leading-relaxed">
                We are a team of four passionate students driven by one shared goal: to make breast cancer detection 
                <strong className="text-pink-900"> accessible, affordable, and stigma-free</strong> for every woman, 
                especially those in rural areas.
              </p>
              <p className="text-gray-800 leading-relaxed">
                As young women ourselves, we understand the challenges, fears, and barriers many others face when it 
                comes to talking about breast health. That's why we created this <strong className="text-pink-900">free 
                breast cancer detection website</strong>—a safe, confidential, and easy-to-use platform designed to help 
                women detect breast cancer without any financial burden.
              </p>
              <p className="text-gray-800 leading-relaxed">
                This initiative is a heartfelt step toward empowering women to take control of their health. We believe 
                <strong className="text-pink-900"> detection can save lives</strong>, and every woman, regardless of where 
                she lives or what she earns, deserves that chance.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Through this small move, we hope to spark a big change—where women feel supported, informed, and confident 
                in taking care of themselves.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-pink-900 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="text-pink-900 mb-3 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="text-lg mb-2 text-black">{value.title}</h4>
                  <p className="text-sm text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="border-4 border-pink-900 shadow-2xl bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-pink-900 to-pink-700 p-4 rounded-full">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-3xl text-black">Our Mission</h3>
              <p className="text-xl text-gray-800 italic max-w-3xl mx-auto leading-relaxed">
                "Together, let's break the silence, spread awareness, and make early detection a right, not a privilege."
              </p>
              <div className="pt-6 border-t-2 border-pink-900">
                <p className="text-gray-700">
                  Join us in our journey to empower women everywhere. Every scan analyzed, every life saved, 
                  brings us closer to a world where breast cancer is detected early and treated successfully.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
