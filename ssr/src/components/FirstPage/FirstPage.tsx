import React from "react";

import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { useReposContext } from "@App/App";
import { Menu } from "antd";
import { Link } from "react-router-dom";
type Props = {
  children: React.ReactNode;
};
const FirstPage: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const repoContext = useReposContext();

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.SubMenu
          key="SubMenu"
          title="Navigation"
          icon={<SettingOutlined />}
        >
          <Menu.Item key="one" icon={<AppstoreOutlined />}>
            <Link to={`/login`}>Авторизация</Link>
          </Menu.Item>
          {repoContext.loginStore.response.token && (
            <Menu>
              <Menu.Item key="two" icon={<AppstoreOutlined />}>
                <Link to={`/profile`}>Мой профиль</Link>
              </Menu.Item>
              <Menu.Item key="three" icon={<AppstoreOutlined />}>
                <Link to={`/works`}>Мои работы</Link>
              </Menu.Item>
              <Menu.Item key="four" icon={<AppstoreOutlined />}>
                <Link to={`/bids`}>Мои заявки</Link>
              </Menu.Item>
            </Menu>
          )}
        </Menu.SubMenu>
      </Menu>
      {props.children}
      {!repoContext.loginStore.response.token && (
        <div>
          <h1>Приложение предназначено для преподавателей и студентов.</h1>
          <h2>Пройдите авторизацию перед началом!</h2>
        </div>
      )}
    </div>
  );
};
export default FirstPage;
