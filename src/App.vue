<script setup>
import header_p from './layout/header_p.vue'
import footer_p from './layout/footer_p.vue'
</script>

<template>
  <header_p />
  
  <!-- Đây là nơi các route như /, /tac-gia sẽ được render -->
  <router-view />

  <footer_p />
</template>

<style scoped></style>
