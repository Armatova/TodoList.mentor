import React, { useState } from "react";
import Todo from "./components/Todo/Todo";
import TodoList from "./components/TodoList/TodoList";
import EditModal from "./components/EditModal/EditModal";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  function handleTask(newObj) {
    let newTodos = [...tasks];
    newTodos.push(newObj);
    setTasks(newTodos);
  }
  console.log(tasks);

  function handleDeleteTask(id) {
    let newTaskArray = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(newTaskArray);
  }

  function handleEditTask(editedTask) {
    let newTaskArray = tasks.map((item) => {
      if (editedTask.id !== item.id) {
        return item;
      } else {
        return editedTask;
      }
    });
    setTasks(newTaskArray);
    setShow(false);
  }

  function getTaskToEdit(task) {
    setTaskToEdit(task);
    setShow(true);
  }

  return (
    <div className="App">
      <Todo handleTask={handleTask} />
      <TodoList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        getTaskToEdit={getTaskToEdit}
      />
      {taskToEdit ? (
        <EditModal
          show={show}
          setShow={setShow}
          handleEditTask={handleEditTask}
          taskToEdit={taskToEdit}
        />
      ) : null}
    </div>
  );
}

export default App;
