// this is our initial data
// the format of the date is yyyy-mm-dd

let tasksArray = [
  {
    description: "Study CSS",
    creationDate: new Date("2019-04-01"),
    dueDate: new Date("2019-01-05"),
    marked: true
  },
  {
    description: "Present miniassigment",
    creationDate: new Date("2019-04-03"),
    dueDate: new Date("2019-01-17"),
    marked: false
  },
  {
    description: "Update Cuchi",
    creationDate: new Date("2019-04-02"),
    dueDate: new Date("2019-01-19"),
    marked: false
  }
];

window.onload = function() {
  showTasks();
  document.getElementById("task_date").value = tomorrow();
};

//steps to capture form in a Variable
const $addForm = document.getElementById("newTaskForm");
$addForm.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();

  const $description = event.target.elements.descriptionTask.value;
  const $dueDate = document.getElementById("task_date").value;
  let dateFormatted = new Date($dueDate);
  var tomorrow = new Date();
  tomorrow.setDate(dateFormatted.getDate() + 1);
  createTask($description, tomorrow);

  switch (currentOrder) {
    case "dueDate":
      orderTasks(tasksArray, currentOrder, currentDirectionDue);
      break;

    case "creationDate":
      orderTasks(tasksArray, currentOrder, currentDirectionCreation);
      break;

    case "description":
      orderTasks(tasksArray, currentOrder, currentDirectionAlphabetic);
      break;

    default:
      break;
  }
  showTasks();
}

function createTask(description, dueDate) {
  currentDate = new Date();
  if (dueDate <= currentDate) return false;

  newTask = {
    description: description,
    creationDate: currentDate,
    dueDate: dueDate,
    marked: false
  };
  tasksArray.push(newTask);
  return true;
}

function toggleTask(index) {
  tasksArray[index].marked = !tasksArray[index].marked;
  return tasksArray[index].marked;
}

function markTaskCallback(element) {
  let index = element.parentElement.id;
  toggleTask(index);
}

function destroyTask(index) {
  tasksArray.splice(index, 1);
}

const ORDER_TYPES = ["description", "creationDate", "dueDate"];
let currentOrder = ORDER_TYPES[1];
let currentDirectionDue = true;
let currentDirectionCreation = true;
let currentDirectionAlphabetic = true;

function orderTasks(array, orderType, ascendent) {
  return (array = array.sort(function(a, b) {
    if (ascendent) {
      if (orderType === "creationDate" || orderType === "dueDate") {
        return new Date(a[orderType]) > new Date(b[orderType]) ? 1 : -1;
      } else {
        return a[orderType].toLowerCase() > b[orderType].toLowerCase() ? 1 : -1;
      }
    } else {
      if (orderType === "creationDate" || orderType === "dueDate") {
        return new Date(b[orderType]) > new Date(a[orderType]) ? 1 : -1;
      } else {
        return b[orderType].toLowerCase() > a[orderType].toLowerCase() ? 1 : -1;
      }
    }
  }));
}

let isAscendentDue = true;
let isAscendentCreation = true;
let isAscendentAlphabetic = true;
const $orderButtonDue = document.getElementById("order-by-due");
const $orderButtonCreation = document.getElementById("order-by-creation");
const $orderButtonAlphabetic = document.getElementById("order-by-alphabetic");

function handleOrderDue(event) {
  orderTasks(tasksArray, ORDER_TYPES[2], isAscendentDue);
  currentOrder = ORDER_TYPES[2];
  currentDirectionDue = isAscendentDue;
  isAscendentDue = !isAscendentDue;
  showTasks();
}

function handleOrderCreation(event) {
  orderTasks(tasksArray, ORDER_TYPES[1], isAscendentCreation);
  currentOrder = ORDER_TYPES[1];
  currentDirectionCreation = isAscendentCreation;
  isAscendentCreation = !isAscendentCreation;
  showTasks();
}

function handleOrderAlphabetic(event) {
  orderTasks(tasksArray, ORDER_TYPES[0], isAscendentAlphabetic);
  currentOrder = ORDER_TYPES[0];
  currentDirectionAlphabetic = isAscendentAlphabetic;
  isAscendentAlphabetic = !isAscendentAlphabetic;
  showTasks();
}

$orderButtonDue.addEventListener("click", handleOrderDue);
$orderButtonCreation.addEventListener("click", handleOrderCreation);
$orderButtonAlphabetic.addEventListener("click", handleOrderAlphabetic);

function showTasks() {
  //clear task_list
  var e = document.getElementById("task_list");
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  //fill task_list
  var length = tasksArray.length;
  for (i = 0; i < length; i++) {
    var entry = document.createElement("li");
    entry.className = "task__item";
    entry.id = i;
    entry.innerHTML =
      "<input type='checkbox' onClick='markTaskCallback(this);'" +
      (tasksArray[i].marked ? "checked>" : ">") +
      "<span class='task_description'>" +
      tasksArray[i].description +
      "</span> <span class='task__date'>" +
      tasksArray[i].dueDate.toDateString() +
      " </span><input type='checkbox' class='task__priority' />";
    document.getElementById("task_list").appendChild(entry);
  }
  return true;
}

//default date form is tomorrow
function tomorrow() {
  var date = new Date();
  var day = date.getDate() + 1;
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  tomorrow = year + "-" + month + "-" + day;
  return tomorrow;
}
