import React from "react";

import LastFmData from "../Common/lastfmAPI";

export const MainPage = props => {
  return (
    <div className="currently-listening-container">
      <LastFmData
        userName={props.userName}
        apiKey={process.env.REACT_APP_API_KEY}
      />
    </div>
  );
};

export default MainPage;
