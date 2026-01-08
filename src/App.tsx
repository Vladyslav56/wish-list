import { useState } from 'react'
import './App.css'
import { Button } from './shared/ui/button/button'
import { Modal } from './shared/ui/modal/modal'
import { CheckBox } from './shared/ui/check/check'
import { Input } from './shared/ui/input/input'
import { WishCard } from './entities/wish-card/WishCard'
import { Avatar } from './shared/ui/avatar/avatar'
import { UserCard } from './entities/user/ui/UserCard'
import { Pencil, Trash2 } from 'lucide-react'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <WishCard
        wish={{ id: '1', title: 'Wish Title', price: 100, isPrivate: false }}
        onClick={() => {}}
        topSlot={
          <CheckBox
            label="Accept Terms"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        }
        bottomSlot={
          <div className="flex justify-between">
            <Button onClick={() => {}}>
              <Pencil />
            </Button>
            <Button onClick={() => {}}>Complete</Button>{' '}
            <Button onClick={() => {}}>
              <Trash2 />
            </Button>
          </div>
        }
      />
      <Avatar
        fallback="Sdfdfg"
        onClick={() => setIsModalOpen(true)}
        size="md"
      />
      <UserCard
        user={{ id: '1', name: 'John Doe' }}
        actionSlot={
          <Button onClick={() => setIsModalOpen(true)}>Follow</Button>
        }
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Modal"
      >
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <Input
          multiline
          rows={4}
          name="password"
          placeholder="Enter your password"
        />
        <CheckBox
          label="Accept Terms"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <Button onClick={() => setIsModalOpen(false)}>Close Modal</Button>
      </Modal>
    </>
  )
}

export default App
