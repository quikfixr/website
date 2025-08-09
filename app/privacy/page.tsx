import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• Name and contact information (phone number, email)</li>
                    <li>• Address and location data for service booking</li>
                    <li>• Payment information (processed securely through third-party providers)</li>
                    <li>• Profile information and preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Usage Information</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• App usage data and service booking history</li>
                    <li>• Device information and app performance data</li>
                    <li>• Location data (with your consent)</li>
                    <li>• Communication with service providers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• To provide and maintain our service</li>
                <li>• To connect you with appropriate service providers</li>
                <li>• To process payments and transactions</li>
                <li>• To send you service updates and notifications</li>
                <li>• To improve our app and user experience</li>
                <li>• To provide customer support</li>
                <li>• To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• With service providers to facilitate bookings (only necessary information)</li>
                <li>• With payment processors for transaction processing</li>
                <li>• With legal authorities when required by law</li>
                <li>• With your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Encryption of data in transit and at rest</li>
                <li>• Secure authentication and authorization</li>
                <li>• Regular security audits and updates</li>
                <li>• Limited access to personal data on a need-to-know basis</li>
                <li>• Compliance with industry security standards</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Provide our services to you</li>
                <li>• Comply with legal obligations</li>
                <li>• Resolve disputes and enforce agreements</li>
                <li>• Improve our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Access your personal data</li>
                <li>• Correct inaccurate information</li>
                <li>• Request deletion of your data</li>
                <li>• Object to processing of your data</li>
                <li>• Data portability</li>
                <li>• Withdraw consent where applicable</li>
              </ul>
            </div>

                          <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar technologies to improve your experience. Please refer to our <a href="/cookies" className="text-primary-500 hover:text-primary-600 underline">Cookie Policy</a> for detailed information about how we use cookies.
                </p>
              </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@quikfixr.com<br/>
                  <strong>Address:</strong> QuikFixr Privacy Team, India<br/>
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