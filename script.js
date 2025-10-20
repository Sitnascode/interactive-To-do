const addTask = document.getElementById("addTask");
const inputTask = document.getElementById("taskInput");
const date = document.getElementById("taskDate");
const taskList = [];

addTask.addEventListener("click", () => {
  const tasksName = inputTask.value.trim();
  const taskDate = date.value;
  if (tasksName === "" || taskDate === "") {
    alert("Please insert task and date");
    return;
  }
  const task = {
    name1: tasksName,
    date: taskDate,
  };

  taskList.push(task);
  inputTask.value = "";
  date.value = "";
  alert("✅ You added the task: " + task.name1);
});
