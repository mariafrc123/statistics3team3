
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Inventory Usage & Incentives",
  description: "Static export for GitHub Pages",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
