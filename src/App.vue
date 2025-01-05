<template>
  <div id="app">
    <Header />
    <main>
      <Home />
      <About />
      <Education />
      <Skills />
      <Portfolio />
      <Weather />
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
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
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
