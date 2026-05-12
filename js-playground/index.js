const tasks = []
let id = 1
// tasks [ {id: 1, title, isComplete }, {id: 2, title, isComplete }]

// 入力: String 処理: Arrayに追加
const addTask = (title) => {
  const incrementableId = id++
  const task = { id: incrementableId, title: title, isComplete: false }
  tasks.push(task)

  console.log(`追加したにょ \nid: ${incrementableId} \nタイトル: ${title}\n`)
}
const printTask = (task) => {
  const mark = task.isComplete ? "✔" : " "
  console.log(`[${mark}]: ${task.title}`)
}

// タスクを表示
// 入力: Array 出力: Arrayを表示
const listTask = () => {
  console.log(`<タスクリスト>\n`)
  for (const task of tasks) {
    printTask(task)
  }
}

// タスクを完了
// 入力:Array 出力: 完了したタスクの表示
const completeTask = (taskId) => {
  const targetTask = tasks.find((t) => t.id === taskId)
  targetTask.isComplete = true

  console.log("タスクを完了したにょ")
  printTask(targetTask)
}

// データ構造
// tasks { id:number, title: String, isComplete: boolean }
// id: 検索
// title: 表示
// isComplete: 完了してるかどうか

addTask("初めてのタスク")
addTask("2こめのタスク")
listTask()
completeTask(1)
listTask()
