<template>
  <header>
    <nav
      class="navbar fixed-top"
      id="navbar"
      :class="{ onScroll: !view.topOfPage }"
    >
      <div class="container-fluid d-flex justify-content-evenly">
        <a href="#" class="navbar-brand" v-scroll-to="'#aboutme'">{{
          $t("message.nav1")
        }}</a>
        <a href="#" class="navbar-brand" v-scroll-to="'#skills'">{{
          $t("message.nav2")
        }}</a>
        <a href="#" class="navbar-brand" v-scroll-to="'#projects'">{{
          $t("message.nav3")
        }}</a>
        <a href="#" class="navbar-brand" v-scroll-to="'#contact'">{{
          $t("message.nav4")
        }}</a>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle navbar-brand"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ $t("message.language") }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a type="submit" @click="$i18n.locale = 'pt-br'">
                <img src="../assets/brazil.jpg" alt="Brazil" class="flag m-1" />
                Brazil
              </a>
            </li>
            <li>
              <a type="submit" @click="$i18n.locale = 'en'">
                <img
                  src="../assets/usa.jpg"
                  alt="United States"
                  class="flag m-1"
                />
                United States
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "SelectLocale",
  data() {
    return {
      view: {
        topOfPage: true,
      },
      langs: ["en", "pt-br"],
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
.flag {
  width: 50px;
  height: 100%;
}
nav {
  transition: all 0.2s ease-in-out;
}
.onScroll {
  box-shadow: 0 0 10px #aaa;
  background-color: rgb(255, 136, 0);
}
@media only screen and (max-width: 600px) {
  img {
    width: 100px;
  }
  .size {
    flex-direction: column;
  }
}
</style>