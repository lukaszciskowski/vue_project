<template>
  <Header @onClick="onClick" :value="headerContent" />

  <main>
  </main>
</template>

    
<script lang="ts">
import Header from "./components/Header/Header.vue"

export default {
  components: {
    Header
  },
  data() {
    return {
      headerContent: "WEB"
    }
  },
  methods: {
    onClick(newVal: string) {
      this.headerContent = newVal
    }
  }
}
</script>


<style scoped>

</style>
