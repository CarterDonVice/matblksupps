import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | MAT BLK Supplements',
  description: 'Get in touch with MAT BLK Supplements for any inquiries or support.',
};

export default function ContactPage() {
  // Placeholder action for form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle form data submission, e.g., via a Server Action or API
    alert('Thank you for your message! We will get back to you soon.');
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or need support? We're here to help. Reach out to us through any of the methods below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-8 bg-card p-8 rounded-lg shadow-xl border-border/50">
            <h2 className="font-headline text-3xl text-foreground border-b border-border pb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
                <Input id="name" type="text" placeholder="Your Name" required className="mt-1 bg-background border-border/70" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" required className="mt-1 bg-background border-border/70" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-foreground/80">Subject</Label>
                <Input id="subject" type="text" placeholder="Inquiry about..." required className="mt-1 bg-background border-border/70" />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground/80">Message</Label>
                <Textarea id="message" placeholder="Your message here..." rows={5} required className="mt-1 bg-background border-border/70" />
              </div>
              <Button type="submit" size="lg" className="w-full btn-primary py-3 text-base">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-xl border-border/50">
              <h3 className="font-headline text-2xl text-foreground mb-4">Our Contact Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" />
                  <span>123 Performance Drive<br />Innovation City, ST 90210<br />United States</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                  <a href="mailto:support@matblk.com" className="hover:text-primary">support@matblk.com</a>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                  <a href="tel:+18005550199" className="hover:text-primary">+1 (800) 555-0199</a>
                </p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-xl border-border/50">
                <h3 className="font-headline text-2xl text-foreground mb-4">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                    <p>Saturday: 10:00 AM - 4:00 PM (EST)</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
