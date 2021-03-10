import React from "react";
import "./styles.scss";
import { useQuery } from "react-query";
import { getPlayerData } from "../../helpers/api";

const Search = ({ accountId }) => {
  const { isLoading, error, data } = useQuery(
    "accountData",
    () =>
      fetch(`https://api.opendota.com/api/players/${accountId}`).then((res) =>
        res.json()
      ),
    {
      cacheTime: 10000,
      refetchOnWindowFocus: false
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (data) {
    const {
      profile,
      solo_competitive_rank,
      mmr_estimate: { estimate }
    } = data;

    return (
      <div className="search">
        <div className="search__header">
          <h1>{profile.personaname}</h1>
          <span className="search__accountid">(#{accountId})</span>
          <span>{profile.loccountrycode}</span>
        </div>
        <img src={profile.avatarfull} alt="steam-avatar" />
        <ul className="search__list">
          {solo_competitive_rank && <li>Solo Rank: {solo_competitive_rank}</li>}
          {estimate && <li>MMR Estimate: {estimate}</li>}
        </ul>
      </div>
    );
  }
};

export default Search;
