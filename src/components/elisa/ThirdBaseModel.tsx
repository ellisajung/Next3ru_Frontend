import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh8727_chair3_7_37_Group77_allseats1_Model: THREE.Mesh;
    Mesh8772_chair3_7_82_Group77_allseats1_Model: THREE.Mesh;
    Mesh8827_chair3_7_137_Group77_allseats1_Model: THREE.Mesh;
    Mesh9339_chair3_7_643_Group77_allseats1_Model: THREE.Mesh;
    Mesh9722_chair3_7_1026_Group77_allseats1_Model: THREE.Mesh;
    Mesh15857_chair3_1_3071_Component_215_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh15944_chair3_1_3158_Component_78_8_Component_247_1_Group77_: THREE.Mesh;
    Mesh16724_chair3_1_3938_Component_99_3_Component_222_1_Group77_: THREE.Mesh;
    Mesh17026_chair3_1_4240_Component_233_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh17139_chair3_1_4353_Component_161_7_Component_237_1_Group77: THREE.Mesh;
    Mesh17448_chair3_1_4662_Component_161_20_Component_217_1_Group7: THREE.Mesh;
    Mesh17961_chair3_1_5175_Component_147_35_Component_256_1_Group7: THREE.Mesh;
    Mesh18287_chair3_1_5501_Component_15_8_Component_214_1_Group77_: THREE.Mesh;
    Mesh18309_chair3_1_5523_Component_15_9_Component_214_1_Group77_: THREE.Mesh;
    Mesh18359_chair3_1_5573_Component_15_12_Component_214_1_Group77: THREE.Mesh;
    Mesh18560_chair3_1_5774_Component_15_22_Component_214_1_Group77: THREE.Mesh;
    Mesh18605_chair3_1_5819_Component_15_24_Component_214_1_Group77: THREE.Mesh;
    Mesh18613_chair3_1_5827_Component_15_24_Component_214_1_Group77: THREE.Mesh;
    Mesh18769_chair3_1_5983_Component_255_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh18784_chair3_1_5998_Component_255_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh18867_chair3_1_6081_Component_58_2_Component_255_1_Group77_: THREE.Mesh;
    Mesh19105_chair3_1_6319_Component_255_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh19263_chair3_1_6477_Component_120_10_Component_240_1_Group7: THREE.Mesh;
    Mesh20041_chair3_1_7255_Component_69_11_Component_258_1_Group77: THREE.Mesh;
    Mesh20099_chair3_1_7313_Component_236_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh20190_chair3_1_7404_Component_221_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh20447_chair3_1_7661_Component_100_8_Component_266_1_Group77: THREE.Mesh;
    Mesh20487_chair3_1_7701_Component_100_11_Component_266_1_Group7: THREE.Mesh;
    Mesh20811_chair3_1_8025_Component_27_10_Component_250_1_Group77: THREE.Mesh;
    Mesh20886_chair3_1_8100_Component_101_4_Component_213_1_Group77: THREE.Mesh;
    Mesh20980_chair3_1_8194_Component_124_1_Component_239_1_Group77: THREE.Mesh;
    Mesh20981_chair3_1_8195_Component_124_1_Component_239_1_Group77: THREE.Mesh;
    Mesh20982_chair3_1_8196_Component_124_1_Component_239_1_Group77: THREE.Mesh;
    Mesh20983_chair3_1_8197_Component_124_1_Component_239_1_Group77: THREE.Mesh;
    Mesh20984_chair3_1_8198_Component_124_1_Component_239_1_Group77: THREE.Mesh;
    Mesh20985_chair3_1_8199_Component_124_1_Component_239_1_Group77: THREE.Mesh;
    Mesh20986_chair3_1_8200_Component_124_1_Component_239_1_Group77: THREE.Mesh;
    Mesh20987_chair3_1_8201_Component_124_1_Component_239_1_Group77: THREE.Mesh;
    Mesh20988_chair3_1_8202_Component_124_1_Component_239_1_Group77: THREE.Mesh;
    Mesh20989_chair3_1_8203_Component_124_1_Component_239_1_Group77: THREE.Mesh;
    Mesh20990_chair3_1_8204_Component_124_1_Component_239_1_Group77: THREE.Mesh;
    Mesh20991_chair3_1_8205_Component_124_2_Component_239_1_Group77: THREE.Mesh;
    Mesh20992_chair3_1_8206_Component_124_2_Component_239_1_Group77: THREE.Mesh;
    Mesh20993_chair3_1_8207_Component_124_2_Component_239_1_Group77: THREE.Mesh;
    Mesh20994_chair3_1_8208_Component_124_2_Component_239_1_Group77: THREE.Mesh;
    Mesh20995_chair3_1_8209_Component_124_2_Component_239_1_Group77: THREE.Mesh;
    Mesh20996_chair3_1_8210_Component_124_2_Component_239_1_Group77: THREE.Mesh;
    Mesh20997_chair3_1_8211_Component_124_2_Component_239_1_Group77: THREE.Mesh;
    Mesh20998_chair3_1_8212_Component_124_2_Component_239_1_Group77: THREE.Mesh;
    Mesh20999_chair3_1_8213_Component_124_2_Component_239_1_Group77: THREE.Mesh;
    Mesh21000_chair3_1_8214_Component_124_2_Component_239_1_Group77: THREE.Mesh;
    Mesh21001_chair3_1_8215_Component_124_2_Component_239_1_Group77: THREE.Mesh;
    Mesh21002_chair3_1_8216_Component_124_3_Component_239_1_Group77: THREE.Mesh;
    Mesh21003_chair3_1_8217_Component_124_3_Component_239_1_Group77: THREE.Mesh;
    Mesh21004_chair3_1_8218_Component_124_3_Component_239_1_Group77: THREE.Mesh;
    Mesh21005_chair3_1_8219_Component_124_3_Component_239_1_Group77: THREE.Mesh;
    Mesh21006_chair3_1_8220_Component_124_3_Component_239_1_Group77: THREE.Mesh;
    Mesh21007_chair3_1_8221_Component_124_3_Component_239_1_Group77: THREE.Mesh;
    Mesh21008_chair3_1_8222_Component_124_3_Component_239_1_Group77: THREE.Mesh;
    Mesh21009_chair3_1_8223_Component_124_3_Component_239_1_Group77: THREE.Mesh;
    Mesh21010_chair3_1_8224_Component_124_3_Component_239_1_Group77: THREE.Mesh;
    Mesh21011_chair3_1_8225_Component_124_3_Component_239_1_Group77: THREE.Mesh;
    Mesh21012_chair3_1_8226_Component_124_3_Component_239_1_Group77: THREE.Mesh;
    Mesh21013_chair3_1_8227_Component_124_4_Component_239_1_Group77: THREE.Mesh;
    Mesh21014_chair3_1_8228_Component_124_4_Component_239_1_Group77: THREE.Mesh;
    Mesh21015_chair3_1_8229_Component_124_4_Component_239_1_Group77: THREE.Mesh;
    Mesh21016_chair3_1_8230_Component_124_4_Component_239_1_Group77: THREE.Mesh;
    Mesh21017_chair3_1_8231_Component_124_4_Component_239_1_Group77: THREE.Mesh;
    Mesh21018_chair3_1_8232_Component_124_4_Component_239_1_Group77: THREE.Mesh;
    Mesh21019_chair3_1_8233_Component_124_4_Component_239_1_Group77: THREE.Mesh;
    Mesh21020_chair3_1_8234_Component_124_4_Component_239_1_Group77: THREE.Mesh;
    Mesh21021_chair3_1_8235_Component_124_4_Component_239_1_Group77: THREE.Mesh;
    Mesh21022_chair3_1_8236_Component_124_4_Component_239_1_Group77: THREE.Mesh;
    Mesh21023_chair3_1_8237_Component_124_4_Component_239_1_Group77: THREE.Mesh;
    Mesh21024_chair3_1_8238_Component_124_5_Component_239_1_Group77: THREE.Mesh;
    Mesh21025_chair3_1_8239_Component_124_5_Component_239_1_Group77: THREE.Mesh;
    Mesh21026_chair3_1_8240_Component_124_5_Component_239_1_Group77: THREE.Mesh;
    Mesh21027_chair3_1_8241_Component_124_5_Component_239_1_Group77: THREE.Mesh;
    Mesh21028_chair3_1_8242_Component_124_5_Component_239_1_Group77: THREE.Mesh;
    Mesh21029_chair3_1_8243_Component_124_5_Component_239_1_Group77: THREE.Mesh;
    Mesh21030_chair3_1_8244_Component_124_5_Component_239_1_Group77: THREE.Mesh;
    Mesh21031_chair3_1_8245_Component_124_5_Component_239_1_Group77: THREE.Mesh;
    Mesh21032_chair3_1_8246_Component_124_5_Component_239_1_Group77: THREE.Mesh;
    Mesh21033_chair3_1_8247_Component_124_5_Component_239_1_Group77: THREE.Mesh;
    Mesh21034_chair3_1_8248_Component_124_5_Component_239_1_Group77: THREE.Mesh;
    Mesh21035_chair3_1_8249_Component_124_6_Component_239_1_Group77: THREE.Mesh;
    Mesh21036_chair3_1_8250_Component_124_6_Component_239_1_Group77: THREE.Mesh;
    Mesh21037_chair3_1_8251_Component_124_6_Component_239_1_Group77: THREE.Mesh;
    Mesh21038_chair3_1_8252_Component_124_6_Component_239_1_Group77: THREE.Mesh;
    Mesh21039_chair3_1_8253_Component_124_6_Component_239_1_Group77: THREE.Mesh;
    Mesh21040_chair3_1_8254_Component_124_6_Component_239_1_Group77: THREE.Mesh;
    Mesh21041_chair3_1_8255_Component_124_6_Component_239_1_Group77: THREE.Mesh;
    Mesh21042_chair3_1_8256_Component_124_6_Component_239_1_Group77: THREE.Mesh;
    Mesh21043_chair3_1_8257_Component_124_6_Component_239_1_Group77: THREE.Mesh;
    Mesh21044_chair3_1_8258_Component_124_6_Component_239_1_Group77: THREE.Mesh;
    Mesh21045_chair3_1_8259_Component_124_6_Component_239_1_Group77: THREE.Mesh;
    Mesh21046_chair3_1_8260_Component_124_7_Component_239_1_Group77: THREE.Mesh;
    Mesh21047_chair3_1_8261_Component_124_7_Component_239_1_Group77: THREE.Mesh;
    Mesh21048_chair3_1_8262_Component_124_7_Component_239_1_Group77: THREE.Mesh;
    Mesh21049_chair3_1_8263_Component_124_7_Component_239_1_Group77: THREE.Mesh;
    Mesh21050_chair3_1_8264_Component_124_7_Component_239_1_Group77: THREE.Mesh;
    Mesh21051_chair3_1_8265_Component_124_7_Component_239_1_Group77: THREE.Mesh;
    Mesh21052_chair3_1_8266_Component_124_7_Component_239_1_Group77: THREE.Mesh;
    Mesh21053_chair3_1_8267_Component_124_7_Component_239_1_Group77: THREE.Mesh;
    Mesh21054_chair3_1_8268_Component_124_7_Component_239_1_Group77: THREE.Mesh;
    Mesh21055_chair3_1_8269_Component_124_7_Component_239_1_Group77: THREE.Mesh;
    Mesh21056_chair3_1_8270_Component_124_7_Component_239_1_Group77: THREE.Mesh;
    Mesh21057_chair3_1_8271_Component_124_8_Component_239_1_Group77: THREE.Mesh;
    Mesh21058_chair3_1_8272_Component_124_8_Component_239_1_Group77: THREE.Mesh;
    Mesh21059_chair3_1_8273_Component_124_8_Component_239_1_Group77: THREE.Mesh;
    Mesh21060_chair3_1_8274_Component_124_8_Component_239_1_Group77: THREE.Mesh;
    Mesh21061_chair3_1_8275_Component_124_8_Component_239_1_Group77: THREE.Mesh;
    Mesh21062_chair3_1_8276_Component_124_8_Component_239_1_Group77: THREE.Mesh;
    Mesh21063_chair3_1_8277_Component_124_8_Component_239_1_Group77: THREE.Mesh;
    Mesh21064_chair3_1_8278_Component_124_8_Component_239_1_Group77: THREE.Mesh;
    Mesh21065_chair3_1_8279_Component_124_8_Component_239_1_Group77: THREE.Mesh;
    Mesh21066_chair3_1_8280_Component_124_8_Component_239_1_Group77: THREE.Mesh;
    Mesh21067_chair3_1_8281_Component_124_8_Component_239_1_Group77: THREE.Mesh;
    Mesh21068_chair3_1_8282_Component_68_1_Component_239_1_Grou: THREE.Mesh;
    Mesh21068_chair3_1_8282_Component_68_1_Component_239_1_Group77_: THREE.Mesh;
    Mesh21069_chair3_1_8283_Component_68_1_Component_239_1_Grou: THREE.Mesh;
    Mesh21069_chair3_1_8283_Component_68_1_Component_239_1_Group77_: THREE.Mesh;
    Mesh21070_chair3_1_8284_Component_68_1_Component_239_1_Grou: THREE.Mesh;
    Mesh21070_chair3_1_8284_Component_68_1_Component_239_1_Group77_: THREE.Mesh;
    Mesh21071_chair3_1_8285_Component_68_1_Component_239_1_Group77_: THREE.Mesh;
    Mesh21072_chair3_1_8286_Component_68_1_Component_239_1_Grou: THREE.Mesh;
    Mesh21072_chair3_1_8286_Component_68_1_Component_239_1_Group77_: THREE.Mesh;
    Mesh21073_chair3_1_8287_Component_68_1_Component_239_1_Group77_: THREE.Mesh;
    Mesh21074_chair3_1_8288_Component_68_2_Component_239_1_Grou: THREE.Mesh;
    Mesh21074_chair3_1_8288_Component_68_2_Component_239_1_Group77_: THREE.Mesh;
    Mesh21075_chair3_1_8289_Component_68_2_Component_239_1_Grou: THREE.Mesh;
    Mesh21075_chair3_1_8289_Component_68_2_Component_239_1_Group77_: THREE.Mesh;
    Mesh21076_chair3_1_8290_Component_68_2_Component_239_1_Grou: THREE.Mesh;
    Mesh21076_chair3_1_8290_Component_68_2_Component_239_1_Group77_: THREE.Mesh;
    Mesh21077_chair3_1_8291_Component_68_2_Component_239_1_Group77_: THREE.Mesh;
    Mesh21078_chair3_1_8292_Component_68_2_Component_239_1_Grou: THREE.Mesh;
    Mesh21078_chair3_1_8292_Component_68_2_Component_239_1_Group77_: THREE.Mesh;
    Mesh21079_chair3_1_8293_Component_68_2_Component_239_1_Group77_: THREE.Mesh;
    Mesh21080_chair3_1_8294_Component_68_3_Component_239_1_Grou: THREE.Mesh;
    Mesh21080_chair3_1_8294_Component_68_3_Component_239_1_Group77_: THREE.Mesh;
    Mesh21081_chair3_1_8295_Component_68_3_Component_239_1_Grou: THREE.Mesh;
    Mesh21081_chair3_1_8295_Component_68_3_Component_239_1_Group77_: THREE.Mesh;
    Mesh21082_chair3_1_8296_Component_68_3_Component_239_1_Grou: THREE.Mesh;
    Mesh21082_chair3_1_8296_Component_68_3_Component_239_1_Group77_: THREE.Mesh;
    Mesh21083_chair3_1_8297_Component_68_3_Component_239_1_Group77_: THREE.Mesh;
    Mesh21084_chair3_1_8298_Component_68_3_Component_239_1_Grou: THREE.Mesh;
    Mesh21084_chair3_1_8298_Component_68_3_Component_239_1_Group77_: THREE.Mesh;
    Mesh21085_chair3_1_8299_Component_68_3_Component_239_1_Group77_: THREE.Mesh;
    Mesh21086_chair3_1_8300_Component_68_4_Component_239_1_Grou: THREE.Mesh;
    Mesh21086_chair3_1_8300_Component_68_4_Component_239_1_Group77_: THREE.Mesh;
    Mesh21087_chair3_1_8301_Component_68_4_Component_239_1_Grou: THREE.Mesh;
    Mesh21087_chair3_1_8301_Component_68_4_Component_239_1_Group77_: THREE.Mesh;
    Mesh21088_chair3_1_8302_Component_68_4_Component_239_1_Grou: THREE.Mesh;
    Mesh21088_chair3_1_8302_Component_68_4_Component_239_1_Group77_: THREE.Mesh;
    Mesh21089_chair3_1_8303_Component_68_4_Component_239_1_Group77_: THREE.Mesh;
    Mesh21090_chair3_1_8304_Component_68_4_Component_239_1_Grou: THREE.Mesh;
    Mesh21090_chair3_1_8304_Component_68_4_Component_239_1_Group77_: THREE.Mesh;
    Mesh21091_chair3_1_8305_Component_68_4_Component_239_1_Group77_: THREE.Mesh;
    Mesh21152_chair3_1_8366_Component_102_5_Component_245_1_Group77: THREE.Mesh;
    Mesh21452_chair3_1_8666_Component_102_28_Component_245_1_Group7: THREE.Mesh;
    Mesh21517_chair3_1_8731_Component_28_6_Component_225_1_Group77_: THREE.Mesh;
    Mesh21667_chair3_1_8881_Component_113_4_Component_216_1_Group77: THREE.Mesh;
    Mesh22046_chair3_1_9260_Component_216_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh22083_chair3_1_9297_Component_101_16_Component_252_1_Group7: THREE.Mesh;
    Mesh22240_chair3_1_9454_Component_131_5_Component_269_1_Group77: THREE.Mesh;
    Mesh22397_chair3_1_9611_Component_227_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh22432_chair3_1_9646_Component_106_1_Component_218_1_Group77: THREE.Mesh;
    Mesh22451_chair3_1_9665_Component_106_2_Component_218_1_Group77: THREE.Mesh;
    Mesh23225_chair3_1_10439_Component_45_1_Component_260_1_Group77: THREE.Mesh;
    Mesh23420_chair3_1_10634_Component_33_6_Component_220_1_Group77: THREE.Mesh;
    Mesh23667_chair3_1_10881_Component_33_23_Component_220_1_Group7: THREE.Mesh;
    Mesh26793_chair3_5_910_Group77_allseats1_Model: THREE.Mesh;
    Mesh29225_chair3_5_1860_Group77_allseats1_Model: THREE.Mesh;
  };
  materials: {};
};

