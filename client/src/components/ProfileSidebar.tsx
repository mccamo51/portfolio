import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
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

export default function ProfileSidebar() {
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
    <div className="w-80 min-h-screen bg-card border-r border-card-border p-6">
      <Card className="p-6 mb-8 bg-card border-card-border">
        <div className="text-center">
          <div className="relative mb-6">
            <img
              src={avatarImage}
              alt="Aakash Rajbanshi"
              className="w-32 h-32 rounded-2xl mx-auto object-cover"
              data-testid="img-profile-avatar"
            />
            <div className="absolute bottom-2 right-1/2 transform translate-x-6 w-4 h-4 bg-green-500 rounded-full border-2 border-card"></div>
          </div>
          
          <h1 className="text-2xl font-semibold text-card-foreground mb-2" data-testid="text-profile-name">
            Aakash Rajbanshi
          </h1>
          
          <p className="text-muted-foreground mb-8 bg-muted px-4 py-2 rounded-lg text-sm" data-testid="text-profile-title">
            Software Developer
          </p>
        </div>

        <div className="space-y-6">
          {contactItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1" data-testid={`text-contact-label-${index}`}>
                  {item.label}
                </p>
                <p className="text-sm text-card-foreground" data-testid={`text-contact-value-${index}`}>
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-card-border">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover-elevate transition-all duration-200"
              aria-label={social.label}
              data-testid={`link-social-${index}`}
            >
              <social.icon className="w-4 h-4 text-muted-foreground" />
            </a>
          ))}
        </div>
      </Card>
    </div>
  );
}