<script setup>
import NavBar from './components/NavBar.vue';
import Home from './views/Home.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>
