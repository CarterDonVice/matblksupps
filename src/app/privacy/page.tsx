
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
          <p>Last updated: July 29, 2025</p>
          <p>This Privacy Policy describes how MAT BLK Supplements ("MAT BLK," "we," "us," or "our") collects, uses, discloses, and protects your Personal Information when you visit, make a purchase from, or otherwise interact with us through our website, matblksupps.com (the "Site").</p>
          <p>Please read this Privacy Policy carefully.</p>

          <h2 className="font-headline text-2xl text-foreground">Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy periodically to reflect changes to our practices or for operational, legal, or regulatory reasons. Updates will be posted on the Site, and the "Last updated" date above will reflect the most recent revisions.</p>

          <h2 className="font-headline text-2xl text-foreground">Personal Information We Collect</h2>
          <h3 className="font-headline text-xl text-foreground/90">Information You Provide</h3>
          <p>We collect Personal Information directly provided by you, which includes:</p>
          <ul className="list-disc pl-6">
            <li><strong>Contact Information:</strong> Name, email address, and phone number (only if voluntarily provided).</li>
            <li><strong>Order Information:</strong> Billing and shipping address, payment details, order confirmations.</li>
            <li><strong>Account Information:</strong> Email, password, purchase history, wishlist, and rewards points.</li>
            <li><strong>Customer Support Information:</strong> Communications and interactions with our support team.</li>
          </ul>

          <h3 className="font-headline text-xl text-foreground/90">Information Automatically Collected</h3>
          <p>When you interact with our Site, we automatically collect certain information about your device and usage through cookies, pixels, web beacons, and similar technologies, including:</p>
          <ul className="list-disc pl-6">
            <li>IP address, web browser type, device type, operating system, and time zone.</li>
            <li>Pages visited, products viewed, search terms, and interactions with the Site.</li>
          </ul>

          <h3 className="font-headline text-xl text-foreground/90">Information From Third Parties</h3>
          <p>We receive information from third-party service providers to facilitate your transactions and enhance your experience, including <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Shopify</a>, <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe</a>, and <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PayPal</a> for payment processing and store functionality.</p>

          <h2 className="font-headline text-2xl text-foreground">How We Use Your Personal Information</h2>
          <p>We use your Personal Information to:</p>
          <ul className="list-disc pl-6">
            <li>Fulfill orders and contracts, process payments, ship products, and provide customer support.</li>
            <li>Manage subscriptions and recurring purchases.</li>
            <li>Communicate about orders, account details, promotions, and products.</li>
            <li>Provide discounts in exchange for participation in surveys or reviews.</li>
            <li>Improve Site performance, usability, and security.</li>
            <li>Personalize advertising and marketing efforts.</li>
            <li>Comply with legal obligations and protect our rights and interests.</li>
          </ul>

          <h2 className="font-headline text-2xl text-foreground">Sharing Personal Information</h2>
          <p>We share your Personal Information with trusted third parties as necessary:</p>
          <ul className="list-disc pl-6">
            <li><strong>Shopify:</strong> Powers our online store. See their privacy policy <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.</li>
            <li><strong>Payment Processors:</strong> <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe</a> and <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PayPal</a> to securely handle payment transactions.</li>
            <li><strong>Service Providers:</strong> Companies performing services on our behalf, such as analytics, advertising, shipping, and customer support.</li>
            <li><strong>Compliance and Protection:</strong> To comply with applicable laws, regulations, lawful requests, and protect our rights.</li>
          </ul>

          <h2 className="font-headline text-2xl text-foreground">Behavioral Advertising</h2>
          <p>We use your Personal Information for targeted marketing communications, with your consent. You can opt-out anytime from:</p>
          <ul className="list-disc pl-6">
            <li><strong>Meta Ads and Facebook Pixel:</strong> <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a></li>
            <li><strong>TikTok Ads:</strong> Through TikTok settings</li>
            <li><strong>Digital Advertising Alliance:</strong> <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a></li>
          </ul>
          
          <h2 className="font-headline text-2xl text-foreground">Cookies</h2>
          <p>Cookies enhance your experience by remembering preferences and tracking usage. You can manage cookie settings through your browser, but disabling cookies may affect website functionality.</p>

          <h2 className="font-headline text-2xl text-foreground">Do Not Track Signals</h2>
          <p>We do not alter data collection practices in response to "Do Not Track" signals from browsers.</p>
          
          <h2 className="font-headline text-2xl text-foreground">Data Retention</h2>
          <p>We retain your Personal Information indefinitely or until you manually request its deletion.</p>

          <h2 className="font-headline text-2xl text-foreground">Data Breach Response</h2>
          <p>In the event of a data breach, we will promptly notify affected users via email or text message to inform them of the breach and the steps being taken to address it.</p>

          <h2 className="font-headline text-2xl text-foreground">Your Rights</h2>
          <p>You can access, correct, delete, or update your Personal Information by logging into your account. You may opt-in or opt-out of marketing emails and SMS messages at any time. If you delete your account, your data will be removed, and you will be logged out immediately.</p>
          
          <h2 className="font-headline text-2xl text-foreground">CCPA (California Residents)</h2>
          <p>You have the right to access, delete, correct, and port your Personal Information, as well as designate an authorized agent to submit requests on your behalf. Contact us to exercise these rights.</p>
          
          <h2 className="font-headline text-2xl text-foreground">Children's Privacy</h2>
          <p>The Site is not intended for individuals under the age of 16. We do not knowingly collect Personal Information from children. If we become aware of any such collection, we will delete the information promptly.</p>
          
          <h2 className="font-headline text-2xl text-foreground">Data Security</h2>
          <p>We rely solely on trusted third-party providers such as <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Shopify</a>, <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe</a>, and <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PayPal</a> for transaction security and are not liable for any data breaches occurring through these third parties.</p>
          
          <h2 className="font-headline text-2xl text-foreground">Complaints and Questions</h2>
          <p>If you have concerns about our privacy practices, contact us at matblksupplements@gmail.com. If unresolved, you have the right to lodge a complaint with your local data protection authority.</p>
          
          <h2 className="font-headline text-2xl text-foreground">Contact Us</h2>
          <p>For further information about our privacy practices or to exercise your privacy rights, please contact us at:</p>
          <p>MAT BLK Supplements<br/>Email: matblksupplements@gmail.com<br/>Website: matblksupps.com</p>
        </div>
      </div>
    </div>
  );
}

    