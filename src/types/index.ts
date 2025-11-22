export type Score = {
  score_id: number;
  username: string;
  score: number;
};

export type MinesweeperCellData = {
  x: number;
  y: number;
  hidden: boolean;
};
