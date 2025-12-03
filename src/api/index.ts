import type { Score, Game, User } from '../types';

const BASE_URL = 'https://breen-team-backend.vercel.app/api/';

export const getScoresByGameId = async (
  page: number,
  gameId: number
): Promise<{ scores: Score[]; page: number }> => {
  const response = await fetch(`${BASE_URL}games/${gameId}/scores?p=${page}`);
  return response.json();
};

export const getScoresByGameAndScoreId = async (
  gameId: number,
  scoreId: number
): Promise<{ scores: Score[]; page: number }> => {
  const response = await fetch(`${BASE_URL}games/${gameId}/scores/${scoreId}`);
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

export const getGames = async (): Promise<{ games: Game[]; page: number }> => {
  const response = await fetch(`${BASE_URL}games`);
  return response.json();
};

export const getUser = async (): Promise<{ user: User } | null> => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  const response = await fetch(`${BASE_URL}users/profile`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  });
  return response.json();
};
