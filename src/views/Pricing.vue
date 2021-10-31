<template>
  <article class="group">
    <h1>Ceník služeb</h1>
    <p style="margin: 0; margin-bottom: 2em">Platný od 1.11.2021</p>

    <h2>Kosmetické ošetření</h2>
    <table>
      <tr v-for="service in cosmeticServices" :key="service.index">
        <td>
          <p>
            <strong>{{ service.name }}</strong> <small>{{ service.interval }}</small> <br />
            <small v-if="'note' in service">- {{ service.note }}</small>
          </p>
        </td>
        <td>{{ service.price }} Kč</td>
      </tr>
      <tr class="empty">
        <td><br /></td>
        <td></td>
      </tr>
      <tr v-for="service in otherCosmeticServices" :key="service.index">
        <td>
          <p>
            <strong>{{ service.name }}</strong> <small v-if="service.note">({{ service.note }})</small> <br />
          </p>
        </td>
        <td>{{ service.price }} Kč</td>
      </tr>
    </table>

    <h2>Úprava obočí</h2>
    <table>
      <tr v-for="service in eyebrowCosmeticServices" :key="service.index">
        <td>
          <p>
            <strong>{{ service.name }}</strong> <small>{{ service.interval }}</small>
          </p>
        </td>
        <td>{{ service.price }} Kč</td>
      </tr>
      <tr class="empty">
        <td><br /></td>
        <td></td>
      </tr>
    </table>

    <h2>Prodlužování řas</h2>
    <h3>Volume řasy</h3>
    <table>
      <template v-for="service in lashesVolumeServices.slice(0, 1)">
        <tr :key="service.index">
          <td style="width: 100px">
            <p>
              {{ service.name }}
            </p>
          </td>
          <td>
            <p>
              {{ service.note }}
            </p>
          </td>
          <td style="text-align: right">{{ service.price }} Kč</td>
        </tr>
      </template>
      <template v-for="service in lashesVolumeServices.slice(1)">
        <tr :key="service.index">
          <td style="width: 100px">
            <p>
              {{ service.name }}
            </p>
          </td>
          <td style="text-align: left">
            <p>
              {{ service.note }}
            </p>
          </td>
          <td style="text-align: right">{{ service.price }} Kč</td>
        </tr>
      </template>
    </table>
    <h3>Mega volume 6-10D</h3>
    <table>
      <template v-for="service in lashesMegaVolumeServices.slice(0, 1)">
        <tr :key="service.index">
          <td style="width: 100px">
            <p>
              {{ service.name }}
            </p>
          </td>
          <td>
            <p>
              {{ service.note }}
            </p>
          </td>
          <td style="text-align: right">{{ service.price }} Kč</td>
        </tr>
      </template>
      <template v-for="service in lashesMegaVolumeServices.slice(1)">
        <tr :key="service.index">
          <td style="width: 100px">
            <p>
              {{ service.name }}
            </p>
          </td>
          <td style="text-align: left">
            <p>
              {{ service.note }}
            </p>
          </td>
          <td style="text-align: right">{{ service.price }} Kč</td>
        </tr>
      </template>
      <tr class="empty">
        <td><br /></td>
        <td></td>
      </tr>
      <template v-for="service in lashesServices">
        <tr :key="service.index">
          <td style="width: 100px">
            <p>
              {{ service.name }}
            </p>
          </td>
          <td></td>
          <td style="text-align: right">{{ service.price }} Kč</td>
        </tr>
      </template>
    </table>

    <h2>Epilace Lycon</h2>

    <table class="lycon">
      <tr>
        <td>
          <p>Epilace obličeje<small>(samostržný vosk Hot Wax Lycon) </small></p>
        </td>
        <td style="text-align: right"><strong>samostatně</strong></td>
        <td style="text-align: right"><strong>v rámci ošetření</strong></td>
      </tr>
      <template v-for="service in lyconFaceServices">
        <tr :key="service.index">
          <td>
            <p></p>
            {{ service.name }}<small>{{ service.note }}</small>
          </td>
          <td style="text-align: right">{{ service.price1 }} Kč</td>
          <td style="text-align: right">{{ service.price2 }} Kč</td>
        </tr>
      </template>
      <tr class="empty">
        <td><br /></td>
        <td></td>
      </tr>
      <tr>
        <td>
          <p>Epilace těla<small>(samostržný vosk Hot Wax Lycon) </small></p>
        </td>
      </tr>
      <template v-for="service in lyconBodyServices">
        <tr :key="service.index">
          <td>
            <p></p>
            {{ service.name }}
          </td>
          <td><span></span></td>
          <td style="text-align: right">{{ service.price }} Kč</td>
        </tr>
      </template>
      <tr class="empty">
        <td><br /></td>
        <td></td>
      </tr>
      <tr>
        <td>
          <p>Epilace těla<small>(teplý vosk roll-on) </small></p>
        </td>
      </tr>
      <template v-for="service in lyconBody2Services">
        <tr :key="service.index">
          <td>
            <p></p>
            {{ service.name }}
          </td>
          <td><span></span></td>
          <td style="text-align: right">{{ service.price }} Kč</td>
        </tr>
      </template>
    </table>

    <p></p>
  </article>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      cosmeticServices: [
        {
          name: "Základní ošetření",
          interval: "90 min",
          note: "úprava obočí, povrchové čištění, peeling, masáž obličeje, hluboké čištění, maska, krém",
          price: 630,
        },
        {
          name: "Ošetření mastné/smíšené pleti",
          interval: "60 min",
          note: "úprava obočí, povrchové čištění, peeling, hluboké čištění, maska, krém ",
          price: 600,
        },
        {
          name: "Ošetření suché/zralé pleti",
          interval: "90-120 min",
          note: "základní ošetření + pleťové sérum, ošetření dekoltu (masáž + maska)",
          price: 730,
        },
      ],
      otherCosmeticServices: [
        { name: "Barvení řas", note: "pouze v rámci kosm. ošetření", price: 80 },
        { name: "Barvení obočí v rámci kosm. ošetření", price: 80 },
        { name: "Parafínový zábal na ruce", note: "pouze v rámci kosm. ošetření či při prodlužování řas", price: 70 },
      ],
      eyebrowCosmeticServices: [
        {
          name: "Barvení + úprava voskem Lycon",
          interval: "15-30 min",
          price: 260,
        },
      ],
      lashesServices: [{ name: "Sundání řas", price: 150 }],
      lashesVolumeServices: [
        { name: "Nový set", price: 1100 },
        { name: "Doplnění: ", note: "po dvou týdnech", price: 470 },
        { name: "", note: "po třech týdnech", price: 570 },
        { name: "", note: "po čtyřech týdnech", price: 670 },
        { name: "", note: "více než po měsíci ", price: 800 },
      ],
      lashesMegaVolumeServices: [
        { name: "Nový set", price: 1300 },
        { name: "Doplnění: ", note: "po dvou týdnech", price: 570 },
        { name: "", note: "po třech týdnech", price: 670 },
        { name: "", note: "po čtyřech týdnech", price: 770 },
        { name: "", note: "více než po měsíci ", price: 900 },
      ],
      lyconFaceServices: [
        { name: "Obočí", note: "", price1: 180, price2: 120 },
        { name: "Horní ret", note: "", price1: 150, price2: 110 },
        { name: "Brada", note: "", price1: 150, price2: 110 },
        { name: "Tváře", note: "", price1: 200, price2: 150 },
        { name: "Nosní dírky", note: "", price1: 150, price2: 120 },
        { name: "Celý obličej", note: "(obočí, ret, tváře, brada)", price1: 600, price2: 400 },
      ],
      lyconBodyServices: [
        { name: "Podpaží", price: 300 },
        { name: "Třísla", price: 350 },
      ],
      lyconBody2Services: [
        { name: "Lýtka/stehna", price: 380 },
        { name: "Nohy ¾", price: 450 },
        { name: "Celé nohy", price: 600 },
        { name: "Paže", price: 320 },
      ],
    }
  },
}
</script>

<style scoped>
small {
  padding-left: 1em;
}

h2 {
  font-size: 1.6em;
  margin-bottom: 0;
  margin-top: 2em;
}

h3 {
  margin-top: 0.7em;
  font-weight: 900;
  font-size: 1em;
}

table {
  margin-left: 0.8em;
}

.lycon p:first-child {
  font-weight: 700;
  font-size: 1.1em;
}
</style>
