"use client";

import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import useTaskStore from "../store";
import { motion } from "framer-motion";

export function Tracker() {
  const { getCompleted } = useTaskStore();
  const { totalTasks, completedTasks, progress } = getCompleted();
  return (
    <div className="text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-4 flex gap-4 items-center">
      <TrackChangesIcon className="text-[4rem]" />
      <div className="w-[80%]" >
        <h1 className="text-lg font-bold">
          {progress === 100
            ? "You've completed all tasks!"
            : "Today's Progress."}
        </h1>
        <p className="text-sm font-light">
          {completedTasks} of {totalTasks} completed
        </p>
        <div className="w-full h-[3px] bg-blue-400 rounded-lg my-2">
          <motion.div
            initial={{ width: `0%` }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-white rounded-lg"
          ></motion.div>
        </div>
        <p className="text-right text-xs font-light text-white">{progress}%</p>
      </div>
    </div>
  );
}
