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
  font-family: 'Space Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slideInDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
