
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.https://tdqjzdzfyjhkyxgwuxnt.supabase.co;
const supabaseKey = import.meta.env.sb_publishable_Wu54b_ZP7UsRLNogobjUwQ_Bbi8Qb4v;

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);