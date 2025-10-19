
let groceries = ["Milk", "Bread", "Eggs", "Rice"];

console.log("Current Grocery List:", groceries);


let newItem = prompt("Enter a grocery item to add:");
if (newItem) {
    groceries.push(newItem);
    alert(newItem + " added to your grocery list!");
}

let remove = prompt("Do you want to remove the last item? (yes/no)");
if (remove === "yes") {
    let removedItem = groceries.pop();
    alert(removedItem + " removed from your list.");
}


console.log("Final Grocery List:", groceries);
alert("Your final grocery list: " + groceries.join(", "));