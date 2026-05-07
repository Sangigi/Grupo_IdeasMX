"use client"

import { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Line } from "@react-three/drei"
import * as THREE from "three"

// Generate brain-like neural network points
function generateBrainPoints(count: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  const goldenRatio = (1 + Math.sqrt(5)) / 2
  
  for (let i = 0; i < count; i++) {
    const theta = 2 * Math.PI * i / goldenRatio
    const phi = Math.acos(1 - 2 * (i + 0.5) / count)
    
    // Brain shape modifier - more elliptical
    const r = 2 + Math.sin(phi * 2) * 0.3 + Math.cos(theta * 3) * 0.2
    
    const x = r * Math.sin(phi) * Math.cos(theta) * 1.2
    const y = r * Math.cos(phi) * 0.9
    const z = r * Math.sin(phi) * Math.sin(theta)
    
    // Add some noise for organic feel
    const noise = 0.15
    points.push(new THREE.Vector3(
      x + (Math.random() - 0.5) * noise,
      y + (Math.random() - 0.5) * noise,
      z + (Math.random() - 0.5) * noise
    ))
  }
  
  return points
}

// Generate connections between nearby points
function generateConnections(points: THREE.Vector3[], maxDistance: number): [THREE.Vector3, THREE.Vector3][] {
  const connections: [THREE.Vector3, THREE.Vector3][] = []
  
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dist = points[i].distanceTo(points[j])
      if (dist < maxDistance && Math.random() > 0.6) {
        connections.push([points[i], points[j]])
      }
    }
  }
  
  return connections
}

interface NeuralNodeProps {
  position: THREE.Vector3
  delay: number
}

function NeuralNode({ position, delay }: NeuralNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const pulseRef = useRef(Math.random() * Math.PI * 2)
  
  useFrame(() => {
    if (meshRef.current) {
      pulseRef.current += 0.02
      const scale = 1 + Math.sin(pulseRef.current + delay) * 0.3
      meshRef.current.scale.setScalar(scale)
      
      // Subtle glow effect
      const material = meshRef.current.material as THREE.MeshStandardMaterial
      if (material.emissiveIntensity !== undefined) {
        material.emissiveIntensity = 0.8 + Math.sin(pulseRef.current * 2 + delay) * 0.5
      }
    }
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshStandardMaterial
        color="#6366f1"
        emissive="#6366f1"
        emissiveIntensity={0.8}
        transparent
        opacity={0.95}
      />
    </mesh>
  )
}

interface NeuralConnectionProps {
  start: THREE.Vector3
  end: THREE.Vector3
  delay: number
}

function NeuralConnection({ start, end, delay }: NeuralConnectionProps) {
  const lineRef = useRef<THREE.Line>(null)
  const opacityRef = useRef(0)
  const phaseRef = useRef(Math.random() * Math.PI * 2)
  
  useFrame(() => {
    phaseRef.current += 0.02
    opacityRef.current = 0.25 + Math.sin(phaseRef.current + delay) * 0.2
    
    if (lineRef.current) {
      const material = lineRef.current.material as THREE.LineBasicMaterial
      material.opacity = opacityRef.current
    }
  })
  
  return (
    <Line
      ref={lineRef}
      points={[start, end]}
      color="#8b5cf6"
      lineWidth={1.2}
      transparent
      opacity={0.35}
    />
  )
}

function Brain({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  const targetRotation = useRef({ x: 0, y: 0 })
  
  const { points, connections } = useMemo(() => {
    const pts = generateBrainPoints(180)
    const conns = generateConnections(pts, 0.9)
    return { points: pts, connections: conns }
  }, [])
  
  useFrame((state) => {
    if (groupRef.current) {
      // Smooth rotation following mouse
      targetRotation.current.x = mousePosition.y * 0.3
      targetRotation.current.y = mousePosition.x * 0.5
      
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.02
      groupRef.current.rotation.y += (targetRotation.current.y + state.clock.elapsedTime * 0.08 - groupRef.current.rotation.y) * 0.02
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Core brain shape - subtle inner glow */}
        <Sphere args={[1.6, 64, 64]}>
          <MeshDistortMaterial
            color="#c7d2fe"
            roughness={0.4}
            metalness={0.3}
            distort={0.15}
            speed={1.5}
            transparent
            opacity={0.25}
          />
        </Sphere>
        
        {/* Neural nodes */}
        {points.map((point, i) => (
          <NeuralNode key={i} position={point} delay={i * 0.1} />
        ))}
        
        {/* Neural connections */}
        {connections.map((conn, i) => (
          <NeuralConnection key={i} start={conn[0]} end={conn[1]} delay={i * 0.05} />
        ))}
        
        {/* Outer rings - more visible */}
        <mesh>
          <torusGeometry args={[2.5, 0.025, 16, 100]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.5} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.3, 0.02, 16, 100]} />
          <meshBasicMaterial color="#22c55e" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <torusGeometry args={[2.7, 0.015, 16, 100]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.35} />
        </mesh>
      </group>
    </Float>
  )
}

function CameraController() {
  const { camera } = useThree()
  
  useEffect(() => {
    camera.position.set(0, 0, 6)
    camera.lookAt(0, 0, 0)
  }, [camera])
  
  return null
}

export function BrainScene({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <CameraController />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          color="#22c55e"
        />
        <Brain mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}
