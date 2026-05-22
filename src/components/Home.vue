<template>
  <section class="home section" id="home">
    <div class="home__container" data-aos="fade-up">
      <div class="home__text">
        <p class="home__eyebrow">AI systems, backend platforms, and cloud-native products</p>
        <h1 class="home__greeting">
          Building reliable AI software from backend architecture to intelligent user experiences.
        </h1>
        <vue-typed-js :strings="typedRoles" typeSpeed="60" backSpeed="40" loop>
          <h2 class="home__roles"><span ref="typed"></span></h2>
        </vue-typed-js>
        <p class="home__summary">
          Senior Software Engineer building scalable Python backends, cloud-native
          microservices, and production-ready GenAI applications across healthcare,
          fintech, and intelligent automation.
        </p>
        <div class="home__actions">
          <a href="#portfolio" class="btn">Explore Projects</a>
          <a href="#contact" class="btn btn--ghost">Contact Me</a>
        </div>
        <div class="home__metrics" aria-label="Professional highlights">
          <span><strong>5+</strong> years</span>
          <span><strong>30-40%</strong> faster APIs</span>
          <span><strong>PhD</strong> AI & Systems</span>
        </div>
      </div>

      <div class="home__image">
        <div class="home__portrait-card">
          <img src="@/assets/Images/Teja_DP.jpg" alt="Teja Maheshwara" />
          <div class="home__badge">FastAPI | AWS | RAG | Agents</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueTypedJs from "vue-typed-js";

export default {
  name: "Home",
  components: {
    VueTypedJs,
  },
  data() {
    return {
      typedRoles: [
        "Senior Software Engineer",
        "AI / LLM Engineer",
        "Backend Systems Developer",
        "FastAPI & Cloud Engineer",
      ],
    };
  },
};
</script>

<style scoped>
.section {
  min-height: calc(100vh - 78px);
  padding: 96px 20px 72px;
  display: flex;
  align-items: center;
}

.home__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 44px;
  width: 100%;
  max-width: 1180px;
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

.home__eyebrow {
  display: inline-flex;
  margin-bottom: 18px;
  padding: 8px 14px;
  border: 1px solid rgba(37, 99, 235, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  color: var(--blue);
  font-size: 0.88rem;
  font-weight: 800;
  box-shadow: var(--shadow-soft);
}

.home__greeting {
  max-width: 720px;
  font-size: clamp(2.55rem, 6vw, 5.4rem);
  line-height: 0.98;
  color: var(--ink);
  font-weight: 900;
  letter-spacing: 0;
}

.highlight {
  color: var(--blue);
}

.home__roles {
  font-size: clamp(1.25rem, 2vw, 1.7rem);
  font-weight: 800;
  color: var(--cyan);
  margin-top: 18px;
  min-height: 44px;
}

.home__summary {
  max-width: 660px;
  margin: 22px 0;
  font-size: 1.08rem;
  color: var(--muted);
  line-height: 1.75;
}

.home__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

@media (min-width: 768px) {
  .home__actions {
    justify-content: flex-start;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--blue), var(--cyan));
  color: white;
  padding: 13px 22px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.24);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(37, 99, 235, 0.3);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.74);
  color: var(--ink);
  border: 1px solid var(--line);
  box-shadow: none;
}

.btn--ghost:hover {
  background: #ffffff;
}

.home__metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
  justify-content: center;
}

.home__metrics span {
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.72);
  color: var(--muted);
  font-size: 0.9rem;
}

.home__metrics strong {
  color: var(--ink);
}

.home__image {
  flex: 0.8;
  display: flex;
  justify-content: center;
}

.home__portrait-card {
  position: relative;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.74);
  border-radius: 34px;
  background:
    linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(135deg, var(--blue), var(--mint), var(--coral)) border-box;
  box-shadow: var(--shadow);
  transform: rotate(2deg);
}

.home__portrait-card img {
  width: min(340px, 76vw);
  aspect-ratio: 4 / 5;
  border-radius: 24px;
  object-fit: cover;
  display: block;
}

.home__badge {
  position: absolute;
  left: 50%;
  bottom: 18px;
  width: max-content;
  max-width: calc(100% - 32px);
  transform: translateX(-50%) rotate(-2deg);
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(22, 32, 51, 0.9);
  color: #ffffff;
  font-size: 0.86rem;
  font-weight: 800;
  box-shadow: 0 14px 26px rgba(22, 32, 51, 0.22);
}

@media (min-width: 768px) {
  .home__metrics {
    justify-content: flex-start;
  }
}

@media (max-width: 520px) {
  .section {
    padding-top: 72px;
  }

  .home__actions {
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}
</style>
