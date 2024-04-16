import { useState } from 'react'
import { Button } from './components/common/Button'
import { ButtonVatiant } from './components/common/Button/Button.constants'

export function App() {
  const [count, setCount] = useState(0)

  return (    
    <>
      {count}
      <Button variant={ButtonVatiant.Text} onClick={()=>setCount(count+1)}>Quero Adotar</Button>

      <Button variant={ButtonVatiant.Default }onClick={()=>setCount(count+1)}>Quero Adotar</Button>

      <Button variant={ButtonVatiant.Outlined}onClick={()=>setCount(count+1)}>Quero Adotar</Button>
    </>  
  )
}
