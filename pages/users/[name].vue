<template>
  {{ name }}
</template>

<script setup>
const route = useRoute();
const name = route.params.name.toUpperCase();
</script>

<style>
* {
  font-family: sans-serif;
  font-weight: bold;
}
</style>
