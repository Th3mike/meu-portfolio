<template>
  <div class="d-flex flex-column bd-highlight background">
    <div>
      <img
        src="../assets/foto-perfil.jpg"
        alt="Marcio Lacerda"
        class="rounded-circle"
      />
    </div>
    <div>
      <h1 class="display-3">{{ $t("message.about")}}</h1>
    </div>
    <div>
      <p class="h4">{{ $t("message.aboutme")}}</p>
      <p class="h4">{{ $t("message.aboutme2")}}</p>
    </div>
    <div class="d-flex justify-content-evenly size">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-envelope-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
          />
        </svg>
        <h4>E-mail</h4>
        <a v-bind:href="'mailto:maarcio_lacerda@hotmail.com'">
          <p>Maarcio_lacerda@hotmail.com</p>
        </a>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
          />
        </svg>
        <h4>{{ $t("message.phone")}}</h4>
        <a
          v-bind:href="'https://api.whatsapp.com/send?phone=5516988724138&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20irei%20te%20responder%20assim%20que%20estiver%20com%20um%20tempinho!'"
          target="_blank"
          class="text-decoration-underline"
          ><p>+55 16 988724138</p></a
        >
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-linkedin"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
          />
        </svg>
        <h4>Linkedin</h4>
        <p>
          <a
            v-bind:href="'https://www.linkedin.com/in/marcio-lacerda-7a9425188/'"
            target="_blank"
            class="text-decoration-underline"
            >{{ $t("message.linkedin")}}</a
          >
          {{ $t("message.linkedin2")}}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
img {
  width: 200px;
  height: 100%;
}

.background {
  background-color: rgb(214, 214, 214);
}

h1,
h4,
p,
a {
  color: black;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.836);
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