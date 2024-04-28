import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodoStatus, softDelete, restoreTodo, hardDelete } from "../../state/todos/todosSlice";
import { Todo } from "../../state/todos/types";
import './ActiveTabContent.scss';

type Props = {
  visibleTodos: Todo[];
  isActiveStatus: boolean;
};

const TabContent = ({ visibleTodos, isActiveStatus }: Props) => {
  const [showDeleteControls, setShowDeleteControls] = useState(false);
  const [hoveredRow, setHoveredRow] = useState('');
  const dispatch = useDispatch();

  const onShowDeleteAction = (todoId: string): void => {
    setHoveredRow(todoId);
    setShowDeleteControls(true);
  }
  const onHideDeleteAction = (): void => {
    setHoveredRow('');
    setShowDeleteControls(false);
  }
  const toggleTodo = (todoId: string): void => {
    if (isActiveStatus) {
      dispatch(toggleTodoStatus(todoId));
    }
  }
  const deleteCell = (todoId: string): string => {
    return showDeleteControls && todoId === hoveredRow
      ? 'delete-btn show'
      : 'delete-btn hide'
  }
  const onDeleteTodo = (todoId: string): void => {
    if (isActiveStatus) {
      dispatch(softDelete(todoId))
    } else {
      dispatch(hardDelete(todoId))
    }
  }
  const tBodyContent = visibleTodos.map((todo, idx) => {
    const completeCell = isActiveStatus
      ? <input
          type="checkbox"
          checked={todo.isCompleted}
          disabled={todo.id === '-1'}
          onChange={() => dispatch(toggleTodoStatus(todo.id))}
          className="cursor-pointer"
        />
      : <span>
          {todo.isCompleted ? 'Yes' : 'No'}
        </span>;

    return (
      <tr
        key={idx}
        onMouseEnter={() => onShowDeleteAction(todo.id)}
        onMouseLeave={onHideDeleteAction}
      >
        <td className="complete">
          {completeCell}
        </td>
        <td
          onClick={() => toggleTodo(todo.id)}
          className="cursor-pointer"
          style={(todo.isCompleted && isActiveStatus) ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
        >
          {todo.text}
        </td>
        <td className={deleteCell(todo.id)}>
          <button
            disabled={!showDeleteControls}
            onClick={() => onDeleteTodo(todo.id)}
            className="cursor-pointer"
          >
            delete
          </button>
          {
            !isActiveStatus &&
              <button
                onClick={() => dispatch(restoreTodo(todo.id))}
                className="cursor-pointer"            
              >
                restore
              </button>
          }
        </td>
      </tr>)
  });

  return (
    <table>
      <thead>
        <tr>
          <th>
            COMPLETED
          </th>
          <th colSpan={2}>
            TEXT
          </th>
        </tr>
      </thead>
      <tbody>
        {tBodyContent}
      </tbody>
    </table>
  )
}

export default TabContent;