import Image from "next/image"
import { User } from "../types"
interface Props {
  users: Array<User>
}

const List = ({users}: Props) => {
  const renderList = (): JSX.Element[] => {
    return users.map(user => {
      return (
        <li key={user.nick}>
          <Image src={user.avatar} alt={`Avatar for ${user}`} width={150} height={150} />
          <h4>{user.nick} (<small>{user.streakMonths}</small>)</h4>
          <p>{user.description?.substring(0, 100)}</p>
        </li>
      )
    })
  }

  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List