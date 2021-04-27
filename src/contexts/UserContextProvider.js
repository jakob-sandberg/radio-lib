import { createContext, useState } from "react"
import { useHistory } from 'react-router-dom'

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const history = useHistory();
  const [isMember, setIsMember] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [toBeLogin, setToBeLogin] = useState(true);
  const [users, setUsers] = useState([
    {
      email: "admin@gmail.com",
      password: "1234"
    }
  ])
  const [currentUser, setCurrentUser] = useState({});
  const [favorites, setFavorites] = useState({});
  const [addedToFavorites, setAddedToFavorites] = useState({});


  const addToRegistration = (e, email, password) => {
    e.preventDefault()
    const member = {
      email,
      password
    }
    let isAlreadyMember = false
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === member.email) {
        isAlreadyMember = true
      }
    }
    if (!isAlreadyMember) {
      setUsers([member, ...users])
      setLoginState(true)
      setCurrentUser(member);
      history.push("/");
    }
    else {
      setIsMember(true)
    }
  }

  const addToFavorites = (program) => {
    if (!program.starred) {
      setFavorites([...favorites, program])
      setAddedToFavorites(true)
        return program
      }
    }
  

  const values =
  {
    loginState,
    setLoginState,
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    addToRegistration,
    isMember,
    setIsMember,
    toBeLogin,
    setToBeLogin,
    addToFavorites,
    addedToFavorites,
    setAddedToFavorites
  }

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  )
  }


export default UserContextProvider