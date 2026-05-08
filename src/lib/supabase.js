import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hxgbpnsmepawuqruyqhw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4Z2JwbnNtZXBhd3VxcnV5cWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MjM2ODAsImV4cCI6MjA4OTk5OTY4MH0.5I91x2qg62YHBSkW3lQU3AMzzD4uRmASIWx52id0qgA";

export const supabase = createClient(supabaseUrl, supabaseKey);

let cachedProperties = null;
let propertiesPromise = null;

export async function getProperties() {
  if (cachedProperties) {
    return cachedProperties;
  }

  if (!propertiesPromise) {
    propertiesPromise = supabase
      .from("properties")
      .select("*")
      .order("display_order", { ascending: false })
      .then(({ data, error }) => {
        propertiesPromise = null;

        if (error) {
          throw error;
        }

        cachedProperties = data;
        return data;
      });
  }

  return propertiesPromise;
}

