<template>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #212325;
  padding-top: 2rem;
}
@media screen and (max-width: 430px) {
  #app {
    padding-top: unset;
  }
}
</style>
