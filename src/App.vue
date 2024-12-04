<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { WidgetTodos, WidgetTodoAdd } from '@/widgets';
</script>

<template>
  <main class="section level">
    <WidgetTodoAdd></WidgetTodoAdd>
    <WidgetTodos></WidgetTodos>
  </main>

  <VueQueryDevtools />
</template>
