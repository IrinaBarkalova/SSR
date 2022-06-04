import React from "react";

import "./LoginFormStyles.css";
import { useReposContext } from "@App/App";
import { Link } from "react-router-dom";

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
        repoContext.setToken(result.data.token);
        repoContext.setRole(result.data.role);
      });
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
      <Link to={`/`}>
        <button onClick={handleClick}>Submit</button>
      </Link>
    </div>
  );
};

export default LoginForm;
