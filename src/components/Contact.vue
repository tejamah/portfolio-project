<template>
  <section class="contact section" id="contact">
    <h2 class="section-title" data-aos="fade-up">📬 Contact Me</h2>
    <form class="contact__form" @submit.prevent="handleSubmit">
      <input v-model="form.name" type="text" placeholder="Your Name" required />
      <input v-model="form.email" type="email" placeholder="Your Email" required />
      <textarea v-model="form.message" rows="5" placeholder="Your Message" required></textarea>
      <button type="submit" class="btn">Send Message</button>
      <p v-if="successMsg" class="success">{{ successMsg }}</p>
      <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    </form>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      successMsg: '',
      errorMsg: '',
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('https://portfolio-project-backend-8qk9.onrender.com/api/contact', this.form);
        this.successMsg = "✅ Message sent successfully!";
        this.errorMsg = "";
        this.form.name = this.form.email = this.form.message = '';
      } catch (error) {
        this.errorMsg = "❌ Failed to send message. Try again later.";
        this.successMsg = "";
      }
    },
  },
};
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}
.contact__form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.contact__form input,
.contact__form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.btn {
  background-color: #4070f4;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
}
.success {
  color: green;
  text-align: center;
}
.error {
  color: red;
  text-align: center;
}
</style>
