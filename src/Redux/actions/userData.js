import { sendRequest } from "../NetworkOperations/networkOperations";
export function userDataAction(value) {
  return function(dispatch) {
    dispatch({
      type: "GET_USER_DATA",
      userData: value
    });
    let queryStringParams = {
      method: "user.getinfo",
      user: "Orleanth",
      api_key: process.env.REACT_APP_API_KEY,
      format: "json"
    };
    sendRequest(
      "http://ws.audioscrobbler.com/2.0/",
      "GET",
      null,
      null,
      queryStringParams,
      dispatch
    );
  };
}
