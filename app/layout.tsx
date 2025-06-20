import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "musixt",
  description: "musixt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center">
          <div className="max-w-2xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
