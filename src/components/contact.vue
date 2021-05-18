<template>
  <div class="container">
    <form @submit.prevent="sendEmail">
      <label>{{ $t("message.contactName") }}</label>
      <input
        type="text"
        v-model="name"
        name="name"
        v-bind:placeholder="$t('message.contactNameInput')"
        @keypress="isLetter($event)"
        :maxlength="max"
      />
      <label>E-mail</label>
      <input
        type="email"
        v-model="email"
        name="email"
        v-bind:placeholder="$t('message.contactEmailInput')"
      />
      <label>{{ $t("message.contactMessage") }}</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        v-bind:placeholder="$t('message.contactMessageInput')"
      >
      </textarea>

      <input type="submit" v-bind:value="$t('message.contactButton')" />
    </form>
    <notifications position="top center" />
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      max: 15,
    };
  },
  methods: {
    sendEmail(e) {
      try {
        if (this.name && this.email && this.message) {
          emailjs.sendForm(
            "hotmail",
            "hotmail_template",
            e.target,
            "user_vFEf5mRjRACvYJAFbNSsI",
            {
              name: this.name,
              email: this.email,
              message: this.message,
            }
          );
          this.$notify({
            type: "success",
            title: "Sucesso",
            text: "Obrigado(a) pelo contato! Retornarei em breve!",
          });
          this.name = this.email = this.message = "";
        } else if (!this.name) {
          this.$notify(
            {
              type: "error",
              title: "Erro",
              text: "Insira seu nome corretamente!",
            },
            4000
          );
        } else if (!this.email) {
          this.$notify(
            {
              type: "error",
              title: "Erro",
              text: "Insira seu e-mail correto!",
            },
            4000
          );
        } else if (!this.message) {
          this.$notify(
            {
              type: "error",
              title: "Erro",
              text: "Insira sua mensagem!",
            },
            4000
          );
        }
      } catch (error) {
        console.log({ error });
      }
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z- ]+$/.test(char)) return true;
      else e.preventDefault();
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  float: left;
}
input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #82ce87;
}
.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: rgb(214, 214, 214);
  padding: 20px;
  width: 50%;
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>