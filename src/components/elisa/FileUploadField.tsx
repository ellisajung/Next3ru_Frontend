import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "../shadcn-ui/input";
import { Button } from "../shadcn-ui/button";
import { uploadFiles } from "@/app/actions/storage";
import { RiDeleteBinLine } from "react-icons/ri";
import { Progress } from "../shadcn-ui/progress";
import { useCreateReviewStore } from "@/store/ReviewStore";

type TUploadStatus = "idle" | "uploading" | "success" | "error";

const FileUploadField = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<TUploadStatus>("idle");
  const [uploadProgress, setUploadProgress] = useState(13);
  const inputRef = useRef<HTMLInputElement>(null);
  const setImgUrls = useCreateReviewStore((state) => state.setImgUrls);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArr = Array.from(e.target.files); // FileList은 배열이 아닌 이터러블이기 때문에 배열로 변환 필요
      setFiles(filesArr);
    }
    // console.log("file change event!!");
  };

  // (질문) 왜 Promise.all()을 await하는데도 map() 내부에서 다시 async/await를 써야 하는지?
  // Promise.all()의 인자는 반드시 Promise의 배열이어야 함.
  // map() 내부에서 async 없이 return uploadFiles(file);만 해도 동작하긴 하지만,
  // 만약 추가적인 비동기 작업이 필요하면(FormData 생성 등) async/await을 사용해 명확하게 Promise를 반환해야 함.
  // map() 내부에서 async를 붙이지 않으면, 비동기 코드 실행 흐름이 예상과 다르게 동작할 수 있음!
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

  // 기존 코드 2 - 에러 발생...
  // 에러 내용: Error: Only plain objects, and a few built-ins, can be passed to Server Actions. Classes or null prototypes are not supported.
  // 발생 원인: 서버 액션은 일반 객체(Plain object)나 원시값만 받을 수 있고, File 객체처럼 브라우저에서 생성된 클래스 인스턴스는 직접 전달할 수 없음. 즉, File 객체는 브라우저 환경에서만 사용 가능한 특별한 객체라서 서버로 직접 보낼 수 없음.
  // 해결 방법: 파일을 FormData에 담아서 서버 액션에 전달 (FormData를 받기 위해 서버 코드도 수정 필요)
  //   const handleFileUpload = async () => {
  //     setStatus("uploading");
  //     try {
  //       await Promise.all(files.map((file) => uploadFiles(file))); // Promise.all로 병렬 처리
  //       setStatus("success"); // 모든 파일 업로드가 끝난 후에 실행
  //     } catch (error) {
  //       console.error("File uploading error:", error);
  //       setStatus("error");
  //     }
  //   };

  // 기존 코드
  // handleFileUpload가 비동기 함수이기 때문에 비동기 처리를 기다리지 않고 다음 코드로 넘어감
  // 즉, uploadFiles의 완료 여부와 관계없이 handleFileUpload는 바로 끝남
  // 의도한대로 동작하기 위해서는 모든 파일의 업로드가 끝날 때까지 기다려야함
  // (관련 개념) - 비동기 함수 동작 원리와 실행 순서!!
  //   const handleFileUpload = async () => {
  //     setStatus("uploading");

  //     files.map((file) => {
  //       uploadFiles(file);
  //     });
  //   };

  //   console.log("files: ", files);
  //   console.log(!files.length, !!files.length);

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

  //   const handleFileDelete = (fileName: string) => {
  //     const filteredFiles = files.filter((file) => file.name !== fileName);
  //     setFiles(filteredFiles);
  //   };

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

export default FileUploadField;
