import React from "react";
import Markdown from "react-markdown";
import { Header } from "../signin/components/Header";

export const runtime = "edge";

export default function TermsPage() {

    const markdownContent = `
        Terms and Conditions

    ## Introduction

    Welcome to Ignored.ai! By using our web app and browser extension, you agree to abide by these Terms and Conditions. Ignored.ai is owned and operated by Praveen Shah and the Ignored.ai team. The services we provide allow you to efficiently manage your browser tabs and enhance your browsing experience. Please read these terms carefully before using our service.

    ## Acceptance of Terms

    By accessing and using Ignored.ai, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, you must stop using our service immediately.

    ## User Responsibilities

    - **Account Security**: You are responsible for keeping your account secure, including safeguarding your login credentials. Ignored.ai will not be held liable for any loss or damage resulting from unauthorized access to your account.

    - **Prohibited Uses**: You agree not to use Ignored.ai for any illegal or unauthorized purposes. You must not, in the use of the service, violate any laws in your jurisdiction.

    - **Data Management**: It is your responsibility to ensure that any information saved within Ignored.ai is backed up. Ignored.ai is not liable for any data loss or corruption.

    ## Intellectual Property

    All intellectual property rights related to Ignored.ai, including but not limited to trademarks, logos, and proprietary code, remain the sole property of Praveen Shah and the Ignored.ai team. You may not use, distribute, or reproduce any content from Ignored.ai without express permission.

    ## Limitation of Liability

    Ignored.ai and its owners are not liable for any damages, whether direct, indirect, incidental, or consequential, arising from the use of the service. The use of Ignored.ai is at your own risk, and the service is provided "as is."

    ## Modification of Services

    Ignored.ai reserves the right to modify, suspend, or discontinue any aspect of the service at any time, with or without notice. We are not liable to you or any third party for any changes to or discontinuation of the service.

    ## Termination

    We reserve the right to terminate or suspend your access to Ignored.ai at our discretion, without notice, for any reason, including but not limited to a violation of these Terms and Conditions.

    ## Governing Law

    These terms are governed by and construed in accordance with the laws of your local jurisdiction, without regard to conflict of law principles.

    ## Contact Information

    If you have any questions or concerns about these Terms and Conditions, please contact us at praveenap0217@gmail.com
  `;
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div className="flex justify-center mb-10">
          <div className="bg-gray-900 shadow-md ml-6 mr-6">
            <div className=" max-w-4xl prose prose-invert p-6">
              <Markdown>{markdownContent}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
