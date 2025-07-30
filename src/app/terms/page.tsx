
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | MAT BLK Supplements',
  description: 'Read the Terms of Service for MAT BLK Supplements.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-xl border-border/50">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
          Terms of Service
        </h1>
        <div className="space-y-6 text-muted-foreground prose prose-invert prose-lg max-w-none">
          <p>Last updated: July 29, 2025</p>
          <p>Welcome to MAT BLK Supplements ("MAT BLK," "we," "us," or "our"). By accessing or using our website, matblksupps.com (the "Site"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, please do not use our Site.</p>

          <h2 className="font-headline text-2xl text-foreground">Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Updates will be posted on this page with a revised "Last updated" date. Continued use of our Site following changes indicates your acceptance of the updated Terms.</p>

          <h2 className="font-headline text-2xl text-foreground">Age Restrictions</h2>
          <p>Our Site is not intended for use by individuals under 13 years old. Users between 13 and 18 must have parental or guardian permission to use our Site. By using our Site, you confirm that you meet these age requirements.</p>

          <h2 className="font-headline text-2xl text-foreground">Product Information</h2>
          <p>MAT BLK sells dietary supplements, including pre-workouts, protein powders, creatine, and electrolytes. We make every effort to ensure accurate product descriptions but cannot guarantee absolute accuracy. Product information may change without notice.</p>

          <h2 className="font-headline text-2xl text-foreground">Order Acceptance and Cancellation</h2>
          <p>We reserve the right to refuse, modify, or cancel any order at our discretion. If an order is modified or canceled, we will notify you through the email provided during checkout.</p>

          <h2 className="font-headline text-2xl text-foreground">Return and Refund Policy</h2>
          <p>Customers must cover return shipping costs. Once your returned item is received, a refund for the product cost will be issued. For return inquiries, contact us at support@matblksupps.com.</p>

          <h2 className="font-headline text-2xl text-foreground">User Accounts</h2>
          <p>Creating an account on our Site is optional. When creating an account, you agree to provide accurate, complete, and updated information. You are responsible for safeguarding your account credentials.</p>

          <h2 className="font-headline text-2xl text-foreground">Marketing Communications</h2>
          <p>By opting into our marketing programs through account creation, checkout selection, or promotional pop-ups, you consent to receive periodic SMS/MMS and email marketing messages. Consent is not a condition of purchase. Message and data rates may apply.</p>
          <p>To opt-out, reply STOP, END, CANCEL, UNSUBSCRIBE, or QUIT to any marketing message. For support, contact support@matblksupps.com.</p>

          <h2 className="font-headline text-2xl text-foreground">Intellectual Property</h2>
          <p>All content on our Site, including logos, branding, product names, graphics, and text, is owned exclusively by MAT BLK. Use of our content without prior written permission is strictly prohibited.</p>

          <h2 className="font-headline text-2xl text-foreground">Prohibited Uses</h2>
          <p>You agree not to use our Site for any illegal, harmful, or unauthorized purposes. We reserve the right to terminate your access if prohibited activities are detected.</p>

          <h2 className="font-headline text-2xl text-foreground">Third-Party Payment Processors</h2>
          <p>Payments are securely processed through third-party providers (Shopify, Stripe, PayPal). MAT BLK does not store or have direct access to your payment information. We are not liable for breaches or issues arising directly from these third-party processors.</p>

          <h2 className="font-headline text-2xl text-foreground">Disclaimer of Warranties</h2>
          <p>Our Site and products are provided "as is" without warranties of any kind, express or implied. We disclaim any warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

          <h2 className="font-headline text-2xl text-foreground">Limitation of Liability</h2>
          <p>MAT BLK shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or products purchased, to the maximum extent permitted by law.</p>

          <h2 className="font-headline text-2xl text-foreground">Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless MAT BLK and its affiliates, officers, employees, and agents from any claims or liabilities arising from your use of the Site or your breach of these Terms.</p>

          <h2 className="font-headline text-2xl text-foreground">Governing Law and Dispute Resolution</h2>
          <p>These Terms are governed by the laws of Tarrant County, Texas. Any disputes will be resolved through binding arbitration on an individual basis in Tarrant County, Texas, waiving any rights to class action proceedings.</p>

          <h2 className="font-headline text-2xl text-foreground">Contact Us</h2>
          <p>For any questions or support regarding these Terms, please contact us at:</p>
          <p>
            MAT BLK Supplements<br/>
            Email: support@matblksupps.com<br/>
            Website: matblksupps.com
          </p>
        </div>
      </div>
    </div>
  );
}
