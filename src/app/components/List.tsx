import Image from "next/image"

interface Props {
  users: Array<{
    nick: string
    avatar: string
    streakMonths: number
    description?: string
  }>
}

const List = ({users}: Props) => {
  return (
    <ul>
      {
        users.map(user => {
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
  )
}

export default List