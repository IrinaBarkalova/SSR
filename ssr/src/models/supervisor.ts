export type SupervisorModel = {
  supervisorID: number;
  email: string;
  firstName: string;
  lastName: string;
  about: string;
  birthdate: string;
  avatarUrl?: string;
  department: string;
  head: boolean;
  full: boolean;
};
export const normalizeSupervisorModel = (
  raw: SupervisorModel
): SupervisorModel => ({
  supervisorID: raw.supervisorID,
  email: raw.email,
  firstName: raw.firstName,
  lastName: raw.lastName,
  about: raw.about,
  birthdate: raw.birthdate,
  avatarUrl: raw.avatarUrl,
  department: raw.department,
  head: raw.head,
  full: raw.full,
});
export type WorksSupervisorRespModel = {
  supervisors: SupervisorModel[];
};
export type WorksSupervisorRespApiModel = {
  workID: number;
  supervisors: SupervisorModel[];
};
export const WorksInitialModel = {
  supervisors: [],
};
export const normalizeSypervisorForWorksResp = (
  raw: WorksSupervisorRespApiModel
): WorksSupervisorRespModel => ({
  supervisors: raw.supervisors.flatMap((s) => normalizeSupervisorModel(s)),
});
