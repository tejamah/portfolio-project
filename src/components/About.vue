<template>
  <section class="about section" id="about">
    <h2 class="section-title" data-aos="fade-up">👨‍💻 About Me</h2>
    <div class="about__container" data-aos="fade-up" data-aos-delay="100">
      <img src="@/assets/Images/Teja_Profile_pic.jpg" alt="Teja Maheshwara" class="about__img" />

      <div class="about__content">
        <p>
          Hi! I'm <strong>Teja Maheshwara</strong>, a passionate AI enthusiast and full-stack developer,
          with a Master’s in Computer and Information Science from NYIT. I specialize in building
          intelligent systems using cutting-edge LLM technologies like <strong>FLAN-T5</strong>,
          <strong>LoRA</strong>, and <strong>Mistral 7B</strong>.
        </p>

        <p>
          I’ve fine-tuned and deployed over 50+ models on platforms like
          <a href="https://huggingface.co/teja00007" target="_blank" class="link">Hugging Face</a>,
          integrating them into real-time web apps using <strong>FastAPI</strong>, <strong>Vue.js</strong>,
          and <strong>Vite</strong>.
        </p>

        <p>
          My mission is to build AI products that are not only innovative but also
          impactful — from live chatbot interfaces to summarization tools that
          transform how we consume information.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #2c3e50;
}

.about__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 0 20px;
  max-width: 1000px;
  margin: auto;
}

.about__img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #4070f4;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.about__content {
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
  text-align: center;
}

.about__content strong {
  color: #2c3e50;
}

.link {
  color: #4070f4;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

@media (min-width: 768px) {
  .about__container {
    flex-direction: row;
    text-align: left;
  }

  .about__img {
    margin-right: 30px;
  }

  .about__content {
    text-align: left;
  }
}
</style>
