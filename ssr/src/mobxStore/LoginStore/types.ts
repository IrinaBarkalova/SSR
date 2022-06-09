export type GetTokenParams = {
  login: string;
  password: string;
};
export type UserLoginRespModel = {
  email: string;
  role: string;
  token: string;
};
export const normalizeUserLoginRespModel = (
  raw: UserLoginRespModel
): UserLoginRespModel => ({
  email: raw.email,
  role: raw.role,
  token: raw.token,
});
export interface ILoginStore {
  getToken(params: GetTokenParams): Promise<void>;
}
