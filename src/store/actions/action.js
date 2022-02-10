export const FETCH_TOP_MUSIC = 'FETCH_TOP_MUSIC';

export function fetchTopMusic(payload) {
  return {
    type: FETCH_TOP_MUSIC,
    payload
  };
}