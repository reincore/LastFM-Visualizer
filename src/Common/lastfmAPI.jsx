import React, { useState, useEffect } from "react";

export const LastFmData = ({ userName, apiKey }) => {
  const [lfmData, updateLfmData] = useState({});

  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error");
      })
      .then(data => updateLfmData(data))
      .catch(() =>
        updateLfmData({ error: "Whoops! Something went wrong with Last.fm" })
      );
  }, [apiKey, userName]);

  const buildLastFmData = () => {
    const { error } = lfmData;
    const track = lfmData?.recenttracks?.track;

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

  return buildLastFmData();
};

export default LastFmData;
