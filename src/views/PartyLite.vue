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
    <silent-box class="gallery" :gallery="images" lazy-loading />
  </article>
</template>

<script setup>
import party1 from "@/assets/images/party/party1.webp"
import party2 from "@/assets/images/party/party2.webp"

const images = [party1, party2].map((src) => ({
  src,
  description: "Krásný salon | PartyLite",
  alt: "Krásný salon | PartyLite",
  thumbnailWidth: "380px",
}))
</script>

<style lang="scss">
.gallery img {
  border-radius: 0.2em;
  box-shadow: 0 0 6px #636363;
}

.gallery img:hover {
  transform: scale(1.025);
}
</style>
