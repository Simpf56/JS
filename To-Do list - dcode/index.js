const itemsContainer = document.getElementById("items");
const itemTemplate = document.getElementById("itemTemplate");
const addButton = document.getElementById("add");

let item = getItems();

function getItems(){
    const value = localStorage.getItem("todo-test") || "[]";

    return JSON.parse(value)
}


console.log(items)