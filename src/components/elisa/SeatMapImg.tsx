import Image from "next/image";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FiZoomIn } from "react-icons/fi";
import { FiZoomOut } from "react-icons/fi";
import { MdZoomInMap } from "react-icons/md";
import { Button } from "../shadcn-ui/button";

const SeatMapImg = () => {
  //   return (
  //     <TransformWrapper>
  //       <TransformComponent>
  //         <Image
  //           id="imgExample" // zoomToElement에서 사용할 ID
  //           src="/images/elisa/seatmap.png"
  //           alt="seatmap"
  //           width={300}
  //           height={300}
  //         />
  //       </TransformComponent>
  //     </TransformWrapper>
  //   );
  // };

  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <TransformComponent>
            <Image
              id="imgExample" // zoomToElement에서 사용할 ID
              src="/images/elisa/seatmap.png"
              alt="seatmap"
              className="sm:size-60 xl:size-80"
              width={500}
              height={500}
            />
          </TransformComponent>
          <div className="tools absolute top-0 right-0 gap-2 flex flex-col justify-start items-center">
            <Button
              variant="outline"
              className="border-none rounded-xl text-lg p-2"
              onClick={() => zoomIn()}
            >
              <FiZoomIn />
            </Button>

            <Button
              variant="outline"
              className="border-none rounded-xl text-lg p-2"
              onClick={() => zoomOut()}
            >
              <FiZoomOut />
            </Button>
            <Button
              variant="outline"
              className="border-none rounded-xl text-lg p-2"
              onClick={() => resetTransform()}
            >
              <MdZoomInMap />
            </Button>
          </div>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};
export default SeatMapImg;
