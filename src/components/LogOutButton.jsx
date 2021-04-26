import { useContext } from "react"
import { UserContext } from "../contexts/UserContextProvider"

export default function LogOutButton() {
    const { setLoginState, setCurrentUser, setToBeLogin } = useContext(UserContext);

    const logout = () => {
        setLoginState(false)
        setCurrentUser({})
        setToBeLogin(true)
        };
    

    return (
        <p onClick={logout}>Logout</p>
    )
}