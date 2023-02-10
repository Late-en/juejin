import Vue from 'vue'

Vue.prototype.$bus = new Vue({
  data () {
    return {
      isNight: false
    }
  }
})
