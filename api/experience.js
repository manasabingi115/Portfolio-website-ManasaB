/* eslint-env node */
import { createClient } from "@supabase/supabase-js";
import ws from "ws";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      realtime: { transport: ws },
    },
  );

  const { data, error } = await supabase
    .from("experience")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  const experience = data.map((row) => ({
    compName: row.comp_name,
    compLogo: row.comp_logo ?? "",
    startEndDate: row.start_end_date ?? "",
    compLocation: row.comp_location ?? "",
    description: row.description ?? "",
  }));

  return res.status(200).json(experience);
}
