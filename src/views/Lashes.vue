<template>
  <article>
    <h1>Objemové prodlužování řas</h1>
    <div class="services">
      <p>
        Pokročilá technika prodlužování řas, odlišná od metody prodlužování „řasa na řasu“. Liší se tím, že se na jednu
        řasu aplikuje 2 a více ultra lehkých syntetických řas, které zbytečně nezatěžují přírodní řasy. Jsou jemné,
        vypadají přirozeně a zároveň tvoří dokonalý objem.
      </p>

      <h2>Pro koho jsou prodloužené řasy vhodné?</h2>
      <div class="right">
        <silent-box :image="article_images[3]" />
      </div>
      <p>
        Prodlužování řas je vhodné pro ženy všech věkových kategorií, které chtějí dosáhnout skvělého vzhledu bez
        použití řasenky. <br />
        Prodlužování řas je vhodné i pro klientky, které mají vlastní řasy krátké nebo jemné a chtějí docílit
        mnohonásobně většího objemu. I z velmi řídkých vlastních řas lze vytvořit nádherný objem. Je možné vytvořit od
        přirozeného vzhledu až po velmi výrazný objem.Řasy jsou na dotek jemné a působí přirozeně. Jsou odolné vůči
        vodě, to znamená, že běžné aktivity jako sport, sprchování či plavání nemají na jejich vzhled a pevnost vliv.
      </p>

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
        aplikace je cca 1,5h, záleží na hustotě řas. Doplnění trvá zhruba 1-1,5 hodiny. Celá aplikace je naprosto
        bezbolestná.
      </p>
      <silent-box :image="article_images[2]" class="left" />

      <h2>Jak o řasy pečovat?</h2>

      <p>
        Prvních 24 hodin po aplikaci se vyhněte kontaktu s vodou, 48 hodin nenavštěvujte saunu. Řasové spoje by se po
        tak krátké době mohly narušit. Řasy pročesávejte speciálním kartáčkem, který obdržíte při první aplikaci. V
        žádném případě na prodloužené řasy nepoužívejte řasenku! Tu je možné používat pouze na spodní řasy.
      </p>
      <p>
        Vyhněte se mechanickému dráždění oka jako je mnutí, spaní obličejem v polštáři, žádné tahání nebo trhání řas!
        Řasové spoje nesmí přijít do kontaktu s mastnými či olejovými přípravky. K odličování používejte mycí gely či
        odličovací přípravky bez obsahu olejů, ovšem neznamená to, že se budete při mytí řasám vyhýbat. Naopak je
        potřeba řasám věnovat zvláštní péči a pravidelně je promývat vodou. Nevadí mýdlo či šampon (nesmí obsahovat
        mastné složky), nebo lze zakoupit speciální čistící pěny na řasy. To zaručí, že budou řasy perfektně čisté a
        připravené na další aplikaci řas.
      </p>
      <p>
        <strong>
          Veškeré informace ohledně aplikace a následné péče obdržíte při návštěvě salonu, kde Vám zodpovím i případné
          dotazy.
        </strong>
      </p>

      <h2>UPOZORNĚNÍ PRO KLIENTKY!</h2>
      <p>
        V případě, že budete chtít k prodloužení řas např. úpravu obočí, či jinou doplňkovou službu, je potřeba mě
        informovat předem, ideálně již při objednávání. Délka návštěvy se potom může protáhnout i o půl hodinu a to bez
        předchozí domluvy bohužel není možné. Děkuji za pochopení.
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
          description: "Krásný salon | Prodlužování řas",
          alt: "Krásný salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy11.jpg"),
          description: "Krásný salon | Prodlužování řas",
          alt: "Krásný salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy12.jpg"),
          description: "Krásný salon | Prodlužování řas",
          alt: "Krásný salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy13.jpg"),
          description: "Krásný salon | Prodlužování řas",
          alt: "Krásný salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy6.jpg"),
          description: "Krásný salon | Prodlužování řas",
          alt: "Krásný salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy8.jpg"),
          description: "Krásný salon | Prodlužování řas",
          alt: "Krásný salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy14.jpg"),
          description: "Krásný salon | Prodlužování řas",
          alt: "Krásný salon | Prodlužování řas",
        },
      ],
      article_images: [
        {
          src: require("@/assets/images/lashes/rasy4.jpg"),
          description: "Krásný salon | Prodlužování řas",
          alt: "Krásný salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy2.jpg"),
          description: "Krásný salon | Prodlužování řas",
          alt: "Krásný salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy3.jpg"),
          description: "Krásný salon | Prodlužování řas",
          alt: "Krásný salon | Prodlužování řas",
        },
        {
          src: require("@/assets/images/lashes/rasy15.jpeg"),
          description: "Krásný salon | Prodlužování řas",
          alt: "Krásný salon | Prodlužování řas",
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
