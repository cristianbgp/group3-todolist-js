// this is our initial data
// the format of the date is yyyy-mm-dd

tasksArray = [
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

console.log(tasksArray);

//create based on task-creator branch

function showTasks() {
  var length = tasksArray.length;

  for (i = 0; i < length; i++) {
    var entry = document.createElement("ul");
    entry.className = "body__task";
    entry.innerHTML =
      "<input type='radio'> " +
      tasksArray[i].description +
      " <input type='checkbox'>";
    //document.getElementById('Class').appendChild(entry);
    console.log(entry);
  }

  return true;
}
