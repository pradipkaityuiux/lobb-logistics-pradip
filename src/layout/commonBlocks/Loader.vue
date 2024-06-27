<template>
  <div
    class="skeleton"
    :class="{
      skeloton__title: title,
      skeloton__subtitle: subTitle,
      skeloton__logo: logo,
      skeloton__image: image,
      skeloton__icon: icon,
      // Passing the props to style differently
    }"
  ></div>
</template>

<script>
export default {
  name: "LoaderComponent",
  props: ["title", "logo", "subTitle", "image", "icon"],
};
</script>

<style scoped>
.skeleton {
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  animation: 1.5s shine linear infinite;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}
.skeloton__title {
  height: 1.6rem;
  width: 16rem;
  border-radius: 5px;
  margin-bottom: 0.8rem;
}
.skeloton__subtitle {
  height: 2rem;
  width: 16rem;
  border-radius: 5px;
}
.skeloton__logo {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
}
.skeloton__icon {
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
}
.skeloton__image {
  width: 100%;
  height: 26rem;
}
@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
