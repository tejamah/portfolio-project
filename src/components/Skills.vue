<template>
  <section class="skills section" id="skills">
    <h2 class="section-title" data-aos="fade-up">🧠 My Skills</h2>

    <div class="skills__container" data-aos="fade-up" data-aos-delay="100">
      <div
        v-for="(group, index) in skills"
        :key="index"
        class="skills__group"
      >
        <div class="skills__header">
          <div class="skills__icon">
            <i :class="group.icon"></i>
          </div>
          <h3 class="skills__category">{{ group.category }}</h3>
        </div>

        <div class="skills__tags">
          <span
            v-for="(item, idx) in group.list"
            :key="idx"
            class="tag"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          category: "AI & Machine Learning",
          icon: "fas fa-brain",
          list: [
            "Python",
            "FLAN-T5",
            "LoRA",
            "Mistral 7B",
            "Hugging Face",
            "Pandas",
            "NumPy",
            "Seaborn",
          ],
        },
        {
          category: "Web Development",
          icon: "fas fa-code",
          list: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "React",
            "Node.js",
            "TypeScript",
            "FastAPI",
          ],
        },
        {
          category: "Databases",
          icon: "fas fa-database",
          list: [
            "MongoDB",
            "MySQL",
            "Firebase",
            "PostgreSQL",
          ],
        },
        {
          category: "Cloud & DevOps",
          icon: "fas fa-cloud",
          list: [
            "Docker",
            "AWS",
            "Google Cloud",
            "Kubernetes",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  padding: 60px 20px;
  background: #f8fbff;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #2c3e50;
}

.skills__container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.skills__group {
  background: #ffffff;
  padding: 24px;
  border-radius: 18px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skills__group:hover {
  transform: translateY(-8px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}

.skills__header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.skills__icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.skills__icon i {
  color: #654ef0;
  font-size: 1.2rem;
}

.skills__category {
  font-size: 1.2rem;
  font-weight: 700;
  color: #293251;
  margin: 0;
}

.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: linear-gradient(135deg, #eef2ff, #e3e9ff);
  color: #2949c6;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.tag:hover {
  transform: scale(1.06);
  box-shadow: 0 0 14px rgba(101, 78, 240, 0.25);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .skills__group {
    padding: 20px;
  }

  .skills__category {
    font-size: 1.1rem;
  }

  .tag {
    font-size: 0.85rem;
    padding: 7px 12px;
  }
}
</style>