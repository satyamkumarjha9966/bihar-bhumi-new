import React from "react";
import HelmetSEO from "../components/HelmetSEO";

function Terms() {
  return (
    <>
      <HelmetSEO
        title="Terms of Use | Bihar Bhumi"
        description="Terms of Use for Bihar Bhumi - rules and conditions for using the site."
        keywords="terms of use Bihar Bhumi, user agreement, site terms"
      />
      <div className="bg-[#F7F7F7] min-h-screen py-16">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-black mb-4">Terms of Use</h1>
          <div className="h-1 bg-[#FF6600] rounded-full w-24 mb-6"></div>

          <p className="text-gray-700 mb-4">
            Welcome to Bihar Bhumi. By accessing or using this website, you
            agree to comply with and be bound by the following terms and
            conditions. If you disagree with any part of these terms, you must
            not use our site.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">Use of Content</h2>
          <p className="text-gray-700 mb-2">
            Content provided on this site is for general informational purposes
            only. While we make reasonable efforts to keep information accurate
            and up-to-date, we do not warrant the completeness or accuracy of
            the content and are not responsible for errors or omissions.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Third-Party Links
          </h2>
          <p className="text-gray-700 mb-2">
            This site links to official Bihar government and third-party portals
            for services and documents. These links are provided for
            convenience; we do not control third-party content and are not
            responsible for their privacy practices or availability.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Advertising Disclosure
          </h2>
          <p className="text-gray-700 mb-2">
            We may display advertising from third-party networks such as Google
            AdSense. Advertisements are served by third-party providers and are
            subject to their own policies. We do not guarantee the relevance or
            accuracy of any ads displayed.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-2">
            To the fullest extent permitted by law, Bihar Bhumi will not be
            liable for any indirect, incidental, or consequential damages
            arising from the use of this site.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">Governing Law</h2>
          <p className="text-gray-700 mb-2">
            These terms are governed by the laws of India.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">Contact</h2>
          <p className="text-gray-700 mb-2">
            For questions about these Terms, please contact us at
            jankaribiharbhumi@gmail.com.
          </p>

          <p className="text-sm text-gray-500 mt-6">
            Last updated: October 6, 2025
          </p>
        </div>
      </div>
    </>
  );
}

export default Terms;
