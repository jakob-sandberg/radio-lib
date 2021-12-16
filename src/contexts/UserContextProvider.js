import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [toBeLogin, setToBeLogin] = useState(true);
  const [loginState, setLoginState] = useState(false);
  const [userToDelete, setUserToDelte] = useState(null);
  const [activeUser, setActiveUser] = useState(undefined);

  const [loginResult, setLoginResult] = useState(null);

  const whoami = async () => {
    let user = await fetch("/api/v1/users/whoami");
    user = await user.json();
    if (user) {
      setActiveUser(user);
    } else {
      setActiveUser(null);
    }
    return user;
  };

  const login = async (user) => {
    let userLoggingIn = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    userLoggingIn = await userLoggingIn.json();
    if (!userLoggingIn.error) {
      setActiveUser(userLoggingIn);
      console.log("logged in user: ", user);
      setLoginResult(null);
    } else {
      setLoginResult(userLoggingIn.error);
    }
    return userLoggingIn;
  };

  const logout = async (user) => {
    await fetch("/api/v1/users/logout");
    setActiveUser(null);
  };

  const register = async (newUser) => {
    let result = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    result = await result.json();

    return result;
  };

  const deleteUserById = async (userId) => {
    let result = await fetch("/api/v1/users/" + userId, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  };

  const values = {
    setActiveUser,
    whoami,
    login,
    logout,
    register,
    setToBeLogin,
    toBeLogin,
    setLoginState,
    loginState,
    deleteUserById,
    activeUser,
    setActiveUser,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
