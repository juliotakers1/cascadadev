<script setup>
import { useCounterStore } from  './stores/counter.store'

const counter = useCounterStore()
</script>

<template>
  <div class="contador">
    <h1>Contador: {{ counter.count }}</h1>
    <button @click="counter.increment">Incrementar</button>
  </div>
</template>

<style scoped>

</style>
