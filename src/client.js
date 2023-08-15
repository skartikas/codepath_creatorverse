import { createClient } from "@supabase/supabase-js";

const URL = "https://wgmklidsrqooikxzzaxs.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnbWtsaWRzcnFvb2lreHp6YXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMjY3NjcsImV4cCI6MjAwNzcwMjc2N30.zqP98j0KRKjCqsfS3ZA3UJzOBL66Y2N8Ow6nXD8px_g";
export const supabase = createClient(URL, API_KEY);
