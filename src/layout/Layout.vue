<template>
  <div class="layout" :class="{ hasPadding: !detailedViewOpen }">
    <transition>
      <AnimeOverview v-if="!detailedViewOpen && !error" />
    </transition>
    <transition>
      <ExpandedAnimeDetails v-if="detailedViewOpen && !error" />
    </transition>
    <div v-if="error" class="error__message">{{ error }}</div>
    <RefreshButton v-if="error" />
  </div>
</template>

<script>
import ExpandedAnimeDetails from "@/layout/components/ExpandedAnimeDetails.vue";
import AnimeOverview from "@/layout/components/AnimeOverview.vue";
import RefreshButton from "@/layout/commonBlocks/RefreshButton.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "LayoutView",
  components: {
    ExpandedAnimeDetails,
    AnimeOverview,
    RefreshButton,
  },
  setup() {
    const store = useStore();
    // Geting the current state of detailedViewOpen to show the right component
    const detailedViewOpen = computed(() => store.state.detailedViewOpen);
    const error = computed(() => store.state.error);

    const fetchData = () => {
      store.dispatch("fetchDataAction");
    };

    // Fetching the Anime content as soon as App Mounts
    onMounted(() => {
      fetchData();
    });

    return {
      detailedViewOpen,
      error,
    };
  },
};
</script>
<style scoped>
.layout {
  position: relative;
  background-color: #fff;
  border-radius: 1.2rem;
  max-width: 32rem;
  width: 100%;
  height: 95vh;
  margin: 0 auto;
  overflow-y: auto;
}
.layout::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.close__icon {
  position: sticky;
  top: 1.6rem;
  right: 1.6rem;
  width: 2.8rem;
  height: auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
}
.hasPadding {
  padding: 1.2rem;
}
@media screen and (max-width: 430px) {
  .layout {
    max-width: unset;
    width: 100%;
    height: 100vh;
  }
}
.v-enter-active,
.v-leave-active {
  transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1),
    opacity 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100%);
  opacity: 0;
  z-index: 10;
}
.error__message {
  background-color: #f03636;
  color: #fff;
  padding: 1.2rem 2rem;
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
}
</style>
