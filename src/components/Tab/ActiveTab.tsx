import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import ActiveTabContent from "../ActiveTabContent/ActiveTabContent";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import './ActiveTab.scss';

type Props = {
  todoStatus: string;
}

const ActiveTab = ({ todoStatus }: Props) => {
  const [showForm, setShowForm] = useState(false);

  const todos = useSelector((state: RootState) => {
    return state.todoState.todos;
  });

  const isActiveStatus = todoStatus === 'active';

  const visibleTodos = useMemo(() => {
    return todos.filter(({ isDeleted }) => isActiveStatus !== isDeleted);    
  }, [todos, isActiveStatus]);

  const addTodoActionContent = showForm
    ? <AddTodoForm hideForm={() => setShowForm(false)}/>
    : <button
        className="cursor-pointer add-btn"
        onClick={() => setShowForm(true)}
      >
        Add new todo
      </button>
  const emptyTabContent = isActiveStatus
    ? <p className="text-center">You still have no todos</p>
    : <p className="text-center">Your deleted todo list is clean</p>;
  
  return (
    <>
      { isActiveStatus && addTodoActionContent }
      {
        (!visibleTodos.length)
          ? <div>
              {emptyTabContent}
            </div>
          : <ActiveTabContent
              visibleTodos={visibleTodos}
              isActiveStatus={isActiveStatus}
            />
      }
    </>
  )
}

export default ActiveTab;