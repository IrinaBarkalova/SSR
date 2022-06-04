import React, { createContext, useContext } from "react";

import LoginForm from "@components/LoginForm";
import ProfileForm from "@components/ProfileForm";
import {
  StudentProfileInitialModel,
  StudentProfileModel,
  SupervisorProfileInitialModel,
  SupervisorProfileModel,
} from "@models/user";
import { getToken } from "@store/LoginStore/LoginStore";
import {
  getStudentProfile,
  getSupervisorProfile,
} from "@store/ProfileStore/ProfileStore";
import { ApiResp } from "@utils/apiTypes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
interface ContextType {
  login: string;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPswd: React.Dispatch<React.SetStateAction<string>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  getToken: (login: string, password: string) => Promise<ApiResp>;
  getStudentProfile: (token: string) => Promise<ApiResp>;
  getSupervisorProfile: (token: string) => Promise<ApiResp>;
}
const ReposContext = createContext({} as ContextType);
export const useReposContext = () => useContext(ReposContext);

const Provider = ReposContext.Provider;
const App: React.FC = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPswd] = React.useState("");
  const [token, setToken] = React.useState("");
  const [role, setRole] = React.useState("");

  //TODO запехать что-то ненужное в LoginForm
  return (
    <Provider
      value={{
        login,
        setLogin,
        password,
        setPswd,
        token,
        setToken,
        role,
        setRole,
        getToken,
        getStudentProfile,
        getSupervisorProfile,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/profile/:role/" component={ProfileForm} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
