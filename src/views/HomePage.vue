<!-- HomePage.vue -->
<template>
  <div class="home-container">
    <video
      ref="bgVideo"
      autoplay
      muted
      loop
      playsinline
      class="bg-video"
      id="background-video"
    >
      <source src="../components/" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay content -->
    <div class="overlay-content">
      <h1>CHOOSE YOUR PATH</h1>
      <button class="enter-btn">Enter</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const bgVideo = ref(null)

onMounted(() => {
  // Ensure it's muted by default
  if (bgVideo.value) bgVideo.value.muted = true
})

// Expose it globally for audio toggle
window.__bgVideo = bgVideo
</script>

<style scoped>
.home-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  z-index: -1;
}
.overlay-content {
  position: relative;
  z-index: 1;
  color: white;
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  padding-top: 15%;
}
.enter-btn {
  background: transparent;
  border: 2px solid #22d3ee;
  color: #22d3ee;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 2rem;
  cursor: pointer;
  clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
  transition: 0.3s ease;
}
.enter-btn:hover {
  background-color: #22d3ee;
  color: black;
}
</style>