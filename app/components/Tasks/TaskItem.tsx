import useTaskStore from "@/app/store";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export function TaskItem({ task }: { task: any }) {
  const { toggleTask } = useTaskStore();
  return (
    <div className="w-full h-16 px-4 flex flex-row justify-between items-center rounded-lg bg-bg-secondary text-t-primary">
      <div className="flex gap-3 items-center">
        <div className="bg-zinc-700 p-1 rounded-md">
          {task.done ? <AssignmentTurnedInIcon /> : <AssignmentIcon />}
        </div>
        <p>{task.name}</p>
      </div>
      <button
        onClick={() => toggleTask(task.id)}
        className="bg-zinc-700 p-1 rounded-md"
      >
        {task.done ? <CloseIcon /> : <DoneIcon />}
      </button>
    </div>
  );
}
