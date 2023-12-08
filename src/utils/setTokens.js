import { tokenAuth } from "../axios/auth";
import { tokenWater } from "../axios/water";
import { tokenUser } from "../axios/userData";

const setTokens = (token) => {
  // set token in request headers in all instances
  [tokenAuth, tokenWater, tokenUser].map((cb) => cb(token));
};

export default setTokens;
