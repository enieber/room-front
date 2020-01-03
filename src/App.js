import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./register/Register";
import Home from "./home/Home";
import PrivateRoute from "./routers/PrivateRouter";
import { translate } from "./locales";

function App() {
  useEffect(() => {
    document.title = translate("name_aplication");
  });

  return (
    <Router>
      <>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/" componet={Home} />
      </>
    </Router>
  );
}

export default App;
