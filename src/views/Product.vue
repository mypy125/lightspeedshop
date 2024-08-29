<template>
  <div class="product">
    <img :src="product.imageUrl" :alt="product.name" />
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <h3>{{ product.price }} USD</h3>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const product = ref<Product | null>(null);

onMounted(async () => {
  const id = 1; // Get product ID from route params
  const response = await axios.get(`https://app.ecwid.com/api/v3/58958138/products/${id}?token=public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD`);
  product.value = response.data;
});

const addToCart = () => {

};
</script>

<style scoped>
.product {
  text-align: center;
}
.product img {
  max-width: 100%;
}
</style>
