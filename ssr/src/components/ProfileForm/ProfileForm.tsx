import React from "react";

import "./ProfileFormStyles.css";
import { useReposContext } from "@App/App";
import StudentProfile from "@components/ProfileForm/StudentProfile";
import SupervisorProfile from "@components/ProfileForm/SupervisorProfile";

const ProfileForm: React.FC = () => {
  const repoContext = useReposContext();

  return (
    <div className="ProfileForm__full">
      <h2>Привет)</h2>
      {repoContext.role === "student" && <StudentProfile />}
      {repoContext.role === "supervisor" && <SupervisorProfile />}
    </div>
  );
};

export default ProfileForm;
