<template>
  <footer class="footer section">
    <div class="footer__container bd-grid">
      <h2 class="footer__title">Teja Maheshwara</h2>
      <p class="footer__description">
        Senior Software Engineer | AI / LLM Engineer | Backend Systems Developer
      </p>
      <div class="footer__social">
        <a
          href="https://www.linkedin.com/in/teja-maheshwara"
          target="_blank"
          rel="noopener"
          class="footer__link"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/tejamah"
          target="_blank"
          rel="noopener"
          class="footer__link"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:tm55063p@pace.edu" class="footer__link" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background:
    linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(16, 185, 129, 0.14)),
    #101827;
  color: #fff;
  padding: 2.4rem 20px;
  text-align: center;
}

.footer__title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.footer__description {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.footer__social {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer__link {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.footer__link:hover {
  color: var(--cyan);
}
</style>
