import { Button } from '../../shared/ui/button/button'
import { CheckBox } from '../../shared/ui/check/check'
import { Pencil, Trash2 } from 'lucide-react'

interface WishCardProps {
  type: 'own' | 'other'
}

export function WishCard({ type }: WishCardProps) {
  return (
    <div className="bg-[#38A0E1] text-white p-4 rounded-lg flex flex-col gap-4 w-64">
      {type === 'own' && (
        <CheckBox
          label="Private"
          onChange={(checked) => console.log(checked)}
        />
      )}
      <img src="" alt="img" />
      <p>Title</p>
      <p>Price</p>
      {type === 'own' ? (
        <div className="flex justify-between">
          <Button onClick={() => {}}>
            <Pencil />
          </Button>
          <Button onClick={() => {}}>Complete</Button>
          <Button onClick={() => {}}>
            <Trash2 />
          </Button>
        </div>
      ) : (
        <Button onClick={() => {}}>Copy to wishlist</Button>
      )}
    </div>
  )
}
