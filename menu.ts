import * as readline from "readline";
import { addTask, listTasks, completeTask } from "./model";
const menuString = `
Task Management System
q. QUIT
`;

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
        rl.question("list tasks", () => {
          console.log(listTasks());
          displayMenu();
        });
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
