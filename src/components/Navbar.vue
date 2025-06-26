<!-- import  -->

<template>
  <nav class="navbar">
    <div class="logo-box">
      <img src="../assets/logo.png" alt="Logo" class="h-6" />
      <span class="text-white font-semibold text-sm tracking-wider">CYBER WAR ROOM</span>
    </div>

    <div class="nav-box">
      <a :href="'/'" :class="{ active: isActive('/') }">Home</a>
      <a :href="'/about'" :class="{ active: isActive('/about') }">About</a>
      <a :href="'/scenarios'" :class="{ active: isActive('/scenarios') }">Scenarios</a>
      <a :href="'/pricing'" :class="{ active: isActive('/pricing') }">Pricing</a>
    </div>

    <div class="action">
      <button class="sound-toggle" @click="toggleAudio">
        <component :is="isMuted ? VolumeX : Volume2" class="sound-icon" />
      </button>
      <a href="/login" class="login">
        Login
      </a>
    </div>
  </nav>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { Volume2, VolumeX } from "lucide-vue-next"

  const route = useRoute();
  const isMuted = ref(true)

  const isActive = (path) => route.path === path

  onMounted(() => {
    const video = window.__bgVideo
    if (video) {
      isMuted.value = video.muted
    }
  })

  const toggleAudio = () => {
    const video = window.__bgVideo
    if (video) {
      video.muted = !video.muted
      isMuted.value = video.muted
    }
  }
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 50;
  padding: 1rem 10rem;
  backdrop-filter: blur(8px);
}

.nav-box {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-box a {
  background-color: rgba(151, 151, 151, 0.438);
  padding: 12px 25px;
  font-weight: 500;
  clip-path: polygon(
    10% 0%,     /* top-left notch inward */
    90% 0%,     /* top-right straight */
    100% 30%,   /* start of bottom-right notch inward */
    90% 100%,   /* bottom-right inward */
    10% 100%,   /* bottom-left straight */
    0% 70%      /* bottom-left inward notch */
  );
}

.nav-box a.active {
  background-color: white;
  color: black;
}

.navbar .logo-box {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
}

.logo-box img {
  width: 30px;
}

.navbar a {
  color: #fff;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
}

.action {
  display: flex;
  align-items: center;
  gap: 50px;
}

.action a {
  background-color: #66E0F8;
  padding: 12px 25px;
  font-weight: 500;
  clip-path: polygon(
    10% 0%,     /* top-left notch inward */
    90% 0%,     /* top-right straight */
    100% 30%,   /* start of bottom-right notch inward */
    90% 100%,   /* bottom-right inward */
    10% 100%,   /* bottom-left straight */
    0% 70%      /* bottom-left inward notch */
  );
}

.sound-icon {
  color: white;
  background-color: rgba(151, 151, 151, 0.137);
  padding: 5px;
  width: 20px;
  border-radius: 50%;
}

.sound-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.sound-toggle:hover {
  transform: scale(1.1);
}
</style>