import React, { Fragment, useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

const TopForm = () => {
  const [Task, setTask] = useState("");
  const { TaskItems, setTaskItems } = useContext(TaskContext);

  const handleSetTask = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    setTaskItems([
      ...TaskItems,
      { id: Math.random(), title: Task, done: false },
    ]);
    setTask("");
  };

  return (
    <Fragment>
      <h4 className="text-center text-info text_shdow">
        فعالیت های خود را وارد کنید
      </h4>
      <form onSubmit={handleAddTask}>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            value={Task}
            onChange={handleSetTask}
          />
          <button type="submit" className="btn btn-success me-1">
            ثبت
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default TopForm;
