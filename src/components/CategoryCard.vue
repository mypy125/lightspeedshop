<template>
  <div class="category-card">
    <router-link :to="{ name: 'Products', params: { id: category.id } }">
      <img :src="category.imageUrl" :alt="category.name" />
      <h2>{{ category.name }}</h2>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

const props = defineProps<{ category: Category }>();
</script>

<style scoped>
.category-card {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.category-card img {
  max-width: 100%;
  height: auto;
}
</style>
