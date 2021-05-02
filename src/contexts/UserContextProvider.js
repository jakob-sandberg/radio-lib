import { createContext, useState, } from "react"

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const [user, setUser] = useState(null);
  const [toBeLogin, setToBeLogin] = useState(true);
  const [loginState, setLoginState] = useState(false);
  const [ userToDelete, setUserToDelte] = useState(null);

  const getUser = async () =>{
    let user = await fetch("/api/v1/users/whoami")
    user = await user.json();
    setUser(user)
    return
  }


  const login = async (userInfo)=>{
      let result = await fetch("/api/v1/users/login",{
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      result = await result.json();
      getUser()
      return result
  }
   
  const logout = async ()=>{
    await fetch("/api/v1/users/logout")
     getUser()
  }
 
  const register = async(newUser)=>{
    let result = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    result = await result.json();
    getUser();
    return result;
  }

  const deleteUserById = async (userId) => {
    let result = await fetch('/api/v1/users/' + userId, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  };


  const values =
  {
    setUser,
    user,
    getUser,
    login,
    logout,
    register,
    setToBeLogin,
    toBeLogin,
    setLoginState,
    loginState,
    deleteUserById
    
  }

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  )
}


export default UserContextProvider