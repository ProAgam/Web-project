// JavaScript to handle the form submission
const form = document.getElementById("itemForm");
const input = document.getElementById("title");
const itemList = document.getElementById("itemList");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get the input value
  const newItem = input.value.trim();

  if (newItem) {
    // Create a new list item element
    const li = document.createElement("li");
    li.textContent = newItem;

    // Add the new list item to the list
    itemList.appendChild(li);

    // Clear the input field
    input.value = "";
  }
});
