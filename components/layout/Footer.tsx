import { Github, Linkedin, Mail, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks , personalInfo } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${socialLinks.email}`}>
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;