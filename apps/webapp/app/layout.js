// /app/layout.js
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css"; 
import Head from "next/head";

export const runtime = "edge";

export const metadata = {
  title: 'Ignored AI',
  description: 'Smart way to manage your tabs with Ignored AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#101010" />
      </Head>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
