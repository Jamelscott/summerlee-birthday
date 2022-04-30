import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://ufalsndgewmkbtjjkbva.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmYWxzbmRnZXdta2J0amprYnZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTExODAwMDIsImV4cCI6MTk2Njc1NjAwMn0.PVmc8-5z3p3qvXbxXTtYRusG8exkdXen3WDifUgUvBI')


