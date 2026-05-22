<template>
  <section class="skills section" id="skills">
    <h2 class="section-title" data-aos="fade-up">Technical Skills</h2>

    <div class="skills__container" data-aos="fade-up" data-aos-delay="100">
      <article
        v-for="(skillGroup, index) in skills"
        :key="index"
        class="skills__box"
      >
        <div class="skills__header">
          <i :class="skillGroup.icon" aria-hidden="true"></i>
          <h3 class="skills__subtitle">{{ skillGroup.category }}</h3>
        </div>
        <div class="skills__list">
          <span
            v-for="skill in skillGroup.list"
            :key="skill"
            class="skills__name"
          >
            {{ skill }}
          </span>
        </div>
      </article>
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
          category: "Programming Languages",
          icon: "fas fa-code",
          list: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
        },
        {
          category: "Python Frameworks",
          icon: "fas fa-layer-group",
          list: ["FastAPI", "Flask", "Django", "LangChain"],
        },
        {
          category: "AI / GenAI",
          icon: "fas fa-brain",
          list: [
            "LLM Integration",
            "RAG Pipelines",
            "AI Agents",
            "Hugging Face",
            "LoRA Fine-Tuning",
            "Mistral",
            "LLaMA 2",
            "FLAN-T5",
            "Prompt Engineering",
            "Conversational AI",
            "AI Evaluation",
          ],
        },
        {
          category: "Cloud & AWS",
          icon: "fas fa-cloud",
          list: [
            "AWS Lambda",
            "S3",
            "ECS",
            "API Gateway",
            "SQS",
            "SNS",
            "IAM",
            "CloudFormation",
            "RDS",
            "Amazon Bedrock",
            "Docker",
            "Kubernetes",
          ],
        },
        {
          category: "Microservices & APIs",
          icon: "fas fa-network-wired",
          list: [
            "REST APIs",
            "Distributed Systems",
            "Microservices Architecture",
            "API Design",
            "System Design",
          ],
        },
        {
          category: "Data Engineering & Analytics",
          icon: "fas fa-database",
          list: [
            "Pandas",
            "NumPy",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "DynamoDB",
          ],
        },
        {
          category: "DevOps & Frontend",
          icon: "fas fa-tools",
          list: [
            "Git",
            "Jenkins",
            "CI/CD Pipelines",
            "Linux/Unix",
            "Angular",
            "Node.js",
            "React",
            "Vue.js",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  background: transparent;
}

.skills__container {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.skills__box {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 22px;
  padding: 22px;
  text-align: left;
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(16px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skills__box::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: linear-gradient(180deg, var(--blue), var(--mint), var(--coral));
}

.skills__box:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.skills__header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.skills__header i {
  display: inline-grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 12px;
  background: rgba(37, 99, 235, 0.1);
  color: var(--blue);
  font-size: 1.2rem;
}

.skills__subtitle {
  color: var(--ink);
  font-size: 1.1rem;
  margin: 0;
  font-weight: 850;
}

.skills__list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skills__name {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  color: var(--muted);
  border: 1px solid var(--line);
  font-size: 0.9rem;
  line-height: 1.2;
}
</style>
