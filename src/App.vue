<template>
  <div>
    <div class="banner">
      <div class="container group">
        <p class="logo">
          <router-link to="/">logo</router-link>
        </p>
        <ul class="menu">
          <template v-for="menu in router.options.routes">
            <li :key="menu.index" :class="{ dropdown: 'children' in menu }" v-if="!menu.metadata.hide">
              <router-link :to="menu.path">
                {{ menu.metadata.title }}
              </router-link>
              <div v-if="'children' in menu" class="dropdown-content">
                <router-link v-for="submenu in menu.children" :key="submenu.index" :to="submenu.path">
                  {{ submenu.metadata.title }}
                </router-link>
              </div>
            </li>
          </template>
        </ul>
        <ul class="menu2">
          <template v-for="menu in router.options.routes">
            <li v-if="!menu.metadata.hide" :key="menu.index">
              <router-link v-if="menu.name != 'services'" :to="menu.path">
                {{ menu.metadata.title }}
              </router-link>
              <div v-else>
                <li v-for="submenu in menu.children" :key="submenu.index">
                  <router-link :to="submenu.path">
                    {{ submenu.metadata.title }}
                  </router-link>
                </li>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>

    <footer>
      <div class="container">
        <div class="foot left">
          <p>
            Adresa salonu: <br />
            Františka Přítele 333 <br />
            Nymburk 288 02
            <br />
          </p>
        </div>
        <div class="foot left">
          <p>
            Fakturační adresa: <br />
            Dominika Medviď <br />
            Františka Přítele 333 <br />
            Nymburk 288 02
          </p>
        </div>
        <div class="foot left">
          <p>
            Kontaktní údaje:<br />
            Dominika Medviď<br />
            <a href="tel:+420606025605">+420 606 025 605</a>
            <br />
            <a href="mailto:dominika@krasnysalon.cz">dominika@krasnysalon.cz</a>
          </p>
        </div>
        <div class="foot left">
          <p>Copyright&nbsp;©&nbsp; 2019</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
</script>

<style lang="scss">
@import "./assets/scss/style.scss";

a {
  cursor: pointer;
}

.gallery {
  display: flex;
  justify-content: center;
}

.silentbox-item {
  padding: 5px;
}
</style>
