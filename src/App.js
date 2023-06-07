import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { useSelector } from "react-redux";
import ThemeCustomization from "./themes"
const Routing = ({ LoggedIn }) => {
  if (LoggedIn) {
    return <Routes isLoggedIn={true} />;
  } else {
    return <Routes isLoggdIn={false} />;
  }
};
function App() {
  const {token} = useSelector((state)=>state?.login)
  console.log("state",token)
  return (
    <>
    <ThemeCustomization>
      <Router>
        <Routing LoggedIn={token} />
      </Router>
      </ThemeCustomization>
    </>
  );
}

export default App;
