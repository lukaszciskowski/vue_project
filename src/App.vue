<template>
  <Header @onClickHeader="onClickHeader" :value="headerContent" />

  <main>
    <button @click="onSwitchContent">Kliknij mnie</button>
    <code v-if="showContent">Kliknięto</code>
    <code v-else="showContent">Kliknij</code>
    <br />
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
    onClickHeader(newVal: string) {
      this.headerContent = newVal
    }
  }
}
</script>


<style scoped>

</style>
