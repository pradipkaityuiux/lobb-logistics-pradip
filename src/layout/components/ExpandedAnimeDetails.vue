<template>
  <div class="expanded">
    <div class="float__icon-wrapper">
      <img
        class="close__icon"
        src="@/assets/closeIcon.png"
        alt=""
        v-if="detailedViewOpen"
        @click="closeExpandedView()"
      />
    </div>
    <ImageCard />
    <div
      v-html="processedText"
      class="processed__text-withImage"
      v-if="!loading"
    ></div>
    <FooterComponent v-if="!loading" />
  </div>
</template>

<script>
import { computed } from "vue";
import ImageCard from "@/layout/commonBlocks/ImageCard.vue";
import FooterComponent from "@/layout/commonBlocks/FooterComponent.vue";
import { useStore } from "vuex";
export default {
  name: "ExpandedAnimeDetails",
  components: {
    ImageCard,
    FooterComponent,
  },
  setup() {
    const store = useStore();
    // Getting the Anime Content, detailedViewOpen and loading state from the Store
    const data = computed(() => store.state.data);
    const detailedViewOpen = computed(() => store.state.detailedViewOpen);
    const loading = computed(() => store.state.loading);

    // Formatting the correct content to render.
    const processedText = computed(() => {
      if (!data.value || !data.value.content || !data.value.content.text) {
        return "";
      }
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.value.content.text, "text/html");
      const paragraphs = doc.querySelectorAll("p");
      // Extracting all the paragraph tags from above.

      if (paragraphs.length > 2) {
        const img = document.createElement("img");
        img.src = data.value.content.mainImage;
        img.alt = "Main Image";
        img.style.cssText =
          "width: 100%; height: auto; margin-block: 0.8rem; border-radius: 1.2rem;";
        paragraphs[0].parentNode.insertBefore(img, paragraphs[3]);
        // Keeping 3 paragraphs above the Image and one paragraph below.
      }
      return doc.body.innerHTML;
    });

    function closeExpandedView() {
      const newValue = !store.state.detailedViewOpen;
      // Reversing the current state of detailedViewOpen
      store.commit("setDetailedView", newValue);
    }

    return {
      data,
      detailedViewOpen,
      processedText,
      closeExpandedView,
      loading,
    };
  },
};
</script>

<style scoped>
.expanded {
  position: relative;
}
.float__icon-wrapper {
  margin: 0 auto;
  max-width: 32rem;
  position: fixed;
  top: 3.2rem;
  width: 100%;
  padding-inline: 1rem;
  height: auto;
  display: flex;
  justify-content: end;
  z-index: 10;
}
.close__icon {
  width: 2.8rem;
  height: auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
}
.processed__text-withImage {
  padding: 1.2rem;
  font-size: 1.6rem;
  line-height: 145%;
}
@media screen and (max-width: 430px) {
  .float__icon-wrapper {
    max-width: unset;
    width: 100%;
  }
  .float__icon-wrapper {
    top: 1.2rem;
  }
}
</style>
