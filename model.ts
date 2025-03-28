import Task from "./interface";

let tasks: Task[] = [];

export function addTask(title: string): void {
  const newTask: Task = {
    id: tasks.length + 1,
    title,
    completed: false,
    creatredAt: new Date(),
    completedAt: null,
  };
  tasks.push(newTask);
}

export function completeTask(id: number | string): boolean {
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    console.log(`Task with ID ${id} not found.`);
    return false;
  } else {
    task.completed = true;
    task.completedAt = new Date();
    console.log(`Task with ID ${id} marked as completed.`);
    return true;
  }
}

export function listTasks(): Task[] {
  return tasks;
}
