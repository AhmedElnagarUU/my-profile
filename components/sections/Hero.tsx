"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/constants";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute left-[10vw] top-[20vh] w-64 h-64 bg-blue-600 blur-3xl opacity-50 z-0"></div>
      <div className="absolute right-[10vw] top-[60vh] w-64 h-64 bg-purple-600 blur-3xl opacity-50 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              {personalInfo.title}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              {personalInfo.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="gap-2" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={`mailto:${socialLinks.email}`}>
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;