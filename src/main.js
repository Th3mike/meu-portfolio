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
      languagePT: "Portuguese",
      languageEN: "English",
      nav1: "Skills",
      nav2: "Projects",
      nav3: "Contact",
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
        languageSkills: "Languages",
        languageHtmlSub: "Knowledge about this beautiful markup language.",
        languageCssSub: "Intermediate knowledge of Cascading Style Sheets.",
        languageBootstrapSub: "Both are used in almost all of my projects, see projects",
        languageJsSub: "Intermediate knowledge ready to be evolved. Lets go",
        languageReactSub: "Training, I have beginner/intermediate knowledge. ;)",
        projects: "Projects",
        projectSub1: "My first project developed was this site that you are on!",
        gitHub1: "Click here",
        projectSub2: "Project developed by 2 more people about a college job.",
        gitHub2: "Click here",
        projectSub3: "First contact with programming.",
        gitHub3: "Click here",
        projectSub4: "Application made with React JS with a friend.",
        gitHub4: "Click here",
        contactName: "Name",
        contactNameInput: "Your name",
        contactEmailInput: "Your e-mail",
        contactMessage: "Message",
        contactMessageInput: "Your message",
        contactButton: "Send",
        footerCopyright: "Copyright ©2021 All rights reserved.",
        footerDeveloped: "Developed by ",
        back: "Back to top",
      },
  },
  pt: {
    message: {
      language: "Idiomas",
      languagePT: "Português",
      languageEN: "Inglês",
      nav1: "Habilidades",
      nav2: "Projetos",
      nav3: "Contato",
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
      languageSkills: "Linguagens",
      languageHtmlSub: "Conhecimento sobre essa bela linguagem de marcação.",
      languageCssSub: "Conhecimento intermediário de Cascading Style Sheets.",
      languageBootstrapSub: "Ambos são utilizados em quase todos os meus projetos.",
      languageJsSub: "Conhecimento intermediário pronto para ser evoluído. ;)",
      languageReactSub: "Treinando, tenho conhecimento iniciante/intermediário.",
      projects: "Projetos",
      projectSub1: "Meu primeiro projeto desenvolvido foi este site que você esta!",
      gitHub1: "Clique aqui",
      projectSub2: "Projeto desenvolvido por mais 2 pessoas sobre um trabalho da faculdade.",
      gitHub2: "Clique aqui",
      projectSub3: "Primeiro contato com programação.",
      gitHub3: "Clique aqui",
      projectSub4: "Aplicação feita com React JS com um amigo.",
      gitHub4: "Clique aqui",
      contactName: "Nome",
      contactNameInput: "Seu nome",
      contactEmailInput: "Seu e-mail",
      contactMessage: "Mensagem",
      contactMessageInput: "Sua mensagem",
      contactButton: "Enviar",
      footerCopyright: "Copyright ©2021 Todos os direitos reservados.",
      footerDeveloped: "Desenvolvido por ",
      back: "Voltar ao topo",
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
