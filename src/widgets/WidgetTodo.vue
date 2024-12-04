<script setup lang="ts">
import { AppModal, AppTodoCard } from '@/components';
import { todosApi, type TPutTodoRequest, type TTodo, type TTodoEdit } from '@/entities';
import { FeatureTodoForm } from '@/features';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { ref } from 'vue';

export type WidgetTodoProps = {
  item: Readonly<TTodo>;
};

const { item } = defineProps<WidgetTodoProps>();

const queryClient = useQueryClient();

const isModalEditOpen = ref(false);

const { isPending, isError, error, isSuccess, mutateAsync } = useMutation({
  mutationFn: (params: TPutTodoRequest) => todosApi.putTodo(params),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  },
});

async function handleEditTodo(value: TTodoEdit) {
  try {
    const request: TPutTodoRequest = { data: value, documentId: item.documentId };

    await mutateAsync(request);
  } catch (err) {
    console.error(err);
  } finally {
    isModalEditOpen.value = false;
  }
}
</script>

<template>
  <AppTodoCard :item="item" @edit="isModalEditOpen = true"></AppTodoCard>

  <AppModal :is-open="isModalEditOpen" @modal-close="isModalEditOpen = false">
    <template #header>Edit todo</template>

    <template #content>
      <FeatureTodoForm :item="item" @submit="handleEditTodo"></FeatureTodoForm>
    </template>
  </AppModal>
</template>
