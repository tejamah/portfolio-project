<template>
  <section class="skills section" id="skills">
    <div class="container">
      <div class="app-title">
        <p>Skills</p>
      </div>
      <div class="skills__container">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="skills__box"
        >
          <p class="skills__subtitle">{{ skill.category }}</p>
          <ul class="skills__list">
            <li v-for="(item, i) in skill.list" :key="i" class="skills__name">
              {{ item }}
            </li>
          </ul>
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
      // Skills data with categories and lists
      skills: [
        {
          category: "Development",
          list: [
            "C++",
            "C",
            "HTML",
            "CSS",
            "JavaScript",
            "Java",
            "React Native",
            "React",
            "Vue",
            "TypeScript",
            "Bash",
            "Go",
          ],
        },
        {
          category: "Machine Learning",
          list: ["Python", "Tableau", "BigData", "Pandas", "Numpy", "Seaborn"],
        },
        {
          category: "Database",
          list: ["SQL", "NoSQL", "MongoDB", "MariaDB", "Firebase"],
        },
        {
          category: "Cloud",
          list: ["Docker", "AWS", "Google Cloud", "Kubernetes"],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Container styles */
.container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center content */
}

/* Title styles */
.app-title {
  text-align: center;
  background-color: #e3f2fd;
  padding: 15px 0;
  border-radius: 10px 10px 0 0;
}

.app-title p {
  font-size: 1.6em;
  color: #2c3e50;
  font-weight: bold;
  margin: 0;
}

/* Skills container */
.skills__container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Center skills side by side */
  align-items: flex-start;
  padding: 20px 0;
}

/* Skills box styles */
.skills__box {
  flex: 1 1 300px;
  max-width: 300px;
  text-align: center; /* Center skill content */
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skills__subtitle {
  font-size: 1.3em;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
}

.skills__list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.skills__name {
  font-size: 1em;
  color: #555;
  margin-bottom: 5px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .skills__container {
    flex-direction: column;
    align-items: center;
  }

  .skills__box {
    max-width: 100%;
  }
}
</style>
