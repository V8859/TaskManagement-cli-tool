import * as readline from "readline";
import { addTask, listTasks, completeTask } from "./model";
import Task from "./interface";
const menuString = `
Task Management System
q. QUIT
l. LIST
a. ADD
c. COMPLETE
Please select an option:
`;

const Header: string = `
------------Task List-----------
ID| Title| Status
--------------------------------`;

const rowString = (task: Task) => {
  const str = `${task.id} | ${task.title} | ${
    task.completed ? "Completed" : "Not Completed"
  }
--------------------------------`;
  return str;
};

export default function showMenu(onQuit: () => void): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  function displayMenu() {
    console.log(menuString);
    rl.question("Please select an option: ", handleInput);
  }

  function handleInput(input: string) {
    switch (input) {
      case "a":
        rl.question("Enter task ", (title: string) => {
          addTask(title);
          console.log(`Task "${title}" added successfully.`);
          displayMenu();
        });
        break;
      case "l":
        console.log(Header);
        listTasks().forEach((task) => {
          console.log(rowString(task));
        });
        displayMenu();
        break;
      case "c":
        rl.question("Please input task ID:", (input: string) => {
          const id = parseInt(input);
          const result = completeTask(id);
        });
      case "q":
        onQuit();
        rl.close();
        break;
      default:
        console.log("Invalid option, please try again.");
        displayMenu();
        break;
    }
  }
  displayMenu();
}
