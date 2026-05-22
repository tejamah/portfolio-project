<template>
  <section class="contact section" id="contact">
    <h2 class="section-title">Contact</h2>

    <div class="contact__details">
      <a href="mailto:tm55063p@pace.edu">tm55063p@pace.edu</a>
      <a href="tel:+12014863082">201-486-3082</a>
      <span>Bayonne, NJ 07002</span>
    </div>

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
  name: "Contact",
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
  background: transparent;
  text-align: center;
}

.contact__details {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 20px;
  margin: 0 auto 28px;
  color: var(--muted);
  font-weight: 800;
}

.contact__details a {
  color: var(--blue);
}

.contact-form {
  max-width: 500px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.78);
  padding: 25px 30px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.76);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(16px);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 20px;
  border: 1px solid var(--line);
  border-radius: 14px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
}

.contact-form textarea {
  height: 120px;
  resize: none;
}

.contact-form button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, var(--blue), var(--cyan));
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background: linear-gradient(135deg, var(--blue), var(--mint));
}

.status-message {
  margin-top: 15px;
  color: var(--muted);
  font-weight: 500;
}
</style>
