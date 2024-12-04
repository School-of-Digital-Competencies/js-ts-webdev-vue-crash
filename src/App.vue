<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { WidgetTodos, WidgetTodoAdd } from '@/widgets';
</script>

<template>
  <main class="section columns">
    <section class="column is-one-third">
      <WidgetTodoAdd></WidgetTodoAdd>
    </section>

    <section class="column">
      <WidgetTodos></WidgetTodos>
    </section>
  </main>

  <VueQueryDevtools />
</template>
