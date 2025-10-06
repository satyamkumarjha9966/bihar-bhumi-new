import React from "react";
import HelmetSEO from "../components/HelmetSEO";

function PrivacyPolicy() {
  return (
    <>
      <HelmetSEO
        title="Privacy Policy | Bihar Bhumi"
        description="Privacy Policy for Bihar Bhumi - how we collect, use, and protect user data."
        keywords="privacy policy Bihar Bhumi, data protection, cookies, ads"
      />
      <div className="bg-[#F7F7F7] min-h-screen py-16">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-black mb-4">Privacy Policy</h1>
          <div className="h-1 bg-[#FF6600] rounded-full w-24 mb-6"></div>

          <p className="text-gray-700 mb-4">
            This Privacy Policy describes how Bihar Bhumi ("we", "our", or "us")
            collects, uses, and discloses information when you visit and
            interact with our website. We are committed to protecting your
            privacy and handling your personal information in a transparent
            manner.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-2">
            We may collect information you provide directly (for example, when
            you contact us via the contact form), and non-personally
            identifiable information (such as browser type, pages visited, and
            device information) through standard web technologies like cookies
            and server logs.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            How We Use Information
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-2">
            <li>To respond to your inquiries and provide support.</li>
            <li>To improve our website and services.</li>
            <li>
              To display relevant advertising (if enabled) and measure
              performance of ads.
            </li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Cookies & Similar Technologies
          </h2>
          <p className="text-gray-700 mb-2">
            We use cookies and similar technologies for analytics, to remember
            user preferences, and to improve the user experience. You can
            disable cookies in your browser settings but some features may stop
            working as expected.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Advertising and Third Parties
          </h2>
          <p className="text-gray-700 mb-2">
            We may work with third-party ad networks such as Google AdSense to
            display ads. These third parties may use cookies to serve ads based
            on your prior visits to the site and across the web. Third-party
            privacy practices are governed by their own privacy policies; we
            encourage you to review them.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Content & Sources
          </h2>
          <p className="text-gray-700 mb-2">
            Much of the portal links to official Bihar government services and
            third-party government portals. Where we reproduce summaries or
            descriptions, we aim to provide accurate, original explanatory text.
            We do not claim to be the official Bihar government website unless
            explicitly stated.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">Your Choices</h2>
          <p className="text-gray-700 mb-2">
            You can opt out of certain analytics tracking and manage cookie
            settings in your browser. To request deletion of personal
            information you've provided through the contact form, contact us
            using the details below.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">Contact</h2>
          <p className="text-gray-700 mb-2">
            For questions or requests about this Privacy Policy, please contact
            us at:
          </p>
          <p className="text-gray-700">
            Email: jankaribiharbhumi@gmail.com
            <br /> Phone: +91-7761097990
          </p>

          <p className="text-sm text-gray-500 mt-6">
            Last updated: October 6, 2025
          </p>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
