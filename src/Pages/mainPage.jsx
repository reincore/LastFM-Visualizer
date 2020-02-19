import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { userDataAction } from "../Redux/actions/userData";
import LastFmData from "../Common/lastfmAPI";
// import UserInfoAPI from "../Common/UserInfoAPI";

export const MainPage = props => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const userInfo = useSelector(state => state.userInfo);
  const country =
    userInfo &&
    userInfo.userData &&
    userInfo.userData.data &&
    userInfo.userData.data.user &&
    userInfo.userData.data.user.country;
  const dispatch = useDispatch();
  const userData = bindActionCreators(userDataAction, dispatch);

  return (
    <div className="currently-listening-container">
      <LastFmData userName={props.userName} apiKey={apiKey} />
      <button
        className="fetch-button"
        onClick={() => userData(userInfo.userData)}
      >
        Fetch!
      </button>
      {/* <UserInfoAPI userName={props.userName} apiKey={apiKey} /> */}
      <span className="user-origin-container">
        {country ? "User is from: " + country : ""}
      </span>
    </div>
  );
};

export default MainPage;
