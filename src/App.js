import { Route } from "react-router-dom";
import { Home, Login, Register, UserProfile } from "./Pages";
import { Switch } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/slices/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        {!user ? (
          <Route path="/accounts/emailsignup" component={Register} />
        ) : (
          ""
        )}
        {!user ? <Route path="/accounts/login" component={Login} /> : ""}
        <Route path="/" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
