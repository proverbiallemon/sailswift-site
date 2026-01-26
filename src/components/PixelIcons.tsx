/**
 * Pixel Icon Library
 * Icons from HackerNoon Pixel Icon Library (CC 4.0)
 * https://pixeliconlibrary.com
 *
 * Custom additions (Search, Shield) designed to match the library style.
 */

interface IconProps {
  size?: number
  className?: string
}

// From Sailswift app - pixel-download.svg
export function PixelDownload({ size = 24, className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <polygon points="5 10 4 10 4 8 6 8 6 9 7 9 7 10 8 10 8 11 9 11 9 12 10 12 10 13 11 13 11 1 13 1 13 13 14 13 14 12 15 12 15 11 16 11 16 10 17 10 17 9 18 9 18 8 20 8 20 10 19 10 19 11 18 11 18 12 17 12 17 13 16 13 16 14 15 14 15 15 14 15 14 16 13 16 13 17 11 17 11 16 10 16 10 15 9 15 9 14 8 14 8 13 7 13 7 12 6 12 6 11 5 11 5 10"/>
      <rect x="2" y="21" width="20" height="2"/>
    </svg>
  )
}

// From Sailswift app - pixel-refresh.svg
export function PixelRefresh({ size = 24, className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <polygon points="23 14 23 15 22 15 22 17 21 17 21 19 20 19 20 20 19 20 19 21 17 21 17 22 15 22 15 23 9 23 9 22 7 22 7 21 5 21 5 20 3 20 3 21 2 21 2 22 1 22 1 15 8 15 8 16 7 16 7 17 6 17 6 19 7 19 7 20 9 20 9 21 15 21 15 20 17 20 17 19 19 19 19 17 20 17 20 14 23 14"/>
      <polygon points="23 2 23 9 16 9 16 8 17 8 17 7 18 7 18 5 17 5 17 4 15 4 15 3 9 3 9 4 7 4 7 5 5 5 5 7 4 7 4 10 1 10 1 9 2 9 2 7 3 7 3 5 4 5 4 4 5 4 5 3 7 3 7 2 9 2 9 1 15 1 15 2 17 2 17 3 19 3 19 4 21 4 21 3 22 3 22 2 23 2"/>
    </svg>
  )
}

// From Sailswift app - pixel-user.svg
export function PixelUsers({ size = 24, className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="m17,5v-2h-1v-1h-2v-1h-4v1h-2v1h-1v2h-1v4h1v2h1v1h2v1h4v-1h2v-1h1v-2h1v-4h-1Zm-2,4v1h-1v1h-4v-1h-1v-1h-1v-4h1v-1h1v-1h4v1h1v1h1v4h-1Z"/>
      <path d="m21,19v-1h-1v-1h-1v-1h-2v-1H7v1h-2v1h-1v1h-1v1h-1v3h1v1h18v-1h1v-3h-1Zm-16,0v-1h2v-1h10v1h2v1h1v2H4v-2h1Z"/>
    </svg>
  )
}

// From Sailswift app - pixel-sort.svg (used for Load Order)
export function PixelList({ size = 24, className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="m19,14v-1H5v1h-1v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-1Zm-2,2h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h10v1Z"/>
      <path d="m19,8v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v2h1v1h14v-1h1v-2h-1Zm-2,1H7v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1Z"/>
    </svg>
  )
}

// Custom - Pixel Search (magnifying glass) - designed to match library style
export function PixelSearch({ size = 24, className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      {/* Magnifying glass circle */}
      <path d="M7,2h6v1h2v1h1v1h1v2h1v6h-1v2h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-2H2V7h1V5h1V4h1V3h2V2Zm5,2H8v1H6v1H5v2H4v4h1v2h1v1h2v1h4v-1h2v-1h1v-2h1V8h-1V6h-1V5h-2V4Z"/>
      {/* Handle */}
      <rect x="16" y="16" width="2" height="2"/>
      <rect x="18" y="18" width="2" height="2"/>
      <rect x="20" y="20" width="3" height="3"/>
    </svg>
  )
}

// Custom - Pixel Shield - designed to match library style
export function PixelShield({ size = 24, className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M4,3h16v1h1v10h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-2v1h-2v-1H8v-1H6v-1H5v-1H4v-1H3v-2H2V4h1V3h1Zm1,2v9h1v2h1v1h1v1h2v1h2v-1h2v-1h1v-1h1v-2h1V5H5Z"/>
      {/* Checkmark inside shield */}
      <polygon points="10 15 8 13 9 12 10 13 14 9 15 10 10 15"/>
    </svg>
  )
}

// From Sailswift app - pixel-bolt.svg (alternative for auto-updates)
export function PixelBolt({ size = 24, className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="m14,10v-4h1v-3h1V1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h7v4h-1v3h-1v2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-7Zm4,2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-5h-5v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v5h5v1Z"/>
    </svg>
  )
}

// From Sailswift app - pixel-folder.svg
export function PixelFolder({ size = 24, className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="m22,6v-1h-9v-1h-1v-1h-1v-1H2v1h-1v18h1v1h20v-1h1V6h-1Zm-1,14H3V4h7v1h1v1h1v1h9v13Z"/>
    </svg>
  )
}

// From Sailswift app - pixel-play.svg
export function PixelPlay({ size = 24, className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M6,3h2v1h2v1h2v1h2v1h2v1h2v1h1v2h-1v1h-2v1h-2v1h-2v1h-2v1h-2v1H6V3Zm2,3v12h1v-1h2v-1h2v-1h2v-1h1V9h-1V8h-2V7h-2V6H8Z"/>
    </svg>
  )
}

// From Sailswift app - pixel-trash.svg
export function PixelTrash({ size = 24, className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="m4,6v8h1v8h1v1h12v-1h1v-8h1V6H4Zm14,7h-1v8H7v-8h-1v-5h12v5Z"/>
      <polygon points="21 3 21 5 3 5 3 3 4 3 4 2 9 2 9 1 15 1 15 2 20 2 20 3 21 3"/>
    </svg>
  )
}
