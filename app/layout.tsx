import type { Metadata } from "next";
import "@navikt/ds-css";

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
        {children}
      </body>
    </html>
  );
}
