
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Yasla ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                    how we collect, use, disclose, and safeguard your information when you use our platform and services. 
                    Please read this policy carefully to understand our practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">2.1 Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">We may collect the following personal information:</p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>Name, email address, phone number</li>
                    <li>Billing and payment information</li>
                    <li>Location data (when you permit location services)</li>
                    <li>Profile photos and preferences</li>
                    <li>Booking history and service preferences</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">2.2 Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, features used)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Log files and analytics data</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">2.3 Third-Party Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may receive information about you from third parties, such as social media platforms 
                    when you choose to login using social authentication, or payment processors during transactions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process bookings and payments</li>
                    <li>Send booking confirmations and service updates</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Personalize your experience and recommendations</li>
                    <li>Send promotional content and marketing communications (with your consent)</li>
                    <li>Analyze usage patterns and improve our platform</li>
                    <li>Detect and prevent fraud or security issues</li>
                    <li>Comply with legal obligations and enforce our terms</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">4.1 With Salon Partners</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We share necessary booking information with salon partners to fulfill your service requests, 
                    including your name, contact details, and service preferences.
                  </p>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">4.2 With Service Providers</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We may share information with third-party service providers who assist us in:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>Payment processing</li>
                    <li>Cloud hosting and data storage</li>
                    <li>Customer support services</li>
                    <li>Marketing and analytics</li>
                    <li>Security and fraud prevention</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">4.3 Legal Requirements</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may disclose your information if required by law, court order, or government regulation, 
                    or to protect our rights, property, or safety, or that of our users or the public.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We implement appropriate technical and organizational security measures to protect your information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure servers and databases</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    However, no method of transmission over the internet or electronic storage is 100% secure. 
                    While we strive to use commercially acceptable means to protect your information, 
                    we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">6.1 Access and Update</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    You can access and update your personal information through your account settings 
                    or by contacting our support team.
                  </p>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">6.2 Data Deletion</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    You can request deletion of your personal information, subject to certain legal 
                    and business requirements. Some information may be retained for legal compliance.
                  </p>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">6.3 Marketing Communications</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    You can opt out of marketing communications at any time by:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>Clicking the unsubscribe link in emails</li>
                    <li>Adjusting notification settings in your account</li>
                    <li>Contacting our support team</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">6.4 Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You can control cookies through your browser settings. Note that disabling cookies 
                    may affect the functionality of our platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We retain your information for as long as necessary to provide our services, 
                    comply with legal obligations, resolve disputes, and enforce our agreements. 
                    When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your country of residence. 
                    We ensure appropriate safeguards are in place to protect your information in accordance with this 
                    Privacy Policy and applicable laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not intended for children under 18. We do not knowingly collect personal information 
                    from children under 18. If we become aware that we have collected such information, 
                    we will take steps to delete it promptly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes 
                    by posting the new Privacy Policy on our platform and updating the "Last updated" date. 
                    Your continued use of our services constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700"><strong>Email:</strong> privacy@yasla.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +91 9876-543-210</p>
                    <p className="text-gray-700"><strong>Address:</strong> 123 Business District, Delhi, India</p>
                    <p className="text-gray-700 mt-2">
                      <strong>Data Protection Officer:</strong> dpo@yasla.com
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
