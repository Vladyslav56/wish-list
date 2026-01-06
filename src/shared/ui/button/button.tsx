interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  isActive?: boolean
}

export function Button({ children, onClick, disabled, isActive }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#7FC1FF] rounded-lg px-4 py-2 text-white cursor-pointer hover:shadow-[0_2px_15px_rgba(0,0,0,0.25)] disabled:opacity-50 ${
        isActive ? 'bg-blue-600' : ''
      }`}
    >
      {children}
    </button>
  )
}
