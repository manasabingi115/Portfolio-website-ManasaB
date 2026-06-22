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
    .from("skills")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  const skills = data.map((row) => ({
    s_name: row.s_name,
    s_logo: row.s_logo_url ?? "",
  }));

  return res.status(200).json(skills);
}
