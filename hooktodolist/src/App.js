import React, { useState } from "react";
import "./App.css";
function Todo({ todos, index, completeTodo, deleteTodo }) {
  console.log(todos.text);
  return (
    <div
      className="todo"
      style={{ textDecoration: todos.isCompleted ? "line-through" : "" }}
    >
      {todos.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
function App() {
  //settotodos methid we used to update the state
  const [todos, setTodos] = useState([
    {
      text: "learn about react",
      isCompleted: false
    },
    {
      text: "Eat pizza",
      isCompleted: false
    },
    {
      text: "learn Git",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    //spread operator copy everything adn add the second parametern
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todos, index) => (
          <Todo
            key={index}
            index={index}
            todos={todos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
