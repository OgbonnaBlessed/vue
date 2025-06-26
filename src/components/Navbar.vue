<!-- import  -->

<template>
  <nav class="navbar">
    <div class="logo-box">
      <img src="../assets/logo.png" alt="Logo" class="h-6" />
      <span class="text-white font-semibold text-sm tracking-wider">CYBER WAR ROOM</span>
    </div>

    <div class="nav-box">
      <a href="/" exact-active-class="active">Home</a>
      <a href="/about" exact-active-class="active">About</a>
      <a href="/scenarios" exact-active-class="active">Scenarios</a>
      <a href="/pricing" exact-active-class="active">Pricing</a>

      <a href="/login" class="login">
        Login
      </a>
    </div>
  </nav>
</template>

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
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  backdrop-filter: blur(8px);
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
}

.navbar a:hover {
  color: #22d3ee;
}

.active {
  font-weight: bold;
  border-bottom: 2px solid #fff;
  padding-bottom: 0.25rem;
}
</style>