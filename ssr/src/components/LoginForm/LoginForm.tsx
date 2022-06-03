import React from "react";

import "./LoginFormStyles.css";
import { useReposContext } from "@App/App";

const LoginForm: React.FC = () => {
  const repoContext = useReposContext();
  const onChangeLogin = React.useCallback(
    (event) => {
      repoContext.setLogin(event.target.value);
    },
    [repoContext]
  );
  const onChangePswd = React.useCallback(
    (event) => {
      repoContext.setPswd(event.target.value);
    },
    [repoContext]
  );
  const handleClick = React.useCallback(() => {
    repoContext
      .getToken(repoContext.login, repoContext.password)
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result.data, "RES");
      });
    // eslint-disable-next-line no-console
    // console.log(repoContext.login, "login");
  }, [repoContext]);
  return (
    <div className="LoginForm">
      login: <input value={repoContext.login} onChange={onChangeLogin} />
      <br />
      passw:{" "}
      <input
        type="password"
        value={repoContext.password}
        onChange={onChangePswd}
      />
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default LoginForm;
