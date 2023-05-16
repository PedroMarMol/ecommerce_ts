"use client"
import { useState } from 'react'

export default function Home() {
  const [number, setNumber] = useState<number | string>(5)
  
  const changeNumber = () => {
    setNumber("2")
  }
  return (
    <div className='App' >
      {number}
      <button onClick={changeNumber}>Change number</button>
    </div>
    )
}