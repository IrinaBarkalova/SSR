import React, { createContext, useContext } from "react";

import FirstPage from "@components/FirstPage";
import LoginForm from "@components/LoginForm";
import ProfileForm from "@components/ProfileForm";
import { getToken } from "@store/LoginStore/LoginStore";
import { getProfile } from "@store/ProfileStore/ProfileStore";
import { getWorks } from "@store/WorksStore/WorksStore";
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
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  getToken: (login: string, password: string) => Promise<ApiResp>;
  getProfile: (token: string, role: string) => Promise<ApiResp>;
  getWorks: (
    token: string,
    student_id: number,
    role: string
  ) => Promise<ApiResp>;
}
const ReposContext = createContext({} as ContextType);
export const useReposContext = () => useContext(ReposContext);

const Provider = ReposContext.Provider;
const App: React.FC = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPswd] = React.useState("");
  const [token, setToken] = React.useState("");
  const [role, setRole] = React.useState("");
  const [id, setId] = React.useState(0);
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
        id,
        setId,
        getToken,
        getProfile,
        getWorks,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <FirstPage>
              <ProfileForm />
            </FirstPage>
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
