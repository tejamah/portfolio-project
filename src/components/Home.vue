<template>
  <section class="home section" id="home">
    <div class="home__container" data-aos="fade-up">
      <div class="home__text">
        <h1 class="home__greeting">Hi, I'm <span class="highlight">Teja Maheshwara</span></h1>
        <vue-typed-js :strings="typedRoles" typeSpeed="60" backSpeed="40" loop>
          <h2 class="home__roles"><span ref="typed"></span></h2>
        </vue-typed-js>
        <p class="home__summary">
          I’m an AI-focused developer building scalable applications with FLAN-T5, Mistral, and FastAPI — making real-time intelligence accessible through web platforms.
        </p>
        <a href="#portfolio" class="btn">🚀 Explore Projects</a>
      </div>

      <div class="home__image">
        <img src="@/assets/Images/Teja_DP.jpg" alt="Teja Maheshwara" />
      </div>
    </div>
  </section>
</template>

<script>
import VueTypedJs from 'vue-typed-js';

export default {
  name: "Home",
  components: {
    VueTypedJs
  },
  data() {
    return {
      typedRoles: [
        "AI Developer",
        "LLM Engineer",
        "Hugging Face Creator",
        "Full Stack Dev"
      ]
    };
  }
};
</script>

<style scoped>
.section {
  padding: 60px 20px;
}

.home__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
  max-width: 1100px;
  margin: auto;
}

@media (min-width: 768px) {
  .home__container {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.home__text {
  flex: 1;
}

.home__greeting {
  font-size: 2.5rem;
  color: #2c3e50;
  font-weight: bold;
}

.highlight {
  color: #4070f4;
}

.home__roles {
  font-size: 1.6rem;
  font-weight: 600;
  color: #654ef0;
  margin-top: 10px;
  height: 40px;
}

.home__summary {
  margin: 20px 0;
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
}

.btn {
  background-color: #4070f4;
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2949c6;
}

.home__image img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #4070f4;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
</style>
    