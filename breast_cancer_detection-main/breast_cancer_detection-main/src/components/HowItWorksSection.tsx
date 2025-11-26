import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Upload, Brain, FileText, CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: <Upload className="h-8 w-8" />,
      title: "Upload Your Mammogram Images",
      description: "Securely upload your mammogram images in DICOM, JPEG, or PNG format. Your data is encrypted and confidential.",
      details: [
        "Support for multiple image formats",
        "Secure file upload with encryption",
        "No storage of personal medical data",
        "Maximum file size: 10MB per image"
      ]
    },
    {
      number: 2,
      icon: <Brain className="h-8 w-8" />,
      title: "AI Analysis",
      description: "Our advanced AI algorithm analyzes your scans using deep learning trained on thousands of medical images.",
      details: [
        "State-of-the-art deep learning model",
        "Analysis completed in seconds",
        "Multiple imaging sequences evaluated",
        "High accuracy detection rates"
      ]
    },
    {
      number: 3,
      icon: <FileText className="h-8 w-8" />,
      title: "Receive Your Report",
      description: "Get a detailed analysis report with AI predictions, confidence levels, and recommended next steps.",
      details: [
        "Easy-to-understand results",
        "Confidence percentage included",
        "Detailed analysis breakdown",
        "Professional recommendations"
      ]
    },
    {
      number: 4,
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Consult Healthcare Provider",
      description: "Share your report with a healthcare professional for proper diagnosis and treatment planning.",
      details: [
        "Downloadable PDF report",
        "Share with your doctor",
        "Follow professional medical advice",
        "Schedule follow-up if needed"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-black">How It Works</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our simple, secure process makes breast cancer detection accessible to everyone. 
            From upload to report in just a few minutes.
          </p>
        </div>

        {/* Image */}
        <div className="mb-16">
          <div className="relative border-2 border-pink-900 shadow-2xl overflow-hidden rounded-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1646861108770-d645014b8f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMHNjYW5uaW5nfGVufDF8fHx8MTc2MTIzNjM0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="How Breastly Works"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl mb-2">AI-Powered Detection Process</h3>
                <p className="text-lg opacity-90">Our technology helps detect breast cancer early</p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 border-pink-900 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-900 to-pink-700 text-white flex items-center justify-center text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-pink-900 mb-2">{step.icon}</div>
                    <h3 className="text-xl mb-2 text-black">{step.title}</h3>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-pink-900 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-pink-900 transform -translate-x-1/2 hidden lg:block"></div>
          <div className="text-center bg-gradient-to-r from-pink-900 to-pink-700 text-white py-4 px-8 rounded-lg inline-block relative left-1/2 transform -translate-x-1/2">
            <p className="text-lg">Complete process takes less than 5 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
