/* eslint-env node */
import { createClient } from "@supabase/supabase-js";
import ws from "ws";

export default async function handler(req, res) {
  // Only allow GET (reading data)
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      global: { WebSocket: ws },
    },
  );

  const { data, error } = await supabase
    .from("Projects") // your table name — use 'projects' if lowercase
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // Map database columns → shape your React app expects
  const projects = data.map((row) => ({
    projectName: row.project_name,
    description: row.description ?? "",
    liveAt: row.live_url ?? "",
    githubRepo: row.github_url ?? "",
    image: row.image_url ?? "",
    technologiesUsed: row.technologies ?? [],
    filterBy: row.filter_tags ?? [],
  }));

  return res.status(200).json(projects);
}
