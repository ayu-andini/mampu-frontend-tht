import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/lib/react-query-provider";

export const metadata: Metadata = {
  title: "User Operations",
  description: "Frontend - THT Mampu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
