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
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" light v-if="provideDrawer" />
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <main>
      <v-container fluid>
        <h1 class="headline primary--text">Component Development</h1>
        <v-expansion-panel expand>
          <v-expansion-panel-content v-for="(component, index) in components" :key="index">
            <div slot="header">{{ component.name }}</div>
            <v-card>
              <v-card-text>
                <div>{{ component.description }}</div>
                <div v-if="component.version.deploy" class="grey--text darken-1">
                  Deploy Version: {{component.version.deploy.full}}
                </div>
                <div v-if="component.version.head" class="grey--text darken-1">
                  Head Version: {{component.version.head.full}}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn tag="a" target="_blank" flat class="primary--text" :href="`https://github.com/ysitd-cloud/${component.git}`">
                  Github
                </v-btn>
                <v-btn tag="a" target="_blank" flat class="primary--text" :href="`https://hub.docker.com/r/ysitd/cloud-${component.image}`">
                  Docker
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-container>
    </main>
    <v-footer fixed>
      <span>&copy; 2017 YSITD Cloud</span>
    </v-footer>
  </v-app>
</template>

<script src="./script.js"></script>

<style lang="stylus">
  @import './stylus/main'
</style>
