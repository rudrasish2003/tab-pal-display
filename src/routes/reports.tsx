import { createFileRoute } from "@tanstack/react-router";
import { ReportsPage } from "@/components/dashboard/section-page";
export const Route = createFileRoute("/reports")({head:()=>({meta:[{title:"Reports | Aarohan AI Email Responder"},{name:"description",content:"Download AI email operations reports."},{property:"og:title",content:"Reports | Aarohan AI Email Responder"},{property:"og:description",content:"Download AI email operations reports."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:ReportsPage});
