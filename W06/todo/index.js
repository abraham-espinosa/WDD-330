var tasks = [];
document.getElementById("allBtn").addEventListener("click", () => {
  alert("All");
});

document.getElementById("completedBtn").addEventListener("click", () => {
  alert("Completed");
});

document.getElementById("activeBtn").addEventListener("click", () => {
  alert("Active");
});

document.getElementById("addBtn").addEventListener("click", () => {
  if (document.getElementById('newTask').value != "") {
    reset();
    tasks.push({
      id: Date.now(),
      content: document.getElementById('newTask').value,
      completed: false
    });
    document.getElementById('newTask').value = "";
    display(tasks);
    
    var deleteTask = document.getElementsByClassName("deleteTask");
    var i;
    for (i = 0; i < deleteTask.length; i++) {
      deleteTask[i].onclick = function () {
          // alert(this.value);
          var newArray = tasks.filter(value => value.id != this.value);
          tasks = newArray;
          console.log(tasks);
          reset();
          display(tasks);
        }
    }

  } else {
    alert("Insert a value");
  }
});



var display = tasks => {
  tasks.forEach(element => {
    var li = document.createElement('li');

    var completeBtn = document.createElement('button');
    completeBtn.value = element.id;
    completeBtn.innerText = "✓";
    completeBtn.className = "completeBtn";

    var cancelBtn = document.createElement('button');
    cancelBtn.innerText = "X";
    cancelBtn.value = element.id;
    cancelBtn.className = "deleteTask";

    
    var label = document.createElement('label');
    label.innerText = element.content;

    li.appendChild(completeBtn);
    li.appendChild(label);
    li.appendChild(cancelBtn);

    document.querySelector('#list').appendChild(li);
  });
}



const reset = () => {
  document.querySelector('#list').innerHTML = '';
}

let cancelBtn = btn => {
  console.log(btn.value);
}