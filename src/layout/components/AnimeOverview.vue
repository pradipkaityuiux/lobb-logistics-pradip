<template>
  <div>
    <HeaderComponent v-if="!error" />
    <ImageCard v-if="!error" />
  </div>
</template>

<script>
import HeaderComponent from "@/layout/commonBlocks/HeaderComponent.vue";
import ImageCard from "@/layout/commonBlocks/ImageCard.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "AnimeOverview",
  components: {
    HeaderComponent,
    ImageCard,
  },
  props: [],
  setup() {
    const store = useStore();
    const error = computed(() => store.state.error);
    return {
      error,
    };
  },
};
</script>

<style scoped></style>
