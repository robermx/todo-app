import { TodoProvider } from './context/TodoProvider';

export const TodoApp = () => {
  return (
    <TodoProvider>
      <h1>TODO App</h1>
      <ul>
        <li>TODO 1</li>
        <li>TODO 2</li>
        <li>TODO 3</li>
      </ul>
    </TodoProvider>
  );
};
