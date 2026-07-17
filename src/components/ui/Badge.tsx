import { ReactNode } from "react";

export type BadgeVariant = "success" | "warning" | "danger" | "info" | "default";

export default function Badge({ children, variant = "default" }: { children: ReactNode; variant: BadgeVariant }) {
  const styles = {
    success: "bg-green-100 text-green-700",
    warning: "bg-orange-100 text-orange-700",
    danger: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
    default: "bg-slate-100 text-slate-600",
  } as const;

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
}
