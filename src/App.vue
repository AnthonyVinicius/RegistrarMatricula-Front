<script setup>
import { RouterView } from 'vue-router'
import BaseLayout from './components/BaseLayout.vue';
</script>

<template>
  <div>
    <BaseLayout>
      <RouterView />
    </BaseLayout>
  </div>
</template>

<style scoped></style>