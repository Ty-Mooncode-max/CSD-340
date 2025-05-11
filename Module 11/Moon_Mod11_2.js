let items = [];
let alertsForAddEnabled = true;
const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKey = "items";

function toggleAddAlerts() {
    alertsForAddEnabled = !alertsForAddEnabled;
    const status = alertsForAddEnabled ? "enabled" : "disabled";
    console.log("Add alerts for entering items are now " + status + ".");
    alert("Add alerts for entering items are now " + status + ".");
}

function renderItems() {
    itemsDiv.innerHTML = null;
    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.classList.add("item-container");

        const text = document.createElement("p");
        text.classList.add("item-text");
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.className = "buttonDel";
        button.onclick = () => removeItem(idx);

        container.appendChild(text);
        container.appendChild(button);
        itemsDiv.appendChild(container);
    }
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) items = JSON.parse(oldItems);
    renderItems();
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);
}

function addItem() {
    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item");
        return;
    }
    items.push(value);
        if (alertsForAddEnabled) {
        alert("You added an item");
    }
    renderItems();
    input.value = "";
    saveItems();
}

function removeItem(idx) {
    items.splice(idx, 1);
    renderItems();
    saveItems();
}

function deleteLastItem() {
    if (items.length === 0) {
        alert("No items to delete.");
        return;
    }
    items.pop();
    renderItems();
    saveItems();
}

function displayItems() {
    const itemsDiv = document.getElementById("items");

    if (window.getComputedStyle(itemsDiv).display === "none") {
        itemsDiv.style.display = "block";
    } else {
        itemsDiv.style.display = "none";
    }
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});

document.addEventListener("DOMContentLoaded", loadItems);