export type UserLoginModel = {
  login: string;
  password: string;
};
export type UserLoginRespModel = {
  email: string;
  role: string;
  token: string;
};
export type StudentProfileModel = {
  avatarUrl?: string;
  department: string;
  email: string;
  firstName: string;
  lastName: string;
  studentCard: string;
  studentID: number;
  year: number;
};

export const StudentProfileInitialModel = {
  avatarUrl: "",
  department: "",
  email: "",
  firstName: "",
  lastName: "",
  studentCard: "",
  studentID: 0,
  year: 0,
};
export type SupervisorProfileModel = {
  about: string;
  avatarUrl?: string;
  birthdate: string;
  department: string;
  email: string;
  firstName: string;
  lastName: string;
  supervisorID: number;
};
export const SupervisorProfileInitialModel = {
  about: "",
  avatarUrl: "",
  birthdate: "",
  department: "",
  email: "",
  firstName: "",
  lastName: "",
  supervisorID: 0,
};
