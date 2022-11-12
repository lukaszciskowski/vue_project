<template>
    <header>
        <h1 @click="handleClick">{{ value }}</h1>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> | -->
    </header>
</template>

<script setup lang="ts">
export interface Props {
    value: string
}
export interface Emits {
    (e: "onClick", arg: string): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<script lang="ts">
export default {
    name: "Header",
    methods: {
        handleClick() {
            this.$emit("onClick", "Test")
        }
    }
}
</script>