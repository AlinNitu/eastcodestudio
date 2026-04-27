import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: April 27, 2026</p>

          <div className="prose prose-lg text-muted-foreground space-y-6">
            <h2 className="text-2xl font-semibold text-foreground mt-8">1. Overview</h2>
            <p>
              These Terms of Service govern your use of the East Code Studio website at https://eastcodestudio.io.
              By accessing or using our website, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">2. Services</h2>
            <p>
              East Code Studio provides QA automation engineering services on a contract basis.
              Specific terms for each engagement are agreed upon separately between East Code Studio and the client
              and are not governed by these website terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">3. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to interfere with the website's functionality or security</li>
              <li>Reproduce, duplicate, or resell any part of the website without permission</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and design, is the property of East Code Studio
              and is protected by applicable intellectual property laws. You may not use, reproduce, or distribute any content
              without our prior written consent.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">5. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (such as Calendly and LinkedIn).
              We are not responsible for the content, privacy practices, or terms of any third-party sites.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">6. Disclaimer</h2>
            <p>
              This website and its content are provided "as is" without warranties of any kind, either express or implied.
              East Code Studio does not guarantee that the website will be available at all times or free from errors.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">7. Limitation of Liability</h2>
            <p>
              East Code Studio shall not be liable for any indirect, incidental, or consequential damages arising from
              your use of this website or reliance on any information provided on it.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of Romania. Any disputes shall be subject to the exclusive
              jurisdiction of the courts in Bucharest, Romania.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">9. Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Changes will be posted on this page with an updated date.
              Continued use of the website after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8">10. Contact</h2>
            <p>
              For questions about these Terms of Service, contact us at:{" "}
              <a href="mailto:alin@eastcodestudio.io" className="text-accent hover:underline">alin@eastcodestudio.io</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default TermsOfService;
