import { type ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PageHeading({ title, description, actions }: { title: string; description: string; actions?: ReactNode }) {
  return <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><h2 className="font-display text-2xl font-bold">{title}</h2><p className="mt-0.5 text-sm text-muted-foreground">{description}</p></div>{actions}</div>;
}
export function Panel({ title, action, children, className }: { title: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return <section className={cn("rounded-md border border-border bg-card shadow-panel", className)}><header className="flex min-h-11 items-center justify-between border-b border-border px-4"><h3 className="font-display text-sm font-bold">{title}</h3>{action}</header><div className="p-4">{children}</div></section>;
}
export function MetricCard({ label, value, change, positive = true, icon }: { label: string; value: string; change: string; positive?: boolean; icon: ReactNode }) {
  return <div className="rounded-md border border-border bg-card p-4 shadow-panel"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold text-muted-foreground">{label}</p><p className="mt-2 font-display text-2xl font-bold">{value}</p></div><div className="grid size-9 place-items-center rounded-md bg-primary-soft text-primary">{icon}</div></div><div className={cn("mt-2 flex items-center gap-1 text-xs font-semibold", positive ? "text-success" : "text-destructive")}>{positive ? <ArrowUpRight className="size-3"/> : <ArrowDownRight className="size-3"/>}{change}<span className="font-normal text-muted-foreground">vs last week</span></div></div>;
}
export function StatusPill({ children, tone = "neutral" }: { children: ReactNode; tone?: "success" | "warning" | "danger" | "neutral" | "info" }) {
  return <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold", tone === "success" && "bg-success-soft text-success", tone === "warning" && "bg-warning-soft text-warning", tone === "danger" && "bg-destructive-soft text-destructive", tone === "info" && "bg-primary-soft text-primary", tone === "neutral" && "bg-muted text-muted-foreground")}>{children}</span>;
}
export function ProgressRow({ label, value, max = 100 }: { label: string; value: number; max?: number }) {
 return <div><div className="mb-1.5 flex justify-between text-xs"><span>{label}</span><strong>{value.toLocaleString()}</strong></div><div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${Math.max(3, value / max * 100)}%` }}/></div></div>;
}
export function Donut({ value, label, tone = "primary" }: { value: number; label: string; tone?: "primary"|"success"|"warning"|"danger" }) {
 const color = tone === "success" ? "var(--success)" : tone === "warning" ? "var(--warning)" : tone === "danger" ? "var(--destructive)" : "var(--primary)";
 return <div className="text-center"><div className="relative mx-auto grid size-24 place-items-center rounded-full" style={{ background: `conic-gradient(${color} ${value * 3.6}deg, var(--muted) 0deg)` }}><div className="grid size-[72px] place-items-center rounded-full bg-card font-display text-lg font-bold">{value}%</div></div><p className="mt-2 text-xs font-semibold">{label}</p></div>;
}
