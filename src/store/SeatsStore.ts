import { createClient } from "@/utils/supabase/client";
import { create } from "zustand";

interface SeatsStore {
  data: any;
  fetchData: any;
}

export async function fetchSeatsData() {
  const supabase = createClient();

  let { data, error } = await supabase.from("seats").select();

  if (error) {
    console.log(error.message);
  }

  // console.log("seats: ", data);
  return data;
}

export const useSeatsStore = create<SeatsStore>((set) => ({
  data: null,
  fetchData: async () => {
    const fetchedData = await fetchSeatsData();
    set({ data: fetchedData });
  },
}));
