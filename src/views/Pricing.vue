<template>
  <article class="group">
    <h1>Ceník služeb</h1>
    <p style="margin: 0; margin-bottom: 2em">Platný od 1.3.2024</p>

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
      <template v-for="service in lashesOtherServices" :key="service.index">
        <tr>
          <td colspan="2">
            <p>
              {{ service.name }}
            </p>
          </td>
          <td style="text-align: right">{{ service.price }} Kč</td>
        </tr>
      </template>
    </table>
    <p><strong>Pokud přijde klientka na běžné doplnění bez řas, bude jí účtována cena 920,- (1020,-) !</strong></p>

    <h2>Kosmetické ošetření <img :src="syncare" alt="syncare" width="90" style="padding-left: 1em" /></h2>
    <table>
      <tr v-for="service in cosmeticServices" :key="service.index">
        <td>
          <p>
            <strong>{{ service.name }}</strong> <small>{{ service.interval }}</small> <br />
            <small v-if="'note' in service">- {{ service.note }}</small>
          </p>
        </td>
        <td style="text-align: right">{{ service.price }} Kč</td>
      </tr>
      <tr class="empty">
        <td><br /></td>
      </tr>
      <tr v-for="service in otherCosmeticServices" :key="service.index">
        <td>
          <p>
            <strong>{{ service.name }}</strong> <small v-if="service.note">({{ service.note }})</small> <br />
          </p>
        </td>
        <td style="text-align: right">{{ service.price }} Kč</td>
      </tr>
      <template v-for="service in cosmeticOtherServices" :key="service.index">
        <tr>
          <td>
            <p>
              {{ service.name }}
            </p>
          </td>
          <td style="text-align: right">{{ service.price }} Kč</td>
        </tr>
      </template>
      <tr class="empty">
        <td><br /></td>
        <td></td>
      </tr>
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

    <h2>Epilace Lycon <img :src="lycon" alt="lycon" width="90" style="padding-left: 1em" /></h2>

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
import syncare from "@/assets/images/syncare.jpg"
import lycon from "@/assets/images/lycon/lycon_logo.png"

const eyebrowCosmeticServices = [
  {
    name: "Barvení oxidační barvou Refectocil + úprava voskem Lycon",
    price: 300,
  },
]

const cosmeticServices = [
  {
    name: "Základní ošetření",
    interval: "90 min",
    note: "úprava obočí, povrchové čištění, enzymatický peeling, masáž obličeje, hluboké čištění, pleťové, sérum, maska, krém",
    price: 830,
  },
  {
    name: "Ošetření mastné/smíšené pleti",
    interval: "90 min",
    note: "úprava obočí, povrchové čištění, enzymatický peeling, hluboké čištění, pleťové sérum, maska, krém",
    price: 790,
  },
  {
    name: "Ošetření suché/zralé pleti",
    interval: "90-120 min",
    note: "základní ošetření + ošetření dekoltu (masáž + maska)",
    price: 930,
  },
]

const cosmeticOtherServices = [
  { name: "Barvení řas", price: 100 },
  { name: "Barvení obočí", price: 100 },
]

const lashesServices = [{ name: "Sundání řas", price: 250 }]

const lashesOtherServices = [{ name: "Doplnění od jiné stylistky", price: 790 }]

const waxCosmeticServices = [
  { name: "Pouze v rámci jiného ošetření (prodlužování řas či kosmetického ošetření)", price: 100 },
]

const lashesVolumeServices = [
  { name: "Nový set", price: 1200 },
  { name: "Doplnění: ", note: "po dvou týdnech", price: 590 },
  { name: "", note: "po třech týdnech", price: 690 },
  { name: "", note: "po čtyřech týdnech", price: 790 },
  { name: "", note: "více než po měsíci ", price: 920 },
]

const lashesMegaVolumeServices = [
  { name: "Nový set", price: 1400 },
  { name: "Doplnění: ", note: "po dvou týdnech", price: 690 },
  { name: "", note: "po třech týdnech", price: 790 },
  { name: "", note: "po čtyřech týdnech", price: 890 },
  { name: "", note: "více než po měsíci ", price: 1020 },
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
  { name: "Podpaží", price: 420 },
  { name: "Třísla", price: 420 },
]

const lyconBody2Services = [
  { name: "Lýtka/stehna", price: 460 },
  { name: "Nohy ¾", price: 560 },
  { name: "Celé nohy", price: 770 },
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
