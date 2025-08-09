import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DataProtectionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Data Protection
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Our Commitment to Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At QuikFixr, we are committed to protecting your personal data and ensuring your privacy. This Data Protection Policy outlines how we collect, use, store, and protect your information in compliance with applicable data protection laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Legal Basis for Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• <strong>Consent:</strong> When you explicitly agree to the processing of your data</li>
                <li>• <strong>Contract:</strong> To fulfill our service obligations to you</li>
                <li>• <strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                <li>• <strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security Measures</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Technical Safeguards</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• End-to-end encryption for data transmission</li>
                    <li>• Secure socket layer (SSL) technology</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Multi-factor authentication for sensitive operations</li>
                    <li>• Secure data centers with physical security measures</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Organizational Safeguards</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-1">
                    <li>• Employee training on data protection</li>
                    <li>• Access controls and role-based permissions</li>
                    <li>• Regular policy reviews and updates</li>
                    <li>• Incident response procedures</li>
                    <li>• Vendor security assessments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Minimization and Purpose Limitation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We follow the principle of data minimization, collecting only the personal data that is necessary for the specified purposes:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Service provision and booking management</li>
                <li>• Payment processing and financial transactions</li>
                <li>• Customer support and communication</li>
                <li>• Quality improvement and analytics</li>
                <li>• Legal compliance and regulatory requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Subject Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Access and Portability</h3>
                  <p className="text-sm text-gray-700">Request a copy of your data and receive it in a portable format</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Rectification</h3>
                  <p className="text-sm text-gray-700">Correct inaccurate or incomplete personal data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Erasure</h3>
                  <p className="text-sm text-gray-700">Request deletion of your personal data ("right to be forgotten")</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Restriction</h3>
                  <p className="text-sm text-gray-700">Limit the processing of your personal data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Objection</h3>
                  <p className="text-sm text-gray-700">Object to processing based on legitimate interests</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Withdrawal</h3>
                  <p className="text-sm text-gray-700">Withdraw consent for processing where applicable</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your data may be transferred to and processed in countries outside your residence. We ensure appropriate safeguards are in place:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Adequacy decisions by relevant authorities</li>
                <li>• Standard contractual clauses for data transfers</li>
                <li>• Binding corporate rules for intra-group transfers</li>
                <li>• Other appropriate safeguards as required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Breach Response</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event of a data breach, we have established procedures to:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Detect and assess the breach promptly</li>
                <li>• Contain and mitigate the impact</li>
                <li>• Notify relevant authorities within required timeframes</li>
                <li>• Inform affected individuals when necessary</li>
                <li>• Document and learn from the incident</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Processors</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We work with carefully selected third-party service providers who process data on our behalf:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Cloud hosting and infrastructure providers</li>
                <li>• Payment processing services</li>
                <li>• Analytics and marketing tools</li>
                <li>• Customer support platforms</li>
                <li>• Communication services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                All third-party processors are bound by data processing agreements and must meet our security standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Data Protection Officer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have appointed a Data Protection Officer (DPO) to oversee our data protection practices and ensure compliance with applicable laws.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Contact the DPO:</strong><br/>
                  <strong>Email:</strong> dpo@quikfixr.com<br/>
                  <strong>Address:</strong> QuikFixr Data Protection Officer, India<br/>
                  <strong>Phone:</strong> +91-XXXXXXXXXX
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Data Protection Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes and provide you with the opportunity to review the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our data protection practices or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@quikfixr.com<br/>
                  <strong>Address:</strong> QuikFixr Privacy Team, India<br/>
                  <strong>Phone:</strong> +91-XXXXXXXXXX<br/>
                  <strong>Data Protection Officer:</strong> dpo@quikfixr.com
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