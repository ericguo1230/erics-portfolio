'use client';
import Navbar from "@/app/components/Navbar";
import "@/app/globals.css";
import { PageProvider } from "@/app/contexts/PageInfoContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="min-h-screen bg-base-100 font-sans antialiased">
        <PageProvider>
          <Navbar />
          <main className="min-'useh-screen">
            {children}
          </main>
        </PageProvider>
      </body>
    </html>
  );
}
