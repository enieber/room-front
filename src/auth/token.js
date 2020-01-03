const generateHash = () =>
  Math.random()
    .toString(36)
    .substr(2);

const nameToken = "rs-token";

export const generateToken = () => `${generateHash()}${generateHash()}`;
export const getToken = () => localStorage.getItem(nameToken);
export const saveToken = token => localStorage.setItem(nameToken, token);
export const removeToken = () => localStorage.removeItem(nameToken);
