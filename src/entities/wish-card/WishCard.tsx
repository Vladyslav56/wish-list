type Wish = {
  id: string
  title: string
  price: number
  isPrivate: boolean
  imageUrl?: string
}

interface WishCardProps {
  onClick?: () => void
  wish?: Wish
  topSlot?: React.ReactNode
  bottomSlot?: React.ReactNode
}

export function WishCard({
  wish,
  topSlot,
  bottomSlot,
  onClick,
}: WishCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-[#38A0E1] text-white p-4 rounded-lg flex flex-col gap-4 w-64 hover:shadow-[0_2px_15px_rgba(0,0,0,0.25)]"
    >
      {topSlot}
      <img src={wish?.imageUrl || ''} alt="img" />
      <p>{wish?.title}</p>
      <p>Price: {wish?.price}</p>
      {bottomSlot}
    </div>
  )
}
