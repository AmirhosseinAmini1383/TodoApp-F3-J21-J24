import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskItems = () => {
  const { TaskItems, setTaskItems } = useContext(TaskContext);
  const handleSetDoneTask = (id) => {
    const index = TaskItems.findIndex((t) => t.id == id);
    let NewTaskItems = [...TaskItems];
    NewTaskItems[index].done = !NewTaskItems[index].done;
    setTaskItems(NewTaskItems);
  };
  const handleSetDeleteTask = (id) => {
    const NewTask = TaskItems.filter((t) => t.id != id);
    setTaskItems(NewTask);
  };
  if (TaskItems.length) {
    return (
      <ul className="list-group m-0 p-0 mt-2">
        {TaskItems.map((t) => (
          <li
            className={`list-group-item d-flex justify-content-between ${
              t.done ? "list-group-item-success" : ""
            }`}
          >
            {t.title}
            <span>
              <i
                className={`me-3 pointer fas ${
                  t.done ? "fa-times text-warning" : "fa-check text-success"
                } transition_200 text_hover_shadow`}
                onClick={() => {
                  handleSetDoneTask(t.id);
                }}
              ></i>
              <i
                className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"
                onClick={() => {
                  handleSetDeleteTask(t.id);
                }}
              ></i>
            </span>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <h4 className="text-center text-danger mt-4">هیچ کاری ثبت نشد...!</h4>
    );
  }
};

export default TaskItems;
