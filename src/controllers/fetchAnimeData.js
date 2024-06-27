import axios from "axios";

const API_CONTENT_ENDPOINT =
  "https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.cHJhZGlwZm9yb2ZmaWNpYWxnbWFpbC5jb20.SA_wQumynTaNIQaktl32AWk0YIeFu3tiHABmtlvF0vU";

export async function fetchDataAction({ commit }) {
  // Setting the loading state as true to show the skeleton view
  commit("setData", null);
  commit("setLoading", true);
  try {
    // Fetch the anime content using the token
    const response = await axios.get(API_CONTENT_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    commit("setData", response.data);
    commit("setError", null);
  } catch (error) {
    commit("setError", error.message);
  } finally {
    commit("setLoading", false);
  }
}
