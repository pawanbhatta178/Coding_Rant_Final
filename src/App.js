import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import WorkSpace from "./pages/WorkSpace/WorkSpace";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import useAuthHeader from "./helper/auth/useAuthHeader";
import useRefetchToken from "./helper/auth/useRefetchToken";
import useAuthToken from "./helper/auth/useAuthToken";
import userReducer from "./reducers/userReducer";
import { UserContext } from "./UserContext";
import { AppContext } from "./AppContext";

const ACCESS_KEY_TIMEOUT = 10000;

function App() {
  const [userState, userDispatch] = React.useReducer(userReducer, null);

  const { token: tokenCookie } = useAuthToken();

  useAuthHeader(userState?.token);

  const { token: newToken } = useRefetchToken(
    userState?.token,
    ACCESS_KEY_TIMEOUT
  );

  React.useEffect(() => {
    userDispatch({ type: "SET_TOKEN", payload: tokenCookie });
  }, [tokenCookie]);

  React.useEffect(() => {
    userDispatch({ type: "SET_TOKEN", payload: newToken });
  }, [newToken]);

  const [isSideBarOn, setIsSideBarOn] = useState(false);
  const [isLoginOn, setIsLoginOn] = useState(false);
  const [isUserMenuOn, setIsUserMenuOn] = useState(false);
  const [isSignUpOn, setIsSignUpOn] = useState(false);

  const onSideBarToggle = () => {
    setIsSideBarOn(!isSideBarOn);
  };

  const onUserMenuToggle = () => {
    setIsUserMenuOn(!isUserMenuOn);
  };

  const onLoginToggle = () => {
    setIsLoginOn((currentState) => {
      if (!currentState) {
        setIsSignUpOn(false);
      }
      return !currentState;
    });
  };

  const onSignUpToggle = () => {
    setIsSignUpOn((currentState) => {
      if (!currentState) {
        setIsLoginOn(false);
      }
      return !currentState;
    });
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOn,
        isLoginOn,
        isSignUpOn,
        isUserMenuOn,
        onSideBarToggle,
        onLoginToggle,
        onSignUpToggle,
        onUserMenuToggle,
      }}
    >
      <UserContext.Provider value={{ user: userState, userDispatch }}>
        <Router>
          <Switch>
            <Route path="/workspace">
              <WorkSpace />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
