export type IUserMeta = {
  activeFiltersCount: boolean;
  id: number;
  chatId: number;
  invitedBy: number | null;
  isReceivingActive: boolean;
  inviteLink: string;
  // ISO Date
  subscription: boolean;
  subscriptionEnds: string | null;
  supportLink: string;
  // ISO Date
  createdAt: string;
  // ISO Date
  updatedAt: string;
};
