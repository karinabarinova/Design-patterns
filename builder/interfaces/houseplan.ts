export interface HousePlan {
  basement: string | null;
  walls: {
    type: string | null;
    painted: boolean;
  };
  roof: string | null;
  carpet: string | null;
  windows: string | null;
  fence: string | null;
}
