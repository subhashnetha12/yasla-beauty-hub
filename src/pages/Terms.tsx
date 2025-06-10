
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using the Yasla platform, you accept and agree to be bound by the terms and provision 
                    of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Platform Description</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Yasla is an online platform that connects customers with beauty salons and service providers. 
                    We facilitate booking, payment processing, and communication between customers and salon partners.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our platform includes features such as salon discovery, service booking, payment processing, 
                    review systems, and customer support services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">3.1 Account Creation</h3>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>You must provide accurate, current, and complete information during registration</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>You must be at least 18 years old to create an account</li>
                    <li>One person may not maintain more than one active account</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">3.2 Account Responsibility</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You are responsible for all activities that occur under your account. You agree to notify us 
                    immediately of any unauthorized use of your account or any other breach of security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Booking and Payment Terms</h2>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">4.1 Booking Process</h3>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>All bookings are subject to salon availability and confirmation</li>
                    <li>Booking confirmations will be sent via email and SMS</li>
                    <li>Yasla reserves the right to cancel bookings in case of technical errors or salon unavailability</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">4.2 Payment Terms</h3>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>Payment is processed at the time of booking confirmation</li>
                    <li>All prices are inclusive of applicable taxes unless otherwise mentioned</li>
                    <li>Yasla uses secure payment gateways for all transactions</li>
                    <li>Payment methods include credit/debit cards, digital wallets, and UPI</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">4.3 Cancellation Policy</h3>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>Cancellations made 24+ hours before appointment: Full refund</li>
                    <li>Cancellations made 2-24 hours before appointment: 50% refund</li>
                    <li>Cancellations made less than 2 hours before appointment: No refund</li>
                    <li>No-shows will not be eligible for refunds</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Conduct</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">You agree not to use the platform to:</p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>Violate any applicable local, state, national, or international law</li>
                    <li>Post false, inaccurate, misleading, defamatory, or libelous content</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Interfere with or disrupt the platform or servers connected to the platform</li>
                    <li>Attempt to gain unauthorized access to any portion of the platform</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Salon Partner Terms</h2>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">6.1 Partnership Agreement</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Salon partners must maintain valid business licenses and professional certifications. 
                    Partners agree to provide services as described and maintain quality standards.
                  </p>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">6.2 Service Standards</h3>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>Maintain hygiene and safety standards as per industry regulations</li>
                    <li>Honor all confirmed bookings and arrive on time</li>
                    <li>Provide services as described in the booking</li>
                    <li>Maintain professional conduct with customers</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                    of the platform, to understand our practices regarding the collection, use, and disclosure of 
                    your personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Yasla serves as a platform connecting customers with salon partners. We are not responsible for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>Quality of services provided by salon partners</li>
                    <li>Actions or omissions of salon partners or customers</li>
                    <li>Damages arising from use of services booked through our platform</li>
                    <li>Technical issues that may affect booking or payment processing</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The Yasla platform, including its design, functionality, and content, is protected by intellectual 
                    property rights. You may not reproduce, distribute, or create derivative works without our express 
                    written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to terminate or suspend your account and access to the platform at our sole 
                    discretion, without prior notice, for conduct that we believe violates these Terms & Conditions 
                    or is harmful to other users, us, or third parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                    posting on the platform. Your continued use of the platform constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about these Terms & Conditions, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-3">
                    <p className="text-gray-700"><strong>Email:</strong> legal@yasla.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +91 9876-543-210</p>
                    <p className="text-gray-700"><strong>Address:</strong> 123 Business District, Delhi, India</p>
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

export default Terms;
