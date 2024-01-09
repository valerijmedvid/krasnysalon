<template>
  <article>
    <h1>Vítejte!</h1>

    <p>
      Jmenuji se <strong>Dominika Medviď</strong> a jsem majitelkou <strong>Krásného salonu</strong> v Nymburce. Úspěšně
      jsem vystudovala střední školu v Pardubicích, obor <strong>kosmetické služby</strong> a od roku 2017 provozuji
      kosmetický salon a dělám to co mě baví :-)
    </p>

    <p>
      Cílem mé práce je Vaše spokojenost. Provádím kvalitní a precizní práci, pracuji pouze s profesionální kosmetikou a
      s ověřenými produkty. Chci, abyste ode mě odcházely krásné a spokojené, proto ke každé klientce přistupuji
      individuálně a snažím se vyjít vstříc přáním a požadavkům.
    </p>
    <br />
    <h2>UPOZORNĚNÍ PRO KLIENTKY!</h2>
    <p>
      Den před smluveným termínem zasílám informační sms, která má předejít situaci, že na svůj termín zapomenete.
      Bohužel se stále setkávám s tím, že se na daný termín nikdo nedostaví, kolikrát bez omluvy. V takovém případě vás
      dávám na pomyslný “blacklist” a další termín u mě nedostanete.
    </p>
    <p>
      Pokud máte smluvený termín a víte, že se nemůžete dostavit, informujte mě prosím co nejdříve, abych měla prostor
      pro případné přeobjednávání.
    </p>
    <p>Děkuji za pochopení.</p>
    <br />
    <p></p>
    <silent-box class="gallery" :gallery="images" lazy-loading />
  </article>
</template>

<script setup>
import salon01 from "@/assets/images/salon/01.jpeg"
import salon02 from "@/assets/images/salon/02.jpeg"

const images = [salon01, salon02].map((src) => ({
  src,
  description: "Krásný salon | Salon",
  alt: "Krásný salon | Salon",
  thumbnailWidth: "380px",
}))
</script>

<style>
.gallery-home > a > img {
  margin: 0 auto 15px;
  max-width: 800px;
  width: 100%;
  border-radius: 0.2em;
  box-shadow: 0 0 6px #636363;
}

.gallery-home img:hover {
  transform: scale(1.025);
}
</style>
