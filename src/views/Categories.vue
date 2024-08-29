<template>
  <div class="categories">
    <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CategoryCard from '@/components/CategoryCard.vue';
import axios from 'axios';

interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

const categories = ref<Category[]>([]);

onMounted(async () => {
  const response = await axios.get('https://app.ecwid.com/api/v3/58958138/categories?token=public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD');
  categories.value = response.data.categories;
});
</script>

<style scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}
</style>
