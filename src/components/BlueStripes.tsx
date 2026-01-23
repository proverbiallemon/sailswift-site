interface BlueStripesProps {
  className?: string
}

export function BlueStripes({ className = '' }: BlueStripesProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Orange accent - top left */}
      <div className="absolute -top-1 left-0 w-6 h-1 bg-orange" />
      <div className="absolute -top-1 left-0 w-1 h-4 bg-orange" />

      {/* Orange accent - top right */}
      <div className="absolute -top-1 right-0 w-6 h-1 bg-orange" />
      <div className="absolute -top-1 right-0 w-1 h-4 bg-orange" />

      {/* Blue stripes */}
      <div className="flex flex-col gap-[6px] py-2">
        <div className="h-[3px] stripe-shimmer w-full" />
        <div className="h-[3px] stripe-shimmer w-full" style={{ animationDelay: '0.5s' }} />
        <div className="h-[3px] stripe-shimmer w-full" style={{ animationDelay: '1s' }} />
        <div className="h-[3px] stripe-shimmer w-full" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Orange accent - bottom left */}
      <div className="absolute -bottom-1 left-0 w-6 h-1 bg-orange" />
      <div className="absolute -bottom-1 left-0 w-1 h-4 bg-orange" />

      {/* Orange accent - bottom right */}
      <div className="absolute -bottom-1 right-0 w-6 h-1 bg-orange" />
      <div className="absolute -bottom-1 right-0 w-1 h-4 bg-orange" />
    </div>
  )
}
