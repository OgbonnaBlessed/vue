<template>
  <footer class="footer">
    <div class="links">
      <a href="#">Products</a>
      <a href="#">Support</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Privacy Policy</a>
    </div>
    <div class="socials">
      <a href="#"><img src="../assets/linkedin.png" alt="LinkedIn" class="w-5" /></a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  position: fixed;
  bottom: 0;
  height: fit-content;
  left: 0;
  right: 0;
}

.links {
  display: flex;
  gap: 1.5rem;
}

.links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.links a:hover {
  color: #22d3ee;
}

.socials {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
</style>