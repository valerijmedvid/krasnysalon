<template>
  <article>
    <h1>Objemové prodlužování řas</h1>
    <div class="services">
      <p>
        Pokročilá technika prodlužování řas, odlišná od metody prodlužování „řasa na řasu“. Liší se tím, že se na jednu
        řasu aplikuje 2 a více ultra lehkých syntetických řas, které zbytečně nezatěžují přírodní řasy. Jsou jemné,
        vypadají přirozeně a zároveň tvoří dokonalý objem. Pracujeme pouze s kvalitním materiálem od značky Blink
        Lashes.
      </p>

      <h2>Pro koho jsou prodloužené řasy vhodné?</h2>
      <p>
        Prodloužené řasy jsou vhodné i pro klientky, které mají vlastní řasy krátké nebo jemné a chtějí docílit
        mnohonásobně většího objemu. Jsou odolné vůči vodě, to znamená, že běžné aktivity jako sport, sprchování či
        plavání nemají na jejich vzhled a pevnost vliv.
      </p>
      <div class="right">
        <silent-box :image="article_images[0]" />
      </div>

      <h2>Jak dlouho prodloužené řasy vydrží?</h2>
      <p>
        Prodloužené řasy se musejí průběžně doplňovat, z důvodu obnovy vlastních řas. Délka cyklu růstu řasy je průměrně
        90 dní. Když přírodní řasa vypadne, vyroste na jejím místě řasa nová, která se při dalším doplnění opět
        prodlouží. Z tohoto důvodu je ideální řasy doplňovat každých 2-4 týdnů, aby byl zachován plný objem a perfektní
        vzhled.
      </p>
      <h2>Jak prodloužení řas probíhá?</h2>
      <p>
        Klientka leží pohodlně na lehátku. Pokud nosíte kontaktní čočky, před prodloužením je vyjměte. Spodní víčko a
        řasy jsou chráněny kolagenovou podložkou, ta během aplikace pečuje o pokožku. Na přírodní řasy jsou postupně
        aplikovány syntetické řasy pomocí speciálního adheziva (lepidla), které je zdravotně nezávadné. Délka první
        aplikace se pohybuje v rozmezí 2-3 hodiny, záleží na hustotě řas. Doplnění trvá zhruba 1,5 hodiny. Celá aplikace
        je naprosto bezbolestná.
      </p>

      <silent-box :image="article_images[1]" class="left" />

      <h2>Jak o řasy pečovat?</h2>
      <p>
        Prvních 24 hodin po aplikaci se vyhněte kontaktu s vodou, 48 hodin nenavštěvujte saunu. Řasové spoje by se po
        tak krátké době mohly narušit. Řasy pročesávejte speciálním kartáčkem, který obdržíte při první aplikaci. V
        žádném případě na prodloužené řasy nepoužívejte řasenku! Ta se u kořínků spojuje s lepidlem a při doplnění je
        třeba tento nános odstranit. Řasenku je možné používat pouze na spodní řasy. V případě nutnosti je možno použít
        řasenku určenou přímo na prodloužené řasy. Nepoužívejte kleštičky na řasy, oči nemněte a vyhněte se olejovým
        přípravkům v okolí očí.
      </p>
      <p>
        <strong>
          Veškeré informace ohledně aplikace a následné péče obdržíte při návštěvě salonu, kde Vám zodpovíme i případné
          dotazy.
        </strong>
      </p>
      <silent-box :image="article_images[2]" class="right" />

      <h2>UPOZORNĚNÍ PRO KLIENTKY!</h2>
      <p>
        Ráda bych všechny klientky upozornila, že pokud přicházíte s řasami od jiné stylistky, doplnění provádíme až po
        osobní konzultaci, obzvlášť pokud máte prodloužení metodou řasa na řasu. Je totiž možné, že řasy nebudou v
        takovém stavu, který umožní plnohodnotné doplnění. Není dobré mít na očích různé typy řas a adheziv. Po šetrném
        odstranění Vám aplikujeme nový set řas s ohledem na stav řas přírodních.
      </p>
    </div>
    <div class="gallery"><silent-box :gallery="images" /></div>
  </article>
</template>

<script>
export default {
  name: "Lashes",
  data() {
    return {
      images: [
        {
          src: require("@/assets/images/lashes/rasy10.jpg"),
          description: "Krasyn salon | Prodlužování řas",
          alt: "Krasyn salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy11.jpg"),
          description: "Krasyn salon | Prodlužování řas",
          alt: "Krasyn salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy12.jpg"),
          description: "Krasyn salon | Prodlužování řas",
          alt: "Krasyn salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy13.jpg"),
          description: "Krasyn salon | Prodlužování řas",
          alt: "Krasyn salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy14.jpg"),
          description: "Krasyn salon | Prodlužování řas",
          alt: "Krasyn salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy6.jpg"),
          description: "Krasyn salon | Prodlužování řas",
          alt: "Krasyn salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy8.jpg"),
          description: "Krasyn salon | Prodlužování řas",
          alt: "Krasyn salon | Prodlužování řas",
        },
      ],
      article_images: [
        {
          src: require("@/assets/images/lashes/rasy4.jpg"),
          description: "Krasyn salon | Prodlužování řas",
          alt: "Krasyn salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy2.jpg"),
          description: "Krasyn salon | Prodlužování řas",
          alt: "Krasyn salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy3.jpg"),
          description: "Krasyn salon | Prodlužování řas",
          alt: "Krasyn salon | Prodlužování řas",
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
</style>
