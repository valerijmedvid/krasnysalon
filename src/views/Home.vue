<template>
  <article>
    <h1>Vítejte!</h1>

    <p>
      Jmenuji se <strong>Dominika Urbanová</strong> a jsem majitelkou <strong>Krásného salonu</strong> v Nymburce.
      Úspěšně jsem vystudovala střední školu v Pardubicích, obor <strong>kosmetické služby</strong> a od roku 2017
      provozuji kosmetický salon a dělám to co mě baví :-)
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
    <div class="gall">
      <silent-box :gallery="images" />
    </div>
    <p></p>
  </article>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      images: [
        {
          src: require("@/assets/images/home/salon1.jpg"),
          description: "Krásný salon | Interiér",
          alt: "Krásný salon | Interiér",
        },
        {
          src: require("@/assets/images/home/salon2.jpg"),
          description: "Krásný salon | Interiér",
          alt: "Krásný salon | Interiér",
        },
      ],
    }
  },
}
</script>

<style>
.gall #silentbox-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.gall .silentbox-item {
  width: 48%;
  height: auto;
}
</style>
