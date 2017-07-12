<template>
  <v-app light>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :router="!!item.to"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed dark class="primary">
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view />
      </v-container>
    </main>
    <v-footer fixed>
      <span>&copy; 2017 YSITD Cloud</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: true,
        items: [
          { icon: 'home', title: 'Home', to: { name: 'home' } },
        ],
        title: 'YSITD Cloud Development',
      };
    },
  };
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
