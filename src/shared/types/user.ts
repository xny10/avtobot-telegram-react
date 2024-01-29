export type IUserMeta = {
  id: number;
  chatId: number;
  invitedBy: number | null;
  isRecievingActive: boolean;
  inviteLink: string;
  // ISO Date
  subscriptionEnds: string | null;
  supportLink: string;
  // ISO Date
  createdAt: string;
  // ISO Date
  updatedAt: string;
};
