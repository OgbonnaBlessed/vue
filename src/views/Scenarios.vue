<template>
  <div class="home-container">
    <div class="overlay-content">
      <div class="home-text">
        <div>Scenerios</div> 
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.overlay-content {
  position: absolute;
  top: 50%;
  left: 10rem;
  transform: translateY(-50%);
  z-index: 1;
  color: black;
  display: flex;
  flex-direction: column;
}
.home-text {
  display: flex;
  flex-direction: column;
  font-size: 6rem;
  font-weight: 500;
}
.enter-btn {
  background: black;
  border: none;
  outline: none;
  color: #22d3ee;
  padding: 1rem 5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  transition: 0.3s ease;
  width: fit-content;
}
.enter-btn:hover {
  background-color: #22d3ee;
  color: black;
}
</style>