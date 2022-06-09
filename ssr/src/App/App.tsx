import React, { createContext, useContext } from "react";

import BidsForm from "@components/BidsForm";
import FirstPage from "@components/FirstPage";
import LoginForm from "@components/LoginForm";
import ProfileForm from "@components/ProfileForm";
import WorksForm from "@components/WorksForm";
import LoginStore from "@mobxStore/LoginStore/LoginStore";
import ProfileStore from "@mobxStore/ProfileStore/ProfileStore";
import { useLocalStore } from "@mobxStore/useLocalStore";
import { getBids } from "@store/BidStore/BidStore";
import { postStudentBid } from "@store/BidStore/StudentBidStore";
import { resolveBid } from "@store/ResolveBid/ResolveBid";
import { ssr } from "@store/SsrStore/SsrStore";
import { getSupervisorForWork } from "@store/WorksStore/SupervisorForWork";
import { getWorks } from "@store/WorksStore/WorksStore";
import { ApiResp } from "@utils/apiTypes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
interface ContextType {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
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
  loginStore: LoginStore;
  profileStore: ProfileStore;
}
const ReposContext = createContext({} as ContextType);
export const useReposContext = () => useContext(ReposContext);

const Provider = ReposContext.Provider;
const App: React.FC = () => {
  const loginStore = useLocalStore(() => new LoginStore());
  const profileStore = useLocalStore(() => new ProfileStore());
  const [id, setId] = React.useState(0);
  return (
    <Provider
      value={{
        id,
        setId,
        getWorks,
        getBids,
        resolveBid,
        getSupervisorForWork,
        postStudentBid,
        ssr,
        loginStore,
        profileStore,
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
