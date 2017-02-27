<template>
  <div>
    <mobile v-if="isMobile"/>
    <desktop v-else />
  </div>
</template>
<script>

  import Desktop from '~components/Desktop.vue'
  import Mobile from '~components/Mobile.vue'

  export default {
     data ({ isMobile }) {
        return { isMobile }
     },
     components: {
        Desktop, Mobile
     }
  }
</script>