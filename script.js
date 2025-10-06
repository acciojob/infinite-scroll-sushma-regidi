// Get the list element
const list = document.getElementById("infi-list");

// Track total number of items added
let count = 0;

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++count}`;
   list.appendChild(li);

  }
}

// Add first 10 items initially
addItems(10);

// Detect when user scrolls to bottom
window.addEventListener("scroll", () => {
  // Check if user has reached bottom of page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2); // Add 2 more items
  }
});

