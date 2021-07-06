const addBtn = document.querySelector("#addBtn");
const todoText = document.querySelector("#todotext");
const todoItems = document.querySelector("#items");
const completedTodo = document.querySelector("#completedTodo");

let makeItem = function (task) {
    let liTag = document.createElement("li")
    let inputTag = document.createElement("input")
    let labelTag = document.createElement("label")

    inputTag.id = 'checkbox'
    inputTag.type = 'checkbox'

    labelTag.innerText = task

    liTag.appendChild(inputTag)
    liTag.appendChild(labelTag)

    return liTag
}

addBtn.addEventListener('click', function (e) {
    e.preventDefault()

    if (todoText.value.trim() === '') {
        alert("Please !!! Fill Up the input Box")
    } else {

        liTag = makeItem(todoText.value)
        todoItems.appendChild(liTag)

        bindIncompletedli(liTag)


        todoText.value = ''
    }

})

let bindIncompletedli = function (liTag) {
    let checkbox = liTag.querySelector("input[type='checkbox']")
    checkbox.onchange = completedTask;
}
// completed todo with click



let completedTask = function () {
    let liTag = this.parentElement;

    let checkBox = liTag.querySelector("#checkbox");

    completedTodo.appendChild(liTag)
    checkBox.remove()

    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = 'Delete'
    deleteBtn.type = 'button'
    deleteBtn.id = 'delete'

    liTag.appendChild(deleteBtn)

    bindcompletedli(liTag)
}


let bindcompletedli = function (liTag) {
    let deleteButton = liTag.querySelector("#delete")
    deleteButton.onclick = deleteLi;
}

let deleteLi = function () {
    let liTag = this.parentNode;
    liTag.remove()
}

