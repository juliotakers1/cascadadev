<script setup>
import LoginPage from './pages/LoginPage.vue';
import { useCounterStore } from  './stores/counter.store'

const counter = useCounterStore()
</script>

<template>
  <div class="contador">
   <LoginPage />
  </div>
</template>

<style scoped>

</style>
