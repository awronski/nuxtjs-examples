<template>
  <div>
    <h1>Nuxt.js - External configuration Example</h1>
    Configuration

    <ul>
      <li>Url: {{ url }}</li>
      <li>Port: {{ port }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    asyncData ({ env }) {
      return {
        url: env.url,
        port: env.port
      }
    }
  }
</script>
