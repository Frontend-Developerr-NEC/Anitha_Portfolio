import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, MeshWobbleMaterial, MeshDistortMaterial, Stars, Sparkles, PerspectiveCamera } from '@react-three/drei';

// Filter out Three.js internal deprecation warnings
if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (args[0] && typeof args[0] === 'string' && args[0].includes('THREE.Clock: This module has been deprecated')) {
      return;
    }
    originalWarn(...args);
  };
}

// Color palette mapping based on theme
export const getThemeColors = (colorTheme) => {
  switch (colorTheme) {
    case 'purple':
      return { 
        primary: '#c084fc', 
        secondary: '#ec4899', 
        accent: '#a855f7', 
        sphere: '#c084fc', 
        core: '#a855f7',
        particle: '#e879f9'
      };
    case 'emerald':
      return { 
        primary: '#34d399', 
        secondary: '#00f3ff', 
        accent: '#10b981', 
        sphere: '#10b981', 
        core: '#00f3ff',
        particle: '#34d399'
      };
    case 'gold':
      return { 
        primary: '#fbbf24', 
        secondary: '#f97316', 
        accent: '#ef4444', 
        sphere: '#fbbf24', 
        core: '#f59e0b',
        particle: '#fde047'
      };
    case 'cyan':
    default:
      return { 
        primary: '#00f5c4', 
        secondary: '#00e5ff', 
        accent: '#38bdf8', 
        sphere: '#00f5c4', 
        core: '#00b4d8',
        particle: '#38bdf8'
      };
  }
};

// ==========================================
// MODEL 1: Cyber Geodesic Sphere
// ==========================================
function CyberGeodesicSphere({ colorTheme, wireframeOnly = false }) {
  const outerSphereRef = useRef();
  const innerSphereRef = useRef();
  const coreRef = useRef();
  const ringRef = useRef();
  const floatingCubesRef = useRef();

  useFrame((state, delta) => {
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y += delta * 0.22;
      outerSphereRef.current.rotation.x += delta * 0.12;
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y -= delta * 0.28;
      innerSphereRef.current.rotation.z += delta * 0.15;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.18;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.14;
      ringRef.current.rotation.y += delta * 0.18;
    }
    if (floatingCubesRef.current) {
      floatingCubesRef.current.rotation.y += delta * 0.08;
    }
  });

  const { sphere, core } = getThemeColors(colorTheme);

  // Generate floating digital data bits
  const dataCubes = useMemo(() => {
    const cubes = [];
    for (let i = 0; i < 48; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.6 + Math.random() * 3.4;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      const size = 0.05 + Math.random() * 0.08;
      const opacity = 0.4 + Math.random() * 0.55;
      cubes.push({ pos: [x, y, z], size, opacity });
    }
    return cubes;
  }, []);

  return (
    <group>
      {/* Outer Geodesic Sphere */}
      <mesh ref={outerSphereRef} scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color={sphere}
          emissive={sphere}
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </mesh>

      {/* Middle Concentric Counter-Rotating Wireframe Sphere */}
      <mesh ref={innerSphereRef} scale={2.1}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={core}
          emissive={core}
          emissiveIntensity={0.85}
          roughness={0.15}
          metalness={0.85}
          wireframe
        />
      </mesh>

      {/* Glowing Inner Energy Core */}
      {!wireframeOnly && (
        <mesh ref={coreRef} scale={1.35}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color={core}
            emissive={sphere}
            emissiveIntensity={0.55}
            roughness={0.1}
            metalness={0.9}
            distort={0.28}
            speed={2}
            transparent
            opacity={0.7}
          />
        </mesh>
      )}

      {/* Orbital Tech Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, Math.PI / 4, 0]} scale={3.3}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshStandardMaterial
          color={sphere}
          emissive={sphere}
          emissiveIntensity={0.95}
        />
      </mesh>

      {/* Floating Digital Data Squares */}
      <group ref={floatingCubesRef}>
        {dataCubes.map((cube, idx) => (
          <Float key={idx} speed={1.5 + (idx % 4) * 0.3} rotationIntensity={1} floatIntensity={1.4}>
            <mesh position={cube.pos}>
              <boxGeometry args={[cube.size, cube.size, cube.size]} />
              <meshStandardMaterial
                color={idx % 2 === 0 ? sphere : core}
                emissive={idx % 2 === 0 ? sphere : core}
                emissiveIntensity={1.3}
                transparent
                opacity={cube.opacity}
              />
            </mesh>
          </Float>
        ))}
      </group>
    </group>
  );
}

