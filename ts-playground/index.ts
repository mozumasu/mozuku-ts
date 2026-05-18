import { addTask, completeTask, printTask, resetTasks } from "./todos.ts"
// Todoを使う
addTask("朝御飯を食べる");
completeTask(1)
addTask("昼御飯を食べる");
printTask();

resetTasks();
printTask();
