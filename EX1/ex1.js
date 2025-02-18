function addTodo() {
    let name = document.getElementById("todo-name").value;
    let content = document.getElementById("todo-content").value;
    
    if (name && content) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${name}: ${content} <button class="remove-button" onclick="removeTodo(this)">Remove</button>`;
        document.getElementById("todo-list").appendChild(listItem);
    }
}

function removeTodo(button) {
    button.parentElement.remove();
}
