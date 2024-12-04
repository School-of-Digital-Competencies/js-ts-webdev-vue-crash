<script setup lang="ts">
import { AppModal } from '@/components';
import { todosApi, type TDeleteTodoRequest, type TPutTodoRequest, type TTodo, type TTodoEdit } from '@/entities';
import { FeatureTodoForm, FeatureTodoCard } from '@/features';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { ref } from 'vue';

export type WidgetTodoProps = {
  item: Readonly<TTodo>;
};

const { item } = defineProps<WidgetTodoProps>();

const queryClient = useQueryClient();

const isModalEditOpen = ref(false);

const { mutateAsync: editTodo } = useMutation({
  mutationFn: (params: TPutTodoRequest) => todosApi.putTodo(params),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  },
});

const { mutateAsync: deleteTodo } = useMutation({
  mutationFn: (params: TDeleteTodoRequest) => todosApi.deleteTodo(params),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  },
});

async function handleEditTodo(value: TTodoEdit) {
  try {
    const request: TPutTodoRequest = { data: value, documentId: item.documentId };

    await editTodo(request);
  } catch (err) {
    console.error(err);
  } finally {
    isModalEditOpen.value = false;
  }
}

async function handleDeleteTodo(documentId: string) {
  try {
    const request: TDeleteTodoRequest = { documentId };

    await deleteTodo(request);
  } catch (err) {
    console.error(err);
  }
}
</script>

<template>
  <FeatureTodoCard :item="item" @edit="isModalEditOpen = true" @delete="handleDeleteTodo"></FeatureTodoCard>

  <AppModal :is-open="isModalEditOpen" @modal-close="isModalEditOpen = false">
    <template #header>Edit todo</template>

    <template #content>
      <FeatureTodoForm :item="item" @submit="handleEditTodo"></FeatureTodoForm>
    </template>
  </AppModal>
</template>
