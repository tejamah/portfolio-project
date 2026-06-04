<template>
  <section class="about section" id="about">
    <h2 class="section-title" data-aos="fade-up">About Me</h2>

    <div class="about__container" data-aos="fade-up" data-aos-delay="100">
      <div class="about__image">
        <img
          src="@/assets/Images/Teja_Profile_pic.jpg"
          alt="Teja Maheshwara"
          class="about__img"
        />
      </div>

      <div class="about__content">
        <p>
          I am a <strong>Computer Science PhD researcher</strong> and Senior
          Software Engineer in the New York City Metropolitan Area, focused on
          building scalable, human-centric AI systems that move from research
          ideas into usable software.
        </p>

        <p>
          I bring <strong>5+ years of software engineering experience</strong>
          across healthcare, fintech, and intelligent automation, with
          hands-on depth in <strong>FastAPI, Flask, RESTful API design, AWS,
          Docker, CI/CD, and cloud-native deployment patterns.</strong>
        </p>

        <p>
          My AI work includes PDF question-answering tools, conversational
          systems, RAG pipelines, AI agents, multimodal workflows, LoRA
          fine-tuning, and applied LLM integrations
          using platforms like
          <a
            href="https://huggingface.co/teja00007"
            target="_blank"
            rel="noopener"
            class="link"
          >
            Hugging Face
          </a>,
          LangChain, LLaMA 2, Mistral, FLAN-T5, and Amazon Bedrock.
        </p>

        <p>
          On LinkedIn, I share work around RAG, open-source AI apps, LLM-enhanced
          data pipelines, human-machine interaction, telepresence, embodiment,
          and AI systems.
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
.about__container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 1180px;
  margin: auto;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(16px);
}

.about__image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about__img {
  width: min(300px, 74vw);
  aspect-ratio: 1;
  border-radius: 28px;
  object-fit: cover;
  border: 8px solid #ffffff;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.about__img:hover {
  transform: scale(1.05);
}

.about__content {
  flex: 2;
  font-size: 1.05rem;
  color: var(--muted);
  line-height: 1.8;
}

.about__content strong {
  color: var(--ink);
}

.link {
  color: var(--blue);
  text-decoration: none;
  font-weight: 800;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .about__container {
    flex-direction: column;
    text-align: center;
    padding: 22px;
  }

  .about__content {
    text-align: center;
  }

}
</style>
