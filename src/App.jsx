import { BrowserRouter, Route } from "react-router-dom";
import ChannelContextProvider from "./contexts/ChannelProvider"
import Navbar from "./components/Navbar";
import UserContextProvider from "./contexts/UserContextProvider";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Schedule from "./pages/Schedule";
import ChannelPage from "./pages/ChannelPage";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
        <UserContextProvider>
        <ChannelContextProvider>
        
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/log-in" component={LoginPage} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/channel/:channelId" component={ChannelPage} />
          
          </ChannelContextProvider>
          </UserContextProvider>
        </BrowserRouter>
    </div>
  );
};

export default App;
