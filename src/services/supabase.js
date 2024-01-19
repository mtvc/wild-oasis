import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pxwrcgyuzjtlkrxhdqlc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4d3JjZ3l1emp0bGtyeGhkcWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2Nzc2OTMsImV4cCI6MjAyMTI1MzY5M30.iN-xnF8FT8WU3JvXHzv4PDDh1pMRcvJDdbMIrgzPQi4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
