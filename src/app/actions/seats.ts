import { createClient } from "@/utils/supabase/client";

export async function fetchSeatsData() {
  const supabase = createClient();

  let { data, error } = await supabase.from("seats").select();

  if (error) {
    console.log(error.message);
  }

  // console.log("seats: ", data);
  return data;
}