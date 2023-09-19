const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const form = document.getElementById("item-form");
const listItem = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const filterItem = document.getElementById("filter");
const checkbox = document.getElementById("checkbox");

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

    CheckUI();
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

// Removing single item
function removeItem(e) {

    if (e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
    }
    CheckUI();
}

// Removing All items
function clearItems(e) {

    while (listItem.firstChild) {
        listItem.removeChild(listItem.firstChild);
    }
    CheckUI();
}

// Filter Items
function ItemFilter(e) {

    const items = listItem.querySelectorAll("li");
    const text = e.target.value.toLowerCase();

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
}

// Dark Mode
function darkMode(e) {

    if (!e.target.checked) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "skyblue";
        document.body.style.color = "white";
    }
}


// Check UI
function CheckUI(e) {

    const items = listItem.querySelectorAll("li");
    if (items.length === 0) {
        clearBtn.style.display = "none";
        filterItem.style.display = "none";
    } else {
        clearBtn.style.display = "block";
        filterItem.style.display = "block";
    }
}

form.addEventListener("submit", OnSubmit);
listItem.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
filterItem.addEventListener("input", ItemFilter);
checkbox.addEventListener("click", darkMode);

CheckUI();

