interface Task {
  id: number;
  title: string;
  status: "todo" | "progress" | "complete";
}

const tasks: Task[] = [];
let id = 0;

// タスクを追加する
const addTask = (title: string): void => {
  let incrementedId = ++id;
  const task: Task = { id: incrementedId, title: title, status: "todo" };
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
    let mark
    switch (task.status) {
      case "todo":
        mark = " "
        break;
      case "progress":
        mark = "-"
        break;
      case "complete":
        mark = "✔"
        break;
    }
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
  task.status = "complete"
}

// Todoを使う
addTask("朝御飯を食べる");
completeTask(1)
addTask("昼御飯を食べる");
printTask();
