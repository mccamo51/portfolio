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
       
      </div>

      <div className="space-y-8">
        {/* Map Section */}
        <Card className="p-0 bg-card border-card-border overflow-hidden">
          <div className="w-full h-96 bg-muted rounded-lg relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254786.55525806347!2d-0.3634851!3d5.6037168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1635674893814!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="map-location"
            />
          </div>
        </Card>

        {/* Contact Form */}
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
                className="bg-input border-border text-foreground placeholder:text-muted-foreground h-14"
                data-testid="input-full-name"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground h-14"
                data-testid="input-email"
              />
            </div>
            
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground h-14"
              data-testid="input-subject"
            />
            
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
              data-testid="textarea-message"
            />
            
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 h-14 font-medium"
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