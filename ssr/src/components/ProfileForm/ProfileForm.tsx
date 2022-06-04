import React from "react";

import "./ProfileFormStyles.css";
import StudentProfile from "@components/ProfileForm/StudentProfile";
import SupervisorProfile from "@components/ProfileForm/SupervisorProfile";
import { useParams } from "react-router-dom";

const ProfileForm: React.FC = () => {
  const { role } = useParams<{ role: string }>();
  return (
    <div className="ProfileForm__full">
      <h2>Привет!</h2>
      {role === "student" && <StudentProfile role={role} />}
      {role === "supervisor" && <SupervisorProfile role={role} />}
    </div>
  );
};

export default ProfileForm;
