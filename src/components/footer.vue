<template>
  <div class="footer-basic">
    <footer class="footer">
      <div class="social ">
        <a href="#"><i class="icon ion-social-instagram"></i></a>
        <a href="#"><i class="icon ion-social-facebook"></i></a>
      </div>
      <p class="copyright">
        {{ $t("message.footerCopyright") }}
        <br />
        {{ $t("message.footerDeveloped") }}
        <a
          v-bind:href="'https://github.com/Th3mike/'"
          target="_blank"
          class="text-decoration-underline"
          >Marcio Lacerda</a
        >
      </p>
      <a href="#" class="d-flex justify-content-center" v-scroll-to="'#navbar'">
        <button class="btn btn-dark mt-3 button-footer">{{ $t("message.back") }}</button></a
      >
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer-basic {
  padding: 40px 0;
  background-color: rgb(214, 214, 214);
  color: black;
}

.footer-basic .social {
  text-align: center;
  padding-bottom: 25px;
}

.footer-basic .social > a {
  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  border: 1px solid black;
  margin: 0 8px;
  color: inherit;
  opacity: 0.75;
}

.footer-basic .social > a:hover {
  opacity: 0.9;
}

.footer-basic .copyright {
  text-align: center;
  font-size: 13px;
  color: black;
  margin-bottom: 0;
}
</style>