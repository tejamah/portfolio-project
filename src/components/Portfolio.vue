<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section-title" data-aos="fade-up">💼 My Portfolio</h2>

    <!-- AI Projects -->
    <div class="portfolio__section" data-aos="fade-up" data-aos-delay="100">
      <div class="portfolio__section-header">
        <h3 class="portfolio__subtitle">🔬 AI Projects</h3>
        <span class="portfolio__count">{{ aiProjects.length }} Projects</span>
      </div>

      <div class="portfolio__grid">
        <div
          v-for="(project, index) in aiProjects"
          :key="`ai-${index}`"
          class="portfolio__card"
        >
          <div class="portfolio__image-wrap">
            <img :src="project.img" :alt="project.title" class="portfolio__img" />
          </div>

          <div class="portfolio__content">
            <h3 class="portfolio__title">{{ project.title }}</h3>
            <p class="portfolio__desc">{{ project.description }}</p>

            <div class="portfolio__actions">
              <a :href="project.link" target="_blank" class="btn small">🔗 View</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Web Projects -->
    <div class="portfolio__section" data-aos="fade-up" data-aos-delay="150">
      <div class="portfolio__section-header">
        <h3 class="portfolio__subtitle">🌐 Web Projects</h3>
        <span class="portfolio__count">{{ webProjects.length }} Projects</span>
      </div>

      <div class="portfolio__grid">
        <div
          v-for="(project, index) in webProjects"
          :key="`web-${index}`"
          class="portfolio__card"
        >
          <div class="portfolio__image-wrap">
            <img :src="project.img" :alt="project.title" class="portfolio__img" />
          </div>

          <div class="portfolio__content">
            <h3 class="portfolio__title">{{ project.title }}</h3>
            <p class="portfolio__desc">{{ project.description }}</p>

            <div class="portfolio__actions">
              <a :href="project.link" target="_blank" class="btn small">🔗 Visit</a>
            </div>
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
          description: "Conversational AI chatbot built using FLAN-T5 and LoRA fine-tuning.",
        },
        {
          img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
          title: "Model Space & Demos",
          link: "https://huggingface.co/spaces/teja00007/BOT_J",
          description: "Interactive LLM demo space showcasing fine-tuned model capabilities.",
        },
        {
          img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
          title: "News Summarizer AI",
          link: "https://huggingface.co/teja00007/model-name",
          description: "Real-time multi-source news summarization powered by FLAN-T5.",
        },
      ],
      webProjects: [
        {
          img: AdvantageImg,
          title: "Advantage Care Group",
          link: "https://advantagecaregroup.org/",
          description: "Full Stack Developer • Healthcare platform and backend-driven solutions.",
        },
        {
          img: SkimboxImg,
          title: "Skimbox",
          link: "https://www.skimbox.us/",
          description: "Junior Developer • Business consulting and web application support.",
        },
        {
          img: IndustryImg,
          title: "Industry Experts",
          link: "https://industry-experts.com/",
          description: "Web Developer • Startup community and digital platform development.",
        },
        {
          img: TDSPImg,
          title: "TDSP – Big Data Hub",
          link: "https://nebigdatahub.org/nsdc/tdsp/",
          description: "AI & Data Science project focused on transportation insights.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.portfolio {
  padding: 60px 20px;
  background: #f8fbff;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: #2c3e50;
}

.portfolio__section {
  max-width: 1100px;
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
  font-weight: 700;
  color: #4070f4;
  margin: 0;
}

.portfolio__count {
  background: #eaf0ff;
  color: #2949c6;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
}

.portfolio__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  gap: 24px;
}

.portfolio__card {
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio__card:hover {
  transform: translateY(-8px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.14);
}

.portfolio__image-wrap {
  background: #f4f7ff;
  padding: 20px;
  border-bottom: 1px solid #eef2f8;
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

.portfolio__title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #293251;
  margin-bottom: 10px;
  line-height: 1.4;
}

.portfolio__desc {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  min-height: 68px;
  margin-bottom: 18px;
}

.portfolio__actions {
  display: flex;
  justify-content: flex-start;
}

.btn {
  display: inline-block;
  background-color: #4070f4;
  color: #ffffff;
  padding: 10px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn:hover {
  background-color: #2949c6;
  transform: translateY(-2px);
}

.btn.small {
  font-size: 0.85rem;
  padding: 9px 16px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 36px;
  }

  .portfolio__subtitle {
    font-size: 1.25rem;
  }

  .portfolio__desc {
    min-height: auto;
  }

  .portfolio__actions {
    justify-content: center;
  }

  .portfolio__content {
    text-align: center;
  }
}
</style>