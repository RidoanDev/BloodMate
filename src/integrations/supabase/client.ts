// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pfrrfwrourkadeaiwffc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmcnJmd3JvdXJrYWRlYWl3ZmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMjY1MzMsImV4cCI6MjA1ODkwMjUzM30.6ibiMCFEYGXaJymalEaU7XVlRwUZH2L6SnHw-SFTslA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);