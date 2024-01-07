<template>
  <article>
    <h1>Parafínový zábal na ruce</h1>
    <div class="services">
      <h2>Co je parafín?</h2>

      <p>
        Parafín je vosk získaný z ropy a obohacený o vitamin E. Používá se k léčebným a kosmetickým účelům. Vyniká svou
        schopností zadržovat teplo. Parafín prohřívá, uvolňuje, zvyšuje krevní oběh a otevírá póry. Jeho účinky jsou
        zdravotní i estetické.
      </p>
      <div class="right">
        <silent-box :image="image" />
      </div>

      <h2>Účinky parafínového zábalu</h2>
      <p>
        Během zábalu dochází k předání tepla a účinných minerálů do pokožky, zvyšuje se její prokrvení, změkčení a
        pružnost. Pravidelnými parafínovými zábaly se docílí nejen zpevnění nehtů, krásně jemné a hedvábné pokožky,
        jejímu viditelnému omlazení, ale dojde k uvolnění drobných kloubů a ztuhlého zápěstí.
        <br />
        Parafínové zábaly vedou nejen k uvolnění a snížení bolesti pohybového aparátu, ale mají také blahodárný účinek
        na zbytek těla. Jsou jednou z forem termoléčby. Teplo rozšiřuje cévy, zlepšuje prokrvení pokožky a působí
        příznivě na zlepšení regenerace svalových spazmů. Po zábalu jsou ruce velmi dobře odpočinuté a samozřejmě se
        dostavuje kosmetický efekt. Ruce jsou hladké, hebké a sametové.
      </p>

      <p>
        Parafín je vhodný a obzvlášť příjemný zejména v chladných měsících. Doporučuje se opakovat alespoň jednou za
        měsíc, například v rámci kosmetického ošetření.
      </p>

      <h2>Jak probíhá aplikace?</h2>
      <p>
        Parafín se rozehřívá ve speciální parafínové vaně při teplotě 52-62 °C. Před aplikací se ruce dezinfikují. Poté
        se opakovaně ponořují až po zápěstí do teplého parafínu, dokud na ruce nevznikne souvislá vrstva vosku. Zabalí
        se do igelitu a froté rukavic, kvůli izolaci tepla. Běžná doba působení parafínu je zhruba 30 minut, probíhá-li
        však aplikace v rámci jiné procedury, může trvat i déle.
      </p>
    </div>
  </article>
</template>

<script setup>
import wax from "@/assets/images/wax/parafin.jpg"

const image = {
  src: wax,
  description: "Krásný salon | Parafín",
  alt: "Krásný salon | Parafín",
  thumbnailWidth: "380px",
}
</script>
