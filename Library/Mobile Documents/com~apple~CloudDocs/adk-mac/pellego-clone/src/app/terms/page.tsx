'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Last updated: January 1, 2023
            </p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to Pellego ("Company", "we", "our", "us")! As you have clicked "I agree" to these terms of service, you have entered into a binding contract with us. You agree to these Terms of Service ("Terms") when you use our services, including our website at pellego.com and any related applications (collectively, the "Services").
            </p>
            
            <h2>2. Acceptance of Terms</h2>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, you may not access the Services.
            </p>
            
            <h2>3. Changes to Terms</h2>
            <p>
              We may modify the Terms at any time by posting a revised version. Your continued use of the Services after the changes have been posted will constitute your acceptance of the updated Terms.
            </p>
            
            <h2>4. Eligibility</h2>
            <p>
              You must be at least 18 years old and have the legal authority to enter into these Terms. By using our Services, you represent and warrant that you meet these requirements.
            </p>
            
            <h2>5. User Accounts</h2>
            <p>
              To access certain features of our Services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            
            <h2>6. Services Description</h2>
            <p>
              Pellego provides AI-powered real estate analysis tools and resources to help users make informed decisions about property investments. Our Services may include property search, market analysis, investment calculators, data visualization, and other related features.
            </p>
            
            <h2>7. User Content</h2>
            <p>
              When you submit or post content through our Services ("User Content"), you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, and display that content in connection with the Services. You are solely responsible for your User Content and represent that you have all necessary rights to grant us these permissions.
            </p>
            
            <h2>8. Prohibited Activities</h2>
            <p>
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul>
              <li>Using the Services for any illegal purpose or in violation of any laws</li>
              <li>Violating the intellectual property rights of others</li>
              <li>Attempting to interfere with the proper functioning of the Services</li>
              <li>Accessing or attempting to access other users' accounts</li>
              <li>Scraping, crawling, or using automated means to collect data from our Services</li>
              <li>Impersonating another person or entity</li>
              <li>Using the Services to transmit malware, viruses, or other harmful code</li>
              <li>Engaging in any activity that disrupts or interferes with the Services</li>
            </ul>
            
            <h2>9. Intellectual Property</h2>
            <p>
              The Services and their original content, features, and functionality are and will remain the exclusive property of Pellego and its licensors. The Services are protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Pellego.
            </p>
            
            <h2>10. Third-Party Services</h2>
            <p>
              Our Services may contain links to third-party websites or services that are not owned or controlled by Pellego. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Pellego shall not be responsible or liable for any damage or loss caused by the use of such third-party websites or services.
            </p>
            
            <h2>11. Data Accuracy</h2>
            <p>
              While we strive to provide accurate property data and analysis, we do not guarantee the accuracy, completeness, or reliability of any information provided through our Services. The information provided is for informational purposes only and should not be considered as professional financial, investment, or real estate advice.
            </p>
            
            <h2>12. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, in no event shall Pellego, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
            </p>
            
            <h2>13. Disclaimer of Warranties</h2>
            <p>
              Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE" basis. The Services are provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
            
            <h2>14. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Pellego and its licensees and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses, resulting from or arising out of your use of the Services.
            </p>
            
            <h2>15. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of Washington, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
            
            <h2>16. Dispute Resolution</h2>
            <p>
              Any disputes arising out of or relating to these Terms or the Services will be resolved through binding arbitration in accordance with the American Arbitration Association's rules. The arbitration will be conducted in Seattle, Washington, unless you and Pellego agree otherwise.
            </p>
            
            <h2>17. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms. Upon termination, your right to use the Services will immediately cease.
            </p>
            
            <h2>18. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Pellego, Inc.<br />
              123 Tech Avenue<br />
              Seattle, WA 98101<br />
              Email: legal@pellego.com<br />
              Phone: (206) 555-0123
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 