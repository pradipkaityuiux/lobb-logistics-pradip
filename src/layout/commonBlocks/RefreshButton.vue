<template>
  <button
    @click="refreshData"
    :class="{ solid: type == 'solid' }"
    v-if="!loading"
  >
    Refresh
  </button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "RefreshButton",
  props: ["type"],
  components: {},
  setup() {
    const store = useStore();
    const loading = computed(() => store.state.loading);

    // Fetching the anime content and storing the data inside store
    function refreshData() {
      store.dispatch("fetchDataAction");
    }

    return {
      refreshData,
      loading,
    };
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 1.6rem;
  padding: 0.4rem 1.2rem;
  background-color: #c3c7ff;
  color: #1e28b8;
  border: none;
  margin-bottom: 0.4rem;
}
.solid {
  color: #c3c7ff;
  background-color: #1e28b8;
}
</style>
