import React from "react";

import LastFmData from "../Common/lastfmAPI";
import { API } from "../Static/api.json";

export const MainPage = props => {
  return (
    <div>
      <LastFmData userName={props.userName} apiKey={API.apiKey} />
    </div>
  );
};

export default MainPage;
