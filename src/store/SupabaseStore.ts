import { createClient } from "@/utils/supabase/server";
import { create } from "zustand";

interface SupabaseStore {
  data: any;
  fetchdata: (table: string) => Promise<void>;
}

export async function fetchSupabaseData(table: string) {
  const supabase = await createClient();

  let { data, error } = await supabase.from(table).select();

  if (error) {
    console.log(error.message);
  }

  console.log(data);
  return data;
}

export const useSupabaseStore = create<SupabaseStore>((set) => ({
  data: null,
  fetchdata: async (table) => {
    const fetchedData = await fetchSupabaseData(table);
    set({ data: fetchedData });
  },
}));
