// this is our initial data
// the format of the date is yyyy-mm-dd

let tasksArray = [
  {
    description: "Study CSS",
    creationDate: new Date("2019-01-01"),
    dueDate: new Date("2019-01-05"),
    marked: false
  },
  {
    description: "Present miniassigment",
    creationDate: new Date("2019-01-03"),
    dueDate: new Date("2019-01-02"),
    marked: false
  },
  {
    description: "Update Cuchi",
    creationDate: new Date("2019-01-02"),
    dueDate: new Date("2019-01-02"),
    marked: false
  }
];

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

// // tests
// var yesterdayDate = new Date();
// yesterdayDate.setDate(yesterdayDate.getDate() - 1);

// var tomorrowDate = new Date();
// tomorrowDate.setDate(tomorrowDate.getDate() + 1);

// createTask("Hola", yesterdayDate); // should return false
// createTask("Hola", tomorrowDate); // should return true

orderTypes = ["description", "creationDate", "dueDate"];

function orderTasks(array, orderType, ascendent) {
  return array.sort(function(a, b) {
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
  });
}

tasksArray = orderTasks(tasksArray, orderTypes[0], true);
console.log(tasksArray);
