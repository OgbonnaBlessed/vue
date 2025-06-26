<template>
  <div class="layout-container">
    <video
      ref="bgVideo"
      autoplay
      muted
      loop
      playsinline
      class="bg-video"
      id="background-video"
    >
      <source src="../assets/bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

const bgVideo = ref(null)

onMounted(() => {
  if (bgVideo.value) {
    bgVideo.value.muted = true
    window.__bgVideo = bgVideo.value
  }
})
</script>

<style scoped>
.layout-container {
  position: relative;
  overflow-x: hidden;
}
.bg-video {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  object-fit: cover;
  z-index: -1;
}
</style>