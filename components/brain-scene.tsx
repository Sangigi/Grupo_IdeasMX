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
      if (dist < maxDistance && Math.random() > 0.7) {
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
  
  useFrame((state) => {
    if (meshRef.current) {
      pulseRef.current += 0.02
      const scale = 1 + Math.sin(pulseRef.current + delay) * 0.3
      meshRef.current.scale.setScalar(scale)
      
      // Subtle glow effect
      const material = meshRef.current.material as THREE.MeshStandardMaterial
      if (material.emissiveIntensity !== undefined) {
        material.emissiveIntensity = 0.5 + Math.sin(pulseRef.current * 2 + delay) * 0.5
      }
    }
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#3b82f6"
        emissiveIntensity={0.5}
        transparent
        opacity={0.9}
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
    phaseRef.current += 0.015
    opacityRef.current = 0.1 + Math.sin(phaseRef.current + delay) * 0.1
    
    if (lineRef.current) {
      const material = lineRef.current.material as THREE.LineBasicMaterial
      material.opacity = opacityRef.current
    }
  })
  
  return (
    <Line
      ref={lineRef}
      points={[start, end]}
      color="#3b82f6"
      lineWidth={0.5}
      transparent
      opacity={0.2}
    />
  )
}

function Brain({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  const targetRotation = useRef({ x: 0, y: 0 })
  
  const { points, connections } = useMemo(() => {
    const pts = generateBrainPoints(200)
    const conns = generateConnections(pts, 0.8)
    return { points: pts, connections: conns }
  }, [])
  
  useFrame((state) => {
    if (groupRef.current) {
      // Smooth rotation following mouse
      targetRotation.current.x = mousePosition.y * 0.3
      targetRotation.current.y = mousePosition.x * 0.5
      
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.02
      groupRef.current.rotation.y += (targetRotation.current.y + state.clock.elapsedTime * 0.1 - groupRef.current.rotation.y) * 0.02
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Core brain shape */}
        <Sphere args={[1.8, 64, 64]}>
          <MeshDistortMaterial
            color="#e0e7ff"
            roughness={0.3}
            metalness={0.6}
            distort={0.2}
            speed={2}
            transparent
            opacity={0.4}
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
        
        {/* Outer glow rings */}
        <mesh>
          <torusGeometry args={[2.5, 0.02, 8, 100]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.3, 0.015, 8, 100]} />
          <meshBasicMaterial color="#22c55e" transparent opacity={0.2} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <torusGeometry args={[2.7, 0.01, 8, 100]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} />
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
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#22c55e"
        />
        <Brain mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}
