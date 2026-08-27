import { handleLead } from "@/lib/leads";

export async function POST(req: Request) {
  return handleLead(req, "demo-request");
}
