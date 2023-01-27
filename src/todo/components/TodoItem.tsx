import { Todo } from '../interfaces/interfaces';

interface TodoItemProps {
  todo: Todo;
}
export const TodoItem = ({ todo }: TodoItemProps) => {
  return <li>{todo.description}</li>;
};
