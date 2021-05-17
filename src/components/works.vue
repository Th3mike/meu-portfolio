<template>
  <div class="container margin-custom">
    <h1>Projetos</h1>
    <div class="d-flex justify-content-evenly">
      <div class="imagem">
        <img
          src="../assets/image-01.png"
          class="image rounded"
          alt="Primeiro projeto"
        />
        <div class="overlay">
          <div class="text">
            <p>
              Meu primeiro projeto desenvolvido foi este site que você esta!
            </p>
            <p>
              E ainda te digo mais!
            </p>
            <p>
              <a
                v-bind:href="'https://github.com/Th3mike/meu-portfolio'"
                class="text-decoration-underline"
                target="_blank"
                >Clique aqui
              </a>
              para ver como foi feito no GitHub
            </p>
          </div>
        </div>
      </div>
      <div class="imagem">
        <img
          src="../assets/image-01.png"
          class="image rounded"
          alt="Primeiro projeto"
        />
        <div class="overlay">
          <div class="text">
            <p>
              Meu primeiro projeto desenvolvido foi este site que você esta!
              <br />
              E ainda te digo mais! Clique aqui para ver como foi feito no
              <a
                v-bind:href="'https://github.com/Th3mike/meu-portfolio'"
                class="text-decoration-underline"
                target="_blank"
                >GitHub!</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr class="style13" />
    <!--- Segunda box --->
    <div class="d-flex justify-content-evenly">
      <div class="imagem">
        <img
          src="../assets/image-01.png"
          class="image rounded"
          alt="Primeiro projeto"
        />
        <div class="overlay">
          <div class="text">
            <p>
              Meu primeiro projeto desenvolvido foi este site que você esta!
              <br />
              E ainda te digo mais! Clique aqui para ver como foi feito no
              <a
                v-bind:href="'https://github.com/Th3mike/meu-portfolio'"
                class="text-decoration-underline"
                target="_blank"
                >GitHub!</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="imagem">
        <img
          src="../assets/image-01.png"
          class="image rounded"
          alt="Primeiro projeto"
        />
        <div class="overlay">
          <div class="text">
            <p>
              Meu primeiro projeto desenvolvido foi este site que você esta!
              <br />
              E ainda te digo mais! Clique aqui para ver como foi feito no
              <a
                v-bind:href="'https://github.com/Th3mike/meu-portfolio'"
                class="text-decoration-underline"
                target="_blank"
                >GitHub!</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--- Fim da segunda box --->
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