import Vue from 'vue'
import * as QrCode from 'html5-qrcode'

console.log(QrCode)

Vue.component('qrcode-scanner', {
  props: {
    qrbox: {
      type: Number,
      default: 250
    },
    fps: {
      type: Number,
      default: 10
    }
  },
  template: '<div id="qr-code-full-region"></div>',
  mounted () {
    const config = {
      fps: this.fps,
      qrbox: this.qrbox
    }
    const html5QrcodeScanner = new window.Html5QrcodeScanner('qr-code-full-region', config)
    html5QrcodeScanner.render(this.onScanSuccess)
  },
  methods: {
    onScanSuccess (decodedText, decodedResult) {
      this.$emit('result', decodedText, decodedResult)
    }
  }
})
