<template>
  <v-layout align-center row>
    <v-flex xs12>
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
              <v-btn
                v-if="component.git" tag="a" target="_blank" flat class="primary--text" :href="`https://github.com/ysitd-cloud/${component.git}`">
                Github
              </v-btn>
              <v-btn v-if="component.image" tag="a" target="_blank" flat class="primary--text" :href="`https://hub.docker.com/r/ysitd/cloud-${component.image}`">
                Docker
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script src="./script.js"></script>
