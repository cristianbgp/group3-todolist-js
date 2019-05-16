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

function createTask(description, due_date) {
  newTask = {
    description: description,
    creation_date: new Date(),
    due_date: due_date,
    marked: false
  };
  tasksArray.push(newTask);
}

createTask("Hola", new Date());

console.log(tasksArray);
