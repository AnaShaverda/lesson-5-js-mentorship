const submit = document.getElementById("submit");
const textarea = document.getElementById("note");
const listContainer = document.querySelector(".list");

submit.addEventListener("click", () => {
  if (textarea.value.trim() !== "") {
    const todoItem = document.createElement("div");
    todoItem.classList.add("list-container");
    todoItem.innerHTML = `
        <li>
             ${textarea.value}
        </li>
        <div>
            <button class="delete">delete</button>
            <button class="edit">edit</button>
        </div>
    `;
    listContainer.append(todoItem);
    textarea.value = "";
    const deleteBtn = todoItem.querySelector(".delete");
    const editBtn = todoItem.querySelector(".edit");

    deleteBtn.addEventListener("click", () => {
      todoItem.remove();
    });

    editBtn.addEventListener("click", () => {
      textarea.value = todoItem.innerText;
      todoItem.remove();
    });
  }
});
