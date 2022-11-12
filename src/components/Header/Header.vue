<template>
    <header>
        <h1 @click="changeContent">{{ content }}</h1>
    </header>
</template>

<script lang="ts">
export default {
    name: "Header",
    data() {
        return {
            content: 'WEB'
        }
    },
    methods: {
        changeContent() {
            this.content = "strona"
        }
    }
}
</script>