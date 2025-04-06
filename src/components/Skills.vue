<template>
  <section class="skills section" id="skills">
    <h2 class="section-title" data-aos="fade-up">🧠 My Skills</h2>
    <div class="skills__container" data-aos="fade-up" data-aos-delay="100">
      <div v-for="(group, index) in skills" :key="index" class="skills__group">
        <h3 class="skills__category">
          <i :class="group.icon"></i> {{ group.category }}
        </h3>
        <div class="skills__tags">
          <span v-for="(item, idx) in group.list" :key="idx" class="tag">
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
            "Python", "FLAN-T5", "LoRA", "Mistral 7B",
            "Hugging Face", "Pandas", "NumPy", "Seaborn"
          ]
        },
        {
          category: "Web Development",
          icon: "fas fa-code",
          list: [
            "HTML", "CSS", "JavaScript", "Vue.js",
            "React", "Node.js", "TypeScript", "FastAPI"
          ]
        },
        {
          category: "Databases",
          icon: "fas fa-database",
          list: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"]
        },
        {
          category: "Cloud & DevOps",
          icon: "fas fa-cloud",
          list: ["Docker", "AWS", "Google Cloud", "Kubernetes"]
        },
      ]
    };
  }
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

.skills__container {
  max-width: 1000px;
  margin: auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.skills__group {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.skills__group:hover {
  transform: translateY(-5px);
}

.skills__category {
  font-size: 1.2rem;
  font-weight: 600;
  color: #293251;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.skills__category i {
  color: #654ef0;
}

.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background-color: #e3e9ff;
  color: #2949c6;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tag:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px rgba(101, 78, 240, 0.3);
}
</style>
