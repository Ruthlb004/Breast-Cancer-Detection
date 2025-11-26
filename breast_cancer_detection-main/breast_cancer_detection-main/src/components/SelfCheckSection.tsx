import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  Hand, 
  Eye, 
  Calendar, 
  AlertTriangle, 
  Phone,
  Clock,
  CheckCircle
} from "lucide-react";

export function SelfCheckSection() {
  const selfExamSteps = [
    {
      step: 1,
      title: "Visual Inspection - Standing",
      icon: <Eye className="h-5 w-5" />,
      description: "Stand in front of a mirror with your arms at your sides.",
      image: "https://images.unsplash.com/photo-1620416264626-84e3c7dbe91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG1pcnJvciUyMHJlZmxlY3Rpb258ZW58MXx8fHwxNzYxNDk0Mzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: [
        "Look for changes in size, shape, or symmetry",
        "Check for dimpling, puckering, or skin changes",
        "Look for any unusual discharge from nipples",
        "Notice any changes in nipple appearance"
      ]
    },
    {
      step: 2,
      title: "Visual Inspection - Arms Raised",
      icon: <Eye className="h-5 w-5" />,
      description: "Raise your arms overhead and repeat the visual inspection.",
      image: "https://images.unsplash.com/photo-1678506201746-bc174d196b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhc3QlMjBzZWxmJTIwZXhhbWluYXRpb258ZW58MXx8fHwxNzYxNDk0Mzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: [
        "Look for the same changes as in step 1",
        "Check if raising arms reveals any new changes",
        "Notice any pulling or changes in breast contour"
      ]
    },
    {
      step: 3,
      title: "Physical Examination - Lying Down",
      icon: <Hand className="h-5 w-5" />,
      description: "Lie down with a pillow under your right shoulder.",
      image: "https://images.unsplash.com/photo-1758691462774-f01ed567f2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXhhbWluYXRpb24lMjBoYW5kc3xlbnwxfHx8fDE3NjE0OTQzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: [
        "Use the pads of your three middle fingers",
        "Apply light, medium, and firm pressure",
        "Move in small circles from the outside to the center",
        "Check the entire breast and armpit area",
        "Repeat on the left side"
      ]
    },
    {
      step: 4,
      title: "Physical Examination - Standing/Sitting",
      icon: <Hand className="h-5 w-5" />,
      description: "Repeat the physical examination while standing or sitting.",
      image: "https://images.unsplash.com/photo-1666886573699-f1964bcc9ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2hlY2t1cHxlbnwxfHx8fDE3NjE0OTQzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: [
        "Many women find this easier in the shower",
        "Wet skin can make it easier to feel lumps",
        "Use the same circular motion and pressure technique",
        "Don't forget to check the armpit area"
      ]
    }
  ];

  const warningSignsToWatchFor = [
    "A new lump or mass in the breast or underarm",
    "Swelling of all or part of a breast",
    "Skin dimpling or puckering",
    "Breast or nipple pain",
    "Nipple discharge (other than breast milk)",
    "Changes in nipple appearance",
    "Changes in breast size or shape",
    "Skin irritation or changes"
  ];

  return (
    <div className="space-y-6">
      <Card className="border-2 border-pink-900 shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Calendar className="h-5 w-5 text-pink-900" />
            When to Perform Self-Examinations
          </CardTitle>
          <CardDescription className="text-gray-700">
            Regular self-examinations are an important part of breast health awareness.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-pink-900 mt-0.5" />
              <div>
                <p className="font-medium text-black">Best Time for Examination</p>
                <p className="text-sm text-gray-700">
                  Perform monthly self-exams 3-5 days after your period ends, when breasts are least likely to be swollen or tender.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-pink-900 mt-0.5" />
              <div>
                <p className="font-medium text-black">Post-Menopause</p>
                <p className="text-sm text-gray-700">
                  If you no longer menstruate, choose the same day each month for consistency.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-black">
          <Hand className="h-5 w-5 text-pink-900" />
          Step-by-Step Self-Examination Guide
        </h3>
        
        {selfExamSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-pink-900 shadow-lg bg-white overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image Section with Animation */}
                <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100">
                  <motion.div
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Animated Step Number Overlay */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2 + index * 0.1
                    }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-900 to-pink-700 text-white flex items-center justify-center text-2xl shadow-xl border-4 border-white">
                      {step.step}
                    </div>
                  </motion.div>

                  {/* Animated Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 left-4 w-16 h-16 rounded-full bg-pink-900 pointer-events-none"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="flex items-center gap-3 text-black mb-2">
                      <span className="text-pink-900">{step.icon}</span>
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700">{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.3 + index * 0.1 + detailIndex * 0.1 
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="h-4 w-4 text-pink-900 mt-0.5 flex-shrink-0" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="border-2 border-pink-900 shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <AlertTriangle className="h-5 w-5 text-pink-900" />
            Warning Signs to Watch For
          </CardTitle>
          <CardDescription className="text-gray-700">
            Contact your healthcare provider if you notice any of these changes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {warningSignsToWatchFor.map((sign, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <AlertTriangle className="h-4 w-4 text-pink-900 mt-0.5 flex-shrink-0" />
                {sign}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Alert className="border-2 border-pink-900 bg-pink-50">
        <Phone className="h-4 w-4 text-pink-900" />
        <AlertDescription className="text-black">
          <strong>Remember:</strong> Most breast changes are not cancer, but it's always better to have them checked by a healthcare professional. 
          Early detection is key to successful treatment. If you find anything unusual, don't panic - schedule an appointment with your doctor promptly.
        </AlertDescription>
      </Alert>
    </div>
  );
}