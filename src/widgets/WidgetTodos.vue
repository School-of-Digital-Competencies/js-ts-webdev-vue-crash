<script setup lang="ts">
import { AppTodoCard } from '@/components';
import { todosApi, type TGetTodosRequest } from '@/entities';
import { useQuery } from '@tanstack/vue-query';
import { computed, ref } from 'vue';

const filters = ref<TGetTodosRequest>({});
const { isPending, isError, isFetching, data, error } = useQuery({
  queryKey: ['todos', filters],
  queryFn: () => todosApi.getTodos(filters.value),
});

const todos = computed(() => (data.value || {}).data ?? []);
</script>

<template>
  <article class="container">
    <p>Current filters: {{ filters }}</p>

    <progress v-if="isFetching" class="progress is-small" max="100"></progress>

    <progress v-else-if="isPending" class="progress is-small is-primary" max="100"></progress>

    <div v-else-if="isError" class="notification is-danger">
      {{ error }}
    </div>

    <template v-else-if="data">
      <article class="box">
        <div class="grid">
          <div v-for="item in todos" :key="item.documentId" class="cell">
            <AppTodoCard :item="item"></AppTodoCard>
          </div>
        </div>
      </article>
    </template>
  </article>
</template>
