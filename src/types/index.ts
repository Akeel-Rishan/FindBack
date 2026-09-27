export enum ReportType {
  LOST = "LOST",
  FOUND = "FOUND",
}

export enum ClaimStatus {
  PENDING = "PENDING",
  VERIFIED = "VERIFIED",
  REJECTED = "REJECTED",
  COMPLETED = "COMPLETED",
}

export enum ReportStatus {
  OPEN = "OPEN",
  MATCHED = "MATCHED",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}

export interface User {
  id: string;
  email: string;
  fullName: string | null;
  avatarUrl: string | null;
  phone: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ItemReport {
  id: string;
  userId: string;
  type: ReportType;
  title: string;
  description: string;
  category: string;
  color: string | null;
  brand: string | null;
  locationName: string;
  district: string;
  latitude: number | null;
  longitude: number | null;
  occurredAt: string;
  status: ReportStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ItemImage {
  id: string;
  reportId: string;
  storagePath: string;
  altText: string | null;
  sortOrder: number;
  createdAt: string;
}

export interface PrivateItemDetails {
  id: string;
  reportId: string;
  distinguishingMarks: string | null;
  serialNumber: string | null;
  privateNotes: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Match {
  id: string;
  lostReportId: string;
  foundReportId: string;
  score: number;
  reasons: string[];
  createdAt: string;
}

export interface Claim {
  id: string;
  reportId: string;
  claimantId: string;
  status: ClaimStatus;
  proof: string;
  reviewedBy: string | null;
  reviewedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  claimId: string;
  senderId: string;
  body: string;
  readAt: string | null;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  body: string;
  href: string | null;
  readAt: string | null;
  createdAt: string;
}
