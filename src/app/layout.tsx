import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Javascript Quiz",
  description: "Javascript Quiz by Aristide Dongo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
