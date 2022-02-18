<template>
  <header>
    <nav class="navbar fixed-top" :class="{ onScroll: !view.topOfPage }">
      <div class="container-fluid d-flex justify-content-start mt-3">
        <a href="#" class="navbar-brand" v-scroll-to="'#skills'">
          <p class="mobile-font border-bottom-custom">
            {{ $t("message.nav1") }}
          </p></a
        >
        <a href="#" class="navbar-brand" v-scroll-to="'#projects'">
          <p class="mobile-font border-bottom-custom">
            {{ $t("message.nav2") }}
          </p></a
        >
        <a href="#" class="navbar-brand" v-scroll-to="'#contact'">
          <p class="mobile-font border-bottom-custom">
            {{ $t("message.nav3") }}
          </p></a
        >
        <div class="dropdown position-absolute bottom-0 end-0 m-2">
          <button
            class="container-fluid btn dropdown-toggle navbar-brand mobile-font dropdown-custom"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ $t("message.language") }}
          </button>
          <ul
            class="dropdown-menu dropdown-custom"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a type="submit" @click="$i18n.locale = 'pt-br'">
                <img src="../assets/brazil.jpg" alt="Brazil" class="flag m-1" />
                {{ $t("message.languagePT") }}
              </a>
            </li>
            <li>
              <a type="submit" @click="$i18n.locale = 'en'">
                <img
                  src="../assets/usa.jpg"
                  alt="United States"
                  class="flag m-1"
                />
                {{ $t("message.languageEN") }}
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
header nav div a p:hover {
  color: transparent;
  background: #666666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
}
.flag {
  width: 50px;
  height: 100%;
}
nav {
  transition: all 0.2s ease-in-out;
}
.onScroll {
  box-shadow: 0 0 10px #aaa;
  background-color: rgb(214, 214, 214);
}
.border-bottom-custom:after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #000;
  transition: width 0.3s;
}
.border-bottom-custom:hover:after {
  width: 100%;
  transition: width 0.3s;
}


@media only screen and (max-width: 600px) {
  img {
    width: 100px;
  }
  header,
  nav,
  div {
    justify-content: start;
  }
  .mobile-font {
    font-size: 15px;
  }
  .dropdown-custom {
    margin-bottom: -10px;
    width: 350px;
  }
}
</style>