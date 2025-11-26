import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, TrendingDown, AlertCircle, Activity, Zap, Shield, Stethoscope } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function AwarenessSection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "1 in 8",
      label: "Women will develop breast cancer",
      color: "text-pink-900"
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      value: "99%",
      label: "Survival rate with early detection",
      color: "text-pink-900"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      value: "Monthly",
      label: "Self-examination recommended",
      color: "text-pink-900"
    },
    {
      icon: <AlertCircle className="h-8 w-8" />,
      value: "40+",
      label: "Age to start annual screening",
      color: "text-pink-900"
    }
  ];

  const educationPoints = [
    {
      title: "Know Your Risk",
      description: "Understanding your family history, lifestyle factors, and genetic predisposition helps in early detection and prevention."
    },
    {
      title: "Regular Self-Examinations",
      description: "Monthly breast self-exams help you become familiar with your normal breast tissue and notice changes early."
    },
    {
      title: "Clinical Screenings",
      description: "Regular mammograms and clinical breast exams are crucial for detecting cancer before symptoms appear."
    },
    {
      title: "Early Detection Saves Lives",
      description: "When detected early, breast cancer has a 99% five-year survival rate. Don't delay if you notice changes."
    }
  ];

  const stages = [
    {
      stage: "Stage 0",
      name: "Ductal Carcinoma In Situ (DCIS)",
      description: "Non-invasive cancer where abnormal cells are found in the lining of the breast milk duct but have not spread outside the duct.",
      prognosis: "Nearly 100% survival rate with treatment",
      icon: <Shield className="h-6 w-6 text-green-600" />
    },
    {
      stage: "Stage I",
      name: "Early Stage Invasive",
      description: "Small tumor (up to 2 cm) that may have spread to nearby lymph nodes. Cancer cells have begun to invade surrounding breast tissue.",
      prognosis: "5-year survival rate: ~99%",
      icon: <Activity className="h-6 w-6 text-blue-600" />
    },
    {
      stage: "Stage II",
      name: "Localized Invasive",
      description: "Tumor is 2-5 cm, or cancer has spread to 1-3 nearby lymph nodes. Still considered localized and highly treatable.",
      prognosis: "5-year survival rate: ~93%",
      icon: <Activity className="h-6 w-6 text-yellow-600" />
    },
    {
      stage: "Stage III",
      name: "Locally Advanced",
      description: "Larger tumor (over 5 cm) or cancer has spread to 4-9 lymph nodes, or to tissues near the breast. Has not spread to distant organs.",
      prognosis: "5-year survival rate: ~72%",
      icon: <Zap className="h-6 w-6 text-orange-600" />
    },
    {
      stage: "Stage IV",
      name: "Metastatic",
      description: "Cancer has spread beyond the breast and nearby lymph nodes to other parts of the body such as bones, lungs, liver, or brain.",
      prognosis: "5-year survival rate: ~28% (treatable but not curable)",
      icon: <AlertCircle className="h-6 w-6 text-red-600" />
    }
  ];

  const symptoms = [
    {
      category: "Breast Changes",
      items: [
        "New lump or mass in the breast or underarm",
        "Change in size or shape of the breast",
        "Dimpling or puckering of the breast skin",
        "Thickening or swelling of part of the breast",
        "Newly inverted nipple"
      ]
    },
    {
      category: "Skin Changes",
      items: [
        "Redness or flaky skin in the nipple area or breast",
        "Skin irritation or orange-peel texture",
        "Persistent rash around the nipple",
        "Scaliness or thickening of the nipple or breast skin"
      ]
    },
    {
      category: "Nipple Changes",
      items: [
        "Nipple discharge other than breast milk (especially bloody)",
        "Nipple retraction (turning inward)",
        "Pain in the nipple area",
        "Nipple tenderness or sensitivity"
      ]
    },
    {
      category: "Other Symptoms",
      items: [
        "Persistent breast pain not related to menstrual cycle",
        "Swollen lymph nodes under the arm or near the collarbone",
        "Unexplained weight loss",
        "Bone pain (in advanced stages)",
        "Shortness of breath or persistent cough (in advanced stages)"
      ]
    }
  ];

  const treatments = [
    {
      type: "Surgery",
      icon: <Stethoscope className="h-6 w-6 text-pink-900" />,
      options: [
        {
          name: "Lumpectomy (Breast-Conserving Surgery)",
          description: "Removal of the tumor and a small margin of surrounding healthy tissue. Often followed by radiation therapy. Preserves most of the breast."
        },
        {
          name: "Mastectomy",
          description: "Removal of the entire breast. Options include simple mastectomy, modified radical mastectomy, and skin-sparing or nipple-sparing procedures."
        },
        {
          name: "Lymph Node Surgery",
          description: "Sentinel node biopsy or axillary lymph node dissection to check if cancer has spread to lymph nodes."
        }
      ]
    },
    {
      type: "Radiation Therapy",
      icon: <Zap className="h-6 w-6 text-pink-900" />,
      options: [
        {
          name: "External Beam Radiation",
          description: "High-energy rays targeted at the breast from outside the body. Typically given 5 days a week for 5-7 weeks after surgery."
        },
        {
          name: "Internal Radiation (Brachytherapy)",
          description: "Radioactive material placed inside the breast near the tumor site. Shorter treatment duration than external radiation."
        },
        {
          name: "Intraoperative Radiation Therapy (IORT)",
          description: "Single dose of radiation given during surgery directly to the tumor bed."
        }
      ]
    },
    {
      type: "Chemotherapy",
      icon: <Activity className="h-6 w-6 text-pink-900" />,
      options: [
        {
          name: "Adjuvant Chemotherapy",
          description: "Given after surgery to kill any remaining cancer cells and reduce risk of recurrence. Usually involves a combination of drugs."
        },
        {
          name: "Neoadjuvant Chemotherapy",
          description: "Given before surgery to shrink large tumors, making them easier to remove. Can also test cancer's response to treatment."
        },
        {
          name: "Common Drug Combinations",
          description: "AC (Adriamycin/Cytoxan), TAC (Taxotere/Adriamycin/Cytoxan), CMF (Cyclophosphamide/Methotrexate/Fluorouracil), and others."
        }
      ]
    },
    {
      type: "Hormone Therapy",
      icon: <Heart className="h-6 w-6 text-pink-900" />,
      options: [
        {
          name: "Selective Estrogen Receptor Modulators (SERMs)",
          description: "Tamoxifen and similar drugs that block estrogen from attaching to cancer cells. Used for hormone receptor-positive cancers."
        },
        {
          name: "Aromatase Inhibitors",
          description: "Anastrozole, letrozole, and exemestane reduce estrogen production in postmenopausal women. Taken for 5-10 years."
        },
        {
          name: "Ovarian Suppression",
          description: "Medications or surgery to stop the ovaries from producing estrogen in premenopausal women."
        }
      ]
    },
    {
      type: "Targeted Therapy",
      icon: <Shield className="h-6 w-6 text-pink-900" />,
      options: [
        {
          name: "HER2-Targeted Therapy",
          description: "Trastuzumab (Herceptin), pertuzumab (Perjeta), and others target HER2-positive breast cancers. Can be very effective."
        },
        {
          name: "CDK4/6 Inhibitors",
          description: "Palbociclib, ribociclib, and abemaciclib slow cancer cell growth in hormone receptor-positive cancers."
        },
        {
          name: "PARP Inhibitors",
          description: "Olaparib and talazoparib for patients with BRCA mutations. Interfere with cancer cells' ability to repair DNA damage."
        }
      ]
    },
    {
      type: "Immunotherapy",
      icon: <Users className="h-6 w-6 text-pink-900" />,
      options: [
        {
          name: "Checkpoint Inhibitors",
          description: "Pembrolizumab (Keytruda) and atezolizumab (Tecentriq) help the immune system recognize and attack cancer cells."
        },
        {
          name: "Triple-Negative Breast Cancer",
          description: "Particularly useful for triple-negative breast cancers that don't respond to hormone or HER2-targeted therapies."
        }
      ]
    }
  ];

  return (
    <section id="awareness" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-black">Breast Cancer Awareness & Education</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Knowledge is power. Understanding breast cancer helps save lives through early detection and timely treatment.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-2 border-pink-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-3xl mb-2 text-black">{stat.value}</div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image and Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1511212269845-02902bfd3ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhc3QlMjBjYW5jZXIlMjBhd2FyZW5lc3MlMjByaWJib258ZW58MXx8fHwxNzYxMjMwOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Breast Cancer Awareness"
              className="w-full h-96 object-cover rounded-lg shadow-2xl border-4 border-pink-900"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            {educationPoints.map((point, index) => (
              <div key={index} className="border-l-4 border-pink-900 pl-4">
                <h3 className="text-xl mb-2 text-black">{point.title}</h3>
                <p className="text-gray-700">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Breast Cancer Stages Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl mb-4 text-black">Understanding Breast Cancer Stages</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Breast cancer is staged from 0 to IV based on tumor size, lymph node involvement, and whether it has spread to other parts of the body.
            </p>
          </div>

          <div className="space-y-4">
            {stages.map((stage, index) => (
              <Card key={index} className="border-2 border-pink-900 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {stage.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl text-black">{stage.stage}</h4>
                        <span className="text-pink-900">•</span>
                        <span className="text-lg text-pink-900">{stage.name}</span>
                      </div>
                      <p className="text-gray-700 mb-3">{stage.description}</p>
                      <div className="bg-pink-50 border-l-4 border-pink-900 p-3 rounded">
                        <p className="text-sm text-black"><strong>Prognosis:</strong> {stage.prognosis}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Symptoms Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl mb-4 text-black">Recognizing the Symptoms</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Early detection begins with knowing the warning signs. While these symptoms don't always mean cancer, consult a healthcare provider if you notice any of these changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {symptoms.map((symptomGroup, index) => (
              <Card key={index} className="border-2 border-pink-900 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl mb-4 text-pink-900">{symptomGroup.category}</h4>
                  <ul className="space-y-3">
                    {symptomGroup.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-pink-900 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 bg-pink-50 border-2 border-pink-900">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-pink-900 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg mb-2 text-black">Important Note</h4>
                  <p className="text-gray-700">
                    Having one or more of these symptoms doesn't necessarily mean you have breast cancer. Many breast conditions are benign (not cancerous). 
                    However, it's crucial to see a healthcare provider for proper evaluation if you notice any persistent changes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Options Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl mb-4 text-black">Treatment Options</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Breast cancer treatment is personalized based on cancer type, stage, genetic markers, and individual health factors. 
              Most patients receive a combination of treatments.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {treatments.map((treatment, index) => (
              <AccordionItem 
                key={index} 
                value={`treatment-${index}`}
                className="border-2 border-pink-900 rounded-lg px-6 shadow-lg !border-b-2"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    {treatment.icon}
                    <span className="text-xl text-black">{treatment.type}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-4">
                    {treatment.options.map((option, idx) => (
                      <div key={idx} className="border-l-4 border-pink-900 pl-4 py-2">
                        <h5 className="text-lg mb-2 text-pink-900">{option.name}</h5>
                        <p className="text-gray-700">{option.description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="mt-6 bg-gradient-to-r from-pink-900 to-pink-700 text-white border-0 shadow-2xl">
            <CardContent className="p-6">
              <h4 className="text-xl mb-3">Treatment Planning</h4>
              <p className="opacity-90 mb-4">
                Your oncology team will create a personalized treatment plan considering factors such as:
              </p>
              <ul className="space-y-2 opacity-90">
                <li>• Cancer stage and type (ductal, lobular, inflammatory, etc.)</li>
                <li>• Hormone receptor status (ER+, PR+, HER2+)</li>
                <li>• Tumor grade and growth rate</li>
                <li>• Your age, overall health, and personal preferences</li>
                <li>• Genetic factors (BRCA mutations, etc.)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-pink-900 to-pink-700 text-white border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl mb-4">Early Detection Saves Lives</h3>
            <p className="text-lg mb-6 opacity-90">
              Regular screening and self-examination are your best defense against breast cancer. 
              Don't wait for symptoms—be proactive about your health.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm opacity-90">Self-examine monthly</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm opacity-90">Clinical exam annually</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm opacity-90">Mammogram after 40</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
