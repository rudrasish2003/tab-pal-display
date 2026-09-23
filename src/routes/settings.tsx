import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/dashboard/section-page";
export const Route = createFileRoute("/settings")({head:()=>({meta:[{title:"Settings | INT AI Email Responder"},{name:"description",content:"Configure AI email response controls."},{property:"og:title",content:"Settings | INT AI Email Responder"},{property:"og:description",content:"Configure AI email response controls."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:SettingsPage});
