<script setup>
import NavBar from './components/NavBar.vue';
import Home from './views/Home.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
  <Suspense>
    <RouterView v-slot="{ Component }">
      <component :is="Component"></component>
    </RouterView>
  </Suspense>
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&family=Rubik:wght@500&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

body #app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
