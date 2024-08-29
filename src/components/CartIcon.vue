<template>
  <div class="cart-icon" @click="goToCart">
    <span>🛒 {{ cartCount }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cartCount = ref(0); // You can update this based on your cart data

const goToCart = () => {

};
</script>

<style scoped>
.cart-icon {
  cursor: pointer;
  font-size: 1.5rem;
}
</style>
