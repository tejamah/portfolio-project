<template>
  <section class="education">
    <div class="container">
      <div class="app-title">
        <p>Education</p>
      </div>
      <div class="education-container">
        <!-- Loop through education data -->
        <div
          v-for="(item, index) in education"
          :key="index"
          class="education-item"
        >
          <div class="education-content">
            <div class="education-img">
              <img :src="item.img" :alt="`${item.institution} Logo`" />
            </div>
            <p class="education-institution">{{ item.institution }}</p>
            <p class="education-degree">{{ item.degree }}</p>
            <p class="education-year">Graduated: {{ item.year }}</p>
          </div>
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
          year: 2024,
        },
        {
          img: ATRIImage,
          institution: "Aurora Technological and Research Institute",
          degree: "Bachelor of Technology in Computer Science",
          year: 2020,
        },
        {
          img: SchoolImage,
          institution: "MJPBCWRES School",
          degree: "High School",
          year: 2014,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* General container styles */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Title styles */
.app-title {
  background-color: #e3f2fd;
  padding: 15px 0;
  border-radius: 10px 10px 0 0;
  text-align: center;
}

.app-title p {
  font-size: 1.6em;
  color: #2c3e50;
  font-weight: bold;
  margin: 0;
}

/* Education container */
.education-container {
  padding: 20px;
  text-align: center;
}

/* Education item styles */
.education-item {
  margin-bottom: 30px;
}

.education-content {
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
}

.education-img img {
  width: 60px;
  height: auto;
  display: block;
  margin: 0 auto 10px;
}

.education-institution {
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: bold;
}

.education-degree {
  font-size: 1rem;
  color: #34495e;
}

.education-year {
  font-size: 0.9rem;
  color: #7f8c8d;
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 15px;
  }

  .education-content {
    padding: 15px;
  }

  .education-img img {
    width: 50px;
  }
}
</style>