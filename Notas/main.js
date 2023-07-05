// Obtener elementos del DOM
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// Agregar evento de submit al formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

// Agregar evento de input al campo de texto
input.addEventListener("input", () => {
  if (input.value.length > 255) {
    input.value = input.value.slice(0, 255);
  }
});

// Validación del formulario
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

// Objeto para almacenar los datos del post
let data = {};

// Procesar los datos del formulario
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

// Crear un nuevo post
let createPost = () => {
  const postElement = document.createElement("div");
  postElement.className = "mb-4";

  const containerElement = document.createElement("div");
  containerElement.className = "container2 p-4 bg-gray-200 rounded-lg";

  const textElement = document.createElement("p");
  textElement.textContent = data.text.length > 50 ? data.text.slice(0, 50) + "..." : data.text;
  textElement.className = "truncate";

  const dateElement = document.createElement("p");
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  dateElement.textContent = formattedDate;
  dateElement.className = "date1";

  const optionsElement = document.createElement("span");
  optionsElement.className = "options";

  const editIcon = document.createElement("i");
  editIcon.className = "fas fa-edit color1";
  editIcon.addEventListener("click", () => {
    editPost(postElement);
  });

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash-alt color2";
  deleteIcon.addEventListener("click", () => {
    deletePost(postElement);
  });

  optionsElement.appendChild(editIcon);
  optionsElement.appendChild(deleteIcon);

  containerElement.appendChild(textElement);
  containerElement.appendChild(dateElement);

  postElement.appendChild(containerElement);
  postElement.appendChild(optionsElement);

  posts.appendChild(postElement);

  input.value = "";
};

// Eliminar un post
let deletePost = (postElement) => {
  postElement.remove();
};

// Editar un post
let editPost = (postElement) => {
  const textElement = postElement.querySelector("p.truncate");
  input.value = textElement.textContent;
  postElement.remove();
};
