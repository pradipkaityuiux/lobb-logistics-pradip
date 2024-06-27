import { createStore } from "vuex";
import { fetchDataAction } from "@/controllers/fetchAnimeData";

export default createStore({
  state: {
    data: null,
    error: null,
    loading: false,
    detailedViewOpen: false,
  },
  mutations: {
    // The complete Anime data is stored by setData
    setData(state, payload) {
      state.data = payload;
    },

    // If any occured during fetching, it will handle
    setError(state, payload) {
      state.error = payload;
    },

    // It will manipulate the current loading state
    setLoading(state, payload) {
      state.loading = payload;
    },

    // It will toggle to current active component
    setDetailedView(state, payload) {
      state.detailedViewOpen = payload;
    },
  },
  actions: {
    fetchDataAction, // It will Fetch the  Api from controllers
  },
});
