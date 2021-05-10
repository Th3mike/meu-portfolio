<template>
  <div id="app">
    <Navbar />
    <Eu />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './pages/Home'

import Navbar from './components/navbar'

import Eu from './components/eu'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    Eu
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
