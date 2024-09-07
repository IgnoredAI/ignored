import React from "react";
import Markdown from "react-markdown";
import { Header } from "../signin/components/Header";

export const runtime = "edge";

export default function PrivacyPolicyPage() {

    const markdownContent = `
        Privacy Policy

## Overview

At Ignored.ai, we prioritize your privacy. This policy outlines how we collect, use, and protect your personal information when you use our web app and browser extension.

## Information Collection

### Web App

- **Personal Data**: This includes your name, email address, and profile information used to personalize your experience.
- **Usage Data**: We track usage patterns to improve the app’s performance.
- **Saved Content**: Data related to your saved tabs is stored to provide quick access and improve user experience.

### Browser Extension

- **Browsing Data**: Ignored.ai only stores data related to open tabs when you actively use the extension. No browsing history is stored.
- **Current Page Data**: Collected data from your current open tab when you click the extension is used to organize and manage tabs.

## Data Storage & Security

We store data securely on [Cloudflare D1](https://developers.cloudflare.com/d1/), [Cloudflare Vectorize](https://developers.cloudflare.com/vectorize/), and [Cloudflare KV](https://developers.cloudflare.com/kv). Your data is encrypted, but no system is 100% secure. We cannot guarantee absolute security.

## Use of Information

We collect and use your data to:
- Improve app performance.
- Provide a personalized experience.
- Communicate updates and support.

## Sharing of Data

Ignored.ai does not sell or trade personal information. We may share anonymized data for analytics purposes.

## Your Rights

You can request to access, update, or delete your data at any time. Reach out to us at praveenap0217@gmail.com.

## Contact Us

For any concerns or questions, feel free to contact us:

Email: praveenap0217@gmail.com

Last updated: September 6, 2024

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
