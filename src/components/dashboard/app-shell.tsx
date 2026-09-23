import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ComponentType } from "react";
import { LayoutDashboard, Mail, Bot, MessageCircle, Boxes, Clock3, ShieldCheck, BarChart3, Settings, Menu, PanelLeftClose, PanelLeftOpen, Landmark, Bell, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

const icons: Record<string, ComponentType<{ className?: string }>> = { LayoutDashboard, Mail, Bot, MessageCircle, Boxes, Clock3, ShieldCheck, BarChart3, Settings };

function Navigation({ compact = false }: { compact?: boolean }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <nav className="space-y-1 px-2" aria-label="Main navigation">{navItems.map((item) => {
    const Icon = icons[item.icon] ?? LayoutDashboard; const active = pathname === item.to;
    return <Link key={item.to} to={item.to} title={compact ? item.label : undefined} className={cn("group flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors", active ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", compact && "justify-center px-0")}>
      <Icon className="size-[18px] shrink-0" />{!compact && <span>{item.label}</span>}
    </Link>;
  })}</nav>;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <aside className={cn("fixed inset-y-0 left-0 z-30 hidden border-r border-sidebar-border bg-sidebar transition-[width] duration-200 lg:flex lg:flex-col", collapsed ? "w-[68px]" : "w-[232px]")}>
      <div className={cn("flex h-[72px] items-center border-b border-sidebar-border px-4", collapsed ? "justify-center" : "gap-3")}>
        <div className="grid size-9 shrink-0 place-items-center rounded-md bg-brand-mark text-brand-mark-foreground"><Landmark className="size-5" /></div>
        {!collapsed && <div><p className="font-display text-base font-bold leading-tight">Aarohan Bank</p><p className="text-[10px] text-sidebar-foreground/55">AI CUSTOMER OPERATIONS</p></div>}
      </div>
      <div className="flex-1 overflow-y-auto py-4"><Navigation compact={collapsed} /></div>
      {!collapsed && <div className="m-3 border-t border-sidebar-border px-2 pt-4"><p className="text-xs font-semibold">Building trust, one reply at a time.</p><div className="mt-3 flex h-1 overflow-hidden rounded-full"><span className="w-1/3 bg-brand-mark"/><span className="w-1/3 bg-primary"/><span className="w-1/3 bg-success"/></div></div>}
      <Button variant="ghost" size="icon" className="absolute -right-4 bottom-7 size-8 rounded-full border border-border bg-card shadow-sm" onClick={() => setCollapsed((v) => !v)} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>{collapsed ? <PanelLeftOpen/> : <PanelLeftClose/>}</Button>
    </aside>
    <div className={cn("transition-[padding] duration-200", collapsed ? "lg:pl-[68px]" : "lg:pl-[232px]")}>
      <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-border bg-card/95 px-4 backdrop-blur md:px-6">
        <div className="flex items-center gap-3">
          <Sheet><SheetTrigger asChild><Button variant="outline" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu/></Button></SheetTrigger><SheetContent side="left" className="w-[270px] bg-sidebar p-0 text-sidebar-foreground"><SheetTitle className="sr-only">Navigation</SheetTitle><div className="flex h-[72px] items-center gap-3 border-b border-sidebar-border px-5"><div className="grid size-9 place-items-center rounded-md bg-brand-mark text-brand-mark-foreground"><Landmark className="size-5"/></div><strong>Aarohan Bank</strong></div><div className="py-4"><Navigation/></div></SheetContent></Sheet>
          <div><h1 className="font-display text-lg font-bold leading-tight md:text-xl">AI Email Responder <span className="font-normal text-muted-foreground">| Operations Hub</span></h1><p className="hidden text-xs text-muted-foreground sm:block">Faster answers. Happier customers. Better banking.</p></div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold md:flex"><CalendarDays className="size-4 text-primary"/>This Week · 22–28 Sep</div>
          <div className="hidden items-center gap-2 xl:flex"><span className="size-2 rounded-full bg-success shadow-[0_0_0_4px_var(--success-soft)]"/><div><p className="text-xs font-semibold">Live data</p><p className="text-[10px] text-muted-foreground">Updated 2 min ago</p></div></div>
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative"><Bell/><span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-brand-mark"/></Button>
          <div className="grid size-9 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">TB</div>
        </div>
      </header>
      <main className="min-h-[calc(100vh-72px)] p-3 md:p-5">{children}</main>
    </div>
  </div>;
}
