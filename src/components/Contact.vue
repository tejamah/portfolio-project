<template>
  <section class="contact section" id="contact">
    <h2 class="section-title" data-aos="fade-up">📬 Contact Me</h2>

    <!-- Contact Form -->
    <form class="contact__form" @submit.prevent="submitForm" data-aos="fade-up">
      <input type="text" placeholder="Your Name" v-model="name" required />
      <input type="email" placeholder="Your Email" v-model="email" required />
      <textarea rows="5" placeholder="Your Message" v-model="message" required></textarea>
      <button type="submit" class="btn">Send Message</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      alert(`Hi ${this.name}, your message has been sent!`);
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>

<style scoped>
.section {
  padding: 50px 20px;
  background: #ffffff;
}

.section-title {
  text-align: center;
  font-size: 2.3rem;
  margin-bottom: 10px; /* Small gap below heading */
  color: #2c3e50;
}

.contact__form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 5px; /* Minimal top gap from title */
}

.contact__form input,
.contact__form textarea {
  padding: 12px 15px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
  transition: border 0.2s ease;
}

.contact__form input:focus,
.contact__form textarea:focus {
  border-color: #654ef0;
}

.btn {
  background-color: #654ef0;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.btn:hover {
  background-color: #4836ba;
}
</style>
