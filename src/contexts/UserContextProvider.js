import { createContext, useState } from "react"

export const UserContext = createContext(); 

const UserContextProvider = (props) => {

  const [loginState, setLoginState] = useState(false);
  const [users, setUsers] = useState([
    {
        email: "jagge@gmail.com",
        password: "1234"
    }
])
const [currentUser, setCurrentUser] = useState({});

const values =
    {
      loginState,
      setLoginState,
      users,
      setUsers,
      currentUser,
      setCurrentUser,
    }
    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider