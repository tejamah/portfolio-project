<template>
  <div class="home">
    <header class="home__header">
      <h1 class="home__title">Hello and Welcome to My Creative Space!</h1>
    </header>

    <section class="home__intro">
      <p class="home__text">
       
      </p>
    </section>

    <section class="home__cta">
      <p class="home__cta-text">
        Feel free to explore and learn more about my work and skills!
      </p>
      <router-link to="/about" class="home__link"></router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* General Styling */
.home {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
}

/* Header Styling */
.home__header {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.home__title {
  color: #2c3e50;
  font-size: 2rem;
  margin: 0;
}

/* Intro Section */
.home__intro {
  margin-top: 20px;
}

.home__text {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

/* Call-to-Action Section */
.home__cta {
  margin-top: 40px;
}

.home__cta-text {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 15px;
}

.home__link {
  color: #1abc9c;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
}

.home__link:hover {
  text-decoration: underline;
  color: #16a085;
}

/* Responsive Design */
@media (max-width: 768px) {
  .home {
    padding: 15px;
  }

  .home__title {
    font-size: 1.8rem;
  }

  .home__text,
  .home__cta-text {
    font-size: 1rem;
  }
}
</style>
