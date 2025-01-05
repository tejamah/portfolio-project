<template>
  <section class="contact section" id="contact">
    <h2 class="section-title">Contact</h2>
    <div class="contact__container">
      <form
        action="https://getform.io/f/azyylgmb"
        method="POST"
        class="contact__form"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          class="contact__input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          class="contact__input"
          required
        />
        <textarea
          cols="0"
          rows="10"
          placeholder="Message"
          name="message"
          class="contact__input"
          required
        ></textarea>
        <button type="submit" class="contact__button">Enquire</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
/* Container for the contact section */
.contact {
  padding: 60px 20px;
  background-color: #f4f9ff;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #293251;
  font-weight: bold;
}

/* Contact form container styling */
.contact__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* Contact form styling */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Input fields and textarea styling */
.contact__input {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.contact__input:focus {
  border-color: #4070f4;
  box-shadow: 0 0 4px rgba(64, 112, 244, 0.5);
}

/* Submit button styling */
.contact__button {
  padding: 12px 20px;
  background-color: #4070f4;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact__button:hover {
  background-color: #293251;
}

/* Responsive design */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .contact__form {
    padding: 20px;
    width: 90%;
  }

  .contact__input,
  .contact__button {
    font-size: 0.9rem;
  }
}
</style>
