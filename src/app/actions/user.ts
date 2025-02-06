"use server";

import { createClient } from "@/utils/supabase/server";

export const checkUsername = async (username: string) => {
  const supabase = await createClient();

  let { data: users, error } = await supabase
    .from("users")
    .select()
    .eq("username", username);

  if (error) {
    console.log(error.details);
    return;
  }

  console.log(users);
  return users;
};

export const checkEmail = async (email: string) => {
  const supabase = await createClient();

  let { data: users, error } = await supabase
    .from("users")
    .select()
    .eq("email", email);

  if (error) {
    console.log(error.details);
    return;
  }

  console.log(users);
  return users;
};

