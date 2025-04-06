<template>
  <header class="header">
    <div class="logo">Teja Portfolio</div>

    <div class="social-icons">
      <a href="https://www.linkedin.com/in/teja-maheshwara/" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/tejamah" target="_blank" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://huggingface.co/teja00007" target="_blank" aria-label="Hugging Face">
        <img
          src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
          alt="Hugging Face"
          class="hug-icon"
        />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
}

.social-icons {
  display: flex;
  gap: 16px;
  align-items: center;
}

.social-icons a {
  color: #333;
  font-size: 1.3rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #654ef0;
}

.hug-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  filter: grayscale(0.2);
  transition: filter 0.3s ease;
}

.hug-icon:hover {
  filter: grayscale(0);
}
</style>
