<template>
  <div id="app">
    <Navbar />
    <AboutMe id="aboutme" />
    <Skills id="skills" />
    <Projects id="projects" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navbar";

import AboutMe from "./components/aboutMe";

import Skills from "./components/skills";

import Projects from "./components/projects";

import Contact from "./components/contact";

import Footer from "./components/footer";

export default {
  name: "App",
  components: {
    Navbar,
    AboutMe,
    Skills,
    Projects,
    Contact,
    Footer,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
