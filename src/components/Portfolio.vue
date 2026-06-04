<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section-title" data-aos="fade-up">Projects & Research</h2>

    <div class="portfolio__section" data-aos="fade-up" data-aos-delay="100">
      <div class="portfolio__section-header">
        <h3 class="portfolio__subtitle">AI Projects</h3>
        <span class="portfolio__count">{{ aiProjects.length }} Projects</span>
      </div>

      <div class="portfolio__grid">
        <article
          v-for="(project, index) in aiProjects"
          :key="`ai-${index}`"
          class="portfolio__card"
        >
          <div class="portfolio__image-wrap">
            <img :src="project.img" :alt="project.title" class="portfolio__img" />
          </div>

          <div class="portfolio__content">
            <p class="portfolio__meta">{{ project.date }}</p>
            <h3 class="portfolio__title">{{ project.title }}</h3>
            <p class="portfolio__desc">{{ project.description }}</p>
            <ul class="portfolio__bullets">
              <li v-for="point in project.highlights" :key="point">{{ point }}</li>
            </ul>

            <div v-if="project.link" class="portfolio__actions">
              <a :href="project.link" target="_blank" rel="noopener" class="btn small">
                View
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="portfolio__section" data-aos="fade-up" data-aos-delay="150">
      <div class="portfolio__section-header">
        <h3 class="portfolio__subtitle">Research Experience</h3>
        <span class="portfolio__count">{{ researchProjects.length }} Active</span>
      </div>

      <div class="research__grid">
        <article
          v-for="(project, index) in researchProjects"
          :key="`research-${index}`"
          class="research__card"
        >
          <p class="portfolio__meta">{{ project.date }}</p>
          <h3 class="portfolio__title">{{ project.title }}</h3>
          <p class="portfolio__desc">{{ project.description }}</p>
          <ul class="portfolio__bullets">
            <li v-for="point in project.highlights" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import TDSPImg from "@/assets/Images/TDSP.jpg";

