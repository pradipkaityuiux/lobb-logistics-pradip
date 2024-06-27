<template>
  <div class="heading">
    <small>{{ getTodayDate }}</small>
    <div class="sub__heading">
      <h1>Today</h1>
      <div class="name__of-user" v-if="!loading">{{ formattedName }}</div>
      <Loader v-if="loading" icon="true" />
      <!-- Show the skeleton view while Loading state -->
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import Loader from "@/layout/commonBlocks/Loader.vue";
export default {
  name: "HeaderComponent",
  components: {
    Loader,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      date: new Date().toDateString(),
    });
    // Getting the current state of data and loading fromm the Store
    const data = computed(() => store.state.data);
    const loading = computed(() => store.state.loading);

    // Formatting the user name like this: Pradip Kaity --> PK
    const formattedName = computed(() => {
      if (!data.value || !data.value.content) {
        return "";
      }
      return data.value.content.userName
        .split(" ")
        .map((char) => char[0])
        .join("");
    });

    // Formatting the Current Date like this: THURSDAY, JUNE 27
    const getTodayDate = computed(() => {
      // Get today's date
      const today = new Date();
      const dayName = today
        .toLocaleDateString("en-US", { weekday: "long" })
        .toUpperCase();
      const dayOfMonth = today.getDate();
      const monthName = today
        .toLocaleDateString("en-US", { month: "long" })
        .toUpperCase();
      const formattedDate = `${dayName} ${dayOfMonth} ${monthName}`;
      return formattedDate;
    });
    return {
      state,
      data,
      getTodayDate,
      formattedName,
      loading,
    };
  },
};
</script>

<style scoped>
.heading small {
  font-size: 14px;
}

.heading .sub__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.heading .name__of-user {
  width: 3.2rem;
  height: 3.2rem;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ebebeb;
}
</style>
