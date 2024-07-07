"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Task from "../ui/Task";

export default function page() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  //   task data store
  const [task, setTasks] = useState([]);
  const fecthTask = async () => {
    const response = await axios.get("/api");
    setTasks(response.data.todos);
  };

  const deletedTask = async (id) => {
    const response = await axios.delete("/api", {
      params: {
        taskId: id,
      },
    });
    toast.success(response.data.msg);
    // ui update or delete item clen ui
    await fecthTask();
  };

  const completedTodoTask = async (id) => {
    const response = await axios.put(
      "/api",
      {},
      {
        params: {
          taskId: id,
        },
      }
    );
    toast.success(response.data.msg);
    await fecthTask();
  };

  // case
  useEffect(() => {
    fecthTask();
  }, []);

  console.log(task);

  // form value get onChange
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
  };

  //
  const handleTaskFrom = async (e) => {
    e.preventDefault();
    try {
      // api code
      const response = await axios.post("/api", formData);

      toast.success(response.data.msg);
      // rest form
      setFormData({
        name: "",
        description: "",
      });
      await fecthTask();
    } catch (error) {
      toast.error(`${error}`);
    }
  };
  return (
    <div onSubmit={handleTaskFrom}>
      <h1 className="text-2xl font-semibold py-10 text-center underline">Create New Task</h1>

      <div className="max-w-screen-md mx-auto">
        <form className="flex items-start flex-col gap-5 px-2 mx-auto">
          <input
            onChange={onChangeHandler}
            value={formData.name}
            type="name"
            name="name"
            id="name"
            placeholder="Task name"
            className="py-2 px-3 border-2 w-full"
          />
          <textarea
            onChange={onChangeHandler}
            value={formData.description}
            name="description"
            placeholder="Description"
            id="description"
            className="py-2 px-3 border-2 w-full"
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-400  text-white p-2 rounded"
            type="submit"
          >
            Add task
          </button>
          <Toaster />
        </form>
      </div>

      {/* table data show */}

      <div className="mt-24  mx-auto max-w-screen-lg">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {task.map((task, idx) => {
                return (
                  <Task
                    key={idx}
                    task={task}
                    idx={idx}
                    deletedTask={deletedTask}
                    completedTodoTask={completedTodoTask}
                  ></Task>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
