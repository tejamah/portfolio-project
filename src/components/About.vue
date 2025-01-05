<template>
  <section class="about section" id="about">
    <h2 class="section-title">About Me</h2>
    <div class="about__container bd-grid">
      <div class="about__content">
        <h3 class="about__subtitle">Who I Am</h3>
        <p class="about__text">
          I'm a passionate software developer with a Master's in Computer Science from New York Institute of Technology. I specialize in full-stack web development, machine learning, and cloud technologies.
        </p>
        <h3 class="about__subtitle">What I Do</h3>
        <p class="about__text">
          I enjoy working with modern frameworks like Vue.js, React, and Node.js, and I am constantly exploring new technologies to enhance my skills. I love problem-solving and working on innovative projects.
        </p>
        <h3 class="about__subtitle"></h3>
        <ul class="about__list">
          <li>Full-Stack Web Development</li>
          <li>Machine Learning & AI</li>
          <li>Cloud Computing (AWS, GCP)</li>
          <li>Database Management (SQL, NoSQL)</li>
          <li>Mobile App Development (React Native)</li>
        </ul>

        <!-- Download Resume Section -->
        <div class="download-container">
          <a href="/public/resume/TEJA MAHESHWARA (5).pdf" download="Teja_Maheshwara_Resume.pdf" class="download-btn">
            Download My Resume
          </a>
        </div>
      </div>
      <div class="about__img">
        <img src="@/assets/Images/Teja_Profile_pic.jpg" alt="Profile Picture" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
/* Section styling */
.about {
  padding: 60px 20px;
  background-color: #f5f5f5;
  text-align: center; /* Center all content */
}

/* Container layout */
.about__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center children horizontally */
  align-items: center;
  gap: 20px;
}

/* Content Styling */
.about__content {
  flex: 1;
  max-width: 600px;
  text-align: center; /* Center text inside content */
}

.about__subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.about__text {
  font-size: 1.125rem; /* Equivalent to 18px */
  line-height: 1.6;
  margin-bottom: 15px;
  color: #555;
}

.about__list {
  list-style: none;
  padding: 0;
  margin: 15px 0;
}

.about__list li {
  font-size: 1rem; /* Equivalent to 16px */
  line-height: 1.6;
  margin-bottom: 10px;
  color: #555;
}

/* Image Styling */
.about__img {
  flex: 1;
  max-width: 400px;
  text-align: center;
}

.about__img img {
  width: 80%;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

/* Download Resume button */
.download-container {
  margin-top: 20px;
}

.download-btn {
  padding: 10px 20px;
  background-color: #4070f4;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.download-btn:hover {
  background-color: #293251;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about__container {
    flex-direction: column;
    text-align: center;
  }

  .about__content {
    max-width: 100%;
  }

  .about__img img {
    width: 60%;
  }
}
</style>
