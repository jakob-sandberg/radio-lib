import { useContext } from "react"
import { UserContext } from "../contexts/UserContextProvider"

export default function LogOutButton() {
    const { setLoginState, setCurrentUser, setToBeLogin, logout } = useContext(UserContext);

    const handleOnclickLogout = async () => {
        await logout();
      };

    return (
        <span onClick={handleOnclickLogout}>Logout</span>
    )
}