export function ThirdBaseModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/thirdbase.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh8727_chair3_7_37_Group77_allseats1_Model.geometry}
        material={nodes.Mesh8727_chair3_7_37_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh8772_chair3_7_82_Group77_allseats1_Model.geometry}
        material={nodes.Mesh8772_chair3_7_82_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh8827_chair3_7_137_Group77_allseats1_Model.geometry}
        material={nodes.Mesh8827_chair3_7_137_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh9339_chair3_7_643_Group77_allseats1_Model.geometry}
        material={nodes.Mesh9339_chair3_7_643_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh9722_chair3_7_1026_Group77_allseats1_Model.geometry}
        material={nodes.Mesh9722_chair3_7_1026_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh15857_chair3_1_3071_Component_215_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh15857_chair3_1_3071_Component_215_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh15944_chair3_1_3158_Component_78_8_Component_247_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh15944_chair3_1_3158_Component_78_8_Component_247_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh16724_chair3_1_3938_Component_99_3_Component_222_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh16724_chair3_1_3938_Component_99_3_Component_222_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh17026_chair3_1_4240_Component_233_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh17026_chair3_1_4240_Component_233_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh17139_chair3_1_4353_Component_161_7_Component_237_1_Group77
            .geometry
        }
        material={
          nodes.Mesh17139_chair3_1_4353_Component_161_7_Component_237_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh17448_chair3_1_4662_Component_161_20_Component_217_1_Group7
            .geometry
        }
        material={
          nodes.Mesh17448_chair3_1_4662_Component_161_20_Component_217_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh17961_chair3_1_5175_Component_147_35_Component_256_1_Group7
            .geometry
        }
        material={
          nodes.Mesh17961_chair3_1_5175_Component_147_35_Component_256_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh18287_chair3_1_5501_Component_15_8_Component_214_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh18287_chair3_1_5501_Component_15_8_Component_214_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh18309_chair3_1_5523_Component_15_9_Component_214_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh18309_chair3_1_5523_Component_15_9_Component_214_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh18359_chair3_1_5573_Component_15_12_Component_214_1_Group77
            .geometry
        }
        material={
          nodes.Mesh18359_chair3_1_5573_Component_15_12_Component_214_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh18560_chair3_1_5774_Component_15_22_Component_214_1_Group77
            .geometry
        }
        material={
          nodes.Mesh18560_chair3_1_5774_Component_15_22_Component_214_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh18605_chair3_1_5819_Component_15_24_Component_214_1_Group77
            .geometry
        }
        material={
          nodes.Mesh18605_chair3_1_5819_Component_15_24_Component_214_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh18613_chair3_1_5827_Component_15_24_Component_214_1_Group77
            .geometry
        }
        material={
          nodes.Mesh18613_chair3_1_5827_Component_15_24_Component_214_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh18769_chair3_1_5983_Component_255_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh18769_chair3_1_5983_Component_255_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh18784_chair3_1_5998_Component_255_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh18784_chair3_1_5998_Component_255_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh18867_chair3_1_6081_Component_58_2_Component_255_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh18867_chair3_1_6081_Component_58_2_Component_255_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh19105_chair3_1_6319_Component_255_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh19105_chair3_1_6319_Component_255_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh19263_chair3_1_6477_Component_120_10_Component_240_1_Group7
            .geometry
        }
        material={
          nodes.Mesh19263_chair3_1_6477_Component_120_10_Component_240_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20041_chair3_1_7255_Component_69_11_Component_258_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20041_chair3_1_7255_Component_69_11_Component_258_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20099_chair3_1_7313_Component_236_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh20099_chair3_1_7313_Component_236_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20190_chair3_1_7404_Component_221_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh20190_chair3_1_7404_Component_221_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20447_chair3_1_7661_Component_100_8_Component_266_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20447_chair3_1_7661_Component_100_8_Component_266_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20487_chair3_1_7701_Component_100_11_Component_266_1_Group7
            .geometry
        }
        material={
          nodes.Mesh20487_chair3_1_7701_Component_100_11_Component_266_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20811_chair3_1_8025_Component_27_10_Component_250_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20811_chair3_1_8025_Component_27_10_Component_250_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20886_chair3_1_8100_Component_101_4_Component_213_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20886_chair3_1_8100_Component_101_4_Component_213_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20980_chair3_1_8194_Component_124_1_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20980_chair3_1_8194_Component_124_1_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20981_chair3_1_8195_Component_124_1_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20981_chair3_1_8195_Component_124_1_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20982_chair3_1_8196_Component_124_1_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20982_chair3_1_8196_Component_124_1_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20983_chair3_1_8197_Component_124_1_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20983_chair3_1_8197_Component_124_1_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20984_chair3_1_8198_Component_124_1_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20984_chair3_1_8198_Component_124_1_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20985_chair3_1_8199_Component_124_1_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20985_chair3_1_8199_Component_124_1_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20986_chair3_1_8200_Component_124_1_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20986_chair3_1_8200_Component_124_1_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20987_chair3_1_8201_Component_124_1_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20987_chair3_1_8201_Component_124_1_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20988_chair3_1_8202_Component_124_1_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20988_chair3_1_8202_Component_124_1_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20989_chair3_1_8203_Component_124_1_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20989_chair3_1_8203_Component_124_1_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20990_chair3_1_8204_Component_124_1_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20990_chair3_1_8204_Component_124_1_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20991_chair3_1_8205_Component_124_2_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20991_chair3_1_8205_Component_124_2_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20992_chair3_1_8206_Component_124_2_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20992_chair3_1_8206_Component_124_2_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20993_chair3_1_8207_Component_124_2_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20993_chair3_1_8207_Component_124_2_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20994_chair3_1_8208_Component_124_2_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20994_chair3_1_8208_Component_124_2_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20995_chair3_1_8209_Component_124_2_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20995_chair3_1_8209_Component_124_2_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20996_chair3_1_8210_Component_124_2_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20996_chair3_1_8210_Component_124_2_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20997_chair3_1_8211_Component_124_2_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20997_chair3_1_8211_Component_124_2_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20998_chair3_1_8212_Component_124_2_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20998_chair3_1_8212_Component_124_2_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20999_chair3_1_8213_Component_124_2_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh20999_chair3_1_8213_Component_124_2_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21000_chair3_1_8214_Component_124_2_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21000_chair3_1_8214_Component_124_2_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21001_chair3_1_8215_Component_124_2_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21001_chair3_1_8215_Component_124_2_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21002_chair3_1_8216_Component_124_3_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21002_chair3_1_8216_Component_124_3_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21003_chair3_1_8217_Component_124_3_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21003_chair3_1_8217_Component_124_3_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21004_chair3_1_8218_Component_124_3_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21004_chair3_1_8218_Component_124_3_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21005_chair3_1_8219_Component_124_3_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21005_chair3_1_8219_Component_124_3_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21006_chair3_1_8220_Component_124_3_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21006_chair3_1_8220_Component_124_3_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21007_chair3_1_8221_Component_124_3_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21007_chair3_1_8221_Component_124_3_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21008_chair3_1_8222_Component_124_3_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21008_chair3_1_8222_Component_124_3_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21009_chair3_1_8223_Component_124_3_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21009_chair3_1_8223_Component_124_3_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21010_chair3_1_8224_Component_124_3_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21010_chair3_1_8224_Component_124_3_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21011_chair3_1_8225_Component_124_3_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21011_chair3_1_8225_Component_124_3_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21012_chair3_1_8226_Component_124_3_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21012_chair3_1_8226_Component_124_3_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21013_chair3_1_8227_Component_124_4_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21013_chair3_1_8227_Component_124_4_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21014_chair3_1_8228_Component_124_4_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21014_chair3_1_8228_Component_124_4_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21015_chair3_1_8229_Component_124_4_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21015_chair3_1_8229_Component_124_4_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21016_chair3_1_8230_Component_124_4_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21016_chair3_1_8230_Component_124_4_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21017_chair3_1_8231_Component_124_4_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21017_chair3_1_8231_Component_124_4_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21018_chair3_1_8232_Component_124_4_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21018_chair3_1_8232_Component_124_4_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21019_chair3_1_8233_Component_124_4_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21019_chair3_1_8233_Component_124_4_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21020_chair3_1_8234_Component_124_4_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21020_chair3_1_8234_Component_124_4_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21021_chair3_1_8235_Component_124_4_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21021_chair3_1_8235_Component_124_4_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21022_chair3_1_8236_Component_124_4_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21022_chair3_1_8236_Component_124_4_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21023_chair3_1_8237_Component_124_4_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21023_chair3_1_8237_Component_124_4_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21024_chair3_1_8238_Component_124_5_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21024_chair3_1_8238_Component_124_5_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21025_chair3_1_8239_Component_124_5_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21025_chair3_1_8239_Component_124_5_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21026_chair3_1_8240_Component_124_5_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21026_chair3_1_8240_Component_124_5_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21027_chair3_1_8241_Component_124_5_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21027_chair3_1_8241_Component_124_5_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21028_chair3_1_8242_Component_124_5_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21028_chair3_1_8242_Component_124_5_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21029_chair3_1_8243_Component_124_5_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21029_chair3_1_8243_Component_124_5_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21030_chair3_1_8244_Component_124_5_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21030_chair3_1_8244_Component_124_5_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21031_chair3_1_8245_Component_124_5_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21031_chair3_1_8245_Component_124_5_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21032_chair3_1_8246_Component_124_5_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21032_chair3_1_8246_Component_124_5_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21033_chair3_1_8247_Component_124_5_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21033_chair3_1_8247_Component_124_5_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21034_chair3_1_8248_Component_124_5_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21034_chair3_1_8248_Component_124_5_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21035_chair3_1_8249_Component_124_6_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21035_chair3_1_8249_Component_124_6_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21036_chair3_1_8250_Component_124_6_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21036_chair3_1_8250_Component_124_6_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21037_chair3_1_8251_Component_124_6_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21037_chair3_1_8251_Component_124_6_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21038_chair3_1_8252_Component_124_6_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21038_chair3_1_8252_Component_124_6_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21039_chair3_1_8253_Component_124_6_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21039_chair3_1_8253_Component_124_6_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21040_chair3_1_8254_Component_124_6_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21040_chair3_1_8254_Component_124_6_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21041_chair3_1_8255_Component_124_6_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21041_chair3_1_8255_Component_124_6_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21042_chair3_1_8256_Component_124_6_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21042_chair3_1_8256_Component_124_6_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21043_chair3_1_8257_Component_124_6_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21043_chair3_1_8257_Component_124_6_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21044_chair3_1_8258_Component_124_6_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21044_chair3_1_8258_Component_124_6_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21045_chair3_1_8259_Component_124_6_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21045_chair3_1_8259_Component_124_6_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21046_chair3_1_8260_Component_124_7_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21046_chair3_1_8260_Component_124_7_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21047_chair3_1_8261_Component_124_7_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21047_chair3_1_8261_Component_124_7_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21048_chair3_1_8262_Component_124_7_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21048_chair3_1_8262_Component_124_7_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21049_chair3_1_8263_Component_124_7_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21049_chair3_1_8263_Component_124_7_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21050_chair3_1_8264_Component_124_7_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21050_chair3_1_8264_Component_124_7_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21051_chair3_1_8265_Component_124_7_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21051_chair3_1_8265_Component_124_7_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21052_chair3_1_8266_Component_124_7_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21052_chair3_1_8266_Component_124_7_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21053_chair3_1_8267_Component_124_7_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21053_chair3_1_8267_Component_124_7_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21054_chair3_1_8268_Component_124_7_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21054_chair3_1_8268_Component_124_7_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21055_chair3_1_8269_Component_124_7_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21055_chair3_1_8269_Component_124_7_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21056_chair3_1_8270_Component_124_7_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21056_chair3_1_8270_Component_124_7_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21057_chair3_1_8271_Component_124_8_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21057_chair3_1_8271_Component_124_8_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21058_chair3_1_8272_Component_124_8_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21058_chair3_1_8272_Component_124_8_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21059_chair3_1_8273_Component_124_8_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21059_chair3_1_8273_Component_124_8_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21060_chair3_1_8274_Component_124_8_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21060_chair3_1_8274_Component_124_8_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21061_chair3_1_8275_Component_124_8_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21061_chair3_1_8275_Component_124_8_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21062_chair3_1_8276_Component_124_8_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21062_chair3_1_8276_Component_124_8_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21063_chair3_1_8277_Component_124_8_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21063_chair3_1_8277_Component_124_8_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21064_chair3_1_8278_Component_124_8_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21064_chair3_1_8278_Component_124_8_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21065_chair3_1_8279_Component_124_8_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21065_chair3_1_8279_Component_124_8_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21066_chair3_1_8280_Component_124_8_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21066_chair3_1_8280_Component_124_8_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21067_chair3_1_8281_Component_124_8_Component_239_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21067_chair3_1_8281_Component_124_8_Component_239_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21068_chair3_1_8282_Component_68_1_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21068_chair3_1_8282_Component_68_1_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21068_chair3_1_8282_Component_68_1_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21068_chair3_1_8282_Component_68_1_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21069_chair3_1_8283_Component_68_1_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21069_chair3_1_8283_Component_68_1_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21069_chair3_1_8283_Component_68_1_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21069_chair3_1_8283_Component_68_1_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21070_chair3_1_8284_Component_68_1_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21070_chair3_1_8284_Component_68_1_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21070_chair3_1_8284_Component_68_1_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21070_chair3_1_8284_Component_68_1_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21071_chair3_1_8285_Component_68_1_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21071_chair3_1_8285_Component_68_1_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21072_chair3_1_8286_Component_68_1_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21072_chair3_1_8286_Component_68_1_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21072_chair3_1_8286_Component_68_1_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21072_chair3_1_8286_Component_68_1_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21073_chair3_1_8287_Component_68_1_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21073_chair3_1_8287_Component_68_1_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21074_chair3_1_8288_Component_68_2_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21074_chair3_1_8288_Component_68_2_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21074_chair3_1_8288_Component_68_2_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21074_chair3_1_8288_Component_68_2_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21075_chair3_1_8289_Component_68_2_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21075_chair3_1_8289_Component_68_2_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21075_chair3_1_8289_Component_68_2_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21075_chair3_1_8289_Component_68_2_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21076_chair3_1_8290_Component_68_2_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21076_chair3_1_8290_Component_68_2_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21076_chair3_1_8290_Component_68_2_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21076_chair3_1_8290_Component_68_2_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21077_chair3_1_8291_Component_68_2_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21077_chair3_1_8291_Component_68_2_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21078_chair3_1_8292_Component_68_2_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21078_chair3_1_8292_Component_68_2_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21078_chair3_1_8292_Component_68_2_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21078_chair3_1_8292_Component_68_2_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21079_chair3_1_8293_Component_68_2_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21079_chair3_1_8293_Component_68_2_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21080_chair3_1_8294_Component_68_3_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21080_chair3_1_8294_Component_68_3_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21080_chair3_1_8294_Component_68_3_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21080_chair3_1_8294_Component_68_3_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21081_chair3_1_8295_Component_68_3_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21081_chair3_1_8295_Component_68_3_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21081_chair3_1_8295_Component_68_3_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21081_chair3_1_8295_Component_68_3_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21082_chair3_1_8296_Component_68_3_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21082_chair3_1_8296_Component_68_3_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21082_chair3_1_8296_Component_68_3_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21082_chair3_1_8296_Component_68_3_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21083_chair3_1_8297_Component_68_3_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21083_chair3_1_8297_Component_68_3_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21084_chair3_1_8298_Component_68_3_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21084_chair3_1_8298_Component_68_3_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21084_chair3_1_8298_Component_68_3_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21084_chair3_1_8298_Component_68_3_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21085_chair3_1_8299_Component_68_3_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21085_chair3_1_8299_Component_68_3_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21086_chair3_1_8300_Component_68_4_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21086_chair3_1_8300_Component_68_4_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21086_chair3_1_8300_Component_68_4_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21086_chair3_1_8300_Component_68_4_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21087_chair3_1_8301_Component_68_4_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21087_chair3_1_8301_Component_68_4_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21087_chair3_1_8301_Component_68_4_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21087_chair3_1_8301_Component_68_4_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21088_chair3_1_8302_Component_68_4_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21088_chair3_1_8302_Component_68_4_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21088_chair3_1_8302_Component_68_4_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21088_chair3_1_8302_Component_68_4_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21089_chair3_1_8303_Component_68_4_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21089_chair3_1_8303_Component_68_4_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21090_chair3_1_8304_Component_68_4_Component_239_1_Grou
            .geometry
        }
        material={
          nodes.Mesh21090_chair3_1_8304_Component_68_4_Component_239_1_Grou
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21090_chair3_1_8304_Component_68_4_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21090_chair3_1_8304_Component_68_4_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21091_chair3_1_8305_Component_68_4_Component_239_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21091_chair3_1_8305_Component_68_4_Component_239_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21152_chair3_1_8366_Component_102_5_Component_245_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21152_chair3_1_8366_Component_102_5_Component_245_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21452_chair3_1_8666_Component_102_28_Component_245_1_Group7
            .geometry
        }
        material={
          nodes.Mesh21452_chair3_1_8666_Component_102_28_Component_245_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21517_chair3_1_8731_Component_28_6_Component_225_1_Group77_
            .geometry
        }
        material={
          nodes.Mesh21517_chair3_1_8731_Component_28_6_Component_225_1_Group77_
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh21667_chair3_1_8881_Component_113_4_Component_216_1_Group77
            .geometry
        }
        material={
          nodes.Mesh21667_chair3_1_8881_Component_113_4_Component_216_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh22046_chair3_1_9260_Component_216_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh22046_chair3_1_9260_Component_216_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh22083_chair3_1_9297_Component_101_16_Component_252_1_Group7
            .geometry
        }
        material={
          nodes.Mesh22083_chair3_1_9297_Component_101_16_Component_252_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh22240_chair3_1_9454_Component_131_5_Component_269_1_Group77
            .geometry
        }
        material={
          nodes.Mesh22240_chair3_1_9454_Component_131_5_Component_269_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh22397_chair3_1_9611_Component_227_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh22397_chair3_1_9611_Component_227_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh22432_chair3_1_9646_Component_106_1_Component_218_1_Group77
            .geometry
        }
        material={
          nodes.Mesh22432_chair3_1_9646_Component_106_1_Component_218_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh22451_chair3_1_9665_Component_106_2_Component_218_1_Group77
            .geometry
        }
        material={
          nodes.Mesh22451_chair3_1_9665_Component_106_2_Component_218_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh23225_chair3_1_10439_Component_45_1_Component_260_1_Group77
            .geometry
        }
        material={
          nodes.Mesh23225_chair3_1_10439_Component_45_1_Component_260_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh23420_chair3_1_10634_Component_33_6_Component_220_1_Group77
            .geometry
        }
        material={
          nodes.Mesh23420_chair3_1_10634_Component_33_6_Component_220_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh23667_chair3_1_10881_Component_33_23_Component_220_1_Group7
            .geometry
        }
        material={
          nodes.Mesh23667_chair3_1_10881_Component_33_23_Component_220_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh26793_chair3_5_910_Group77_allseats1_Model.geometry}
        material={nodes.Mesh26793_chair3_5_910_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh29225_chair3_5_1860_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh29225_chair3_5_1860_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
    </group>
  );
}

useGLTF.preload("/models/thirdbase.glb");
