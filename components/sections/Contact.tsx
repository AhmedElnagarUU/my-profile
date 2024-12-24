"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/constants";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Card className="p-4">
                  <Mail className="w-6 h-6 text-primary" />
                </Card>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-muted-foreground hover:underline"
                  >
                    {socialLinks.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Card className="p-4">
                  <Facebook className="w-6 h-6 text-primary" />
                </Card>
                <div>
                  <p className="font-medium">Facebook</p>
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline"
                  >
                    Ahmed Youssry
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Card className="p-4">
                  <Github className="w-6 h-6 text-primary" />
                </Card>
                <div>
                  <p className="font-medium">Github</p>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline"
                  >
                    AhmedElnagar
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 border-primary/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium mb-2 block"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium mb-2 block"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium mb-2 block"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium mb-2 block"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
