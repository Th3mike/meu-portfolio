<template>
  <header>
    <nav
      class="navbar fixed-top"
      id="navbar"
      :class="{ onScroll: !view.topOfPage }"
    >
      <div class="container-fluid d-flex justify-content-evenly">
        <a href="#" class="navbar-brand" v-scroll-to="'#skills'">Skills</a>
        <a href="#" class="navbar-brand" v-scroll-to="'#works'">Projetos</a>
        <a href="#" class="navbar-brand" v-scroll-to="'#contact'">Contato</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
  },
};
</script>

<style>
nav {
  transition: all 0.2s ease-in-out;
}
.onScroll {
  box-shadow: 0 0 10px #aaa;
  background-color: rgb(255, 136, 0);
}
</style>