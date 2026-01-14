"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { SidebarCard } from "@/components/SidebarCard";

const IMAGE_ROUTES = ["/", "/about"];

export function SidebarColumn() {
  const pathname = usePathname();

  return (
    <div className="lg:w-1/3 flex flex-col items-center gap-6">
      <SidebarCard />
        <div className="mt-2 h-65 w-60 relative overflow-hidden rounded-xl ring-2 ring-slate-800">
          <Image
            src="/me.JPG"
            alt="Photo of Jordan Brockbank"
            fill
            className="object-cover"
          />
        </div>
    </div>
  );
}
