export type WorkModel = {
  id: number;
  kind: string;
  description: string;
  subject: string;
  head?: boolean;
  is_started?: boolean;
};
export const normalizeWorkModel = (raw: WorkModel): WorkModel => ({
  id: raw.id,
  kind: raw.kind,
  description: raw.description,
  subject: raw.subject,
  head: raw.head,
  is_started: raw.is_started,
});
export type WorksRespModel = {
  works: WorkModel[];
};
export type WorksRespApiModel = {
  id: number;
  works: WorkModel[];
};
export const WorksInitialModel = {
  works: [],
};
export const normalizeWorksResp = (raw: WorksRespApiModel): WorksRespModel => ({
  works: raw.works.flatMap((w) => normalizeWorkModel(w)),
});
