import { SidebarCard } from "@/components/SidebarCard";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Jordan Brockbank · Portfolio",
  description:
    "Graduating CS student focused on systems, networking, and full‑stack web development.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:py-16">
          <div className="lg:w-2/3">{children}</div>
          <div className="lg:w-1/3">
            <SidebarCard />
          </div>
        </div>
      </body>
    </html>
  );
}