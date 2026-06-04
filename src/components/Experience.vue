<template>
  <section class="experience section" id="experience">
    <h2 class="section-title" data-aos="fade-up">Professional Experience</h2>

    <div class="experience__timeline" data-aos="fade-up" data-aos-delay="100">
      <article
        v-for="role in roles"
        :key="`${role.company}-${role.period}`"
        class="experience__card"
      >
        <div class="experience__header">
          <div>
            <h3>{{ role.company }}</h3>
            <p class="experience__title">{{ role.title }}</p>
          </div>
          <div class="experience__meta">
            <span>{{ role.location }}</span>
            <span>{{ role.period }}</span>
          </div>
        </div>

        <ul class="experience__bullets">
          <li v-for="point in role.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </div>

    <div class="leadership" data-aos="fade-up" data-aos-delay="150">
      <h3>Leadership</h3>
      <p>
        Advantage Care Group Team Lead | Sep 2024 - May 2025: led a 4-engineer
        backend team, defined service architecture, designed AI-driven
        automation frameworks, and reduced feature delivery cycles by 25%.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      roles: [
        {
          company:
            "2026 IEEE International Conference on Human-Machine Systems (ICHMS), NTU Singapore",
          title: "Reviewer - Internship",
          location: "Remote",
          period: "May 2026 - Present",
          points: [
            "Invited reviewer evaluating research submissions in human-machine interaction, telepresence systems, virtual reality, embodiment, and intelligent systems.",
            "Provided technical assessments of methodology, novelty, scientific rigor, and relevance to conference themes.",
          ],
        },
        {
          company: "Algorithm",
          title: "Full Stack Developer",
          location: "Jersey City, NJ",
          period: "Jul 2025 - Jan 2026",
          points: [
            "Engineered full-stack features for a financial services web application using React, TypeScript, Java, Spring Boot, and Python automation.",
            "Developed Python-based backend services and FastAPI APIs for scalable enterprise data workflows and automation systems.",
            "Designed microservices architectures, integrated RESTful APIs, and optimized backend response times by approximately 30-40% under peak load.",
            "Worked with Docker, CI/CD pipelines, and AWS environments to improve deployment reliability and production system performance.",
          ],
        },
        {
          company: "Advantage Care Group",
          title: "Full Stack Developer",
          location: "Mt Pocono, PA",
          period: "Sep 2024 - May 2025",
          points: [
            "Designed and optimized RESTful APIs with Java and Spring Boot for healthcare systems serving daily users.",
            "Improved API response times by 30-40% through query optimization, indexing, and backend workflow improvements.",
            "Containerized backend services with Docker and streamlined CI/CD pipelines for reliable deployments.",
            "Optimized SQL Server procedures, Entity Framework Core queries, and high-volume transactional workflows handling sensitive patient data.",
          ],
        },
        {
          company: "SKIMBOX",
          title: "Full Stack Developer",
          location: "Lake Harmony, PA",
          period: "May 2023 - Apr 2024",
          points: [
            "Developed scalable backend services and microservices for customer-facing web applications.",
            "Refactored legacy service logic to improve maintainability and reduce production defects through stronger test coverage.",
            "Optimized MongoDB schemas and queries, reducing report and inventory load times by more than 35%.",
            "Implemented secure RESTful endpoints and Redux-based state management to keep operational data synchronized in real time.",
          ],
        },
        {
          company: "Industry Experts",
          title: "Full Stack Developer",
          location: "Hyderabad, TS",
          period: "Oct 2020 - Apr 2022",
          points: [
            "Developed and maintained backend services for a multi-tenant enterprise web application in the financial sector.",
            "Designed secure RESTful APIs with Spring MVC and Hibernate to connect client-facing UI with internal microservices.",
            "Optimized Oracle schemas and complex SQL queries to improve report generation and retrieval speed.",
            "Containerized backend services with Docker and supported Jenkins CI/CD jobs for automated deployments.",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience {
  background: transparent;
}

.experience__timeline {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 22px;
}

.experience__card,
.leadership {
  position: relative;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 24px;
  padding: 24px;
  text-align: left;
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(16px);
}

.experience__card::before {
  content: "";
  position: absolute;
  top: 26px;
  left: -8px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: var(--mint);
  box-shadow: 0 0 0 8px rgba(16, 185, 129, 0.12);
}

.experience__header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 16px;
}

.experience__header h3 {
  color: var(--ink);
  margin: 0 0 6px;
  font-weight: 850;
}

.experience__title {
  color: var(--blue);
  font-weight: 850;
}

.experience__meta {
  display: grid;
  gap: 4px;
  color: var(--muted);
  font-size: 0.92rem;
  text-align: right;
  min-width: 170px;
}

.experience__bullets {
  display: grid;
  gap: 10px;
  padding-left: 20px;
  color: var(--muted);
  line-height: 1.6;
  list-style: disc;
}

.leadership {
  max-width: 1100px;
  margin: 26px auto 0;
}

.leadership h3 {
  color: var(--ink);
  margin-bottom: 8px;
  font-weight: 850;
}

.leadership p {
  color: var(--muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .experience__header {
    flex-direction: column;
  }

  .experience__meta {
    text-align: left;
  }
}
</style>
