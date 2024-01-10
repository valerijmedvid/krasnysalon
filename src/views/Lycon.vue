<template>
  <article>
    <h1>Lycon</h1>
    <div class="right">
      <silent-box :image="images[0]" />
    </div>

    <h2>Luxusní krémové vosky LYCON – australská epilační metoda s dlouholetou tradicí na českém trhu</h2>
    <div class="services">
      <p>
        LYCON je světovým lídrem v oblasti odstraňování chloupků voskem již od roku 1978 a je volen odborníky jako
        produkt nejvyšší kvality. Jako jediný vosk na světě obdržel certifikaci ISO a zvítězil na British Beauty Awards
        v letech 2014, 2015 a 2018 v kategorii epilačních přípravků. LYCON má věrné fanoušky mezi celebritami jako
        Victoria Beckham či Sienna Miller.
      </p>

      <p>
        Australské krémové vosky LYCON s unikátní technologií oxidu titaničitého se aplikují na olejem ošetřenou
        pokožku, což zajišťuje její 100% ochranu a péči i během epilace. Nemusíme se již starat o jakékoliv podráždění
        díky použití těch nejkvalitnějších přírodních ingrediencí, nízké teplotě tání a mimořádným výživovým vlastnostem
        těchto vosků. Vosky jsou nezvykle pružné, ohebné a lehko uchopitelné. Unikátní vosky LYCON efektivně odstraňují
        chloupky již od délky 1mm a vždy dosáhnou výsledku celkově hladké pokožky! Celý systém je navržen tak, aby
        ošetření bylo efektivní a bezbolestné!
      </p>

      <h3>Proč LYCON?</h3>

      <div class="right">
        <silent-box :image="images[1]" />
      </div>
      <ul>
        <li>je vyroben z nejkvalitnějších přírodních ingrediencí</li>
        <li>precizně odstraňuje chloupky již od délky 1mm</li>
        <li>100% chrání pokožku díky ochrannému olejíčku</li>
        <li>pečuje o pokožku během epilace</li>
        <li>zajišťuje minimální iritaci</li>
        <li>je vhodný pro klienty s citlivou pletí</li>
        <li>aplikuje se na pokožku při nízké pracovní teplotě</li>
        <li>redukuje zarůstání chloupků</li>
        <li>nezanechává lepivé stopy vosku na pokožce</li>
        <li>značí dlouholetou tradici a prověřenou kvalitu</li>
        <li>zajišťuje výsledek hladké pokožky bez chloupků</li>
      </ul>

      <h2>V salonu lze zakoupit produkty na domácí péči.</h2>
    </div>
    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/CVLMBwVFmOc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/7SyMALReO1U"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <silent-box class="gallery-lycon" :gallery="gallery" lazy-loading />
  </article>
</template>

<script setup>
import lycon_logo from "@/assets/images/lycon/lycon_logo.png"
import lycon_face from "@/assets/images/lycon/lycon_face.jpeg"

import lycon01 from "@/assets/images/lycon/01.jpeg"
import lycon02 from "@/assets/images/lycon/02.jpeg"

const images = [lycon_logo, lycon_face].map((src) => ({
  src,
  description: "Krásný salon | Lycon",
  alt: "Krásný salon | Lycon",
  thumbnailWidth: "380px",
}))

const gallery = [lycon01, lycon02].map((src) => ({
  src,
  description: "Krásný salon | Lycon",
  alt: "Krásný salon | Lycon",
  thumbnailWidth: "380px",
}))
</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  margin-bottom: 2em;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* .gallery-lycon {
  column-count: 2;

  @media screen and (max-width: 768px) {
    column-count: 1;
  }
} */

/* .gallery-lycon > a > img {
  margin: 0 auto 15px;
  max-width: 800px;
  width: 100%;
  border-radius: 0.2em;
  box-shadow: 0 0 6px #636363;
} */

.gallery-lycon img {
  border-radius: 0.2em;
  box-shadow: 0 0 6px #636363;
}

.gallery-lycon img:hover {
  transform: scale(1.025);
}
</style>
