import { Route, Switch } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";
import ProfilePage from "./views/SingleProfile/ProfilePage";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/:username" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
