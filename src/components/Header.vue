<template>
  <header class="l-header">
    <nav class="nav bd-grid">
      <!-- Left section with weather -->
      <div class="nav__left">
        <Weather class="weather__compact" />
      </div>

      <!-- Center section with logo -->
      <div>
        <a href="#" class="nav__logo"></a>
      </div>

      <!-- Right section with menu -->
      <div class="nav__menu" :class="{ show: menuVisible }" id="nav-menu">
        <ul class="nav__list">
          <li v-for="link in navLinks" :key="link.name" class="nav__item">
            <a :href="link.href" class="nav__link" @click="closeMenu">{{ link.name }}</a>
          </li>
        </ul>
      </div>

      <!-- Mobile toggle button -->
      <div class="nav__toggle" id="nav-toggle" @click="toggleMenu">
        <i class="bx bx-menu"></i>
      </div>
    </nav>
  </header>
</template>

<script>
import Weather from "@/components/Weather.vue"; // Adjust the path if necessary

export default {
  name: "Header",
  components: {
    Weather,
  },
  data() {
    return {
      menuVisible: false,
      navLinks: [
        { name: "Home", href: "#home" },
        { name: "Education", href: "#education" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Portfolio", href: "#Portfolio" },
        { name: "Contact", href: "#contact" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    closeMenu() {
      this.menuVisible = false;
    },
  },
};
</script>

<style scoped>
/* Header styling */
.l-header {
  width: 100%;
  position: static;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #333 0%, #000 100%);
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
}

.nav__left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.weather__compact {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0px;
  padding: 0px 0px;
  font-size: 0.9rem;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.weather__compact:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav__logo {
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

.nav__menu {
  display: flex;
  align-items: center;
}

.nav__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav__item {
  margin: 0 15px;
}

.nav__link {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.nav__link:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}

.nav__toggle {
  display: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav__menu {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    width: 100%;
    height: calc(100vh - 60px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .nav__menu.show {
    transform: translateX(0);
  }

  .nav__item {
    margin: 20px 0;
  }

  .nav__toggle {
    display: block;
  }
}
</style>
