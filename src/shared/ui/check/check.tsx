import { Check } from 'lucide-react'

interface CheckProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
}

export function CheckBox({ checked, onChange, label }: CheckProps) {
  return (
    <label className="flex items-center cursor-pointer gap-2 ">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="sr-only"
      />
      <span className="flex h-5 w-5 items-center justify-center rounded bg-[#7FC1FF]">
        {checked && <Check className="w-5 h-5" />}
      </span>
      <span className="text-white">{label}</span>
    </label>
  )
}
