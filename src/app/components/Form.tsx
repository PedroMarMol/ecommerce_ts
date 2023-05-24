import { useState } from "react"
import { User } from "../types"

interface FormState {
  inputValues: User
}

const Form = () => {
  const [inputValues, setInputValues] = useState({
    nick: '',
    streakMonths: 0,
    avatar: '',
    description: ''
  })

  const handleSubmit = () => {

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick'/>
        <input onChange={handleChange} value={inputValues.streakMonths} type='number' name='streakMonths' placeholder='streakMonths'/>
        <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar'/>
        <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description'/>
        <button>Save new user</button>
      </form>
    </div>
  )
}

export default Form