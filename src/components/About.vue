<template>
  <section class="about section" id="about">
    <h2 class="section-title" data-aos="fade-up">👨‍💻 About Me</h2>

    <div class="about__container" data-aos="fade-up" data-aos-delay="100">

      <!-- Profile Image -->
      <div class="about__image">
        <img
          src="@/assets/Images/Teja_Profile_pic.jpg"
          alt="Teja Maheshwara"
          class="about__img"
        />
      </div>

      <!-- About Text -->
      <div class="about__content">
        <p>
          Backend Engineer with <strong>5+ years of experience</strong> building
          scalable, production-grade distributed systems across fintech and
          healthcare domains. Specializing in API architecture, database
          performance optimization, and containerized cloud deployments.
        </p>

        <p>
          Proven track record of improving system reliability, throughput, and
          reducing latency under high-concurrency workloads.
        </p>

        <p>
          I’ve fine-tuned and deployed <strong>50+ AI models</strong> on
          platforms like
          <a
            href="https://huggingface.co/teja00007"
            target="_blank"
            class="link"
          >
            Hugging Face
          </a>,
          integrating them into real-time applications using
          <strong>FastAPI, Vue.js, and modern AI frameworks.</strong>
        </p>

        <p>
          My mission is to build AI products that are not only innovative but
          also impactful — from conversational AI assistants to intelligent
          summarization platforms.
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
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: #2c3e50;
}

.about__container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
}

/* IMAGE SECTION */

.about__image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about__img {
  width: 280px;
  border-radius: 16px;
  object-fit: cover;
  border: 3px solid #4070f4;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;
}

.about__img:hover {
  transform: scale(1.05);
}

/* TEXT SECTION */

.about__content {
  flex: 2;
  font-size: 1.05rem;
  color: #444;
  line-height: 1.8;
}

.about__content strong {
  color: #2c3e50;
}

.link {
  color: #4070f4;
  text-decoration: none;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}

/* MOBILE */

@media (max-width: 768px) {

  .about__container {
    flex-direction: column;
    text-align: center;
  }

  .about__content {
    text-align: center;
  }

  .about__img {
    width: 220px;
  }

}

</style>