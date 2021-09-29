<template>
  <v-app dark>
    <Sidebar></Sidebar>
    <Topbar></Topbar>
    <Footer></Footer>
    <v-content>
      <v-container>
        <nuxt></nuxt>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Global/Sidebar'
import Topbar from '@/components/Global/Header'
import Footer from '@/components/Global/Footer'
export default {
  components: {
    Sidebar,
    Topbar,
    Footer
  }
}
</script>
<style lang="css">
.v-application {
  font-family: 'SCG';
}
.v-list-item__title {
  font-family: 'SCG' !important;
  font-size: large;
}
.v-data-table .th {
  font-size: 1rem;
}
.v-data-table th {
  font-size: 1rem;
}
</style>
