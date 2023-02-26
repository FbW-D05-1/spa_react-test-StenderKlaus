import { useContext } from "react"
import { UserContext } from "../Context/UserContext"


const Output = () => {
  const user = useContext(UserContext)
  return (
    <div className="Output">
      <h1>{user.name}  {user.location}</h1>
    </div>
  )
}

export default Output