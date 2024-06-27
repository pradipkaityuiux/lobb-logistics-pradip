<template>
  <div class="footer__wrapper">
    <div class="footer__top-content">
      <div class="image__wrapper">
        <img
          :src="data?.content.logo"
          alt="card-logo"
          draggable="false"
          class="footer__logo"
        />
      </div>
      <h2>{{ data?.content.title }}</h2>
      <p>{{ data?.content.subTitle }}</p>
      <RefreshButton type="solid" />
      <!-- Passing the "solid" prop to style differently -->
      <small>In-APP Purchase</small>
    </div>
    <div class="footer__bottom-content">
      <button class="share__button">
        <img src="@/assets/uploadIcon.png" alt="upload-icon" /> Share Story
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import RefreshButton from "@/layout/commonBlocks/RefreshButton.vue";
export default {
  name: "FooterComponent",
  components: {
    RefreshButton,
  },
  setup() {
    const store = useStore();
    const data = computed(() => store.state.data);

    return {
      data,
    };
  },
};
</script>

<style scoped>
.footer__wrapper {
  text-align: center;
}

.footer__top-content {
  padding: 1.2rem;
  background-color: #e7e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

.footer__bottom-content {
  background-color: #f5f5f5;
  padding: 2rem;
}

.image__wrapper {
  width: 4.8rem;
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

.share__button {
  font-size: 1.4rem;
  border: none;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 3.2rem;
  margin: 0 auto;
  background-color: #c3c7ff;
  color: #1e28b8;
}

.share__button img {
  width: 1.8rem;
  height: auto;
}
</style>
