export const difficulties = ['easy', 'medium', 'hard'] as const;
export type Difficulty = (typeof difficulties)[number];
export type Grid = number[][];
export type CellNotes = Set<number>;
export type Notes = { [cell: string]: CellNotes };
export type HistoryEntry = {
  grid: Grid;
  notes: Notes;
};
export type LeaderboardEntry = {
  seed: string;
  difficulty: Difficulty;
  score: string;
  hints: boolean[];
  date: string;
};
