import React, { useState } from "react";

const Todo = (props) => {
  let [task, setTask] = useState("");

  function handleAddTask() {
    if (task == "") {
      alert("Заполните поле");
      return;
    }
    let newTask = {
      task,
      id: Date.now(),
    };
    props.handleTask(newTask);
    setTask("");
  }
  return (
    <div>
      <input
        onChange={(e) => setTask(e.target.value)}
        type="text"
        value={task}
        placeholder="Task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default Todo;
