<script>
export default {
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

<template>
    <header>
        <h1 @click="changeContent">{{content}}</h1>
    </header>
</template>