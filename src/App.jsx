import { BrowserRouter, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import UserContextProvider from "./contexts/UserContextProvider";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
        <UserContextProvider>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/log-in" component={LoginPage} />
          </UserContextProvider>
        </BrowserRouter>
    </div>
  );
};

export default App;
