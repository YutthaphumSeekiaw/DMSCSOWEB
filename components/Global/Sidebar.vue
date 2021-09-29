<template lang="html">
  <v-navigation-drawer v-model="drawer" fixed app>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-magnify',
          title: 'ค้นหาข้อมูล',
          to: { name: 'searchdata' }
        },
        {
          icon: 'mdi-apps',
          title: 'จัดการข้อมูล',
          to: { name: 'managedata' }
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'จัดการข้อมูลผู้ใช้',
          to: { name: 'manageuser' }
        },
        {
          icon: 'mdi-domain',
          title: 'จัดการข้อมูลบริษัท',
          to: { name: 'managecompany' }
        },
        {
          icon: 'mdi-dialpad',
          title: 'จัดการข้อมูลทั่วไป',
          to: { name: 'manageother' }
        }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.$auth.user.masterRole.roleName === 'Admin') {
        this.items = [
          {
            icon: 'mdi-home',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'จัดการข้อมูลผู้ใช้',
            to: { name: 'manageuser' }
          },
          {
            icon: 'mdi-domain',
            title: 'จัดการข้อมูลบริษัท',
            to: { name: 'managecompany' }
          },
          {
            icon: 'mdi-dialpad',
            title: 'จัดการข้อมูลทั่วไป',
            to: { name: 'manageother' }
          }
        ]
      } else {
        this.items = [
          {
            icon: 'mdi-home',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-magnify',
            title: 'ค้นหาข้อมูล',
            to: { name: 'searchdata' }
          },
          {
            icon: 'mdi-apps',
            title: 'จัดการข้อมูล',
            to: { name: 'managedata' }
          }
        ]
      }
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(newVal) {
        this.$store.commit('set_drawer', newVal)
      }
    }
  }
}
</script>

<style lang="css" scoped></style>
