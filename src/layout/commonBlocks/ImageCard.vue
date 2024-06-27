<template>
  <div class="image__card-all" :class="{ noMargin: detailedViewOpen }">
    <Loader v-if="loading" image="true" />
    <!-- Clicking the image will open the ExpandedAnimeDetails component -->
    <img
      :src="data?.content.thumbNailImage"
      alt="anime main image"
      draggable="false"
      @click="setDetailedViewOpen()"
      v-if="!loading && data && data.content.thumbNailImage"
    />
    <div class="float__message" v-if="detailedViewOpen">
      <small>MAJOR UPDATE</small>
      <h2>Only I Can CallMy Dream Stupid!</h2>
    </div>
    <div class="card__content-all">
      <div class="card__logo-left">
        <div class="image__wrapper">
          <img
            :src="data?.content.logo"
            alt="card-logo"
            draggable="false"
            v-if="!loading && data && data.content.logo"
          />
          <Loader v-if="loading" logo="true" />
        </div>
        <div class="card__title-subtitle">
          <h2 v-if="!loading && data && data.content.title">
            {{ data?.content.title }}
          </h2>
          <Loader v-if="loading" title="true" />
          <p v-if="!loading && data && data.content.subTitle">
            {{ data?.content.subTitle }}
          </p>
          <Loader v-if="loading" subTitle="true" />
        </div>
      </div>
      <div class="card__content-right" v-if="!loading">
        <RefreshButton />
        <small v-show="!loading">In-app purchase</small>
      </div>
    </div>
  </div>
</template>

<script>
import RefreshButton from "@/layout/commonBlocks/RefreshButton.vue";
import Loader from "@/layout/commonBlocks/Loader.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "ImageCard",
  components: {
    RefreshButton,
    Loader,
  },
  setup() {
    const store = useStore();
    // Getting the data, error and loading states from the store
    const data = computed(() => store.state.data);
    const error = computed(() => store.state.error);
    const loading = computed(() => store.state.loading);
    const detailedViewOpen = computed(() => store.state.detailedViewOpen);

    // Commiting to update the store and hide the  AnimeOverView component and show the ExpandedAnimeDetails
    function setDetailedViewOpen() {
      if (detailedViewOpen.value) {
        return;
      }
      const newValue = !store.state.detailedViewOpen;
      store.commit("setDetailedView", newValue);
    }

    return {
      data,
      error,
      loading,
      detailedViewOpen,
      setDetailedViewOpen,
    };
  },
};
</script>

<style scoped>
.image__card-all {
  position: relative;
  margin-top: 1.2rem;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1.2rem;
}
.float__message {
  position: absolute;
  top: 2.2rem;
  left: 1.2rem;
}
.float__message small {
  color: #fff;
  font-size: 1.4rem;
}
.float__message h2 {
  color: #fff;
  font-size: 2.4rem;
  margin-top: 0.8rem;
}

.noMargin {
  border-radius: 0;
  margin-top: 0;
}

.image__card-all img {
  width: 100%;
  height: auto;
}

.card__content-all {
  padding: 1.2rem;
  display: flex;
  align-items: top;
  justify-content: space-between;
}

.card__logo-left {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.image__wrapper {
  width: 5.8rem;
  height: 4.8rem;
  display: flex;
  border-radius: 0.8rem;
  overflow: hidden;
}

.image__wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.card__title-subtitle h2 {
  font-size: 1.4rem;
}

.card__content-right {
  margin-left: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
@media screen and (max-width: 380px) {
  .card__content-all {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  .card__content-right {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
