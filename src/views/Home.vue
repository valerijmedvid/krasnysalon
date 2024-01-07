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
    <silent-box class="gall" :gallery="images" lazy-loading />
    <p></p>
  </article>
</template>

<script setup>
import rasy07 from "@/assets/images/lashes/07.jpeg"

const images = [rasy07].map((src) => ({
  src,
  description: "Krásný salon | Prodlužování řas",
  alt: "Krásný salon | Prodlužování řas",
  thumbnailWidth: "400px",
}))
</script>

<style>
.gall {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.gall img {
  border-radius: 0.2em;
  box-shadow: 0 0 6px #636363;
}
</style>
