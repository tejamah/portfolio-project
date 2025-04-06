<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section-title" data-aos="fade-up">💼 My Portfolio</h2>

    <!-- 🔬 AI Projects -->
    <div class="portfolio__section" data-aos="fade-up">
      <h3 class="portfolio__subtitle">🔬 AI Projects</h3>
      <div class="portfolio__grid">
        <div
          v-for="(project, index) in aiProjects"
          :key="index"
          class="portfolio__card"
        >
          <img :src="project.img" :alt="project.title" class="portfolio__img" />
          <h3 class="portfolio__title">{{ project.title }}</h3>
          <p class="portfolio__desc">{{ project.description }}</p>
          <div class="portfolio__actions">
            <a :href="project.link" target="_blank" class="btn small">🔗 View</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 🌐 Web Projects -->
    <div class="portfolio__section" data-aos="fade-up">
      <h3 class="portfolio__subtitle">🌐 Web Projects</h3>
      <div class="portfolio__grid">
        <div
          v-for="(project, index) in webProjects"
          :key="index"
          class="portfolio__card"
        >
          <img :src="project.img" :alt="project.title" class="portfolio__img" />
          <h3 class="portfolio__title">{{ project.title }}</h3>
          <p class="portfolio__desc">{{ project.description }}</p>
          <div class="portfolio__actions">
            <a :href="project.link" target="_blank" class="btn small">🔗 Visit</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AdvantageImg from "@/assets/Images/Advantage_care_group.png";
import SkimboxImg from "@/assets/Images/skimbox.png";
import IndustryImg from "@/assets/Images/IE.jpg";
import TDSPImg from "@/assets/Images/TDSP.jpg";

export default {
  name: "Portfolio",
  data() {
    return {
      aiProjects: [
        {
          img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
          title: "Teja Chatbot (FLAN-T5-Large)",
          link: "https://huggingface.co/teja00007/teja-chatbot-flan-t5-large",
          description: "Conversational AI Chatbot using FLAN-T5 & LoRA fine-tuning",
        },
        {
          img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
          title: "Model Space & Demos",
          link: "https://huggingface.co/spaces/teja00007/BOT_J",
          description: "Deployed LLM & demo space showcasing fine-tuned results",
        },
        {
          img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
          title: "News Summarizer AI",
          link: "https://huggingface.co/teja00007/model-name",
          description: "Real-time multi-source news summarization using FLAN-T5",
        },
      ],

      webProjects: [
        {
          img: AdvantageImg,
          title: "Advantage Care Group",
          link: "https://advantagecaregroup.org/",
          description: "Full Stack Developer • Healthcare Platform",
        },
        {
          img: SkimboxImg,
          title: "Skimbox",
          link: "https://www.skimbox.us/",
          description: "Junior Developer • Business Consulting",
        },
        {
          img: IndustryImg,
          title: "Industry Experts",
          link: "https://industry-experts.com/",
          description: "Web Developer • Startup Community",
        },
        {
          img: TDSPImg,
          title: "TDSP – Big Data Hub",
          link: "https://nebigdatahub.org/nsdc/tdsp/",
          description: "AI & Data Science • Transportation",
        },
      ]
    };
  }
};
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #2c3e50;
}

.portfolio__subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #4070f4;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
}

.portfolio__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
  padding: 0 20px;
}

.portfolio__card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
}

.portfolio__img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 15px;
}

.portfolio__title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #293251;
  margin-bottom: 10px;
}

.portfolio__desc {
  font-size: 0.95rem;
  color: #555;
  min-height: 40px;
  margin-bottom: 15px;
}

.portfolio__actions {
  display: flex;
  justify-content: center;
}

.btn {
  background-color: #4070f4;
  color: white;
  padding: 10px 18px;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2949c6;
}

.btn.small {
  font-size: 0.85rem;
  padding: 8px 16px;
}
</style>
