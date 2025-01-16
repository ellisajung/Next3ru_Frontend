// "use server"

// import { createClient } from "@/utils/supabase/server";
import { createClient } from "@/utils/supabase/client";
import { create } from "zustand";

interface SupabaseStore {
  data: any;
  fetchData: any;
  // setData: any;
}

export async function fetchSupabaseData(table: string) {
  const supabase = await createClient();

  let { data, error } = await supabase.from(table).select();

  if (error) {
    console.log(error.message);
  }

  console.log("supabase: ", data);
  return data;
}

export const useSupabseStore = create<SupabaseStore>((set) => ({
  data: null,
  fetchData: async () => {
    const fetchedData = await fetchSupabaseData("seats");
    set({ data: fetchedData });
  },
  // setData: (newData: any) => {
  //   set({ data: newData });
  // },
}));
