import "./globals.css";
import React from "react";

export const metadata = {
  title: "Healthcare Recovery Dashboard",
  description: "Post-Discharge Recovery Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 antialiased">{children}</body>
    </html>
  );
}