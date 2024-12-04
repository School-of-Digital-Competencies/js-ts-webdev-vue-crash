import qs from 'qs';
import type {
  TGetTodoRequest,
  TGetTodoResponse,
  TGetTodosRequest,
  TGetTodosResponse,
  TPostTodoRequest,
  TPostTodoResponse,
  TPutTodoRequest,
  TPutTodoResponse,
} from './types';

const API_URL = 'http://localhost:1337/api';

async function getTodos(params: TGetTodosRequest) {
  const { sort, pagination } = params;
  const query = qs.stringify(
    {
      sort: sort || {},
      pagination: pagination || {},
    },
    { encodeValuesOnly: true },
  );

  try {
    const response = await fetch(`${API_URL}/todos?${query}`);

    if (!response.ok) {
      throw new Error('Network error');
    }

    return response.json() as Promise<TGetTodosResponse>;
  } catch (err) {
    throw err;
  }
}

async function getTodo(params: TGetTodoRequest) {
  const { documentId } = params;

  try {
    const response = await fetch(`${API_URL}/todos/${documentId}`);

    if (!response.ok) {
      throw new Error('Network error');
    }

    return response.json() as Promise<TGetTodoResponse>;
  } catch (err) {
    throw err;
  }
}

async function postTodo(params: TPostTodoRequest) {
  const body = JSON.stringify(params);

  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    if (!response.ok) {
      throw new Error('Network error');
    }

    return response.json() as Promise<TPostTodoResponse>;
  } catch (err) {
    throw err;
  }
}

async function putTodo(params: TPutTodoRequest) {
  const { documentId } = params;
  const body = JSON.stringify({
    data: params.data,
  });

  try {
    const response = await fetch(`${API_URL}/todos/${documentId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    if (!response.ok) {
      throw new Error('Network error');
    }

    return response.json() as Promise<TPutTodoResponse>;
  } catch (err) {
    throw err;
  }
}

export default {
  getTodos,
  getTodo,
  postTodo,
  putTodo,
};
