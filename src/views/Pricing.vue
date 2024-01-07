<template>
  <article class="group">
    <h1>Ceník služeb</h1>
    <p style="margin: 0; margin-bottom: 2em">Platný od 1.11.2022</p>

    <h2>Prodlužování řas</h2>
    <h3>Volume 3-6D</h3>
    <table>
      <template v-for="service in lashesVolumeServices.slice(0, 1)" :key="service.index">
        <tr>
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
      <template v-for="service in lashesVolumeServices.slice(1)" :key="service.index">
        <tr>
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
    <h3>Mega volume 7-10D</h3>
    <table>
      <template v-for="service in lashesMegaVolumeServices.slice(0, 1)" :key="service.index">
        <tr>
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
      <template v-for="service in lashesMegaVolumeServices.slice(1)" :key="service.index">
        <tr>
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
      <template v-for="service in lashesServices" :key="service.index">
        <tr>
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

    <h2>Úprava obočí</h2>
    <table>
      <tr v-for="service in eyebrowCosmeticServices" :key="service.index">
        <td>
          <p>
            {{ service.name }}
          </p>
        </td>
        <td>{{ service.price }} Kč</td>
      </tr>
      <tr class="empty">
        <td><br /></td>
        <td></td>
      </tr>
    </table>

    <h2>Parafínový zábal na ruce</h2>
    <table>
      <tr v-for="service in waxCosmeticServices" :key="service.index">
        <td>
          <p>
            {{ service.name }}
          </p>
        </td>
        <td>{{ service.price }} Kč</td>
      </tr>
      <tr class="empty">
        <td><br /></td>
        <td></td>
      </tr>
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
      <template v-for="service in lyconFaceServices" :key="service.index">
        <tr>
          <td>
            <p></p>
            {{ service.name }}<small>{{ service.note }}</small>
          </td>
          <td style="text-align: right">{{ service.price1 }} Kč</td>
          <td style="text-align: right">{{ service.price2 }} <span v-if="service.price2">Kč</span></td>
        </tr>
      </template>
      <tr class="empty">
        <td><br /></td>
        <td></td>
      </tr>
    </table>
    <table class="lycon">
      <tr>
        <td>
          <p>Epilace těla<small>(samostržný vosk Hot Wax Lycon) </small></p>
        </td>
      </tr>
      <template v-for="service in lyconBodyServices" :key="service.index">
        <tr>
          <td>
            <p></p>
            {{ service.name }}
          </td>
          <td><span></span></td>
          <td style="text-align: right">{{ service.price }} Kč</td>
          <td><span></span></td>
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
      <template v-for="service in lyconBody2Services" :key="service.index">
        <tr>
          <td>
            <p></p>
            {{ service.name }}
          </td>
          <td><span></span></td>
          <td style="text-align: right">{{ service.price }} Kč</td>
        </tr>
      </template>
    </table>
  </article>
</template>

<script setup>
const eyebrowCosmeticServices = [
  {
    name: "Barvení oxidační barvou Refectocil + úprava voskem Lycon",
    price: 300,
  },
]

const lashesServices = [{ name: "Sundání řas", price: 250 }]

const waxCosmeticServices = [{ name: "Pouze v rámci jiného ošetření (prodlužování řas či úprava obočí)", price: 100 }]

const lashesVolumeServices = [
  { name: "Nový set", price: 1200 },
  { name: "Doplnění: ", note: "po dvou týdnech", price: 540 },
  { name: "", note: "po třech týdnech", price: 640 },
  { name: "", note: "po čtyřech týdnech", price: 740 },
  { name: "", note: "více než po měsíci ", price: 870 },
]

const lashesMegaVolumeServices = [
  { name: "Nový set", price: 1400 },
  { name: "Doplnění: ", note: "po dvou týdnech", price: 640 },
  { name: "", note: "po třech týdnech", price: 740 },
  { name: "", note: "po čtyřech týdnech", price: 840 },
  { name: "", note: "více než po měsíci ", price: 970 },
]

const lyconFaceServices = [
  { name: "Obočí", note: "", price1: 200, price2: 140 },
  { name: "Horní ret", note: "", price1: 170, price2: 130 },
  { name: "Brada", note: "", price1: 190, price2: 140 },
  { name: "Tváře", note: "", price1: 220, price2: 170 },
  { name: "Nosní dírky", note: "", price1: 180 },
  { name: "Celý obličej", note: "(obočí, ret, tváře, brada)", price1: 650, price2: 580 },
]

const lyconBodyServices = [
  { name: "Podpaží", price: 380 },
  { name: "Třísla", price: 400 },
]

const lyconBody2Services = [
  { name: "Lýtka/stehna", price: 440 },
  { name: "Nohy ¾", price: 530 },
  { name: "Celé nohy", price: 690 },
  { name: "Paže", price: 420 },
]
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
