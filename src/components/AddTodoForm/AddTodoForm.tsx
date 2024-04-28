import { useEffect, useState, useRef, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../state/todos/todosSlice";
import './AddTodoForm.scss';

type Props = {
  hideForm: () => unknown
}

const AddTodoForm = ({ hideForm }: Props) => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const inputField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputField.current) {
      inputField.current.focus();
    }
  }, [])

  const handleInput = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTodoText(evt.currentTarget.value);
  }
  const isEmptyForm = (): boolean => {
    return todoText.trim() === '';
  }
  const onHideForm = (): void => {
    setTodoText('');
    hideForm();
  }
  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (isEmptyForm()) {
      return;
    }

    const newTodo = {
      text: todoText,
      isCompleted: false,
      isDeleted: false,
    };
    dispatch(createTodo(newTodo));
    setTodoText('');
    hideForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputField}
        type="text"
        value={todoText}
        onChange={handleInput}
        onBlur={onHideForm}
      />
      <div className="flex btn-block">
        <button
          type="button"
          onClick={onHideForm}
          className="cursor-pointer"
        >
          Cancel
        </button>
        <input
          type="submit"
          value='Save'
          className="cursor-pointer"
          disabled={isEmptyForm()}
        />
      </div>
    </form>
  )
}

export default AddTodoForm;
