import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pjkrwdxkdtbnasctvaue.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_dOruimzyCJmQQB8LtDrriw_D5QNwjPa';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// The one shared world all the Bonded gather in (matches the SQL migration)
export const SHARED_WORLD_ID = '00000000-0000-0000-0000-000000000001';
