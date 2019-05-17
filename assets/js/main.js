// this is our initial data
// the format of the date is yyyy-mm-dd

let tasksArray = [
  {
    description: "Study CSS",
    creationDate: new Date("2019-04-01"),
    dueDate: new Date("2019-01-05"),
    marked: false
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
};

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

function orderTasks(array, orderType, ascendent) {
  return (array = array.sort(function(a, b) {
    if (ascendent) {
      if (orderType === "creationDate" || orderType === "dueDate") {
        return new Date(a[orderType]) > new Date(b[orderType]) ? 1 : -1;
      } else {
        return a[orderType] > b[orderType] ? 1 : -1;
      }
    } else {
      if (orderType === "creationDate" || orderType === "dueDate") {
        return new Date(b[orderType]) > new Date(a[orderType]) ? 1 : -1;
      } else {
        return b[orderType] > a[orderType] ? 1 : -1;
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
  console.log(event);
  orderTasks(tasksArray, ORDER_TYPES[2], isAscendentDue);
  isAscendentDue = !isAscendentDue;
  console.log(tasksArray);
  showTasks();
}

function handleOrderCreation(event) {
  console.log(event);
  orderTasks(tasksArray, ORDER_TYPES[1], isAscendentCreation);
  isAscendentCreation = !isAscendentCreation;
  console.log(tasksArray);
  showTasks();
}

function handleOrderAlphabetic(event) {
  console.log(event);
  orderTasks(tasksArray, ORDER_TYPES[0], isAscendentAlphabetic);
  isAscendentAlphabetic = !isAscendentAlphabetic;
  console.log(tasksArray);
  showTasks();
}

$orderButtonDue.addEventListener("click", handleOrderDue);
$orderButtonCreation.addEventListener("click", handleOrderCreation);
$orderButtonAlphabetic.addEventListener("click", handleOrderAlphabetic);

function showTasks() {
  function formatDate(Date) {
    age += years;
    console.log(age);
  }
  var length = tasksArray.length;
  for (i = 0; i < length; i++) {
    var entry = document.createElement("li");
    entry.className = "task__item";
    entry.id = i;
    entry.innerHTML =
      "<input type='checkbox' class='task__checkbox' onclick='markTaskCallback(this);'/><span class='task_description'>" +
      tasksArray[i].description +
      "</span> <span class='task__date'>" +
      tasksArray[i].dueDate.toDateString() +
      " </span><input type='checkbox' class='task__priority' />";
    document.getElementById("task_list").appendChild(entry);
  }
  return true;
}

// // Example of orderTasks
// console.log(tasksArray);
// orderTasks(tasksArray, orderTypes[0], true);
// console.log(tasksArray);
