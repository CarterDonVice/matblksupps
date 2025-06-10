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
          <p>Welcome to MAT BLK Supplements. These terms and conditions outline the rules and regulations for the use of MAT BLK Supplements' Website.</p>
          
          <h2 className="font-headline text-2xl text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use MAT BLK Supplements' website if you do not accept all of the terms and conditions stated on this page.</p>

          <h2 className="font-headline text-2xl text-foreground">2. Products</h2>
          <p>All products listed on the Website are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any product at any time for any reason. Prices for all products are subject to change.</p>
          <p>Statements made about specific products on this website have not been evaluated by the Food and Drug Administration. Products sold on this website are not intended to diagnose, treat, cure, or prevent any disease.</p>

          <h2 className="font-headline text-2xl text-foreground">3. User Accounts</h2>
          <p>If you create an account on our website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it.</p>
          
          <h2 className="font-headline text-2xl text-foreground">4. Intellectual Property</h2>
          <p>The content, layout, design, data, databases and graphics on this website are protected by United States and other international intellectual property laws and are owned by MAT BLK Supplements or its licensors. Unless otherwise stated, MAT BLK Supplements and/or its licensors own the intellectual property rights for all material on MAT BLK Supplements.</p>

          <h2 className="font-headline text-2xl text-foreground">5. Limitation of Liability</h2>
          <p>In no event shall MAT BLK Supplements, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and MAT BLK Supplements, including its officers, directors and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>

          <h2 className="font-headline text-2xl text-foreground">6. Governing Law</h2>
          <p>These Terms will be governed by and construed in accordance with the laws of the State of [Your State/Country], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State/Country] for the resolution of any disputes.</p>
          
          <p className="pt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
