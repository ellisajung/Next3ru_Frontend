"use client";

import { useState } from "react";
import { Button, buttonVariants } from "../shadcn-ui/button";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from '@/components/SingleImageDropzone';

const MultiFileAction = () => {
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0)
  const [urls, setUrls] = useState<{url:string; thumbnail: string|null}>()
  const { edgestore } = useEdgeStore();

  return (
    <div className="flex flex-col items-center m-6 gap-2">
       <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      <Button
        className={buttonVariants({
          variant: "destructive",
        })}
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicImages.upload({
              file,
              onProgressChange: (progress) => {
                setProgress(progress);
              },
            });
            // save your data here
            setDefaultResultOrder({
              url: res.url,
              thumbnailUrl: res.thumbnailUrl,
            });
          }
        }}
      >
        저장
      </Button>
    </div>
  );
};

export default MultiFileAction;
