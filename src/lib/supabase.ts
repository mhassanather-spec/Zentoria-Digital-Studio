import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://biwmgvmogebewsbhqwvx.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpd21ndm1vZ2ViZXdzYmhxd3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MjEzMDAsImV4cCI6MjA4OTk5NzMwMH0.eVKqUbDwJduoEyLEgU5CrwscycYpvQTslfO4sdFqt7Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
