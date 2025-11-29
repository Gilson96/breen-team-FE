import type { Score } from '../types';

const BASE_URL = 'https://breen-team-backend.vercel.app/api/';

export const getScores = async (page: number): Promise<{ scores: Score[]; page: number }> => {
  const response = await fetch(`${BASE_URL}games/1/scores?p=${page}`);
  return response.json();
};

export const submitScore = async (
  gameId: number,
  username: string,
  score: number
): Promise<{ score: Score }> => {
  const response = await fetch(`${BASE_URL}games/${gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, score })
  });
  return response.json();
};
