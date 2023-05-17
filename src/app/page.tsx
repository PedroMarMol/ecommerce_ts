"use client"
import { useState, useEffect } from 'react'
import List from './components/List'
interface User {
  nick: string
  avatar: string
  streakMonths: number
  description?: string
}

interface AppState {
  users: Array<User>
  newUsersNumber: number
}

const INITIAL_STATE = [
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
]

export default function Home() {
  const [users, setUsers] = useState<AppState["users"]>([])
  const [newUsersNumber, setNewUserNumber] = useState<AppState["newUsersNumber"]>(0)
  
  useEffect(() => {
    setUsers(INITIAL_STATE)
  }, [])

  return (
    <div className='App' >
      <h1>Usuarios en racha</h1>
      <List users={users} />
    </div>
    )
}