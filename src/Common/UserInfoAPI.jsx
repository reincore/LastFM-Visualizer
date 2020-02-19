import React, { useState, useEffect } from "react";

export const UserInfo = ({ userName, apiKey }) => {
  const [userInfoData, updateUserInfoData] = useState({});

  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${userName}&api_key=${apiKey}&format=json`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error");
      })
      .then(data => updateUserInfoData(data))
      .catch(() =>
        updateUserInfoData({
          error: "Whoops! Something went wrong with Last.fm"
        })
      );
  }, [apiKey, userName]);

  const buildUserInfo = () => {
    const { error } = userInfoData;
    const userCountry =
      userInfoData && userInfoData.user && userInfoData.user.country;

    if (error) {
      return <p>{error}</p>;
    }

    if (!userCountry) {
      return <p className="user-country-component loading">Loading...</p>;
    }

    return (
      <div className="user-country-component">
        '<a href={`http://www.last.fm/user/${userName}`}>{userName}</a>' is is
        from:{" "}
        <div className="user-country">
          {"User is from: " + (userCountry ? userCountry : "")}
        </div>
      </div>
    );
  };

  return buildUserInfo();
};

export default UserInfo;
