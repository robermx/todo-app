import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/TodoProvider';

export const TodoApp = () => {
  return (
    <TodoProvider>
      <Title />
      <TodoList />
    </TodoProvider>
  );
};
