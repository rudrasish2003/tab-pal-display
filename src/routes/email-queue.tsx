import { createFileRoute } from "@tanstack/react-router";
import { EmailQueue } from "@/components/dashboard/email-queue";
export const Route = createFileRoute("/email-queue")({head:()=>({meta:[{title:"Email Queue | INT AI Email Responder"},{name:"description",content:"Review and manage customer email conversations."},{property:"og:title",content:"Email Queue | INT AI Email Responder"},{property:"og:description",content:"Review and manage customer email conversations."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:EmailQueue});
