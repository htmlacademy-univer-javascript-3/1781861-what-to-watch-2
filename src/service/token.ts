const AUTH_TOKEN = 'what-to-watch';

export type Token = string;

export const getToken = (): Token => localStorage.getItem(AUTH_TOKEN) || '';

export const setToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN);
};
