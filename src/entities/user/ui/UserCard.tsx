import { Avatar } from '../../../shared/ui/avatar/avatar'

type User = {
  id: string
  name: string
  avatarUrl?: string
}

interface UserCardProps {
  user: User
  onClick?: () => void
  actionSlot?: React.ReactNode
}

export function UserCard({ user, actionSlot, onClick }: UserCardProps) {
  return (
    <div
      className="flex items-center justify-between gap-3 p-2 rounded-lg w-1/3 bg-[#38A0E1] hover:shadow-[0_2px_15px_rgba(0,0,0,0.25)] cursor-pointer text-white"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <Avatar fallback={user.name} src={user.avatarUrl} size="md" />
        <span className="font-medium">{user.name}</span>
      </div>

      {actionSlot}
    </div>
  )
}