// ==========================================
// MODEL 2: Quantum Gyroscope Reactor
// ==========================================
function QuantumReactor({ colorTheme, wireframeOnly = false }) {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const cageRef = useRef();
  const satellitesRef = useRef();

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.55;
      coreRef.current.rotation.x += delta * 0.35;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.45;
      ring1Ref.current.rotation.y += delta * 0.35;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.5;
      ring2Ref.current.rotation.z += delta * 0.4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z -= delta * 0.35;
      ring3Ref.current.rotation.x += delta * 0.4;
    }
    if (cageRef.current) {
      cageRef.current.rotation.y -= delta * 0.15;
    }
    if (satellitesRef.current) {
      satellitesRef.current.rotation.y += delta * 0.45;
    }
  });

  const { primary, secondary, accent } = getThemeColors(colorTheme);

  const satellitePositions = [
    [3.0, 1.2, 0],
    [-2.8, -1.4, 0.8],
    [1.5, 3.0, -1.2],
    [-1.2, -2.9, -1.0],
    [0.8, -1.8, 2.8],
    [-2.0, 2.0, -1.8],
  ];

  return (
    <group>
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh ref={coreRef} scale={1.3}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color={primary}
            emissive={primary}
            emissiveIntensity={0.8}
            roughness={0.08}
            metalness={0.92}
            distort={0.4}
            speed={2.5}
            wireframe={wireframeOnly}
          />
        </mesh>
      </Float>

      <mesh ref={ring1Ref} scale={1.95}>
        <torusGeometry args={[1, 0.04, 16, 100]} />
        <meshStandardMaterial
          color={primary}
          emissive={primary}
          emissiveIntensity={1.0}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>

      <mesh ref={ring2Ref} scale={2.55}>
        <torusGeometry args={[1, 0.045, 16, 100]} />
        <meshStandardMaterial
          color={secondary}
          emissive={secondary}
          emissiveIntensity={1.0}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>

      <mesh ref={ring3Ref} scale={3.15}>
        <torusGeometry args={[1, 0.045, 16, 100]} />
        <meshStandardMaterial
          color={accent}
          emissive={accent}
          emissiveIntensity={0.9}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>

      <mesh ref={cageRef} scale={3.65}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={secondary}
          emissive={secondary}
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>

      <group ref={satellitesRef}>
        {satellitePositions.map((pos, idx) => (
          <Float key={idx} speed={2 + idx * 0.4} rotationIntensity={1.5} floatIntensity={2}>
            <mesh position={pos} scale={0.35 + (idx % 2) * 0.1}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial
                color={idx % 2 === 0 ? primary : secondary}
                emissive={idx % 2 === 0 ? primary : secondary}
                emissiveIntensity={0.9}
                wireframe={wireframeOnly || idx % 2 === 1}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          </Float>
        ))}
      </group>
    </group>
  );
}

