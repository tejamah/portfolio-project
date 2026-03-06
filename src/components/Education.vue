<template>
  <section class="education section" id="education">
    <h2 class="section-title" data-aos="fade-up">🎓 Education</h2>

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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NyitImage from "@/assets/Images/Nyit.png";
import ATRIImage from "@/assets/Images/ATRI.png";
import SchoolImage from "@/assets/Images/school.jpg";

export default {
  name: "Education",
  data() {
    return {
      education: [
        {
          img: NyitImage,
          institution: "New York Institute of Technology",
          degree: "Master of Science in Computer and Information Science",
          year: "2024",
        },
        {
          img: ATRIImage,
          institution: "Aurora Technological and Research Institute",
          degree: "Bachelor of Technology in Computer Science",
          year: "2020",
        },
        {
          img: SchoolImage,
          institution: "MJPBCWRES School",
          degree: "High School",
          year: "2014",
        },
      ],
    };
  },
};
</script>

<style scoped>
.education {
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

.education-container {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  gap: 24px;
}

.education-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #ffffff;
  border-radius: 16px;
  padding: 22px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.education-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.education-logo {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background: #f4f8ff;
  border-radius: 14px;
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
  font-weight: 700;
  color: #293251;
  margin-bottom: 8px;
}

.education-degree {
  font-size: 1rem;
  color: #555;
  margin-bottom: 6px;
  line-height: 1.6;
}

.education-year {
  font-size: 0.95rem;
  font-weight: 600;
  color: #4070f4;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

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