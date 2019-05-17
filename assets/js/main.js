// this is our initial data
// the format of the date is yyyy-mm-dd

const tasksArray = [
  {
    description: "Study CSS",
    creation_date: new Date("2019-01-01"),
    due_date: new Date("2019-01-05"),
    marked: false
  },
  {
    description: "Present miniassigment",
    creation_date: new Date("2019-01-01"),
    due_date: new Date("2019-01-02"),
    marked: false
  },
  {
    description: "Update Cuchi",
    creation_date: new Date("2019-01-01"),
    due_date: new Date("2019-01-02"),
    marked: false
  }
];

function createTask(description, dueDate) {
  currentDate = new Date();
  if (dueDate <= currentDate) return false;

  newTask = {
    description: description,
    creation_date: currentDate,
    due_date: dueDate,
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
