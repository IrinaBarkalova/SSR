import React from "react";

import "./ProfileFormStyles.css";
import { useReposContext } from "@App/App";
import StudentProfile from "@components/ProfileForm/StudentProfile";
import SupervisorProfile from "@components/ProfileForm/SupervisorProfile";
import { ProfileInitialModel, ProfileModel } from "@models/user";

const ProfileForm: React.FC = () => {
  const repoContext = useReposContext();
  const [profile, setProfile] =
    React.useState<ProfileModel>(ProfileInitialModel);
  React.useEffect(() => {
    if (repoContext.role && repoContext.token) {
      repoContext.getProfile(repoContext.token, repoContext.role).then((r) => {
        setProfile(r.data);

        repoContext.setId(r.data.studentID || r.data.supervisorID);
      });
    }
  }, [repoContext]);
  return (
    <div className="ProfileForm__full">
      {repoContext.role === "student" && <StudentProfile student={profile} />}
      {repoContext.role === "supervisor" && (
        <SupervisorProfile supervisor={profile} />
      )}
    </div>
  );
};

export default ProfileForm;
