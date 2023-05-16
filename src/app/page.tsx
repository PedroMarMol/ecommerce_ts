"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [subs, setSubs] = useState([
    {
      nick: 'martwix12',
      streakMonths: 10,
      avatar: 'https://i.pravatar.cc/150?u=martwix12',
      description: 'martwix12 es muy disciplinado'
    },
    {
      nick: 'naragon2',
      streakMonths: 0,
      avatar: 'https://i.pravatar.cc/150?u=naragon2',
      description: 'naragon2 es muy despistado'
    },
    {
      nick: 'mra360',
      streakMonths: 4,
      avatar: 'https://i.pravatar.cc/150?u=mra360',
    }
  ])
  
  return (
    <div className='App' >
      <h1>Usuarios en racha</h1>
      <ul>
        {
          subs.map(user => {
            return (
              <li key={user.nick}>
                <Image src={user.avatar} alt={`Avatar for ${user}`} width={150} height={150} />
                <h4>{user.nick} (<small>{user.streakMonths}</small>)</h4>
                <p>{user.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
    )
}