import { createContext, useState } from "react"
import { useHistory } from 'react-router-dom'

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const history = useHistory();
  const [isMember, setIsMember] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [toBeLogin, setToBeLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState({});


  const [users, setUsers] = useState({});

  const login = async () => {
    let users = await fetch("/api/v1/users");
    users = await users.json();
    setUsers(users);
  };


  const addToRegistration = (e, userName, email, password) => {
    e.preventDefault()
    const member = {
      userName,
      email,
      password,
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
    login
  }

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  )
  }


export default UserContextProvider