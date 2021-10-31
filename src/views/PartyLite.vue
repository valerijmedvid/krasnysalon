<template>
  <article>
    <h1>PartyLite</h1>

    <div class="services">
      <p>V salonu můžete také zakoupit produkty americké firmy PartyLite.</p>
      <p>
        Svíčky PartyLite jsou vyrobeny z vysoce kvalitního čištěného parafínu v potravinářské kvalitě, který zaručuje
        hoření bez kouře. Použité vosky obsahují esenciální oleje, jsou bez parabenů, ftalátů, sulfátů, acetaldehydů,
        formaldehydů, styrenů. Obsahují knoty z nebělené bavlny a plíšky, ve kterém jsou knoty upevněny neobsahují
        olovo, proto podporují čisté hoření. PartyLite spolupracuje s nejlepšími výrobci vůní na světě. Vosky jsou
        kombinovány s vysoce kvalitními francouzskými parfémy, proto jsou vůně těchto vosků tak intenzivní. K tónování
        vosku jsou používána kvalitní barviva v malém množství, přesto jsou barvy intenzivní a neblednou.
      </p>
      <p>
        PartyLite vosky jsou velice bezpečné. Z důvodu absence živočišného tuku nezpůsobují popáleniny, vosky jsou na
        dotek jen teplé.
      </p>
      <p>
        Produkty společnosti PartyLite jsou vyrobeny s velkou péčí, pečlivě testovány a zkoušeny, aby byla zajištěna
        jejich stála vysoká kvalita a hlavní charakteristikou je čisté hoření a stálá přítomnost vůně.
      </p>
      <p>
        Společnost PartyLite netestuje na zvířatech a výrobky jsou vyráběné v duchu podpory obnovitelných zdrojů v
        přírodě.
      </p>
      <p>
        Katalog produktů k dostání u mě v salonu, nebo v elektronické podobě na stránkách
        <a href="http://www.partylite.cz">www.partylite.cz</a>
      </p>
      <p>
        V salonu můžete zakoupit buď skladové kusy nebo si objednat Vámi zvolený produkt, případně se můžete jen
        zastavit a svíčky si prohlédnout a ovonět :-)
      </p>
    </div>
    <div class="gallery"><silent-box :gallery="images" /></div>
  </article>
</template>

<script>
export default {
  name: "PartyLite",
  data() {
    return {
      images: [
        {
          src: require("@/assets/images/party/party1.jpg"),
          description: "Krásný salon | PartyLite",
          alt: "Krásný salon | PartyLite",
        },
        {
          src: require("@/assets/images/party/party2.jpg"),
          description: "Krásný salon | PartyLite",
          alt: "Krásný salon | PartyLite",
        },
      ],
    }
  },
}
</script>

<style>
.gallery a {
  display: inline-block;
  width: 48%;
  height: auto;
}

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

.home {
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>
