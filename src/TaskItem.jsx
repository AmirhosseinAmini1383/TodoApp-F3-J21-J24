import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskItems = () => {
  const { TaskItems, setTaskItems } = useContext(TaskContext);
  return (
    <ul className="list-group m-0 p-0 mt-2">
      {TaskItems.map((index) => (
        <li
          className={`list-group-item d-flex justify-content-between ${
            index.done ? "list-group-item-success" : ""
          }`}
        >
          {index.title}
          <span>
            {index.done ? (
              <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"></i>
            ) : (
              <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"></i>
            )}
            <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskItems;
