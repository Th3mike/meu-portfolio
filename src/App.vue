<template>
  <div id="app">
    <Navbar />
    <Eu />
    <Skills id="skills"/>
    <Works id="works"/>
    <Contact id="contact"/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/navbar'

import Eu from './components/eu'

import Skills from './components/skills'

import Works from './components/works'

import Contact from './components/contact'

import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Eu,
    Skills,
    Works,
    Contact,
    Footer
  }
}
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
