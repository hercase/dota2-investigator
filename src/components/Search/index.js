import React from "react";
import "./styles.scss";
import { useQuery } from "react-query";

const Search = ({ accountId }) => {
  const { isLoading, error, data } = useQuery("accountData", () =>
    fetch(`https://api.opendota.com/api/players/${accountId}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="search">
      <div className="search__header">
        <h1>{data?.profile?.personaname}</h1>
        <span className="search__accountid">(#{accountId})</span>
      </div>
      <img src={data?.profile?.avatarfull} alt="steam-avatar" />
    </div>
  );
};

export default Search;
