import type { JSX } from 'react'

type BaseProps = {
  error?: string
  name: string
}
type InputSingleLineProps = BaseProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    multiline?: false
  }
type InputMultiLineProps = BaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    multiline: true
  }

type InputProps = InputSingleLineProps | InputMultiLineProps

export function Input(props: InputProps) {
  const { error } = props

  const style =
    'px-3 py-2 text-white bg-[#7FC1FF] rounded-lg placeholder-white focus:ring-white focus:ring-2 focus:outline-none hover:shadow-[0_2px_15px_rgba(0,0,0,0.25)]'

  let field: JSX.Element

  if (props.multiline) {
    const { name, multiline, ...textareaProps } = props
    field = (
      <textarea
        name={name}
        aria-label={name}
        {...textareaProps}
        className={`${style} resize-none`}
      />
    )
  } else {
    const { name, multiline, ...inputProps } = props
    field = (
      <input name={name} aria-label={name} {...inputProps} className={style} />
    )
  }

  return (
    <div className="flex flex-col gap-1">
      {field}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}
