import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // TODO: Replace with actual form submission logic
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-8 relative" data-testid="text-contact-title">
          Contact
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full mt-2"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card className="p-4 bg-card border-card-border mb-6 overflow-hidden">
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28262.29543863594!2d85.2911634871582!3d27.708317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19678c79e031%3A0xf108ea556d04e1cf!2sKathmandu%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1635674893814!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="map-location"
              />
            </div>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="text-contact-form-title">
            Contact Form
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                data-testid="input-full-name"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                data-testid="input-email"
              />
            </div>
            
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              data-testid="input-subject"
            />
            
            <Textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
              data-testid="textarea-message"
            />
            
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 font-medium"
              data-testid="button-send-message"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}