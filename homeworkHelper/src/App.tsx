import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import LogSignup from "./components/LogSignup";

function App(){
  const [user, setUser] = useState<User | null>(null);
  const [ loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      const {data, error } = await SupabaseClient.auth.getSession();

      if (error) {
        console.error(error.message);
      }

      setUser(data.session?.user ?? null);
      setLoading(false);
    }
    loadSession(); 
  })
}