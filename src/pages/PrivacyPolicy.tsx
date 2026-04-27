import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: April 27, 2026</p>

          <div className="prose prose-lg text-muted-foreground space-y-6">
            <h2 className="text-2xl font-semibold text-foreground mt-8">1. Who We Are</h2>
            <p>
              East Code Studio is a QA automation engineering services company based in Bucharest, Romania.
              This website is operated by East Code Studio ("we", "us", "our"). Our website address is: https://eastcodestudio.io.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Information you provide:</strong> When you book a call via Calendly, you provide your name, email address, and any additional details you choose to share.</li>
              <li><strong>Usage data:</strong> We use Vercel Analytics to collect anonymous usage data such as page views, referral sources, and browser type. This data does not personally identify you.</li>
              <li><strong>Cookies:</strong> We use essential cookies required for the website to function. We do not use advertising or tracking cookies.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and schedule calls</li>
              <li>Understand how visitors use our website so we can improve it</li>
              <li>Communicate with you about our services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8">4. Third-Party Services</h2>
            <p>We use the following third-party services that may process your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Calendly:</strong> For scheduling calls. Subject to <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Calendly's Privacy Policy</a>.</li>
              <li><strong>Vercel:</strong> For hosting and analytics. Subject to <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Vercel's Privacy Policy</a>.</li>
              <li><strong>Google Workspace:</strong> For email communication. Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google's Privacy Policy</a>.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected,
              including to satisfy any legal or reporting requirements.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">6. Your Rights (GDPR)</h2>
            <p>If you are located in the European Economic Area, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8">7. Contact</h2>
            <p>
              For any questions about this Privacy Policy or your personal data, contact us at:{" "}
              <a href="mailto:alin@eastcodestudio.io" className="text-accent hover:underline">alin@eastcodestudio.io</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
