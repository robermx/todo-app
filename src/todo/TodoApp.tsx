import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/TodoProvider';

export const TodoApp = () => {
  return (
    <TodoProvider>
      <h1>TODO App</h1>
      <TodoList />
    </TodoProvider>
  );
};
