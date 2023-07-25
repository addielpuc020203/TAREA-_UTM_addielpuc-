let form = document.getElementById("form");
  let textInput = document.getElementById("textInput");
  let dateInput = document.getElementById("dateInput");
  let textarea = document.getElementById("textarea");
  let msg = document.getElementById("msg");
  let tasks = document.getElementById("tasks");
  let add = document.getElementById("add");

  let originalTaskData = {};

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
  });

  let formValidation = () => {
    if (textInput.value === "") {
      console.log("failure");
      msg.innerHTML = "Task cannot be blank";
    } else {
      console.log("success");
      msg.innerHTML = "";
      acceptData();
      add.setAttribute("data-bs-dismiss", "modal");
      add.click();

      (() => {
        add.setAttribute("data-bs-dismiss", "");
      })();
    }
  };

  let data = [];

  let acceptData = () => {
    if (originalTaskData.hasOwnProperty("index")) {

      const index = originalTaskData.index;
      data[index] = {
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
      };
    } else {

      data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
      });
    }

    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
    createTasks();
  };

  let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
      return (tasks.innerHTML += `
        <div id=${y}>
          <span class="fw-bold">${x.text}</span>
          <span class="small text-white">${x.date}</span>
          <p>${x.description}</p>

          <span class="options">
            <i onClick="editTask(this)" data-index="${y}" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
      `);
    });

    // Add the button to delete all tasks
    tasks.innerHTML += `
      <div class="text-center">
        <button onClick="deleteAllTasks()" class="btn btn-danger ">Delete All Tasks</button>
      </div>
    `;

    resetForm();
  };

  let deleteAllTasks = () => {
    data = [];
    localStorage.setItem("data", JSON.stringify(data));
    createTasks();
  };

  let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
  };

  let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;

    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;

    originalTaskData = {
      text: textInput.value,
      date: dateInput.value,
      description: textarea.value,
      index: parseInt(selectedTask.id),
    };
  };

  let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
    originalTaskData = {};
  };

  (() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createTasks();
  })();