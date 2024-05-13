import { Tracker } from "./components/Tracker";
import { TaskList } from "./components/Tasks/TaskList";
import { Chart } from "./components/Chart";
import { TrackAll } from "./components/Tasks/TrackAll";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-8">
      <Tracker />
      <TaskList />
      <TrackAll />
      <div className="w-full mx-auto bg-bg-secondary rounded-lg p-4">
        <Chart />
      </div>
    </div>
  );
}
