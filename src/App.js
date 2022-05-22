import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profiles/Profile";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
