import React from "react";
import TaskItem from "../components/TaskItem";
import "./styles.scss";

function TasksList() {
  const tasksList = JSON.parse(localStorage.getItem("data")) | [];

  return (
    <ul className="tasks">
      {tasksList.length > 0 &&
        tasksList.map((item, index) => <TasksList item={item} key={index} />)}
    </ul>
  );
}


export default TasksList;