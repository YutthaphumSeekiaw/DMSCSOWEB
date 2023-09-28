<template lang="html">
  <v-app-bar app color="red">
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-img
      class="mx-2"
      src="/icon2.png"
      max-height="50"
      max-width="52"
      contain
    ></v-img>
    <v-toolbar-title
      style="cursor:pointer"
      @click="handleClickTitle"
      v-text="title"
    />
    <v-spacer />
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-avatar>
            <!-- <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Boo" /> -->

            <v-btn class="mx-2" fab large color="error">
              <v-icon x-large color="blue-grey darken-2">mdi-power</v-icon>
            </v-btn>

            <!-- <div
              class="v-avatar v-list-item__avatar red lighten-2"
              style="height: 40px; min-width: 40px; width: 40px;"
            >
              <i
                aria-hidden="true"
                class="v-icon notranslate mdi mdi-cogs theme--dark"
              ></i>
            </div> -->
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <!-- <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Boo" /> -->
              <v-btn class="mx-2" fab large>
                <v-icon x-large color="blue-grey darken-2"
                  >mdi-account-circle</v-icon
                >
              </v-btn>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-if="this.$auth.loggedIn">{{
                this.$auth.user.name
              }}</v-list-item-title>
              <v-list-item-subtitle v-if="this.$auth.loggedIn">{{
                this.$auth.user.masterRole.roleName
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            v-for="n in arraylist"
            :key="n"
            @click="handelClickChangePassword(n)"
          >
            <v-list-item-avatar>
              <!-- <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Boo" /> -->
              <v-btn class="mx-2" fab large>
                <v-icon small color="blue-grey darken-2"
                  >mdi-google-play</v-icon
                >
              </v-btn>
            </v-list-item-avatar>

            <v-list-item-title>{{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
      title: '  CSO Document Management System',
      arraylist: ['Version 1.0', 'เปลี่ยนรหัสผ่าน', 'ออกจากระบบ']
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.$auth.user.isAd) {
        this.arraylist = ['Version 1.0', 'ออกจากระบบ']
      } else {
        this.arraylist = ['Version 1.0', 'เปลี่ยนรหัสผ่าน', 'ออกจากระบบ']
      }
    },
    handelClickChangePassword(text) {
      if (text === 'เปลี่ยนรหัสผ่าน') {
        this.$router.push({ name: 'settingpassword' })
      } else if (text === 'ออกจากระบบ') {
        this.$nuxt.$auth.logout()
        this.$router.push({ name: 'login' })
      }
    },
    toggleDrawer() {
      this.$store.commit('set_drawer', !this.$store.state.drawer)
    },
    handleClickTitle() {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style lang="css" scoped></style>
