import { Check } from 'lucide-react'

interface CheckProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
}

export function CheckBox({ checked, onChange, label }: CheckProps) {
  return (
    <label className="inline-flex items-center cursor-pointer gap-2 select-none self-start group">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="sr-only"
      />
      <span className="flex h-5 w-5 items-center justify-center rounded bg-[#7FC1FF] group-hover:shadow-[0_2px_15px_rgba(0,0,0,0.25)]">
        {checked && <Check className="w-5 h-5" />}
      </span>
      <span className="text-white">{label}</span>
    </label>
  )
}
