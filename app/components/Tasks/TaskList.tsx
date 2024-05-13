"use client";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import useTaskStore from "@/app/store";
import { TaskItem } from "./TaskItem";
import { useState } from "react";
import { AddTask } from "./AddTask";
import { motion, AnimatePresence } from "framer-motion";

export function TaskList() {
  const { tasks } = useTaskStore();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-t-primary">Today&apos;s Goal</h1>
        <button onClick={() => setModalOpen((prev) => !prev)}>
          <AddCircleIcon className="cursor-pointer text-t-primary" />
        </button>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AddTask setModalOpen={setModalOpen} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col gap-4">
        {tasks.length === 0 ? (
          <p>No tasks</p>
        ) : (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}
