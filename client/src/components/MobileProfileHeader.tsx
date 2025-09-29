import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import avatarImage from "@assets/generated_images/Professional_developer_avatar_portrait_751c21fb.png";

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

export default function MobileProfileHeader() {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactItems: ContactItem[] = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "aakashrajbanshi58.."
    },
    {
      icon: Phone,
      label: "PHONE", 
      value: "+977 9812345678"
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Kathmandu, Nepal"
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <div className="lg:hidden">
      <Card className="m-4 bg-card border-card-border overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={avatarImage}
                  alt="Aakash Rajbanshi"
                  className="w-16 h-16 rounded-xl object-cover"
                  data-testid="img-mobile-profile-avatar"
                />
                <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card"></div>
              </div>
              
              <div>
                <h1 className="text-xl font-semibold text-card-foreground" data-testid="text-mobile-profile-name">
                  Aakash Rajbanshi
                </h1>
                <p className="text-muted-foreground text-sm" data-testid="text-mobile-profile-title">
                  Software Developer
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover-elevate transition-all duration-200"
              aria-label={isExpanded ? "Collapse profile" : "Expand profile"}
              data-testid="button-mobile-profile-toggle"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>

          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium mb-1" data-testid={`text-mobile-contact-label-${index}`}>
                      {item.label}
                    </p>
                    <p className="text-sm text-card-foreground" data-testid={`text-mobile-contact-value-${index}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center gap-3 pt-4 border-t border-card-border">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover-elevate transition-all duration-200"
                    aria-label={social.label}
                    data-testid={`link-mobile-social-${index}`}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}