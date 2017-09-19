<template>
  <v-app light>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      v-if="provideDrawer"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      persistent>
    <v-toolbar fixed dark class="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" dark v-if="provideDrawer" />
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer fixed>
      <span>&copy; 2017 YSITD Cloud</span>
    </v-footer>
  </v-app>
</template>

<style lang="stylus">
  @import './stylus/main'
</style>

<script>
  export default {
    data() {
      return {
        drawer: false,
        provideDrawer: true,
        items: [
          { icon: 'home', title: 'Home', to: { name: 'home' } },
          { icon: 'description', title: 'SLA', to: { name: 'sla' } },
        ],
        title: 'YSITD Cloud Development',
      };
    },
  };
</script>
