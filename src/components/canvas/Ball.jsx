import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Ball = ({ imgUrl }) => {
  console.log(imgUrl, "aye props");
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
  <Canvas
    frameloop="demand"
    shadows
    gl={{ preserveDrawingBuffer: true }}
    onError={(error) => console.error("aye", error)}
  >
    <Suspense
      fallback={
        <div>
          <p>Loading</p>
        </div>
      }
    >
      <OrbitControls autoRotate enableZoom={false} />
      <Ball imgUrl={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
);
export default BallCanvas;
