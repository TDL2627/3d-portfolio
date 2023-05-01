import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

const Ball = ({ imgUrl }) => {
  // const [colorMap] = useTexture([imgUrl]);
  // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useTexture([
  //   'PavingStones092_1K_Color.jpg',
  //   'PavingStones092_1K_Displacement.jpg',
  //   'PavingStones092_1K_Normal.jpg',
  //   'PavingStones092_1K_Roughness.jpg',
  //   'PavingStones092_1K_AmbientOcclusion.jpg',
  // ])
  // const decal = useTexture(imgUrl)
  // const [decal] = useTexture([imgUrl]);
  // const colorMap = useLoader(TextureLoader, imgUrl)
  // const [ normalMap] = useLoader(TextureLoader, [imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} /> <directionalLight />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* <Decal
          position={[0, 0, 0.5]}
          map={decal}
        /> */}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => (
  // <Canvas
  //   frameloop="demand"
  //   shadows
  //   gl={{ preserveDrawingBuffer: true }}
  //   onError={(error) => console.error("aye", error)}
  // >
  //   <Suspense
  //     fallback={
  //       <div>
  //         <p>Loading</p>
  //       </div>
  //     }
  //   >
  //     <OrbitControls autoRotate enableZoom={false} />
  //     <Ball imgUrl={icon} />
  //   </Suspense>
  //   <Preload all />
  // </Canvas>
  <img src={icon} alt="" />
);
export default BallCanvas;
