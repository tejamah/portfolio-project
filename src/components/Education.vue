<template>
  <section class="education section" id="education">
    <h2 class="section-title" data-aos="fade-up">Education</h2>

    <div class="education-container" data-aos="fade-up" data-aos-delay="100">
      <div
        v-for="(item, index) in education"
        :key="index"
        class="education-card"
      >
        <div class="education-logo">
          <img :src="item.img" :alt="`${item.institution} logo`" />
        </div>

        <div class="education-content">
          <h3 class="education-institution">{{ item.institution }}</h3>
          <p class="education-degree">{{ item.degree }}</p>
          <p class="education-year">{{ item.year }}</p>
          <p v-if="item.location" class="education-location">{{ item.location }}</p>
        </div>
      </div>
    </div>

    <div class="coursework" data-aos="fade-up" data-aos-delay="150">
      <h3>Relevant Coursework</h3>
      <p>
        Advanced Algorithms | Artificial Intelligence | Machine Learning |
        Distributed Systems | Database Systems | Software Engineering
      </p>
    </div>
  </section>
</template>

<script>
import PaceImage from "@/assets/Images/Pace.png";
import NyitImage from "@/assets/Images/Nyit.png";
import ATRIImage from "@/assets/Images/ATRI.png";

export default {
  name: "Education",
  data() {
    return {
      education: [
        {
          img: PaceImage,
          institution:
            "Pace University, Seidenberg School of Computer Science and Information Systems",
          degree:
            "PhD in Computer Science (Focus: Artificial Intelligence & Systems)",
          year: "Expected 2030",
          location: "New York, NY",
        },
        {
          img: NyitImage,
          institution: "New York Institute of Technology",
          degree:
            "Master of Science in Computer & Information Sciences | GPA: 3.57",
          year: "2024",
          location: "New York, NY",
        },
        {
          img: ATRIImage,
          institution: "Aurora's Technological & Research Institute",
          degree:
            "Bachelor of Technology in Computer Science & Engineering | GPA: 3.52",
          year: "2020",
          location: "Hyderabad, India",
        },
      ],
    };
  },
};
</script>

<style scoped>
.education {
  background: transparent;
}

.education-container {
  max-width: 1040px;
  margin: 0 auto;
  display: grid;
  gap: 24px;
}

.education-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 22px;
  padding: 22px;
  box-shadow: var(--shadow-soft);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(16px);
}

.education-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}

.education-logo {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background: #ffffff;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.education-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.education-content {
  flex: 1;
}

.education-institution {
  font-size: 1.25rem;
  font-weight: 850;
  color: var(--ink);
  margin-bottom: 8px;
}

.education-degree {
  font-size: 1rem;
  color: var(--muted);
  margin-bottom: 6px;
  line-height: 1.6;
}

.education-year,
.education-location {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--blue);
  margin-bottom: 4px;
}

.coursework {
  max-width: 1000px;
  margin: 28px auto 0;
  padding: 22px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 22px;
  box-shadow: var(--shadow-soft);
  text-align: center;
}

.coursework h3 {
  color: var(--ink);
  margin-bottom: 10px;
}

.coursework p {
  color: var(--muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .education-card {
    flex-direction: column;
    text-align: center;
  }

  .education-logo {
    width: 70px;
    height: 70px;
  }
}
</style>
