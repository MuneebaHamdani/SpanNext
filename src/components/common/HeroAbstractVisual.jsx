import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

/**
 * HeroAbstractVisual
 * A lightweight, decorative Three.js scene of abstract glowing 3D forms
 * (torus ring, distorted sphere, icosahedron) that float and rotate slowly
 * in the background of the Hero section. Purely ambient — no controls,
 * no particles/dots, pointer-events disabled so it never blocks content.
 *
 * Corner positions are computed as fractions of the camera's visible
 * frustum (via useCornerPosition) rather than fixed world units, so the
 * shapes stay pinned near the edges — clear of the centered headline —
 * on any viewport width, from mobile to ultra-wide desktop.
 */

const CAMERA_Z = 8;
const CAMERA_FOV = 45;

function useCornerPosition(xFrac, yFrac, zDepth) {
  const { size, camera } = useThree();
  return useMemo(() => {
    const aspect = size.width / Math.max(size.height, 1);
    const fovRad = (camera.fov * Math.PI) / 180;
    const dist = camera.position.z - zDepth;
    const halfHeight = Math.tan(fovRad / 2) * dist;
    const halfWidth = halfHeight * aspect;
    return [xFrac * halfWidth, yFrac * halfHeight, zDepth];
  }, [size.width, size.height, camera.fov, camera.position.z, xFrac, yFrac, zDepth]);
}

function RingShape({ xFrac, yFrac, zDepth, scale, color, speed = 0.06, opacity = 0.55 }) {
  const ref = useRef(null);
  const position = useCornerPosition(xFrac, yFrac, zDepth);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed * 1.4;
  });
  return (
    <group position={position}>
      <group ref={ref} scale={scale}>
        <mesh rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[1, 0.28, 32, 128]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            roughness={0.25}
            metalness={0.65}
            transparent
            opacity={opacity}
          />
        </mesh>
      </group>
    </group>
  );
}

function BlobShape({ xFrac, yFrac, zDepth, scale, color, speed = 0.05, opacity = 0.5 }) {
  const ref = useRef(null);
  const position = useCornerPosition(xFrac, yFrac, zDepth);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.z += delta * speed * 0.6;
  });
  return (
    <group position={position}>
      <group ref={ref} scale={scale}>
        <mesh>
          <icosahedronGeometry args={[1, 12]} />
          <MeshDistortMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            roughness={0.15}
            metalness={0.4}
            distort={0.35}
            speed={1.1}
            transparent
            opacity={opacity}
          />
        </mesh>
      </group>
    </group>
  );
}

function FacetedShape({ xFrac, yFrac, zDepth, scale, color, speed = 0.08, opacity = 0.55 }) {
  const ref = useRef(null);
  const position = useCornerPosition(xFrac, yFrac, zDepth);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * speed;
    ref.current.rotation.y += delta * speed * 0.8;
  });
  return (
    <group position={position}>
      <group ref={ref} scale={scale}>
        <mesh>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.25}
            roughness={0.35}
            metalness={0.55}
            flatShading
            transparent
            opacity={opacity}
          />
        </mesh>
      </group>
    </group>
  );
}

function Scene({ reduceMotion }) {
  const { size } = useThree();
  // Colors pulled from the site's royal palette
  const royal400 = "#60A5FA";
  const royal500 = "#2563EB";
  const royal300 = "#93C5FD";

  // Tighten toward the true corners and simplify on narrower viewports,
  // where wrapped headline text claims more vertical space.
  const compact = size.width < 1024;
  const tight = size.width < 640;

  const cornerX = tight ? 0.94 : compact ? 0.9 : 0.82;
  const cornerYTop = tight ? 0.86 : compact ? 0.82 : 0.62;
  const cornerYBottom = tight ? 0.88 : compact ? 0.84 : 0.68;
  const scaleFactor = tight ? 0.55 : compact ? 0.72 : 1;

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 6]} intensity={45} color={royal400} distance={30} />
      <pointLight position={[-6, -3, 4]} intensity={30} color={royal500} distance={28} />
      <directionalLight position={[0, 5, 5]} intensity={0.4} color="#ffffff" />

      {/* Top-right corner ring — clear of headline */}
      <Float
        speed={reduceMotion ? 0 : 1.1}
        rotationIntensity={reduceMotion ? 0 : 0.3}
        floatIntensity={reduceMotion ? 0 : 0.8}
        floatingRange={[-0.18, 0.18]}
      >
        <RingShape
          xFrac={cornerX}
          yFrac={cornerYTop}
          zDepth={-4.5}
          scale={0.85 * scaleFactor}
          color={royal400}
          speed={reduceMotion ? 0 : 0.07}
          opacity={0.45}
        />
      </Float>

      {/* Bottom-left corner blob — clear of stats/buttons */}
      <Float
        speed={reduceMotion ? 0 : 0.9}
        rotationIntensity={reduceMotion ? 0 : 0.25}
        floatIntensity={reduceMotion ? 0 : 0.9}
        floatingRange={[-0.2, 0.2]}
      >
        <BlobShape
          xFrac={-cornerX}
          yFrac={-cornerYBottom}
          zDepth={-4.8}
          scale={0.7 * scaleFactor}
          color={royal500}
          speed={reduceMotion ? 0 : 0.05}
          opacity={0.4}
        />
      </Float>

      {/* Small faceted accent, upper-left — hidden below desktop to avoid
          crowding wrapped headline text on narrower viewports */}
      {!compact && (
        <Float
          speed={reduceMotion ? 0 : 1.3}
          rotationIntensity={reduceMotion ? 0 : 0.35}
          floatIntensity={reduceMotion ? 0 : 0.7}
          floatingRange={[-0.15, 0.15]}
        >
          <FacetedShape
            xFrac={-0.78}
            yFrac={0.6}
            zDepth={-4}
            scale={0.42}
            color={royal300}
            speed={reduceMotion ? 0 : 0.09}
            opacity={0.4}
          />
        </Float>
      )}

      {/* Small ring, bottom-right — hidden below desktop for the same reason */}
      {!compact && (
        <Float
          speed={reduceMotion ? 0 : 1}
          rotationIntensity={reduceMotion ? 0 : 0.2}
          floatIntensity={reduceMotion ? 0 : 0.7}
          floatingRange={[-0.16, 0.16]}
        >
          <RingShape
            xFrac={0.8}
            yFrac={-0.7}
            zDepth={-5}
            scale={0.4}
            color={royal500}
            speed={reduceMotion ? 0 : 0.05}
            opacity={0.4}
          />
        </Float>
      )}
    </>
  );
}

export default function HeroAbstractVisual({ className = "" }) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // Pause rendering when off-screen to save GPU/battery
  const containerRef = useRef(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dpr = useMemo(() => [1, Math.min(window.devicePixelRatio || 1, 1.75)], []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <Canvas
        dpr={dpr}
        frameloop={visible ? "always" : "never"}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, CAMERA_Z], fov: CAMERA_FOV, near: 0.1, far: 50 }}
        style={{ background: "transparent" }}
      >
        <Scene reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}

