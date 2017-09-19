<template>
  <v-layout column>
    <v-layout row v-for="level in levels" :key="level.name">
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline">SLA {{ level.name }}</h3>
              <div>Monthly Downtime: {{ level.downtime }}</div>
            </div>
          </v-card-title>
          <v-card-text>
            <v-chip v-for="category in level.categories" :key="category" label outline class="primary primary--text">{{ category }}</v-chip>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script src="./script.js"></script>
