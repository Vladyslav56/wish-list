interface AvatarProps {
  size?: 'sm' | 'md' | 'lg'
  src?: string
  fallback?: string
  onClick?: () => void
}

export function Avatar({ size = 'md', src, fallback, onClick }: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12 text-3xl',
    lg: 'w-16 h-16 text-4xl',
  }
  const sizeClass = sizes[size]

  const style = `flex items-center justify-center rounded-full bg-[#7FC1FF] ${sizeClass} cursor-pointer leading-none font-bold select-none hover:shadow-[0_2px_15px_rgba(0,0,0,0.25)]`

  return src ? (
    <img src={src} alt={fallback} className={style} onClick={onClick} />
  ) : (
    <div className={`${style} text-gray-700`} onClick={onClick}>
      {fallback?.[0].toUpperCase() ?? '?'}
    </div>
  )
}
