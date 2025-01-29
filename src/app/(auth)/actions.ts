"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { error } from "console";

export async function signIn(formData: FormData) {
  const supabase = await createClient();

  let { data, error } = await supabase.auth.signInWithOtp({
    email: formData.get("email") as string,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
      // emailRedirectTo: 'https://example.com/welcome',
    },
  });

  if (error) {
    console.log("Sign In Error: ", error.message);
    const query = encodeURIComponent("존재하지 않는 이메일입니다.");
    redirect(`/sign-in?error-message=${query}`);
  }

  revalidatePath("/", "layout");

  const query = encodeURIComponent("이메일로 전송된 링크를 확인해 주세요.");
  redirect(`/sign-in?confirm-message=${query}`);
}

export async function signUp(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const users = await checkEmail(email);

  if (users?.length === 0) {
    let { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        data: {
          username: formData.get("username") as string,
        },
      },
    });

    if (error) {
      console.log("Sign Up Error: ", error.message);
      const query = encodeURIComponent("유효한 이메일을 입력해 주세요.");
      redirect(`/sign-up?error-message=${query}`);
    }

    revalidatePath("/", "layout");

    const query = encodeURIComponent("이메일로 전송된 링크를 확인해 주세요.");
    redirect(`/sign-up?confirm-message=${query}`);
  } else {
    const query = encodeURIComponent("이미 존재하는 계정입니다.");
    redirect(`/sign-up?refuse-message=${query}`);
  }
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}

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

export const fetchUserData = async () => {
  const supabase = await createClient();

  const {
    data: { user }, error
  } = await supabase.auth.getUser();

  if (error) {
    console.log("fetching error: ", error.message);
    return;
  }

  console.log("server user: ", user);
  return user;
};

export const updateUserData = async (username: string) => {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.updateUser({
    data: { username: username },
  });

  if (error) {
    console.log(error);
    return;
  }

  // console.log("user: ", user);

  return user;
};
