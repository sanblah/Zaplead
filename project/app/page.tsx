"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Brain, 
  BarChart3,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Bot,
  Settings,
  Calendar,
  Sparkles,
  Clock,
  Shield
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Chatbots",
      description: "Custom GPT-powered bots trained on your content",
      features: [
        "Works 24/7 to qualify leads, answer questions, and book clients",
        "Built for web, WhatsApp, Instagram, or your CRM",
        "Fully customized to your business tone and goals"
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Automations",
      description: "Automate repetitive workflows and connect your tools",
      features: [
        "Emails, follow-ups, bookings, lead scoring, and more",
        "Connect Google Sheets, Airtable, WhatsApp, Notion, CRMs",
        "Smart triggers for form fills, chatbot interactions, purchases"
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Growth Dashboard",
      description: "Monitor performance and get optimization insights",
      features: [
        "Track chatbot and automation performance",
        "Monthly reports with actionable insights",
        "Continuous optimization recommendations"
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Strategy + Support",
      description: "Expert guidance and continuous improvement",
      features: [
        "We don't leave you hanging - get expert advice anytime",
        "Regular updates and tweaks based on performance",
        "Always improving flows based on real user behavior"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-First AI & Automation",
      description: "We focus on one thing: growth. Whether it's capturing more leads or automating follow-ups, everything we build drives real results."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Tailored to Your Business",
      description: "Every chatbot and workflow is custom-built around your business goals, website, tone, and customer journey."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No-Code. No-Stress.",
      description: "You don't need to lift a finger. We set up, integrate, and maintain everything so you can focus on running your business."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Lightning Fast Setup",
      description: "Your AI systems go live in 5 days or less. Yes—fully functional, tested, and integrated."
    }
  ];

  const whoWeHelp = [
    "Coaches & educators",
    "Service businesses (agencies, real estate, legal, fitness)",
    "Local businesses & startups",
    "Ecommerce brands looking to automate support & upsells"
  ];

  const stats = [
    { value: "5 Days", label: "Average Setup Time" },
    { value: "99%", label: "Uptime" },
    { value: "300%", label: "Active Lead Capture" },
    { value: "100%", label: "Custom Solutions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ZapLead
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors">Why Us</a>
              <a href="#who-we-help" className="text-gray-600 hover:text-blue-600 transition-colors">Who We Help</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <Button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSem1Hf8B8U9cd-i5U66mYIxsQ9cvB5-1eE540M2I-MJ1zAlDA/viewform?usp=header', '_blank')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200">
                <Zap className="w-4 h-4 mr-2" />
                🔥 ZapLead – AI & Automations That Convert
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
                We turn visitors into leads—and leads into paying customers.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                ZapLead is an AI and automations agency built for modern businesses. Founded by Sanchit Patil and Aryan Iyer, 
                we combine powerful chatbots with smart business automation to help you scale without burning out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSem1Hf8B8U9cd-i5U66mYIxsQ9cvB5-1eE540M2I-MJ1zAlDA/viewform?usp=header', '_blank')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6"
                >
                  👉 
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🎯 Real Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI chatbots work in action across different industries and business scenarios.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Use Case 1: Business Information */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Business Information Assistant</CardTitle>
                <p className="text-gray-600 text-sm">Instantly answers questions about your services, pricing, and capabilities</p>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-end mb-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-sm max-w-[80%]">
                      Hi there, What is Zaplead??
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 px-3 py-2 rounded-lg text-sm max-w-[85%] shadow-sm">
                      ZapLeadAI is an AI-powered assistant specifically designed to assist service-based businesses, such as tutors, consultants, and agencies, in automating their client interactions in real time...
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Explains your business model clearly
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Handles common questions 24/7
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Reduces support workload
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Use Case 2: Service Automation */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Service Automation Expert</CardTitle>
                <p className="text-gray-600 text-sm">Explains automation capabilities and helps prospects understand the value</p>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-end mb-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-sm max-w-[80%]">
                      What all can zaplead automate??
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 px-3 py-2 rounded-lg text-sm max-w-[85%] shadow-sm">
                      ZapLeadAI can automate a wide range of tasks to enhance business efficiency. Here are some key functionalities: **Answer FAQs**, **Qualify Leads**...
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Details automation capabilities
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Educates prospects on benefits
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Builds interest in services
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Use Case 3: Lead Qualification */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Lead Qualification & Booking</CardTitle>
                <p className="text-gray-600 text-sm">Qualifies prospects and schedules appointments automatically</p>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-end mb-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-sm max-w-[80%]">
                      I'm interested in your services. Can we schedule a call?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 px-3 py-2 rounded-lg text-sm max-w-[85%] shadow-sm">
                      I'd be happy to schedule a consultation! Let me ask a few quick questions to ensure we're a good fit...
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Qualifies leads automatically
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Books appointments seamlessly
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Saves time on manual screening
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why ZapLead Section */}
      <section id="why-us" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              💡 Why ZapLead?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another AI agency. We're your growth partners, focused on delivering results that matter.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group hover:bg-white/80 hover:backdrop-blur-sm p-8 rounded-xl transition-all duration-300 hover:shadow-lg">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              💼 What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI chatbots to complete automation workflows, we build the systems that drive your business forward.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo & Case Studies Section */}

      {/* Who We Help Section */}
      <section id="who-we-help" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🎯 Who We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              If you want more leads, less manual work, and better conversions—you're in the right place.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {whoWeHelp.map((business, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-3 h-3 rounded-full mr-4"></div>
                      {business}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            🚀 Ready to Zap Your Leads?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us build your AI + automation engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSem1Hf8B8U9cd-i5U66mYIxsQ9cvB5-1eE540M2I-MJ1zAlDA/viewform?usp=header', '_blank')}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">ZapLead</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI & Automations That Convert. Founded by Sanchit Patil and Aryan Iyer.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Chatbots</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Growth Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Strategy & Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>aizaplead@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 8657532671</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ZapLead. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}