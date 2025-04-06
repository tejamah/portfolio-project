<template>
    <footer class="footer section">
      <div class="footer__container bd-grid">
        <h1 class="footer__title">Teja Maheshwara</h1>
        <p class="footer__description">Software Engineer and Tech Enthusiast</p>
        <div class="footer__social">
          <a
            href="https://www.linkedin.com/in/teja-maheshwara"
            target="_blank"
            class="footer__link"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Teja-Maheshwara"
            target="_blank"
            class="footer__link"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="mailto:tejamaheshwara@example.com"
            class="footer__link"
          >
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
  /* Add specific styles for footer here */
  .footer {
    background-color: #2c3e50;
    color: #fff;
    padding: 2rem 0;
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
    color: #1abc9c;
  }
  </style>
  