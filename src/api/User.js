import axios from "axios";
import { LOGIN_SERVICE_URI } from "./constants";

const logUserIn = async ({ username, password }) => {
  const { data } = await axios.post(
    `${LOGIN_SERVICE_URI}/login`,
    { username, password },
    { withCredentials: true }
  );
  return data;
};

const signUserUp = async ({
  username,
  email,
  password,
  country,
  displayName,
}) => {
  const { data } = await axios.post(
    `${LOGIN_SERVICE_URI}/register`,
    { username, email, password, country, displayName },
    { withCredentials: true }
  );
  return data;
};

const getAccessToken = async () => {
  try {
    const { data } = await axios.post(
      `${LOGIN_SERVICE_URI}/token`,
      {},
      { withCredentials: true }
    );
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getUserDetails = async () => {
  const { data } = await axios.post(
    `${LOGIN_SERVICE_URI}/user`,
    {},
    { withCredentials: true }
  );
  return data;
};

const logUserOut = async () => {
  const { data } = await axios.post(
    `${LOGIN_SERVICE_URI}/logout`,
    {},
    { withCredentials: true }
  );
  return data;
};
export { logUserIn, getAccessToken, getUserDetails, logUserOut, signUserUp };
