<template>
  <div id="app">
    <header>
      <CartIcon />
    </header>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import CartIcon from '@/components/CartIcon.vue';
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}
</style>
