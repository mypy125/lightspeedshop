<template>
  <div class="product-card">
    <router-link :to="{ name: 'Product', params: { id: product.id } }">
      <img :src="product.imageUrl" :alt="product.name" />
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }} USD</p>
    </router-link>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const props = defineProps<{ product: Product }>();

const addToCart = () => {

};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.product-card img {
  max-width: 100%;
  height: auto;
}
</style>
