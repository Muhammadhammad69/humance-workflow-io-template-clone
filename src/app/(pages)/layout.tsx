import type { ReactNode } from "react";
import { HeaderComp } from "@/components/header/headerComp";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 pt-[20px] min-[1400px]:px-0">
      <HeaderComp
        props={{ bgColor: "bg-white", color: "text-dark-color", isBlack: true }}
      />
      {children}
    </div>
  );
}
