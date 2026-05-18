interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

const tasks: Task[] = [];
let id = 0;

// タスクを追加する
const addTask = (title: string): void => {
  let incrementedId = ++id;
  const task = { id: incrementedId, title: title, isComplete: false };
  tasks.push(task);
  console.log(
    ["タスクを追加したにょ", `[ ]: ${task.id} ${task.title}`].join("\n"),
  );
  console.log(tasks);
};

// タスクを表示する
const printTask = (): void => {
  console.log("<タスクリスト>");

  for (const task of tasks) {
    const mark = task.isComplete ? "✔" : " ";
    console.log(`[${mark}]: ${task.id} ${task.title}`);
  }
};

// タスクを完了する
const completeTask = (id: number): void => {
  const completeTaskId = id
  const task = tasks.find((t) => t.id === completeTaskId)
  if (task == undefined) {
    console.log("その番号のタスクは無いにょ")
    return
  }
  task.isComplete = true
}

// Todoを使う
addTask("朝御飯を食べる");
completeTask(1)
addTask("昼御飯を食べる");
printTask();
