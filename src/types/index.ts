export type Score = {
  score_id: number;
  score: number;
  user_id: number;
  username: string;
  game_id: string;
  created_on: string;
  rank?: number;
};

export type DebuggerCellData = {
  id: number;
  x: number;
  y: number;
  show: boolean;
  bug: boolean;
  proximity: number;
  flag: boolean;
};

export type CardProps = {
  id?: number;
  src?: string;
  card?: CardProps;
  matched?: boolean;
  flipped?: boolean;
  disabled?: boolean;
  handleFlip?: (card: CardProps) => void;
  playGame?: boolean;
};

export type Game = {
  game_id: number;
  name: string;
};
