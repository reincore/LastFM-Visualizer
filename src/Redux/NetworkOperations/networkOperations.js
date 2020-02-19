import axios from "axios";

export const sendRequest = (
  path,
  method,
  dataObject,
  headerObject,
  queryStringParams,
  dispatch
) => {
  return new Promise(reject => {
    axios({
      url: path,
      method: method,
      data: dataObject,
      headers: headerObject,
      params: queryStringParams
    })
      .then(data =>
        dispatch({
          type: "GET_USER_DATA",
          userData: data
        })
      )
      .catch(error => reject(error.response));
  });
};
