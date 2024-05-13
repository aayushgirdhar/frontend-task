import { create } from "zustand";

type Task = {
  id: number;
  name: string;
  done: boolean;
};

type dailyGoal = {
  date: string;
  progress: number;
};

interface Store {
  tasks: Task[];
  dailyGoals: dailyGoal[];
  addTask: (name: string) => void;
  toggleTask: (id: number) => void;
  completeAllTasks: () => void;
  getCompleted: () => {
    totalTasks: number;
    completedTasks: number;
    progress: number;
  };
  getDailyGoals: () => dailyGoal[];
}

function formatDate() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString();
  return `${day}/${month}`;
}

const useTaskStore = create<Store>((set, get) => ({
  tasks: [
    { id: 1, name: "Workout for 20 mins", done: false },
    { id: 2, name: "Read book for 15 mins", done: false },
    { id: 3, name: "30 mins walk", done: false },
    { id: 4, name: "Sleep at 11 sharp", done: false },
    { id: 5, name: "Drink 3L water", done: false },
  ],
  dailyGoals: [
    { date: "28/4", progress: 92 },
    { date: "30/4", progress: 100 },
    { date: "02/5", progress: 98 },
    { date: "05/5", progress: 90 },
    { date: "11/5", progress: 84 },
    { date: "14/5", progress: 82 },
    { date: "15/5", progress: 80 },
    { date: "22/5", progress: 80 },
    { date: formatDate(), progress: 0 },
  ],
  addTask: (name) => {
    set((state) => {
      const tasks = [
        ...state.tasks,
        { id: state.tasks.length + 1, name, done: false },
      ]
      const completedTasks = tasks.filter((task) => task.done).length;
      const totalTasks = tasks.length;
      const progress = Number(((completedTasks / totalTasks) * 100).toFixed(1));

      const dailyGoals = state.dailyGoals.map((goal) =>
        goal.date === formatDate() ? { ...goal, progress } : goal
      );
      return { tasks, dailyGoals };
    });
  },
  toggleTask: (id) => {
    set((state) => {
      const tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      );

      const completedTasks = tasks.filter((task) => task.done).length;
      const totalTasks = tasks.length;
      const progress = Number(((completedTasks / totalTasks) * 100).toFixed(1));

      const dailyGoals = state.dailyGoals.map((goal) =>
        goal.date === formatDate() ? { ...goal, progress } : goal
      );

      return { tasks, dailyGoals };
    });
  },
  completeAllTasks: () => {
    set((state) => {
      const tasks = state.tasks.map((task) => ({ ...task, done: true }));
      const dailyGoals = state.dailyGoals.map((goal) =>
        goal.date === formatDate() ? { ...goal, progress: 100 } : goal
      );
      return { tasks, dailyGoals };
    });
  },
  getCompleted: () => {
    const tasks: Task[] = get().tasks;
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task: Task) => task.done).length;
    return {
      totalTasks,
      completedTasks,
      progress: Number(((completedTasks / totalTasks) * 100).toFixed(1)),
    };
  },
  getDailyGoals: () => {
    return get().dailyGoals;
  },
}));

export default useTaskStore;
