import React, { createContext, useContext } from "react";

import BidsForm from "@components/BidsForm";
import FirstPage from "@components/FirstPage";
import LoginForm from "@components/LoginForm";
import ProfileForm from "@components/ProfileForm";
import WorksForm from "@components/WorksForm";
import { getBids } from "@store/BidStore/BidStore";
import { postStudentBid } from "@store/BidStore/StudentBidStore";
import { getToken } from "@store/LoginStore/LoginStore";
import { getProfile } from "@store/ProfileStore/ProfileStore";
import { resolveBid } from "@store/ResolveBid/ResolveBid";
import { ssr } from "@store/SsrStore/SsrStore";
import { getSupervisorForWork } from "@store/WorksStore/SupervisorForWork";
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
  getBids: (
    token: string,
    student_id: number,
    role: string
  ) => Promise<ApiResp>;
  resolveBid: (
    bidId: number,
    accept: boolean,
    supervisorId: number,
    token: string
  ) => Promise<ApiResp>;
  getSupervisorForWork: (token: string, work_id: number) => Promise<ApiResp>;
  postStudentBid: (
    studentId: number,
    supervisorId: number,
    workId: number,
    token: string
  ) => Promise<ApiResp>;
  ssr: (bidId: number, studentId: number, token: string) => Promise<ApiResp>;
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
        getBids,
        resolveBid,
        getSupervisorForWork,
        postStudentBid,
        ssr,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <LoginForm key="one" />
          </Route>
          <FirstPage>
            <Route exact path="/profile">
              <ProfileForm key="two" />
            </Route>
            <Route exact path="/works">
              <WorksForm key="three" />
            </Route>
            <Route exact path="/bids">
              <BidsForm key="four" />
            </Route>
          </FirstPage>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
