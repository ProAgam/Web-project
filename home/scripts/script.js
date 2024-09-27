// JavaScript to handle the form submission
const form = document.getElementById("itemForm");
const title = document.getElementById("title");
const amount = document.getElementById("amount");
const itemList = document.getElementById("itemList");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get the input value
  const newItemTitle = title.value.trim();
  const newItemAmount = amount.value.trim();

  // Create a new list item element
  const li = document.createElement("li");
  li.textContent = newItemTitle + " - " + newItemAmount;

  // Add the new list item to the list
  itemList.appendChild(li);

  // Clear the input field
  title.value = "";
});
