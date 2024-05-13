"use client";

import { useEffect, useState } from "react";
import useTaskStore from "@/app/store";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";
import "./TrackAll.css";

export function TrackAll() {
  const [value, setValue] = useState("0");
  const { completeAllTasks } = useTaskStore();

  useEffect(() => {
    if (value === "100") {
      completeAllTasks();
      alert("All tasks completed!");
      const timeout = setTimeout(() => {
        setValue("0");
      }, 50);
      return () => clearTimeout(timeout);
    } else if (Number(value) < 100 && value !== "0") {
      const timeout = setTimeout(() => {
        setValue("0");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [value, completeAllTasks]);

  return (
    <div className="relative">
      <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-t-primary font-semibold">
        Swipe to track all
      </p>
      <div className="absolute top-[50%] right-12 -translate-y-[50%] text-t-primary">
        <KeyboardArrowRightIcon className="text-[2.5rem] text-orange-500" />
      </div>
      <div className="absolute top-[50%] right-7 -translate-y-[50%] text-t-primary">
        <KeyboardArrowRightIcon className="text-[2.5rem] text-orange-400" />
      </div>
      <div className="absolute top-[50%] right-2 -translate-y-[50%] text-t-primary">
        <KeyboardArrowRightIcon className="text-[2.5rem] text-orange-200" />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="slider"
      />
    </div>
  );
}
