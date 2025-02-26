'use client';

import { HeroSection } from "@/components/organisms/HeroSection";
import { ServicesOverview } from "@/components/organisms/ServicesOverview";
import { ContactForm } from "@/components/organisms/ContactForm";
import { useEffect } from "react";

export default function Home() {
  // Services data
  const services = [
    {
      title: "Website Creation & Management",
      description: "Custom website design and development tailored to your brand and business needs.",
      icon: "globe",
      link: "/services/website-creation",
    },
    {
      title: "Social Media Planning",
      description: "Strategic social media planning and content creation to boost your online presence.",
      icon: "users",
      link: "/services/social-media",
    },
    {
      title: "Website Improvements",
      description: "Enhance your existing website with modern features, better performance, and improved UX.",
      icon: "code",
      link: "/services/website-improvements",
    },
    {
      title: "AI Solutions",
      description: "Leverage AI technologies to automate processes and gain valuable insights.",
      icon: "settings",
      link: "/services/ai-solutions",
    },
    {
      title: "CRM Administration",
      description: "Efficient customer relationship management setup and administration.",
      icon: "users",
      link: "/services/crm-administration",
    },
    {
      title: "Branded Images",
      description: "Professional branded images and graphics that align with your brand identity.",
      icon: "image",
      link: "/services/branded-images",
    },
  ];

  // Smooth scroll effect for the entire page
  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      <HeroSection
        title="Elevate Your Digital Presence"
        subtitle="Talty Digital LLC provides full-service web development and software engineering solutions to help businesses enhance their online presence and drive growth."
        ctaText="Get Started"
        ctaLink="/contact"
      />
      
      <ServicesOverview
        title="Our Services"
        description="We offer a comprehensive range of digital services to help your business thrive online."
        services={services}
        showAllLink="/services"
      />
      
      <ContactForm
        title="Get In Touch"
        description="Have a project in mind? Contact us to discuss how we can help you achieve your goals."
      />
    </>
  );
}
