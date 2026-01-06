interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  multiline?: boolean
  error?: string
  name: string
}

export function Input({ multiline, error, name, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {multiline ? (
        <textarea
          name={name}
          placeholder={props.placeholder}
          aria-label={name}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className="px-3 py-2 text-white bg-[#7FC1FF] rounded-lg placeholder-white focus:ring-white focus:ring-2 focus:outline-none resize-none hover:shadow-[0_2px_15px_rgba(0,0,0,0.25)]"
        />
      ) : (
        <input
          name={name}
          placeholder={props.placeholder}
          aria-label={name}
          {...props}
          className="px-3 py-2 text-white bg-[#7FC1FF] rounded-lg placeholder-white focus:ring-white focus:ring-2 focus:outline-none hover:shadow-[0_2px_15px_rgba(0,0,0,0.25)]"
        />
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}
