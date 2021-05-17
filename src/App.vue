<template>
  <div id="app">
    <Navbar />
    <Eu />
    <Skills />
    <Works />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/navbar'

import Eu from './components/eu'

import Skills from './components/skills'

import Works from './components/works'

import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Eu,
    Skills,
    Works,
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
