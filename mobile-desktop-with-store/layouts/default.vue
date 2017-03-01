<template>
  <div>
    <h1>Nuxt.js - Mobile / Desktop Example using store</h1>
    <mobile v-if="isMobile"/>
    <desktop v-else />
    <nuxt/>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  import Desktop from '~components/Desktop.vue'
  import Mobile from '~components/Mobile.vue'

  export default {

    components: {
      Desktop, Mobile
    },

    computed: {
      ...mapGetters(['isMobile'])
    }

  }
</script>