<template>
  <Header @click="onClick" :value="headerContent" />

  <main>
    <button @click="onSwitchContent">Kliknij mnie</button>
    <code v-if="showContent">Kliknięto</code>
    <code v-else="showContent">Kliknij</code>
    <router-view></router-view>
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
      headerContent: "WEB",
      showContent: false
    }
  },
  methods: {
    onSwitchContent() {
      this.showContent = !this.showContent
    },
    onClick(newVal: string) {
      this.headerContent = newVal
    }
  }
}
</script>


<style scoped>

</style>
