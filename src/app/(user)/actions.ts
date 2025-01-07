'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signIn(formData: FormData) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOtp({
    email: formData.get('email') as string,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
      // emailRedirectTo: 'https://example.com/welcome',
    },
  })

  
  if (error) {
    const query = encodeURIComponent("존재하지 않는 이메일입니다.")
    redirect(`/sign-in?error-message=${query}`)
  }
  
  revalidatePath('/', 'layout')
  
  const query = encodeURIComponent("이메일로 전송된 링크를 확인해 주세요.")
  redirect(`/sign-in?confirm-message=${query}`)  
}

export async function signUp(formData: FormData) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOtp({
    email: formData.get('email') as string,
  })

  
  if (error) {
    const query = encodeURIComponent("유효한 이메일을 입력해 주세요.")
    redirect(`/sign-up?error-message=${query}`)
  }
  
  
  revalidatePath('/', 'layout')
  
  const query = encodeURIComponent("이메일로 전송된 링크를 확인해 주세요.")
  redirect(`/sign-up?confirm-message=${query}`)
}

