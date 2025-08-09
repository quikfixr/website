import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using QuikFixr ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                QuikFixr is a mobile application that connects users with verified local service providers for home services including but not limited to plumbing, electrical work, AC repair, cleaning, and other household services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Provide accurate and complete information when booking services</li>
                <li>• Treat service providers with respect and professionalism</li>
                <li>• Pay for services as agreed upon with the service provider</li>
                <li>• Report any issues or concerns through the app</li>
                <li>• Not use the service for any illegal or unauthorized purpose</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Service Provider Responsibilities</h2>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Provide services in a professional and timely manner</li>
                <li>• Maintain proper licenses and insurance as required</li>
                <li>• Follow all applicable laws and regulations</li>
                <li>• Maintain the quality standards set by QuikFixr</li>
                <li>• Respond to customer feedback and concerns promptly</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment for services is made directly between the user and service provider. QuikFixr may facilitate payment processing but is not responsible for payment disputes between users and service providers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                QuikFixr acts as a platform connecting users with service providers. We are not responsible for the quality of services provided by third-party service providers. Users should verify service provider credentials and insurance independently.
              </p>
            </div>

                          <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your privacy is important to us. Please review our <a href="/privacy" className="text-primary-500 hover:text-primary-600 underline">Privacy Policy</a>, which also governs your use of the Service, to understand our practices.
                </p>
              </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@quikfixr.com<br/>
                  <strong>Address:</strong> QuikFixr Legal Team, India<br/>
                  <strong>Phone:</strong> +91-XXXXXXXXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 