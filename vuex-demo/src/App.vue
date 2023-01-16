<template>
  <div id="app">
    {{count}}
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>
