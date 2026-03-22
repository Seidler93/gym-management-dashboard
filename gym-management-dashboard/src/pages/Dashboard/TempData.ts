export type DashboardMetricKey =
  | "netActiveMembers"
  | "yellowHolds"
  | "greenHolds"
  | "weeklyNet"
  | "signUps"
  | "vipSignUps"
  | "referralSignUps"
  | "currentTrials"
  | "reactivationSignUps"
  | "newCancellations"
  | "instagramPosts";

export type GoalType = ">=" | "<=" | "<" | ">";

export interface DashboardRowConfig {
  key: DashboardMetricKey;
  label: string;
  goalType: GoalType;
  goalValue: number;
}

export const dashboardRows: DashboardRowConfig[] = [
  {
    key: "netActiveMembers",
    label: "HP - Net Active Members",
    goalType: ">=",
    goalValue: 136,
  },
  {
    key: "yellowHolds",
    label: "HP - Total Yellow Holds",
    goalType: "<=",
    goalValue: 5,
  },
  {
    key: "greenHolds",
    label: "HP - Total Green Holds",
    goalType: "<=",
    goalValue: 8,
  },
  {
    key: "weeklyNet",
    label: "HP - Weekly Net",
    goalType: ">=",
    goalValue: 1,
  },
  {
    key: "signUps",
    label: "HP - Total Sign-Ups",
    goalType: ">=",
    goalValue: 1,
  },
  {
    key: "vipSignUps",
    label: "HP - VIP Sign-Ups",
    goalType: ">=",
    goalValue: 1,
  },
  {
    key: "referralSignUps",
    label: "HP - Referral Sign-Ups",
    goalType: ">=",
    goalValue: 1,
  },
  {
    key: "currentTrials",
    label: "HP - Current Trials",
    goalType: ">=",
    goalValue: 0,
  },
  {
    key: "reactivationSignUps",
    label: "HP - Reactivation Sign-Ups",
    goalType: ">=",
    goalValue: 1,
  },
  {
    key: "newCancellations",
    label: "HP - NEW Cancellations",
    goalType: "<",
    goalValue: 2,
  },
  {
    key: "instagramPosts",
    label: "HP - IG Posts",
    goalType: ">=",
    goalValue: 3,
  },
];

export interface DashboardWeek {
  id: string;
  startDate: string;
  endDate: string;
  values: Record<DashboardMetricKey, number | null>;
}

export const dashboardWeeks: DashboardWeek[] = [
  {
    id: "2026-03-16",
    startDate: "2026-03-16",
    endDate: "2026-03-22",
    values: {
      netActiveMembers: 131,
      yellowHolds: 2,
      greenHolds: 8,
      weeklyNet: 4,
      signUps: 3,
      vipSignUps: 3,
      referralSignUps: 0,
      currentTrials: 15,
      reactivationSignUps: 0,
      newCancellations: 0,
      instagramPosts: 3
    },
  },
  {
    id: "2026-03-23",
    startDate: "2026-03-23",
    endDate: "2026-03-29",
    values: {
      netActiveMembers: 134,
      yellowHolds: 3,
      greenHolds: 9,
      weeklyNet: 3,
      signUps: 4,
      vipSignUps: 2,
      referralSignUps: 1,
      currentTrials: 16,
      reactivationSignUps: 1,
      newCancellations: 1,
      instagramPosts: 3
    },
  },
  {
    id: "2026-03-30",
    startDate: "2026-03-30",
    endDate: "2026-04-05",
    values: {
      netActiveMembers: 137,
      yellowHolds: 2,
      greenHolds: 10,
      weeklyNet: 3,
      signUps: 5,
      vipSignUps: 3,
      referralSignUps: 1,
      currentTrials: 18,
      reactivationSignUps: 0,
      newCancellations: 2,
      instagramPosts: 3
    },
  },
  {
    id: "2026-04-06",
    startDate: "2026-04-06",
    endDate: "2026-04-12",
    values: {
      netActiveMembers: 136,
      yellowHolds: 1,
      greenHolds: 8,
      weeklyNet: -1,
      signUps: 2,
      vipSignUps: 1,
      referralSignUps: 0,
      currentTrials: 12,
      reactivationSignUps: 0,
      newCancellations: 3,
      instagramPosts: 3
    },
  },
  {
    id: "2026-04-13",
    startDate: "2026-04-13",
    endDate: "2026-04-19",
    values: {
      netActiveMembers: 139,
      yellowHolds: 2,
      greenHolds: 9,
      weeklyNet: 3,
      signUps: 6,
      vipSignUps: 3,
      referralSignUps: 1,
      currentTrials: 17,
      reactivationSignUps: 1,
      newCancellations: 3,
      instagramPosts: 3
    },
  },
  {
    id: "2026-04-20",
    startDate: "2026-04-20",
    endDate: "2026-04-26",
    values: {
      netActiveMembers: 141,
      yellowHolds: 2,
      greenHolds: 10,
      weeklyNet: 2,
      signUps: 4,
      vipSignUps: 2,
      referralSignUps: 1,
      currentTrials: 14,
      reactivationSignUps: 0,
      newCancellations: 2,
      instagramPosts: 3
    },
  },
  {
    id: "2026-04-27",
    startDate: "2026-04-27",
    endDate: "2026-05-03",
    values: {
      netActiveMembers: 144,
      yellowHolds: 3,
      greenHolds: 11,
      weeklyNet: 3,
      signUps: 5,
      vipSignUps: 3,
      referralSignUps: 1,
      currentTrials: 18,
      reactivationSignUps: 1,
      newCancellations: 2,
      instagramPosts: 3
    },
  },
  {
    id: "2026-05-04",
    startDate: "2026-05-04",
    endDate: "2026-05-10",
    values: {
      netActiveMembers: 146,
      yellowHolds: 2,
      greenHolds: 9,
      weeklyNet: 2,
      signUps: 3,
      vipSignUps: 2,
      referralSignUps: 0,
      currentTrials: 13,
      reactivationSignUps: 0,
      newCancellations: 1,
      instagramPosts: 3
    },
  },
  {
    id: "2026-05-11",
    startDate: "2026-05-11",
    endDate: "2026-05-17",
    values: {
      netActiveMembers: 150,
      yellowHolds: 3,
      greenHolds: 12,
      weeklyNet: 4,
      signUps: 6,
      vipSignUps: 4,
      referralSignUps: 2,
      currentTrials: 19,
      reactivationSignUps: 1,
      newCancellations: 2,
      instagramPosts: 3
    },
  },
  {
    id: "2026-05-18",
    startDate: "2026-05-18",
    endDate: "2026-05-24",
    values: {
      netActiveMembers: 152,
      yellowHolds: 2,
      greenHolds: 10,
      weeklyNet: 2,
      signUps: 4,
      vipSignUps: 2,
      referralSignUps: 1,
      currentTrials: 15,
      reactivationSignUps: 0,
      newCancellations: 2,
      instagramPosts: 3
    },
  },
];