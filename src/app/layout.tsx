import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Javascript Quiz",
  description: "Javascript Quiz by Aristide Dongo pour tester sa connaissance en JavaScript",
  keywords: "JavaScript, quiz, apprendre, éducation, interactif",
  authors: [{ name: "Aristide Dongo", url: "https://javascript-quiz-app-ashen.vercel.app" }],
  creator: "Aristide Dongo",
  icons: {icon: "/icon.ico"},
  openGraph: {
    title: "Javascript Quiz",
    description: "Javascript Quiz by Aristide Dongo pour tester sa connaissance en JavaScript",
    url: "https://javascript-quiz-app-ashen.vercel.app",
    siteName: "Javascript Quiz",
    images: [
      {
        url: "/src/Images/Coding1.png", // Remplace par une image appropriée
        width: 800,
        height: 600,
        alt: "Image de présentation du Javascript Quiz",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://javascript-quiz-app-ashen.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
