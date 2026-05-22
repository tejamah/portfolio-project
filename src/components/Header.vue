<template>
  <header class="header">
    <a href="#home" class="logo">Teja Maheshwara</a>

    <nav class="nav-links" aria-label="Primary navigation">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#portfolio">Projects</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="social-icons">
      <a href="https://www.linkedin.com/in/teja-maheshwara/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/tejamah" target="_blank" rel="noopener" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="mailto:tm55063p@pace.edu" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 14px;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  max-width: 1180px;
  margin: 14px auto 0;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  padding: 10px 14px 10px 20px;
  box-shadow: 0 18px 42px rgba(22, 32, 51, 0.1);
  backdrop-filter: blur(18px);
}

.logo {
  font-size: 1.08rem;
  font-weight: 900;
  color: var(--ink);
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 6px;
  align-items: center;
  color: var(--muted);
  font-weight: 800;
  font-size: 0.9rem;
}

.nav-links a,
.social-icons a {
  border-radius: 999px;
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.nav-links a {
  padding: 8px 12px;
}

.nav-links a:hover,
.social-icons a:hover {
  color: var(--blue);
  background: rgba(37, 99, 235, 0.08);
}

.social-icons {
  display: flex;
  gap: 6px;
  align-items: center;
}

.social-icons a {
  display: inline-grid;
  width: 36px;
  height: 36px;
  place-items: center;
  color: var(--ink);
  font-size: 1.05rem;
}

.social-icons a:hover {
  transform: translateY(-1px);
}

@media (max-width: 860px) {
  .header {
    top: 0;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    border-radius: 0 0 22px 22px;
    padding: 12px 16px;
  }

  .nav-links {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 0.88rem;
  }
}
</style>
