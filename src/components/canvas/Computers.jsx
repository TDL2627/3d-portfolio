import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const useAutoRotate = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.25;
    }
  });

  return ref;
};

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
  const autoRotateRef = useAutoRotate();

  return (
    <mesh ref={autoRotateRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={!isMobile ? 0.75 : 0.40}
        position={!isMobile ? [0, -2.25, -1.5] : [0, -0.25, -0.7]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        frameloop="always"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
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
    </div>
  );
};

export default ComputersCanvas;