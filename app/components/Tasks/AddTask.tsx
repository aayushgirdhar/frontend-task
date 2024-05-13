"use client";

import useTaskStore from "@/app/store";
import { useState } from "react";

export function AddTask({ setModalOpen }: { setModalOpen: any }) {
  const { addTask } = useTaskStore();
  const [name, setName] = useState("");

  const handleTask = () => {
    if (name) {
      addTask(name);
    }
    setTimeout(() => {
      setModalOpen(false);
    }, 50);
  };

  return (
    <div className="mx-auto bg-bg-secondary rounded-lg mb-3 p-4 flex flex-col gap-4">
      <input type="text" onChange={(e) => setName(e.target.value)} className="p-2 outline-none border border-neutral-600 bg-transparent rounded-md text-t-primary" />
      <button
        onClick={handleTask}
        className=" bg-blue-600 hover:bg-blue-800 transition-colors p-2 rounded-md text-t-primary mt-auto"
      >
        Add task
      </button>
    </div>
  );
}
