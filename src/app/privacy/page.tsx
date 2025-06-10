import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | MAT BLK Supplements',
  description: 'Read the Privacy Policy for MAT BLK Supplements.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-xl border-border/50">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-muted-foreground prose prose-invert prose-lg max-w-none">
          <p>Your privacy is important to us. It is MAT BLK Supplements' policy to respect your privacy regarding any information we may collect from you across our website.</p>
          
          <h2 className="font-headline text-2xl text-foreground">1. Information We Collect</h2>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
          <p>Information we may collect includes:</p>
          <ul className="list-disc pl-6">
            <li>Name and contact details (e.g., email address, shipping address, phone number).</li>
            <li>Payment information (though typically processed by a third-party payment gateway).</li>
            <li>Information you provide through customer support or other communications.</li>
            <li>Usage data, such as your IP address, browser type, and pages visited on our site.</li>
          </ul>

          <h2 className="font-headline text-2xl text-foreground">2. How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-6">
            <li>Provide, operate, and maintain our website.</li>
            <li>Improve, personalize, and expand our website.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
            <li>Process your transactions.</li>
            <li>Find and prevent fraud.</li>
          </ul>

          <h2 className="font-headline text-2xl text-foreground">3. Security of Your Information</h2>
          <p>We take commercially reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
          
          <h2 className="font-headline text-2xl text-foreground">4. Cookies</h2>
          <p>We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>

          <h2 className="font-headline text-2xl text-foreground">5. Third-Party Services</h2>
          <p>We may employ third-party companies and individuals to facilitate our Website ("Service Providers"), to provide the Website on our behalf, to perform Website-related services or to assist us in analyzing how our Website is used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
          
          <h2 className="font-headline text-2xl text-foreground">6. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
          
          <p className="pt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
