<template>
  <article class="group">
    <h1>Ceník služeb</h1>
    <p style="margin: 0; margin-bottom: 2em">Platný od 1.5.2020</p>

    <table>
      <tr>
        <td>
          <p>Kosmetické ošetření pleti dermokosmetikou <strong>SynCare</strong></p>
        </td>
        <td></td>
      </tr>
      <tr v-for="service in cosmeticServices" :key="service.index">
        <td>
          <p>
            <strong>{{ service.name }}</strong
            ><br />
            <small v-if="'note' in service">({{ service.note }})</small>
          </p>
        </td>
        <td>{{ service.price }} Kč</td>
      </tr>
      <tr class="empty">
        <td><br /></td>
        <td></td>
      </tr>

      <template v-for="service in otherServices">
        <tr v-if="service.name != ''" :key="service.index">
          <td>
            <p>
              <strong>{{ service.name }} </strong> <small v-if="'note' in service">({{ service.note }})</small>
            </p>
          </td>
          <td>{{ service.price }} Kč</td>
        </tr>
        <tr v-else class="empty" :key="service.index">
          <td><br /></td>
          <td></td>
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
          note: "formování obočí, povrchové čištění pleti, enzymatický peeling, masáž obličeje, maska, krém",
          price: 530,
        },
        { name: "Suchá pleť", note: "základní ošetření + masáž dekoltu, pleťové sérum", price: 600 },
        {
          name: "Mastná nebo aknózní pleť",
          note: "úprava obočí, povrchové čištění pleti, enzymatický peeling, změkčení pleti, hluboké čištění pleti, maska, krém",
          price: 500,
        },
        {
          name: "Zralá pleť",
          note: "omlazující ošetření 100% kyselinou hyaluronovou základní péče + masáž dekoltu, pleťové sérum",
          price: 650,
        },
      ],
      otherServices: [
        { name: "Objemové prodloužení řas", note: "první aplikace", price: 1100 },
        { name: "Doplnění po 2 týdnech", price: 400 },
        { name: "Doplnění po 3 týdnech", price: 500 },
        { name: "Doplnění po 4 týdnech", price: 600 },
        { name: "Doplnění z jiného salonu", price: 700 },
        { name: "" },
        { name: "Parafínový zábal rukou", note: "v rámci kosmetického ošetření 50,-", price: 100 },
        { name: "" },
        { name: "Barvení řas", price: 80 },
        { name: "Barvení obočí", price: 80 },
        { name: "Formování obočí", note: "v rámci jiného ošetření 50,-", price: 70 },
        { name: "" },
        { name: "Depilace horní ret", price: 80 },
        { name: "Depilace brada", price: 80 },
        { name: "Depilace lýtka", price: 230 },
        { name: "Depilace celé nohy", price: 350 },
        { name: "Depilace předloktí", price: 160 },
      ],
    }
  },
}
</script>
