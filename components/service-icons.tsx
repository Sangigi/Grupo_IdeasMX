// Custom SVG icons for business services
import { CSSProperties } from "react"

interface IconProps {
  className?: string
  color?: string
  style?: CSSProperties
}

export function ReclutalIcon({ className = "w-6 h-6", color, style }: IconProps) {
  const fillColor = style?.color || color || "currentColor"
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer targeting circle */}
      <circle cx="50" cy="50" r="40" stroke={fillColor} strokeWidth="3" fill="none" />
      {/* Inner targeting circle */}
      <circle cx="50" cy="50" r="28" stroke={fillColor} strokeWidth="3" fill="none" />
      {/* Crosshair lines */}
      <line x1="50" y1="5" x2="50" y2="18" stroke={fillColor} strokeWidth="3" />
      <line x1="50" y1="82" x2="50" y2="95" stroke={fillColor} strokeWidth="3" />
      <line x1="5" y1="50" x2="18" y2="50" stroke={fillColor} strokeWidth="3" />
      <line x1="82" y1="50" x2="95" y2="50" stroke={fillColor} strokeWidth="3" />
      {/* Person silhouette - head */}
      <ellipse cx="50" cy="38" rx="9" ry="11" fill={fillColor} />
      {/* Person silhouette - body */}
      <path 
        d="M35 70 C35 55, 40 50, 50 50 C60 50, 65 55, 65 70" 
        stroke={fillColor} 
        strokeWidth="3" 
        fill="none"
      />
      {/* Small dots for detail */}
      <circle cx="50" cy="18" r="2" fill={fillColor} />
    </svg>
  )
}

export function ContabilidadIcon({ className = "w-6 h-6", color, style }: IconProps) {
  const fillColor = style?.color || color || "currentColor"
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main document/frame */}
      <rect x="15" y="20" width="55" height="65" rx="2" stroke={fillColor} strokeWidth="3" fill="none" />
      {/* Background documents (stacked effect) */}
      <rect x="25" y="15" width="55" height="65" rx="2" stroke={fillColor} strokeWidth="2" fill="none" opacity="0.5" />
      <rect x="30" y="10" width="55" height="65" rx="2" stroke={fillColor} strokeWidth="2" fill="none" opacity="0.3" />
      {/* Bar chart bars */}
      <rect x="25" y="55" width="8" height="22" fill={fillColor} />
      <rect x="38" y="45" width="8" height="32" fill={fillColor} />
      <rect x="51" y="35" width="8" height="42" fill={fillColor} />
      {/* Checkmark - cyan accent */}
      <path 
        d="M22 50 L35 63 L70 28" 
        stroke="#00BFFF" 
        strokeWidth="5" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LegalIcon({ className = "w-6 h-6", style }: IconProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle background - dark portion */}
      <path 
        d="M50 10 A40 40 0 0 1 50 90 L50 50 Z" 
        fill="#4B5563"
      />
      <path 
        d="M50 10 A40 40 0 0 0 50 90 L50 50 Z" 
        fill="none"
        stroke="#4B5563"
        strokeWidth="2"
      />
      {/* Green checkmark */}
      <path 
        d="M25 55 L42 72 L78 30" 
        stroke="#22C55E" 
        strokeWidth="10" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}
