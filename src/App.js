import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import EditScreen from "./EditScreen";
import Login from "./Login";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
            <Route path="/profile">
              <EditScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
