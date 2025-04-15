'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Last updated: January 1, 2023
            </p>
            
            <h2>1. Introduction</h2>
            <p>
              At Pellego ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our website at pellego.com and any related applications (collectively, the "Services").
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our Services:
            </p>
            <ul>
              <li><strong>Personal Information:</strong> This includes information that can identify you as an individual, such as your name, email address, phone number, and mailing address.</li>
              <li><strong>Account Information:</strong> Information related to your account, including username, password, and profile details.</li>
              <li><strong>Property Search Information:</strong> Data related to your property searches, saved properties, and preferred criteria.</li>
              <li><strong>Technical Data:</strong> This includes your IP address, browser type and version, device information, operating system, and other technology identifiers on the devices you use to access our Services.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our Services, including pages visited, features used, time spent, and referring websites.</li>
            </ul>
            
            <h2>3. How We Collect Your Information</h2>
            <p>
              We collect information in several ways:
            </p>
            <ul>
              <li><strong>Direct Interactions:</strong> Information you provide when you register for an account, subscribe to our services, request information, or communicate with us.</li>
              <li><strong>Automated Technologies:</strong> As you navigate through our Services, we may automatically collect technical data using cookies and similar technologies.</li>
              <li><strong>Third Parties:</strong> We may receive information about you from third parties, including business partners, analytics providers, and real estate databases.</li>
            </ul>
            
            <h2>4. How We Use Your Information</h2>
            <p>
              We use your information for the following purposes:
            </p>
            <ul>
              <li>To provide and maintain our Services, including processing transactions and sending related information.</li>
              <li>To personalize your experience and deliver content and product offerings relevant to your interests.</li>
              <li>To improve our Services, including analyzing user behavior and trends.</li>
              <li>To communicate with you, including responding to inquiries and providing customer support.</li>
              <li>To send periodic emails, newsletters, and updates about our Services.</li>
              <li>To comply with legal obligations and enforce our terms of service.</li>
            </ul>
            
            <h2>5. Data Sharing and Disclosure</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</li>
              <li><strong>Business Partners:</strong> Real estate professionals, property managers, and other partners with whom we collaborate to offer integrated services.</li>
              <li><strong>Analytics and Advertising Partners:</strong> Companies that help us analyze website traffic and optimize our marketing efforts.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, including to comply with a subpoena or similar legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
            </ul>
            
            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Services and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2>7. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational measures to protect your personal information from accidental loss, unauthorized access, and other security risks. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>8. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, including to satisfy legal requirements, resolve disputes, and enforce our agreements.
            </p>
            
            <h2>9. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul>
              <li><strong>Access:</strong> You can request copies of your personal information.</li>
              <li><strong>Rectification:</strong> You can request that we correct inaccurate or incomplete information.</li>
              <li><strong>Erasure:</strong> You can request that we delete your personal information in certain circumstances.</li>
              <li><strong>Restriction:</strong> You can request that we restrict the processing of your information.</li>
              <li><strong>Data Portability:</strong> You can request to receive your personal information in a structured, commonly used format.</li>
              <li><strong>Objection:</strong> You can object to our processing of your personal information.</li>
            </ul>
            
            <h2>10. Children's Privacy</h2>
            <p>
              Our Services are not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete that information.
            </p>
            
            <h2>11. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries outside of your country of residence, where data protection laws may differ. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
            </p>
            
            <h2>12. Third-Party Links</h2>
            <p>
              Our Services may contain links to third-party websites and services. We are not responsible for the content or privacy practices of these sites and encourage you to review their privacy policies.
            </p>
            
            <h2>13. Changes to This Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this policy.
            </p>
            
            <h2>14. California Privacy Rights</h2>
            <p>
              California residents may have additional rights regarding their personal information under the California Consumer Privacy Act (CCPA) and other state laws. These include the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information.
            </p>
            
            <h2>15. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p>
              Pellego, Inc.<br />
              123 Tech Avenue<br />
              Seattle, WA 98101<br />
              Email: privacy@pellego.com<br />
              Phone: (206) 555-0123
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 