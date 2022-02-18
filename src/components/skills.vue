<template>
  <div class="container margin-custom">
    <h1 class="display-2 mb-5">{{ $t("message.skills")}}</h1>
    <div class="d-flex justify-content-center">
      <div class="">
        <h1>{{ $t("message.competences")}}</h1>
        <ol class="list-group align-items-center">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ $t("message.teamWork")}}</div>
              <p>{{ $t("message.teamWorkSub")}}</p>
            </div>
            <span class="badge bg-primary rounded-pill">100%</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">Microsoft Office</div>
              <p>{{ $t("message.microsoftOfficeSub")}}</p>
            </div>
            <span class="badge bg-primary rounded-pill">95%</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ $t("message.proactive")}}</div>
              <p>{{ $t("message.proactiveSub")}}</p>
            </div>
            <span class="badge bg-primary rounded-pill">99%</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ $t("message.multitasking")}}</div>
              <p>{{ $t("message.multitaskingSub")}}</p>
            </div>
            <span class="badge bg-primary rounded-pill">99%</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ $t("message.effectivecommunication")}}</div>
              <p>{{ $t("message.effectivecommunicationSub")}}</p>
            </div>
            <span class="badge bg-primary rounded-pill">100%</span>
          </li>
        </ol>
      </div>
      <!--- Segunda Div --->
      <div class>
        <h1>{{ $t("message.languageSkills")}}</h1>
        <ol class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">HTML</div>
              <p>{{ $t("message.languageHtmlSub")}}</p>
            </div>
            <span class="badge bg-primary rounded-pill">100%</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">CSS</div>
              <p>{{ $t("message.languageCssSub")}}</p>
            </div>
            <span class="badge bg-primary rounded-pill">80%</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">Bootstrap & Tailwind</div>
              <p>{{ $t("message.languageBootstrapSub")}}</p>
            </div>
            <span class="badge bg-primary rounded-pill">99%</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">JavaScript</div>
              <p>{{ $t("message.languageJsSub")}}</p>
            </div>
            <span class="badge bg-primary rounded-pill">80%</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">React & Vue</div>
              <p>{{ $t("message.languageReactSub")}}</p>
            </div>
            <span class="badge bg-primary rounded-pill">75%</span>
          </li>
        </ol>
      </div>
    </div>
    <!--- Fim da Segunda Div --->
  </div>
</template>

<style>
ol, li {
  margin-top: 10px;
  margin-bottom: 10px;
}
.margin-custom {
  margin-top: 5%;
  margin-bottom: 5%;
}
@media only screen and (max-width: 600px) {
  ol, li  {
    width: 200px;
    height: 100%;
    flex-direction: column;
  }
  .margin-custom {
  margin-top: 25%;
  margin-bottom: 25%;
}
}
</style>