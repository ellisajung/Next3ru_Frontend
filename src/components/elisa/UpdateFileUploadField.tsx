import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "../shadcn-ui/input";
import { Button } from "../shadcn-ui/button";
import { uploadFiles } from "@/app/actions/storage";
import { RiDeleteBinLine } from "react-icons/ri";
import { Progress } from "../shadcn-ui/progress";
import { useUpdateReviewStore } from "@/store/ReviewStore";

type TUploadStatus = "idle" | "uploading" | "success" | "error";

const UpdateFileUploadField = ({ ImgUrls }: any) => {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<TUploadStatus>("idle");
  const [uploadProgress, setUploadProgress] = useState(13);
  const inputRef = useRef<HTMLInputElement>(null);
  const setImgUrls = useUpdateReviewStore((state) => state.setImgUrls);

  /* 파일 업로드 기능 */
  // type=file의 <input> 요소에 클릭 또는 드래그앤드롭을 통해 파일을 업로드
  // change 이벤트 발생
  // event.target.files에 FileList(이터러블) 타입으로 파일들의 정보가 저장
  // (각각의 파일은 File 타입)
  // 이를 배열로 변환 후 files 상태로 저장
  // 배열을 순회하며 각각의 파일을 FormData로 변환하여 서버의 uploadFiles 함수에 전달 후 다시 File 객체로 변환
  // (서버에서 File 객체를 직접적으로 못 받기 때문)
  // uploadFiles 함수는 supabase storage에 이미지를 업로드하고,
  // 내부에서 fetchFileUrls 함수를 호출하여 반환된 url 값을 반환
  // files를 순환하며 반환된 url 값들을 imgUrls 배열에 저장
  // --- 여기까지가 "업로드" 버튼을 눌렀을 때의 동작 ---
  // 이후 "저장" 버튼 클릭 시,
  // 작성된 전체 리뷰 데이터와 함께 imgUrls 배열을 public.reviews에 저장

  /* 기존 리뷰 데이터를 디폴트로 가져오려면? */
  // 파일 url로 요청하여 받은 응답을 blob 객체로 변환
  // blob 객체를 File 객체로 변환
  // File 객체를 React 상태에 저장
  // React 상태와 input.files 파일 목록을 동기화
  const urlToFile = async (url: string) => {
    const res = await fetch(url);
    const blob = await res.blob();

    const fileName = url.split("/").pop()?.slice(37) || "";
    const mimeType = blob.type;

    return new File([blob], fileName, { type: mimeType });
  };

  const setInitialFiles = async () => {
    const initialFiles = [] as File[];
    try {
      await Promise.all(
        ImgUrls.map(async (url: string) => {
          // forEach는 안됨...?
          const file = await urlToFile(url);
          console.log("file: ", file);
          initialFiles.push(file);
        }),
      );
      console.log("initial files!!", files);
      setFiles(initialFiles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setInitialFiles();
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArr = Array.from(e.target.files); // FileList은 배열이 아닌 이터러블이기 때문에 배열로 변환 필요
      setFiles(filesArr);
    }
    // console.log("file change event!!");
  };

  const handleFileUpload = async () => {
    setStatus("uploading");

    const imgUrls: any = [];

    try {
      await Promise.all(
        files.map(async (file) => {
          // map 함수 내부 async, await 추가
          const formData = new FormData();
          formData.append("file", file);

          const url = await uploadFiles(formData);
          imgUrls.push(url);
        }),
      );
      setStatus("success");
      setImgUrls(imgUrls);
      console.log("imgUrls", imgUrls);
    } catch (error) {
      console.error("File uploading error:", error);
      setStatus("error");
    }
  };

  /* 파일 개별 삭제 기능 */
  // "업로드" 버튼 클릭 전 (storage에 저장되기 전)
  // (내 리뷰 삭제 시 - storage의 이미지 데이터도 삭제는 별개로 구현해야)

  // React 상태와 input 요소의 파일 목록을 동기화:
  // inputRef.current.value = ""를 사용하면 <input type="file"> 요소 자체를 초기화 가능하나,
  // files 프로퍼티를 따로 조작하는 방법은 없음
  // 즉, input.files는 FileList 객체 타입으로, read-only 프로퍼티임
  // (FileList 객체는 브라우저에서 직접 관리하며 직접 수정하거나 생성할 수 없음.)

  // DataTransfer API를 활용하면 새로운 FileList로 대체 가능
  // 즉, DataTransfer 객체는 dt.items(DataTransferItemList)를 통해 dt.files(FileList)를 조작할 수 있는 API를 제공
  // DataTransfer 객체 생성
  // DataTransfer 객체의 items 프로퍼티의 add() 메서드로 => dt.items.add(file)
  // DataTranfer 객체의 files 프로퍼티에 file 추가 가능 => dt.files (FileList 객체)
  // 생성된 dt.files 객체를 input.files에 할당

  const handleFileDelete = (fileName: string) => {
    const dt = new DataTransfer();

    files.forEach((file) => {
      if (file.name !== fileName) {
        dt.items.add(file);
      }
    }); // 기존 파일 순회하며 삭제된 파일을 제외하고 새로 생성한 DataTransfer 객체에 add

    setFiles(Array.from(dt.files)); // 상태 업데이트

    if (inputRef.current) {
      inputRef.current.files = dt.files;
    } // 상태와 <input> files 동기화
  };

  // 프로그레스 바 우회 구현
  useEffect(() => {
    const timer = setTimeout(() => setUploadProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-3">
      <Input
        ref={inputRef}
        type="file"
        multiple
        onChange={handleFileChange}
        disabled={status === "idle" ? false : true}
      />
      {/* uploaded files list ui area */}
      <ul className="space-y-2 text-muted-foreground">
        {files.map((file, i) => (
          <li
            key={i}
            className="flex justify-between items-center"
          >
            <p className="text-nowrap">{file.name}</p>
            {status === "idle" && (
              <button onClick={() => handleFileDelete(file.name)}>
                <RiDeleteBinLine size={20} />
              </button>
            )}
            {status === "uploading" && (
              <Progress
                className="w-1/2"
                value={uploadProgress}
              />
            )}
          </li>
        ))}
      </ul>
      {/* submit area */}
      {!!files.length && status === "idle" && (
        <Button
          onClick={handleFileUpload}
          variant="secondary"
        >
          업로드
        </Button>
      )}
      {status === "success" && (
        <p className="text-green-700">파일이 성공적으로 업로드되었습니다.</p>
      )}
      {status === "error" && (
        <p className="text-red-700">파일이 업로드에 실패하였습니다.</p>
      )}
    </div>
  );
};

export default UpdateFileUploadField;
