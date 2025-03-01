import React from "react";

const TodoFooter = ({ todos, clearCompleted }) => {
  const remaining = todos.filter((todo) => !todo.completed).length;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{remaining}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default TodoFooter;
