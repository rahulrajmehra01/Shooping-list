const itemInput = document.querySelector("#item-input");
const priorityInput = document.querySelector("#priority-input");
const form = document.querySelector("#item-form");
const listItem = document.querySelector("#item-list");

// OnSubmit
function OnSubmit(e) {
    e.preventDefault();

    if (itemInput.value === " " || priorityInput.value == "0") {
        alert("Please fill in all the fields");
        return;
    }

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(itemInput.value));

    const button = createButton("remove-item btn-link text-red");
    li.appendChild(button);

    listItem.appendChild(li);

    itemInput.value = "";
    priorityInput.value = "";
}

// Adding item in list
function createButton(classes) {
    const button = document.createElement("button");
    button.className = classes;

    const icon = createIcon("fa-solid fa-xmark");

    button.appendChild(icon);
    return button;
}

function createIcon(classes) {

    const icon = document.createElement("i");
    icon.className = classes;
    return icon;
}

form.addEventListener("submit", OnSubmit);
// git config --global user.name rahulrajmehra01
// git config --global user.email rahulrajmehra06@gmail.com