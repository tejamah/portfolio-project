<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section-title">Portfolio</h2>
    <div class="portfolio__container">
      <div
        v-for="(project, index) in portfolio"
        :key="index"
        class="portfolio__item"
      >
        <img :src="project.img" :alt="project.title" class="portfolio__img" />
        <h2 class="portfolio__title">{{ project.title }}</h2>
        <div class="portfolio__link">
          <a :href="project.link" target="_blank" class="portfolio__link-name">
            {{ project.description }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      portfolio: [
        {
          img: "@/assets/Images/Advantage_care_group",
          title: "Advantage Care Group",
          link: "https://advantagecaregroup.org/",
          description: "Full Stack Developer",
        },
        {
          img: "@/assets/Images/skimbox.png",
          title: "Skimbox",
          link: "https://www.skimbox.us/",
          description: "Junior Developer",
        },
        {
          img: "@/assets/Images/Industry_experts.jpg",
          title: "Industry Experts",
          link: "https://industry-experts.com/",
          description: "Associate Web Developer",
        },
        {
          img: "@/assets/Images/TDSP.jpg",
          title: "Northeast Big Data Innovation Hub",
          link: "https://nebigdatahub.org/nsdc/tdsp/",
          description: "Transportation Data Science Project (TDSP)",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Section styles */
.portfolio {
  padding: 60px 20px;
  background-color: #f4f9ff;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #293251;
  font-weight: bold;
}

/* Portfolio container grid */
.portfolio__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 0 10px;
}

/* Individual portfolio item */
.portfolio__item {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease;
  width: 100%;
}

.portfolio__item:hover {
  transform: translateY(-10px);
}

/* Image styling */
.portfolio__img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 2px solid #f0f0f0;
}

/* Project title */
.portfolio__title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 15px 0;
  color: #293251;
}

/* Link container */
.portfolio__link {
  padding: 10px 0;
}

.portfolio__link-name {
  font-size: 1.1rem;
  color: #4070f4;
  text-decoration: none;
  transition: color 0.3s ease;
}

.portfolio__link-name:hover {
  color: #293251;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .portfolio__title {
    font-size: 1.3rem;
  }

  .portfolio__link-name {
    font-size: 1rem;
  }
}
</style>
