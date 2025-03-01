import React from "react";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => removeTodo(todo.id)} />
      </div>
    </li>
  );
};

export default TodoItem;
