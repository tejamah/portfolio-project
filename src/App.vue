<template>
  <div :class="{ dark: isDarkMode }" id="app">
    <Header @toggle-dark="toggleDarkMode" />
    <main>
      <Home />
      <About />
      <Education />
      <Skills />
      <Portfolio />
      <!-- <Weather /> --> <!-- Removed this -->
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue';
import Portfolio from './components/Portfolio.vue';
// import Weather from './components/Weather.vue'; // ❌ Remove this line
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
  components: {
    Header,
    Home,
    About,
    Education,
    Skills,
    Portfolio,
    Contact,
    Footer,
  },
};
</script>
