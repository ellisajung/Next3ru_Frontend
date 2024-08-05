"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { type TClickedMeshInfo } from "@/components/elisa/StadiumModel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn-ui/tooltip";
import { Button } from "../shadcn-ui/button";

type NodeKeys =
  | "Mesh6271_Center_zone-218"
  | "Mesh6375_Center_zone-315"
  | "Mesh6693_Center_zone-316"
  | "Mesh6925_Center_zone-219"
  | "Mesh26589_Center_zone-223"
  | "Mesh26751_Center_zone-320"
  | "Mesh26954_Center_zone-221"
  | "Mesh27107_Center_zone-222"
  | "Mesh27135_Center_zone-318"
  | "Mesh27152_Center_zone-319"
  | "Mesh27367_Center_zone-220"
  | "Mesh27602_Center_zone-317"
  | "Mesh29412_Center_zone-313"
  | "Mesh29416_Center_zone-314"
  | "Mesh29567_Center_zone-216"
  | "Mesh29609_Center_zone-217";

type GLTFResult = GLTF & {
  nodes: {
    [key in NodeKeys]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export function CenterModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/center.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh6271_Center_zone-218"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#702CA4");

  const onClickMesh = (info: TClickedMeshInfo): void => {
    handleMeshClick(info);
    setClickedMesh(info);
  };

  const onMeshOver = (meshName: string): void => {
    setHoveredMesh(meshName);
  };

  const onMeshOut = (): void => {
    setHoveredMesh(null);
  };

  const getColor = (isHovered: boolean, meshName: string) =>
    isHovered || clickedMesh?.area_name === meshName
      ? hoverColor
      : defaultColor;

  useEffect(() => {
    if (showModal == false) {
      setClickedMesh(null);
    }
  }, [showModal]);

  const meshes = (Object.keys(nodes) as NodeKeys[]).map((key) => {
    const mesh = nodes[key];
    const color = getColor(isHovered, mesh.name);
    const zone = mesh.name.slice(-3);
    console.log(mesh.name, zone); // 왜 11번이나 렌더링되는거지...?
    // 고치기전 코드 (트러블슈팅!!!-렌더러 차이에서 오는 문제)
    // https://chatgpt.com/c/aa2f604b-e552-409e-8e22-11ca135faf90
    // 코드 1
    //   return hoveredMesh === mesh.name ? (
    //     <TooltipProvider key={key}>
    //       <Tooltip>
    //         <TooltipTrigger asChild>
    //           <mesh
    //             castShadow
    //             receiveShadow
    //             geometry={mesh.geometry}
    //             material={getColor(isHovered, mesh.name)}
    //             onClick={() => onClickMesh({ area_name: mesh.name, zone: "113" })}
    //             onPointerOver={() => onMeshOver(mesh.name)}
    //             onPointerOut={onMeshOut}
    //             rotation={[-3.141, -1.305, -3.141]}
    //             scale={0.292}
    //           />
    //         </TooltipTrigger>
    //         <TooltipContent>
    //           <p>Add to library</p>
    //         </TooltipContent>
    //       </Tooltip>
    //     </TooltipProvider>
    //   ) : (
    //     <mesh
    //       key={key}
    //       castShadow
    //       receiveShadow
    //       geometry={mesh.geometry}
    //       material={getColor(isHovered, mesh.name)}
    //       onClick={() => onClickMesh({ area_name: mesh.name, zone: "113" })}
    //       onPointerOver={() => onMeshOver(mesh.name)}
    //       onPointerOut={onMeshOut}
    //       rotation={[-3.141, -1.305, -3.141]}
    //       scale={0.292}
    //     />
    //   );
    // });
    // 코드 2
    //   return (
    //     <Tooltip key={key}>
    //       <TooltipTrigger asChild>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={mesh.geometry}
    //           material={color}
    //           onClick={() =>
    //             onClickMesh({
    //               area_name: mesh.name,
    //               zone: zone ? zone[1] : null,
    //             })
    //           }
    //           onPointerOver={() => onMeshOver(mesh.name)}
    //           onPointerOut={onMeshOut}
    //           rotation={[-3.141, -1.305, -3.141]}
    //           scale={0.292}
    //         />
    //       </TooltipTrigger>
    //       {hoveredMesh === mesh.name && (
    //         <TooltipContent>
    //           <p>중앙지정석</p>
    //           <p>{zone}번 구역</p>
    //         </TooltipContent>
    //       )}
    //     </Tooltip>
    //   );
    // });

    // return (
    //   <TooltipProvider>
    //     <group
    //       dispose={null}
    //       onPointerOver={() => setIsHovered(true)}
    //       onPointerOut={() => setIsHovered(false)}
    //     >
    //       {meshes}
    //     </group>
    //   </TooltipProvider>
    // );
    return (
      <mesh
        key={key}
        castShadow
        receiveShadow
        geometry={mesh.geometry}
        material={color}
        onClick={() =>
          onClickMesh({
            area_name: mesh.name,
            zone: zone ? zone[1] : null,
          })
        }
        onPointerOver={() => onMeshOver(mesh.name)}
        onPointerOut={onMeshOut}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    );
  });

  return (
    <group
      dispose={null}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {meshes}
    </group>
  );

  // 원래 코드
  // return (
  //   <group
  //     dispose={null}
  //     onPointerOver={() => onMeshOver(nodes["Mesh6271_Center_zone-218"].name)}
  //     onPointerOut={onMeshOut}
  //   >
  //     <mesh
  //       onClick={() =>
  //         onClickMesh({
  //           area_name: nodes["Mesh6271_Center_zone-218"].name,
  //           zone: "113",
  //         })
  //       }
  //       onPointerOver={() => onMeshOver(nodes["Mesh6271_Center_zone-218"].name)}
  //       onPointerOut={onMeshOut}
  //       material={getColor(nodes["Mesh6271_Center_zone-218"].name)}
  //       geometry={nodes["Mesh6271_Center_zone-218"].geometry}
  //       // material={nodes["Mesh6271_Center_zone-218"].material}
  //       castShadow
  //       receiveShadow
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh6375_Center_zone-315"].geometry}
  //       material={nodes["Mesh6375_Center_zone-315"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh6693_Center_zone-316"].geometry}
  //       material={nodes["Mesh6693_Center_zone-316"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh6925_Center_zone-219"].geometry}
  //       material={nodes["Mesh6925_Center_zone-219"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh26589_Center_zone-223"].geometry}
  //       material={nodes["Mesh26589_Center_zone-223"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh26751_Center_zone-320"].geometry}
  //       material={nodes["Mesh26751_Center_zone-320"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh26954_Center_zone-221"].geometry}
  //       material={nodes["Mesh26954_Center_zone-221"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh27107_Center_zone-222"].geometry}
  //       material={nodes["Mesh27107_Center_zone-222"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh27135_Center_zone-318"].geometry}
  //       material={nodes["Mesh27135_Center_zone-318"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh27152_Center_zone-319"].geometry}
  //       material={nodes["Mesh27152_Center_zone-319"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh27367_Center_zone-220"].geometry}
  //       material={nodes["Mesh27367_Center_zone-220"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh27602_Center_zone-317"].geometry}
  //       material={nodes["Mesh27602_Center_zone-317"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh29412_Center_zone-313"].geometry}
  //       material={nodes["Mesh29412_Center_zone-313"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh29416_Center_zone-314"].geometry}
  //       material={nodes["Mesh29416_Center_zone-314"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh29567_Center_zone-216"].geometry}
  //       material={nodes["Mesh29567_Center_zone-216"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh29609_Center_zone-217"].geometry}
  //       material={nodes["Mesh29609_Center_zone-217"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //   </group>
  // );
}

useGLTF.preload("/models/center.glb");
