import { createFileRoute } from "@tanstack/react-router";
import { Overview } from "@/components/dashboard/overview";
export const Route = createFileRoute("/")({head:()=>({meta:[{title:"Overview | INT AI Email Responder"},{name:"description",content:"Weekly AI email operations dashboard overview."},{property:"og:title",content:"INT AI Email Responder Overview"},{property:"og:description",content:"Weekly AI email operations dashboard overview."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Overview});
