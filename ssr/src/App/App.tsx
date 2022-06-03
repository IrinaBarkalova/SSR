import React, { createContext, useContext } from "react";

import LoginForm from "@components/LoginForm";
import { getToken } from "@store/LoginStore/LoginStore";
import { ApiResp } from "@utils/apiTypes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
interface ContextType {
  login: string;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPswd: React.Dispatch<React.SetStateAction<string>>;
  getToken: (login: string, password: string) => Promise<ApiResp>;
}
const ReposContext = createContext({} as ContextType);
export const useReposContext = () => useContext(ReposContext);

const Provider = ReposContext.Provider;
const App: React.FC = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPswd] = React.useState("");

  return (
    <Provider value={{ login, setLogin, password, setPswd, getToken }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
