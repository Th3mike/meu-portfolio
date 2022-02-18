<template>
  <div class="container margin-custom">
    <h1 class="display-2 mb-5">{{ $t("message.projects") }}</h1>
    <div class="d-flex justify-content-evenly">
      <div class="imagem">
        <img
          src="../assets/img01.jpg"
          class="image rounded"
          alt="Primeiro projeto"
        />
        <div class="overlay">
          <div class="text">
            <p>
              {{ $t("message.projectSub1") }}
            </p>
            <a
              v-bind:href="'https://github.com/Th3mike/meu-portfolio'"
              class="text-decoration-underline"
              target="_blank"
              >{{ $t("message.gitHub1") }}
            </a>
          </div>
        </div>
      </div>
      <div class="imagem">
        <img
          src="../assets/img02.jpg"
          class="image rounded"
          alt="Stacy-Store"
        />
        <div class="overlay">
          <div class="text">
            <p>
               {{ $t("message.projectSub2") }}
            </p>
            <a
              v-bind:href="'https://github.com/Th3mike/projeto-integrador'"
              class="text-decoration-underline"
              target="_blank"
              >{{ $t("message.gitHub2") }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <hr class="style13" />
    <!--- Segunda box --->
    <div class="d-flex justify-content-evenly">
      <div class="imagem">
        <img
          src="../assets/img03.jpg"
          class="image rounded"
          alt="Primeiro projeto"
        />
        <div class="overlay">
          <div class="text">
            <p>
               {{ $t("message.projectSub3") }}
            </p>
            <a
              v-bind:href="'https://github.com/Th3mike/primeiro-semestre'"
              class="text-decoration-underline"
              target="_blank"
              >{{ $t("message.gitHub3") }}</a
            >
          </div>
        </div>
      </div>
      <div class="imagem">
        <img
          src="../assets/img04.jpg"
          class="image rounded"
          alt="React"
        />
        <div class="overlay">
          <div class="text">
            <p>
               {{ $t("message.projectSub4") }}
            </p>
            <a
              v-bind:href="'https://github.com/wyvern800/per-front'"
              class="text-decoration-underline"
              target="_blank"
              >{{ $t("message.gitHub4") }}</a
            >
          </div>
        </div>
      </div>

            <div class="imagem">
        <img
          src="../assets/img07.jpg"
          class="image rounded h-100"
          alt="React"
        />
        <div class="overlay">
          <div class="text">
            <p>
               {{ $t("message.projectSub8") }}
            </p>
            <a
              v-bind:href="'https://rsps-website.netlify.app/'"
              class="text-decoration-underline"
              target="_blank"
              >{{ $t("message.gitHub8") }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <!--- Fim da segunda box --->
    <hr class="style13" />
        <!--- terceira box --->
    <div class="d-flex justify-content-evenly">
      <div class="imagem">
        <img
          src="../assets/img05.jpg"
          class="image rounded h-100"
          alt="Naruto Arena"
        />
        <div class="overlay">
          <div class="text">
            <p>
               {{ $t("message.projectSub5") }}
            </p>
            <a
              v-bind:href="'https://naruto-arena-br.netlify.app/'"
              class="text-decoration-underline"
              target="_blank"
              >{{ $t("message.gitHub5") }}</a
            >
          </div>
        </div>
      </div>
       <!--- terceira box --->
      <div class="imagem">
        <img
          src="../assets/img06.jpg"
          class="image rounded"
          alt="React"
        />
        <div class="overlay">
          <div class="text">
            <p>
               {{ $t("message.projectSub6") }}
            </p>
            <a
              v-bind:href="'https://naruto-arena-br.herokuapp.com/'"
              class="text-decoration-underline"
              target="_blank"
              >{{ $t("message.gitHub6") }}</a
            >
          </div>
        </div>
      </div>
             <!--- quarta box --->
      <div class="imagem">
        <img
          src="../assets/onyxiascholarship.jpg"
          class="image rounded"
          alt="React"
        />
        <div class="overlay">
          <div class="text">
            <p>
               {{ $t("message.projectSub7") }}
            </p>
            <a
              v-bind:href="'https://onyxiascholarship.netlify.app/'"
              class="text-decoration-underline"
              target="_blank"
              >{{ $t("message.gitHub7") }}</a
            >
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style>
hr.style13 {
  border: 0;
  border-top: 3px double #8c8c8c;
}

ul,
li {
  list-style: none;
}
.imagem {
  position: relative;
  cursor: pointer;
}

.image {
  display: block;
  width: 370px;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #dadada;
}

.imagem:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .image {
    width: 150px;
    height: auto;
    margin: 5px;
  }
  .text {
    font-size: 8px;
    top: 57.5%;
    left: 50%;
  }
}
</style>