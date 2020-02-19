import React, { useState, useEffect } from "react";

export const CountryCharts = ({ userName, apiKey }) => {
  const [countryChartData, updateCountryChartData] = useState({});

  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryName}user=${userName}&api_key=${apiKey}&format=json`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error");
      })
      .then(data => updateCountryChartData(data))
      .catch(() =>
        updateCountryChartData({
          error: "Whoops! Something went wrong with Last.fm"
        })
      );
  }, [apiKey, userName]);

  const buildCountryCharts = () => {
    const { error } = countryChartData;
    const track = countryChartData?.recenttracks?.track;

    if (error) {
      return <p>{error}</p>;
    }

    if (!track) {
      return (
        <p className="currently-listening-component loading">Loading...</p>
      );
    }

    const [
      { name: songName, artist: { "#text": artistName } = {} } = {}
    ] = track;

    return (
      <div className="currently-listening-component">
        '<a href={`http://www.last.fm/user/${userName}`}>{userName}</a>' is
        currently listening to:{" "}
        <span className="emphasis-name song">{songName}</span> by{" "}
        <span className="emphasis-name artist">{artistName}</span>
      </div>
    );
  };

  return buildCountryCharts();
};

export default CountryCharts;
