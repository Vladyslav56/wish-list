import { useState } from 'react'
import './App.css'
import { Button } from './shared/ui/button/button'
import { Modal } from './shared/ui/modal/modal'
import { CheckBox } from './shared/ui/check/check'
import { Input } from './shared/ui/input/input'
import { WishCard } from './entities/wish-card/WishCard'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <WishCard type="other" />
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
        <Input multiline name="password" placeholder="Enter your password" />
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
