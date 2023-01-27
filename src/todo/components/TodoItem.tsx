import { Todo } from '../interfaces/interfaces';
import { useTodos } from '../hooks/useTodos';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo } = useTodos();

  const handleDbClick = (): void => {
    toggleTodo(todo.id);
  };

  return (
    <li
      role="button"
      className={todo.completed ? 'text-decoration-line-through' : ''}
      onDoubleClick={handleDbClick}
    >
      {todo.description}
    </li>
  );
};