export default {
  name: "Portfolio",
  data() {
    return {
      aiProjects: [
        {
          img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
          title: "MindSync AI - Emotion-Aware Conversational System",
          date: "Jul 2025 - Jan 2026",
          link: "https://huggingface.co/teja00007",
          description:
            "Scalable conversational AI platform built with FastAPI microservices, LLM workflows, multimodal processing, and low-latency backend APIs.",
          highlights: [
            "Built AI-agent style pipelines for session management, contextual memory, voice interaction, and personalized responses.",
            "Integrated transformer-based LLMs with RAG pipelines for contextual reasoning and dynamic response generation.",
            "Containerized AI services with Docker and optimized inference workflows for real-time speech, text, and emotion analysis.",
          ],
        },
        {
          img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
          title: "PDFMind - Open-Source PDF RAG Assistant",
          date: "LinkedIn Feature | 2025",
          link: "https://www.linkedin.com/in/teja-maheshwara/",
          description:
            "Open-source PDF question-answering app that lets users upload documents and ask natural-language questions using grounded retrieval.",
          highlights: [
            "Built a live RAG workflow with document loading, chunking, sentence-transformer embeddings, FAISS vector search, and FLAN-T5 generation.",
            "Used LangChain community tooling, transformers, Gradio, and Hugging Face-friendly architecture with no paid API dependency.",
            "Positioned as a foundation for research tools, education assistants, legal-tech workflows, healthcare document agents, and intelligent chatbots.",
          ],
        },
        {
          img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
          title: "AI Research Paper Summarizer + Visual Explainer",
          date: "2024 - 2025",
          link: "https://huggingface.co/teja00007",
          description:
            "Automated NLP pipeline for summarizing research papers and categorizing trending topics through a web-facing API layer.",
          highlights: [
            "Fine-tuned FLAN-T5 with LoRA for domain-aware summarization.",
            "Integrated RAG architecture and REST APIs to serve summaries dynamically through a web interface.",
          ],
        },
        {
          img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
          title: "LLM-Enhanced PySpark Pipeline",
          date: "LinkedIn Concept | 2025",
          link: "https://www.linkedin.com/in/teja-maheshwara/",
          description:
            "AI-enhanced data pipeline concept exploring how LLM reasoning can collaborate with Spark-scale computation.",
          highlights: [
            "Explored using LLMs as reasoning layers inside data workflows instead of treating AI as only a final output generator.",
            "Focused on cognitive data pipelines where Spark handles scale and LLMs interpret meaning across noisy, high-volume data.",
          ],
        },
        {
          img: TDSPImg,
          title: "AI-Based Analytics Decision Support Tool",
          date: "2024",
          link: "https://nebigdatahub.org/nsdc/tdsp/",
          description:
            "Hackathon prototype for real-time analytics and decision support built under a 48-hour development constraint.",
          highlights: [
            "Led the team from architecture through prototype delivery.",
            "Focused on rapid AI-assisted insight generation and usable analytics workflows.",
          ],
        },
      ],
      researchProjects: [
        {
          title: "Research Assistant - Human-Robot Interaction",
          date: "Pace University | Mar 2026 - Present",
          description:
            "Researching telepresence and embodiment in HRI systems using multimodal data analysis.",
          highlights: [
            "Designing data pipelines and evaluating presence, response time, and user performance metrics.",
            "Building Power BI and Tableau dashboards to analyze human-centered system interactions.",
          ],
        },
        {
          title: "AI-SBOM: Multimodal AI Reliability & Auditing",
          date: "Feb 2026 - Present",
          description:
            "Proposed framework for auditing structural dependencies and reliability risks in multimodal AI systems.",
          highlights: [
            "Combining software supply chain analysis with multimodal hallucination benchmarking using AVHBench.",
            "Designing dependency risk scoring across dataset provenance, APIs, and model components.",
            "Studying correlations between system-level risk and hallucination behavior in AI models.",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.portfolio {
  background: transparent;
}

.portfolio__section {
  max-width: 1180px;
  margin: 0 auto 50px;
}

.portfolio__section:last-child {
  margin-bottom: 0;
}

.portfolio__section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  gap: 12px;
  flex-wrap: wrap;
}

.portfolio__subtitle {
  font-size: 1.5rem;
  font-weight: 850;
  color: var(--ink);
  margin: 0;
}

.portfolio__count {
  background: rgba(37, 99, 235, 0.1);
  color: var(--blue);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
}

.portfolio__grid,
.research__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 24px;
}

.portfolio__card,
.research__card {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(16px);
}

.research__card {
  padding: 24px;
}

.portfolio__card:hover,
.research__card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow);
}

.portfolio__image-wrap {
  background:
    linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(16, 185, 129, 0.1)),
    #ffffff;
  padding: 20px;
  border-bottom: 1px solid var(--line);
}

.portfolio__img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  display: block;
}

.portfolio__content {
  padding: 20px;
}

.portfolio__meta {
  color: var(--blue);
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.portfolio__title {
  font-size: 1.15rem;
  font-weight: 850;
  color: var(--ink);
  margin-bottom: 10px;
  line-height: 1.4;
}

.portfolio__desc {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 14px;
}

.portfolio__bullets {
  display: grid;
  gap: 9px;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.5;
  padding-left: 18px;
  margin-bottom: 18px;
  list-style: disc;
}

.portfolio__actions {
  display: flex;
  justify-content: flex-start;
}

.btn {
  display: inline-block;
  background: var(--ink);
  color: #ffffff;
  padding: 10px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn:hover {
  background-color: var(--blue);
  transform: translateY(-2px);
}

.btn.small {
  font-size: 0.85rem;
  padding: 9px 16px;
}

@media (max-width: 768px) {
  .portfolio__subtitle {
    font-size: 1.25rem;
  }
}
</style>
