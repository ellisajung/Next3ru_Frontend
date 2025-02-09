"use server";

import { createClient } from "@/utils/supabase/client";
import { v4 as uuidv4 } from "uuid";

const BUCKET = "review_images";

// fetch file urls
export const fetchFileUrls = async (filePath: string) => {
  const supabase = createClient();

  const {
    data: { publicUrl },
  } = supabase.storage.from(BUCKET).getPublicUrl(filePath);

  //   console.log(data.publicUrl);
  return publicUrl;
};

// upload files
// export const uploadFiles = async (file: File) => { // 서버에서 File 객체 직접 못 받음
export const uploadFiles = async (formData: FormData) => {
  const supabase = createClient();

  const file = formData.get("file") as File;
  const filePath = `${uuidv4()}-${file.name}`; // 파일 이름 충돌 방지

  console.log("server file: ", file);
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(filePath, file);

  if (error) {
    console.log("Uploading File Error: ", error.message);
    // redirect("/ticket/reviews?status=error");
    // redirect는 서버 액션 또는 서버 컴포넌트에서만 동작
    // 굳이 서버에서 처리한 후 클라이언트에 쿼리 형태로 전달할 필요 없이 클라이언트에서 try, catch로 처리
    // 클라이언트에서 처리하면 useRouter().replace로 처리 가능
    return {success: false, message: "파일 업로드에 실패하였습니다."}
  }

  const url = await fetchFileUrls(filePath);

  return {url, success: true, message:"파일이 성공적으로 업로드되었습니다."};
};

// // update files
// export const updateFiles = async () => {
//   const supabase = createClient();

//   const { data, error } = await supabase.storage
//     .from(BUCKET)
//     .move("public/avatar1.png", "private/avatar2.png");

//   if (error) {
//     console.log("Updating File Error: ", error.message);
//   }
// }; // 업데이트하는 데 쓰는 api 아님 ^^

// delete files
export const deleteFiles = async (filePaths:string[]) => {
  const supabase = createClient();

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .remove(filePaths);
    // .remove([...filePaths]);

  if (error) {
    console.log("Deleting File Error: ", error.message);
  }

  console.log("Deleted file data: ", data)
  return data;
};