// ==========================================
// MODEL 3: Neural AI Globe
// ==========================================
function NeuralGlobe({ colorTheme, wireframeOnly = false }) {
  const globeRef = useRef();
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const nodesRef = useRef();

  useFrame((state, delta) => {
    if (globeRef.current) globeRef.current.rotation.y += delta * 0.25;
    if (coreRef.current) coreRef.current.rotation.y -= delta * 0.4;
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.3;
    if (ring2Ref.current) ring2Ref.current.rotation.x -= delta * 0.35;
    if (nodesRef.current) nodesRef.current.rotation.y += delta * 0.15;
  });

  const { primary, secondary, accent } = getThemeColors(colorTheme);

  // Neural network nodes
  const nodes = useMemo(() => {
    const list = [];
    for (let i = 0; i < 28; i++) {
      const phi = Math.acos(-1 + (2 * i) / 28);
      const theta = Math.sqrt(28 * Math.PI) * phi;
      const r = 2.3;
      list.push([
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      ]);
    }
    return list;
  }, []);

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={coreRef} scale={1.35}>
          <icosahedronGeometry args={[1, 2]} />
          <MeshDistortMaterial
            color={secondary}
            emissive={secondary}
            emissiveIntensity={0.85}
            roughness={0.1}
            metalness={0.9}
            distort={0.35}
            speed={2}
            wireframe={wireframeOnly}
          />
        </mesh>
      </Float>

      <mesh ref={globeRef} scale={2.3}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial
          color={primary}
          emissive={primary}
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>

      <mesh ref={ring1Ref} rotation={[Math.PI / 2.3, 0, 0]} scale={3.2}>
        <torusGeometry args={[1, 0.04, 16, 100]} />
        <meshStandardMaterial color={primary} emissive={primary} emissiveIntensity={1.0} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[0, Math.PI / 3.5, Math.PI / 4]} scale={3.6}>
        <torusGeometry args={[1, 0.03, 16, 100]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.9} wireframe />
      </mesh>

      {/* Neural Nodes */}
      <group ref={nodesRef}>
        {nodes.map((pos, idx) => (
          <mesh key={idx} position={pos} scale={0.08}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={2} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// ==========================================
// MODEL 4: Cyber Matrix Crystal
// ==========================================
function CyberCrystal({ colorTheme, wireframeOnly = false }) {
  const innerRef = useRef();
  const middleRef = useRef();
  const outerRef = useRef();

  useFrame((state, delta) => {
    if (innerRef.current) innerRef.current.rotation.x -= delta * 0.5;
    if (middleRef.current) middleRef.current.rotation.y += delta * 0.4;
    if (outerRef.current) outerRef.current.rotation.x += delta * 0.25;
  });

  const { primary, secondary } = getThemeColors(colorTheme);

  return (
    <group>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={innerRef} scale={1.2}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshWobbleMaterial 
            color={secondary} 
            factor={0.5} 
            speed={2} 
            emissive={secondary} 
            emissiveIntensity={0.8}
            wireframe={wireframeOnly}
          />
        </mesh>
      </Float>
      
      <mesh ref={middleRef} scale={2.1}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={primary} 
          emissive={primary} 
          emissiveIntensity={0.6} 
          roughness={0.05} 
          metalness={0.95} 
          transparent 
          opacity={wireframeOnly ? 0.4 : 0.8} 
          wireframe={wireframeOnly}
        />
      </mesh>

      <mesh ref={outerRef} scale={2.9}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={secondary} 
          emissive={secondary} 
          emissiveIntensity={0.9} 
          wireframe 
        />
      </mesh>
    </group>
  );
}

// ==========================================
// MODEL 5: Nexus Spacetime Portal
// ==========================================
function NexusPortal({ colorTheme, wireframeOnly = false }) {
  const torus1Ref = useRef();
  const torus2Ref = useRef();
  const torus3Ref = useRef();
  const coreRef = useRef();

  useFrame((state, delta) => {
    if (torus1Ref.current) torus1Ref.current.rotation.x += delta * 0.4;
    if (torus2Ref.current) torus2Ref.current.rotation.y -= delta * 0.4;
    if (torus3Ref.current) torus3Ref.current.rotation.z += delta * 0.35;
    if (coreRef.current) coreRef.current.rotation.z += delta * 0.6;
  });

  const { primary, secondary, accent } = getThemeColors(colorTheme);

  return (
    <group>
      <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={coreRef} scale={1.25}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial 
            color={secondary} 
            emissive={secondary} 
            emissiveIntensity={0.9} 
            distort={0.4} 
            speed={3}
            wireframe={wireframeOnly}
          />
        </mesh>
      </Float>

      <mesh ref={torus1Ref} scale={2.45}>
        <torusGeometry args={[1, 0.22, 32, 100]} />
        <MeshWobbleMaterial 
          color={primary} 
          factor={0.3} 
          speed={1.5} 
          emissive={primary} 
          emissiveIntensity={0.8} 
          wireframe={wireframeOnly} 
        />
      </mesh>

      <mesh ref={torus2Ref} rotation={[Math.PI / 2, 0, 0]} scale={2.65}>
        <torusGeometry args={[1, 0.18, 32, 100]} />
        <meshStandardMaterial 
          color={secondary} 
          emissive={secondary} 
          emissiveIntensity={0.8} 
          wireframe 
        />
      </mesh>

      <mesh ref={torus3Ref} rotation={[Math.PI / 4, Math.PI / 4, 0]} scale={3.1}>
        <torusGeometry args={[1, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color={accent} 
          emissive={accent} 
          emissiveIntensity={1.2} 
        />
      </mesh>
    </group>
  );
}

// ==========================================
// MODEL 6: 3D Developer Laptop / Tech Station
// ==========================================
function DeveloperLaptopModel({ colorTheme, wireframeOnly = false }) {
  const laptopRef = useRef();
  const screenRef = useRef();

  useFrame((state, delta) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y += delta * 0.3;
    }
  });

  const { primary, secondary, accent } = getThemeColors(colorTheme);

  return (
    <group ref={laptopRef} scale={1.5} position={[0, -0.4, 0]}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        {/* Base / Bottom Chassis */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.2, 0.12, 2.2]} />
          <meshStandardMaterial
            color="#0b1120"
            metalness={0.9}
            roughness={0.2}
            wireframe={wireframeOnly}
          />
        </mesh>

        {/* Keyboard Area Recess */}
        <mesh position={[0, 0.07, 0.2]}>
          <boxGeometry args={[2.8, 0.02, 1.3]} />
          <meshStandardMaterial
            color="#030712"
            emissive={primary}
            emissiveIntensity={0.3}
            roughness={0.4}
            wireframe={wireframeOnly}
          />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.07, -0.65]}>
          <boxGeometry args={[1.0, 0.02, 0.65]} />
          <meshStandardMaterial
            color="#1e293b"
            emissive={secondary}
            emissiveIntensity={0.2}
            roughness={0.2}
          />
        </mesh>

        {/* Screen Hinge */}
        <mesh position={[0, 0.1, 1.05]}>
          <cylinderGeometry args={[0.07, 0.07, 2.6, 16]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Screen Lid (Opened ~105 degrees) */}
        <group position={[0, 0.1, 1.05]} rotation={[-Math.PI / 1.7, 0, 0]}>
          {/* Back Lid Panel */}
          <mesh position={[0, 1.1, 0]}>
            <boxGeometry args={[3.2, 2.2, 0.08]} />
            <meshStandardMaterial
              color="#0b1120"
              metalness={0.95}
              roughness={0.15}
              wireframe={wireframeOnly}
            />
          </mesh>

          {/* Glowing Display Screen */}
          <mesh ref={screenRef} position={[0, 1.1, -0.05]}>
            <planeGeometry args={[3.0, 2.0]} />
            <meshStandardMaterial
              color="#020617"
              emissive={primary}
              emissiveIntensity={0.9}
              roughness={0.1}
            />
          </mesh>

          {/* Glowing Code lines simulation on screen */}
          <mesh position={[-0.4, 1.4, -0.06]}>
            <planeGeometry args={[1.8, 0.06]} />
            <meshStandardMaterial color={primary} emissive={primary} emissiveIntensity={2.0} />
          </mesh>
          <mesh position={[-0.2, 1.2, -0.06]}>
            <planeGeometry args={[2.2, 0.06]} />
            <meshStandardMaterial color={secondary} emissive={secondary} emissiveIntensity={2.0} />
          </mesh>
          <mesh position={[-0.5, 1.0, -0.06]}>
            <planeGeometry args={[1.6, 0.06]} />
            <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={2.0} />
          </mesh>
          <mesh position={[-0.3, 0.8, -0.06]}>
            <planeGeometry args={[2.0, 0.06]} />
            <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={2.0} />
          </mesh>
        </group>

        {/* Floating Holo Grid Base */}
        <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 5, 12, 12]} />
          <meshStandardMaterial color={primary} emissive={primary} emissiveIntensity={0.6} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

