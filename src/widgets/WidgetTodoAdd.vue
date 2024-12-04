<script setup lang="ts">
import { todosApi, type TPostTodoRequest, type TTodoEdit } from '@/entities';
import { FeatureTodoForm } from '@/features';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { ref, watch } from 'vue';

const queryClient = useQueryClient();

const { isPending, isError, error, isSuccess, mutateAsync } = useMutation({
  mutationFn: (params: TPostTodoRequest) => todosApi.postTodo(params),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  },
});

async function handleAddTodo(value: TTodoEdit) {
  try {
    const request: TPostTodoRequest = { data: value };

    await mutateAsync(request);
  } catch (err) {
    console.error(err);
  }
}

const isSuccessVisible = ref(false);

watch(
  () => isSuccess.value,
  (newValue) => {
    if (newValue) {
      isSuccessVisible.value = true;

      setTimeout(() => {
        isSuccessVisible.value = false;
      }, 2000);
    }
  },
);
</script>

<template>
  <article class="container">
    <span v-if="isPending">Adding todo...</span>

    <article v-else-if="isError" class="message is-danger">
      <div class="message-header">
        <p>Error</p>
      </div>

      <div class="message-body">
        <pre>{{ JSON.stringify(error, null, 4) }}</pre>
      </div>
    </article>

    <article v-else-if="isSuccessVisible" class="message is-success">
      <div class="message-header">
        <p>Success</p>
      </div>

      <div class="message-body">Todo added successfully</div>
    </article>

    <FeatureTodoForm @submit="handleAddTodo"></FeatureTodoForm>
  </article>
</template>
