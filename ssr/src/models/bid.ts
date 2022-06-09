import { normalizeProfile, ProfileModel } from "@mobxStore/ProfileStore/types";

export type SubjectWorkModel = {
  department: string;
  name: string;
  subjectID: number;
};
export const normSubj = (raw: SubjectWorkModel): SubjectWorkModel => ({
  department: raw.department,
  name: raw.name,
  subjectID: raw.subjectID,
});
export type BidWorkModel = {
  description: string;
  id: number;
  name: string;
  semester: number;
  subject: SubjectWorkModel;
};
export const normWork = (raw: BidWorkModel): BidWorkModel => ({
  description: raw.description,
  id: raw.id,
  name: raw.name,
  semester: raw.semester,
  subject: normSubj(raw.subject),
});

export type StudentBidModel = {
  id: number;
  status: string;
  createdAt: string;
  supervisor: ProfileModel;
  work: BidWorkModel;
};
export const normalizeStudentBid = (raw: StudentBidModel): StudentBidModel => ({
  id: raw.id,
  status: raw.status,
  createdAt: raw.createdAt,
  supervisor: normalizeProfile(raw.supervisor),
  work: normWork(raw.work),
});

export type SupervisorBidModel = {
  id: number;
  status: string;
  createdAt: string;
  student: ProfileModel;
  work: BidWorkModel;
};
export const normalizeSupervisorBid = (
  raw: SupervisorBidModel
): SupervisorBidModel => ({
  id: raw.id,
  status: raw.status,
  createdAt: raw.createdAt,
  student: normalizeProfile(raw.student),
  work: normWork(raw.work),
});

export type StudentBidsApiModel = {
  bids: StudentBidModel[];
};
export const normalizeStudentBidsResp = (
  raw: StudentBidsApiModel
): StudentBidsApiModel => ({
  bids: raw.bids.flatMap((b) => normalizeStudentBid(b)),
});

export type SupervisorBidsModel = {
  bids: SupervisorBidModel[];
};
export const normalizeSupervisorBidsResp = (
  raw: SupervisorBidsModel
): SupervisorBidsModel => ({
  bids: raw.bids.flatMap((b) => normalizeSupervisorBid(b)),
});
export const InitialBids = {
  bids: [],
};
