import { useContext } from "react"
import { UserContext } from "../Context/UserContext"


const Form = () => {
  const user = useContext(UserContext)
  return (
    <div className="Form">
      <form>
        <label> name: <input className="input-item" type="text" onChange={(e) => user.setName(e.target.value)}/></label>
        <label> location: <input className="input-item" type="text" onChange={(e) => user.setLocation(e.target.value)}/></label>
      </form>
    </div>
  )
}

export default Form