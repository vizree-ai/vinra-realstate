import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hxgbpnsmepawuqruyqhw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4Z2JwbnNtZXBhd3VxcnV5cWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MjM2ODAsImV4cCI6MjA4OTk5OTY4MH0.5I91x2qg62YHBSkW3lQU3AMzzD4uRmASIWx52id0qgA";

export const supabase = createClient(supabaseUrl, supabaseKey);

let memoryCache = null;
let lastFetchTime = 0;
const CACHE_TTL = 30000; // 30 seconds fast TTL

export async function getProperties() {
  const now = Date.now();
  if (memoryCache && now - lastFetchTime < CACHE_TTL) {
    return memoryCache;
  }

  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("display_order", { ascending: false });

  if (error) {
    if (memoryCache) return memoryCache;
    throw error;
  }

  memoryCache = data;
  lastFetchTime = now;
  return data;
}

