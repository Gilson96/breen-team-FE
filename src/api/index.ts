import type { Score } from '../types';

const BASE_URL = 'https://breen-team-backend.vercel.app/api/';

export const getScores = async (): Promise<{ scores: Score[] }> => {
  const response = await fetch(`${BASE_URL}games/1/scores`);
  return response.json();
};

export const submitScore = async (
  gameId: number,
  username: string,
  score: number
): Promise<{ scores: Score }> => {
  const response = await fetch(`${BASE_URL}games/${gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, score })
  });
  return response.json();
};