// ==========================================
// Dynamic Scene Lighting
// ==========================================
function SceneLighting({ colorTheme, isDesktop }) {
  const { accent, primary } = getThemeColors(colorTheme);
  const { viewport } = useThree();
  const targetX = isDesktop ? viewport.width * 0.22 : 0;

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 10, 5]} intensity={1.8} color={accent} />
      <pointLight position={[-10, -10, -5]} intensity={1.2} color="#00f5c4" />
      <pointLight position={[targetX, 4, 5]} intensity={2.5} color={primary} />
      <pointLight position={[targetX, -4, 4]} intensity={1.8} color={accent} />
    </>
  );
}

// ==========================================
// Positioned Responsive Model Wrapper
// ==========================================
function ResponsiveModel({ template, colorTheme, wireframeOnly }) {
  const { viewport } = useThree();
  const isDesktop = viewport.width > 7.5;
  
  // Position slightly to the right on desktop to balance the left hero text
  const posX = isDesktop ? Math.min(2.2, viewport.width * 0.22) : 0;
  const posY = isDesktop ? 0 : -0.1;
  const scale = isDesktop ? Math.min(1.25, Math.max(1.0, viewport.width * 0.078)) : 0.82;

  const renderTemplateMesh = () => {
    switch (template) {
      case 'reactor':
        return <QuantumReactor colorTheme={colorTheme} wireframeOnly={wireframeOnly} />;
      case 'globe':
        return <NeuralGlobe colorTheme={colorTheme} wireframeOnly={wireframeOnly} />;
      case 'crystal':
        return <CyberCrystal colorTheme={colorTheme} wireframeOnly={wireframeOnly} />;
      case 'portal':
        return <NexusPortal colorTheme={colorTheme} wireframeOnly={wireframeOnly} />;
      case 'laptop':
        return <DeveloperLaptopModel colorTheme={colorTheme} wireframeOnly={wireframeOnly} />;
      case 'geosphere':
      default:
        return <CyberGeodesicSphere colorTheme={colorTheme} wireframeOnly={wireframeOnly} />;
    }
  };

  return (
    <>
      <SceneLighting colorTheme={colorTheme} isDesktop={isDesktop} />
      <group position={[posX, posY, 0]} scale={scale}>
        {renderTemplateMesh()}
      </group>
    </>
  );
}

// ==========================================
// Canvas3D Export
// ==========================================
export default function Canvas3D({ 
  colorTheme = 'cyan', 
  isInteractive = true, 
  template = 'geosphere',
  wireframeOnly = false,
  autoRotateSpeed = 0.8
}) {
  const { particle } = getThemeColors(colorTheme);

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-auto">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 7], fov: 60 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={60} />
        
        {/* Dynamic Starfield & Sparkle Particle Systems */}
        <Stars radius={120} depth={60} count={3500} factor={4.5} saturation={0} fade speed={1.2} />
        <Sparkles 
          count={90} 
          scale={15} 
          size={3.2} 
          speed={0.4} 
          opacity={0.7} 
          color={particle} 
        />

        {/* Selected 3D Model positioned responsively */}
        <ResponsiveModel 
          template={template} 
          colorTheme={colorTheme} 
          wireframeOnly={wireframeOnly} 
        />

        {/* Interactive Orbit Controls with smooth damping */}
        {isInteractive && (
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate
            autoRotateSpeed={autoRotateSpeed}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 2.8}
            minDistance={4}
            maxDistance={12}
            dampingFactor={0.05}
          />
        )}
      </Canvas>
    </div>
  );
}
