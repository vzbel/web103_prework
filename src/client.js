import { createClient } from "@supabase/supabase-js";

export const URL = import.meta.env.VITE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

export const supabase = createClient(URL, API_KEY);
