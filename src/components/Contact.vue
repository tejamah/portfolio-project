<template>
  <section class="contact section" id="contact">
    <h2 class="section-title">
      <span class="emoji">📬</span> Contact Me
    </h2>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <input type="text" v-model="name" placeholder="Your Name" required />
      <input type="email" v-model="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <p v-if="statusMessage" class="status-message">{{ statusMessage }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      statusMessage: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch("https://portfolio-project-backend-8qk9.onrender.com/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });

        const result = await response.json();
        this.statusMessage = result.message;

        if (response.ok) {
          this.name = "";
          this.email = "";
          this.message = "";
        }
      } catch (error) {
        this.statusMessage = "Something went wrong. Try again later.";
      }
    },
  },
};
</script>

<style scoped>
.section {
  padding: 60px 20px;
  background: #fff;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 40px;
}

.emoji {
  display: inline-block;
  margin-right: 8px;
}

.contact-form {
  max-width: 500px;
  margin: 0 auto;
  background: #f9f9f9;
  padding: 25px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.contact-form textarea {
  height: 120px;
  resize: none;
}

.contact-form button {
  width: 100%;
  padding: 14px;
  background-color: #7300ff;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #5900cc;
}

.status-message {
  margin-top: 15px;
  color: #444;
  font-weight: 500;
}
</style>
