import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    const isMobileWidth = screenWidth <= 768;
    setIsMobile(isMobileWidth);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const computer = useGLTF("./desktop_pc/scene.gltf");
  const { scene, nodes, materials } = useGLTF('./desktop_pc/scene.gltf', (progressEvent) => {
    const progress = (progressEvent.loaded / progressEvent.total) * 100;
    console.log(`aye Model loading progress: ${progress}%`);
  }, (errorEvent) => {
    console.error(' aye An error occurred while loading the model:', errorEvent);
  }, (loadedEvent) => {
    console.log('aye Model has been successfully loaded:', loadedEvent);
  });
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={!isMobile ? 0.75 : 0.4}
        position={!isMobile ? [0, -2.25, -1.5] : [0, -0.25, -0.7]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onError={(error) => console.error("aye", error)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> 
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
