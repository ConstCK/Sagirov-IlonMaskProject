import axios from "axios";
import { BASE_URL, PROFITS_URL } from "../utils/constants";

const getProfits = async (setter) => {
  return await axios({
    baseURL: BASE_URL,
    url: PROFITS_URL,
    method: "get",
  })
    .then((response) => {
      console.log(response.data);
      setter(response.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getProfits };
