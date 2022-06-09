import React from "react";

import "./LoginFormStyles.css";
import { useReposContext } from "@App/App";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  const repoContext = useReposContext();
  const handleClick = React.useCallback(() => {
    if (repoContext.loginStore.login && repoContext.loginStore.password) {
      repoContext.loginStore.getToken({
        login: repoContext.loginStore.login,
        password: repoContext.loginStore.password,
      });
    }
    // eslint-disable-next-line no-console
    console.log(repoContext.loginStore.response.token, "TOKEN");
  }, [repoContext]);
  return (
    <div className="LoginForm">
      login:{" "}
      <input
        defaultValue={repoContext.loginStore.login}
        onChange={repoContext.loginStore.handleChangeLogin}
      />
      <br />
      password:{" "}
      <input
        type="password"
        defaultValue={repoContext.loginStore.password}
        onChange={repoContext.loginStore.handleChangePassword}
      />
      <br />
      <Link to={`/profile`}>
        <button onClick={handleClick}>Submit</button>
      </Link>
    </div>
  );
};

export default React.memo(LoginForm);
