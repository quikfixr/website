import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website or use our mobile app. They help us provide you with a better experience by remembering your preferences and analyzing how you use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    These cookies are necessary for the website and app to function properly. They enable basic functions like page navigation, access to secure areas, and user authentication.
                  </p>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• Session management and security</li>
                    <li>• User authentication and login</li>
                    <li>• Shopping cart functionality</li>
                    <li>• Payment processing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    These cookies help us understand how visitors interact with our website and app by collecting and reporting information anonymously.
                  </p>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• Analytics and usage statistics</li>
                    <li>• Error tracking and debugging</li>
                    <li>• Performance monitoring</li>
                    <li>• User behavior analysis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                  </p>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• Language preferences</li>
                    <li>• Location settings</li>
                    <li>• Service preferences</li>
                    <li>• User interface customization</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    These cookies are used to track visitors across websites to display relevant advertisements and measure the effectiveness of marketing campaigns.
                  </p>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• Targeted advertising</li>
                    <li>• Social media integration</li>
                    <li>• Campaign effectiveness tracking</li>
                    <li>• Retargeting efforts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services that also use cookies. These services include:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Google Analytics for website analytics</li>
                <li>• Payment processors for secure transactions</li>
                <li>• Social media platforms for sharing features</li>
                <li>• Advertising networks for relevant ads</li>
                <li>• Customer support tools for better service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How Long Cookies Last</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Session Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies are temporary and are deleted when you close your browser or app.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Persistent Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies remain on your device for a set period or until you delete them manually.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Browser settings: Most browsers allow you to block or delete cookies</li>
                <li>• Mobile app settings: You can manage app permissions and data usage</li>
                <li>• Cookie consent: We provide options to accept or decline non-essential cookies</li>
                <li>• Third-party opt-outs: You can opt out of third-party tracking</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While you can disable cookies, please note that:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Some features may not work properly</li>
                <li>• You may need to re-enter information repeatedly</li>
                <li>• Personalized content may not be available</li>
                <li>• Security features may be affected</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us at:
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