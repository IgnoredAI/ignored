// /app/layout.js
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css"; 

export const runtime = "edge";

export const metadata = {
  title: 'Ignored AI',
  description: 'Smart way to manage your tabs with Ignored AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#101010" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
