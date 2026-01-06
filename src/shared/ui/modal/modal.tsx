import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title: string
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
      className="fixed inset-0 bg-[#7FC1FF]/75 flex items-center justify-center z-50"
    >
      <div className="relative bg-[#38A0E1] rounded-lg p-6 w-full max-w-md gap-4 flex flex-col">
        <h2 className="text-xl text-white mb-4 text-center">{title}</h2>
        <X
          color="white"
          className="absolute cursor-pointer top-6 right-6"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}
