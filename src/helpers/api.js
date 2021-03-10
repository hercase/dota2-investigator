export const getPlayerData = (accountId) => {
  return fetch(
    `https://api.opendota.com/api/players/${accountId}`
  ).then((res) => res.json());
};
