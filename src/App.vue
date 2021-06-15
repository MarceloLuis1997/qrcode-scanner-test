<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Teste QRCode Scanner
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row align="center" justify="center">
          <qrcode-scanner
            :qrbox="250"
            :fps="10"
            style="width: 500px;"
            @result="onScan"
          />
        </v-row>
        <v-row align="center" justify="center">
        <h4>Resultados:</h4>
        </v-row>
        <v-row v-for="(result, i) in results" :key="i" align="center" justify="center">
          {{result}}
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    results: []
  }),

  methods: {
    onScan (decodedText, decodedResult) {
      this.results.push(decodedText)
    }
  }
}
</script>
