export type UserLoginModel = {
  login: string;
  password: string;
};
export type UserLoginRespModel = {
  email: string;
  role: string;
  token: string;
};

export const ProfileInitialModel = {
  avatarUrl: "",
  department: "",
  email: "",
  firstName: "",
  lastName: "",
  studentCard: "",
  studentID: 0,
  year: 0,
  about: "",
  birthdate: "",
  supervisorID: 0,
};

export type ProfileModel = {
  avatarUrl?: string;
  department: string;
  email: string;
  firstName: string;
  lastName: string;
  about?: string;
  birthdate?: string;
  supervisorID?: number;
  studentCard?: string;
  studentID?: number;
  year?: number;
};
export const normalizeProfile = (raw: ProfileModel): ProfileModel => ({
  avatarUrl: raw.avatarUrl,
  department: raw.department,
  email: raw.email,
  firstName: raw.firstName,
  lastName: raw.lastName,
  about: raw.about,
  birthdate: raw.birthdate,
  supervisorID: raw.supervisorID,
  studentCard: raw.studentCard,
  studentID: raw.studentID,
  year: raw.year,
});
