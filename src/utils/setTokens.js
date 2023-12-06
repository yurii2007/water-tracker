import { tokenAuth } from "../axios/auth";
import { tokenWater } from "../axios/water";
import { tokenUser } from "../axios/userData";

const setTokens = (token) => {
  [tokenAuth, tokenWater, tokenUser].map((cb) => cb(token));
};

export default setTokens;
