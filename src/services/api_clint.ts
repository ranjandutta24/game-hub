import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fed14fccc67d4c669e6a91ed11e52ec5",
  },
});
