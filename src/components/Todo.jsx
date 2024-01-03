import React, { useEffect, useState } from "react";
import "./Todo.css";
import { MdDeleteOutline } from "react-icons/md";

export default function Todo({ menuActive, todo, reload, setReload, deleteTodo }) {
  const [teste, setTeste] = useState(todo.checked);

  function handleCheckbox(event) {
    setTeste(event.target.checked);
    todo.checked = event.target.checked;

    setReload(!reload);
  }

  useEffect(() => { }, [teste, todo.checked]);

  return (
    <div className='todoContainer'>
      <div className='todo'>
        <input
          type="checkbox"
          name="checkbox"
          id={todo.id}
          className='checkbox'
          onChange={handleCheckbox}
          checked={todo.checked}
        />

        <label htmlFor={todo.id} className='label'>
          {todo.text}
        </label>
      </div>

      {menuActive === "completed" ? (
        <MdDeleteOutline className='deleteIcon' onClick={() => deleteTodo(todo.id)} />
      ) : null}
    </div>
  );
}
