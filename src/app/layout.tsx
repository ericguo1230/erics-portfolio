'use client';
import Navbar from "@/app/components/Navbar";
import "@/app/globals.css";
import { PageProvider } from "@/app/contexts/PageInfoContext"
import { SessionProvider } from "@/app/contexts/SessionContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="min-h-screen bg-base-100 font-sans antialiased">
        <PageProvider>
        <SessionProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </SessionProvider>
        </PageProvider>
      </body>
    </html>
  );
}
