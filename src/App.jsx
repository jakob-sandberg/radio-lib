import { BrowserRouter, Route } from "react-router-dom";
import ChannelContextProvider from "./contexts/ChannelProvider"
import Navbar from "./components/Navbar";
import UserContextProvider from "./contexts/UserContextProvider";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ChannelPage from "./pages/ChannelPage";
import ProfilePage from "./pages/ProfilePage";
import CategoryPage from "./pages/CategoryPage";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
        <UserContextProvider>
        <ChannelContextProvider>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/log-in" component={LoginPage} />
          <Route exact path="/channel/:channelId" component={ChannelPage} />
          <Route exact path="/category/:categoryId" component={CategoryPage} />
          <Route exact path="/profile-page" component={ProfilePage} />
          </ChannelContextProvider>
          </UserContextProvider>
        </BrowserRouter>
    </div>
  );
};

export default App;
