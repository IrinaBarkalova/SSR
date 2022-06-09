import React from "react";

import "./ProfileFormStyles.css";
import { useReposContext } from "@App/App";
import StudentProfile from "@components/ProfileForm/StudentProfile";
import SupervisorProfile from "@components/ProfileForm/SupervisorProfile";
import { Meta } from "@utils/meta";
import { Alert } from "antd";

const ProfileForm: React.FC = () => {
  const repoContext = useReposContext();
  React.useEffect(() => {
    if (
      repoContext.loginStore.response.role &&
      repoContext.loginStore.response.token
    ) {
      repoContext.profileStore.getProfile({
        token: repoContext.loginStore.response.token,
        role: repoContext.loginStore.response.role,
      });
    }
  }, [repoContext]);
  return (
    <div className="ProfileForm__full">
      {repoContext.profileStore.meta === Meta.loading && (
        <Alert message="Loading..." type="info" />
      )}
      {repoContext.loginStore.response.role === "student" && (
        <StudentProfile student={repoContext.profileStore.response} />
      )}
      {repoContext.loginStore.response.role === "supervisor" && (
        <SupervisorProfile supervisor={repoContext.profileStore.response} />
      )}
    </div>
  );
};

export default ProfileForm;
