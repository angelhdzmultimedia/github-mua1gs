<template>
  <div>
    <h2>Users</h2>
    <ul>
      <li @click="show(user)" v-for="user in users" :key="user.id">
      {{user.name}}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/users');
const users = data;

function show(user) {
  alert(user.email)
}
</script>
