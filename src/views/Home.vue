<template>
  <article>
    <h1>Vítejte!</h1>

    <p>
      Jmenuji se <strong>Dominika Urbanová</strong> a jsem majitelkou <strong>Krásného salonu</strong> v Nymburce.
      Úspěšně jsem vystudovala střední školu v Pardubicích, obor <strong>kosmetické služby</strong> a od roku 2017
      provozuji kosmetický salon a dělám to co mě baví :-)
    </p>

    <p>
      Cílem naší práce je Vaše spokojenost. Provádíme
      <strong>kvalitní a precizní práci</strong>, pracujeme pouze s <strong>profesionální kosmetikou</strong> a s
      ověřenými produkty. Chceme, abyste od nás odcházely <strong>krásné a spokojené</strong>, proto ke každé klientce
      <strong>přistupujeme individuálně</strong> a snažíme se vyjít vstříc přáním a požadavkům. Ke každému ošetření u
      nás <strong>zdarma obdržíte kávu nebo čaj</strong> a odpočinete si v příjemném prostředí.
    </p>
    <div class="gall">
      <silent-box :gallery="images" />
    </div>
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

.silentbox-item {
  width: 48%;
  height: auto;
}
</style>
