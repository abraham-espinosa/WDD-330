let tasks = [];
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
        // let div = document.createElement('div');
        // let input = document.createElement('input');
        // let cancelBtn = document.createElement('button');
        // cancelBtn.innerText = "X";
        // input.type = "checkbox";
        // let label = document.createElement('label');
        // label.innerText = document.getElementById('newTask').value;
        // div.appendChild(input);
        // div.appendChild(label);
        // div.appendChild(cancelBtn);
        // document.querySelector('#list').appendChild(div);
        // document.getElementById('newTask').value = "";
        
  } else {
    alert("Insert a value");
  }
});