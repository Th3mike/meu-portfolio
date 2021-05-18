import Vue from "vue";
import App from "./App.vue";
import Notifications from "vue-notification";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

Vue.config.productionTip = false;

Vue.use(Notifications);

var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

const messages = {
  en: {
    message: {
      language: "Languages",
      nav1: "About me",
      nav2: "Skills",
      nav3: "Projects",
      nav4: "Contact",
      about: "Who is Marcio?",
      aboutme:
        "A proactive person, very patient and who will never deliver your task/project after the deadline!",
        aboutme2:
        "Only 22 years old, studying Internet Systems at FATEC TAQUARITINGA.",
        phone: "Phone",
        linkedin: "Click here",
        linkedin2: "to see my profile",
        skills: "Skills",
        competences: "Competences",
        teamWork: "Team Work",
        teamWorkSub: "A very easy going person in a group and calm.",
        microsoftOfficeSub: "In the corporate environment it cannot be missing.",
        proactive: "Proactive",
        proactiveSub: "It takes steps to avoid or resolve future problems.",
        multitasking: "Multitasking Efficiency",
        multitaskingSub: "A person who performs multiple tasks without problems.",
        effectivecommunication: "Effective Communication",
        effectivecommunicationSub: "Communication bluntly, being straight to the point.",
      },
  },
  pt: {
    message: {
      language: "Idiomas",
      nav1: "Sobre mim",
      nav2: "Habilidades",
      nav3: "Projetos",
      nav4: "Contato",
      about: "Quem é Marcio?",
      aboutme: 
      "Uma pessoa pró-ativa, com muita paciência e que nunca irar entregar sua tarefa/projeto depois do prazo!",
      aboutme2: 
      "Com apenas 22 anos, cursando Sistemas para Internet na FATEC TAQUARITINGA.",
      phone: "Telefone",
      linkedin: "Clique aqui ",
      linkedin2: "para ver meu perfil",
      skills: "Habilidades",
      competences: "Competências",
      teamWork: "Trabalho em Equipe",
      teamWorkSub: "Uma pessoa muito fácil de lidar em grupo e calma.",
      microsoftOfficeSub: "Tenho conhecimento sobre as ferramentas Office.",
      proactive: "Pró-ativo",
      proactiveSub: "Adota medidas para evitar ou resolver problemas futuros.",
      multitasking: "Eficiência em multitarefas",
      multitaskingSub: "Capaz de realizar múltiplas tarefas ao mesmo tempo.",
      effectivecommunication: "Comunicação Efetiva",
      effectivecommunicationSub: "Comunicação sem rodeios, sendo direto ao ponto.",
    },
  },
};

const i18n = new VueI18n({
  locale: "en",
  messages,
});

new Vue({
  render: (h) => h(App),
  i18n,
}).$mount("#app");
