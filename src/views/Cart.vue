<template>
  <div class="cart">
    <div v-for="item in cartItems" :key="item.id">
      <h2>{{ item.name }}</h2>
      <p>{{ item.price }} USD</p>
      <button @click="removeFromCart(item.id)">Remove</button>
    </div>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

const cartItems = ref<CartItem[]>([]); // Initialize cart items

const removeFromCart = (id: number) => {

};

const checkout = () => {
  alert('Thank you for your purchase!');
};
</script>

<style scoped>
.cart {
  text-align: center;
}
</style>
