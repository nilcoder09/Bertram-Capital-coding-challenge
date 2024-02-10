// Function to display a name
function displayName() {
    const names = ["John", "Jane", "Doe"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }
  
  // Function to update the clock in the footer
  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerHTML = formattedTime;
  }
  
  // Event listener for the display button
  document.getElementById('displayButton').addEventListener('click', function() {
    const nameDisplay = document.getElementById('nameDisplay');
    const name = displayName();
    // Display the name
    nameDisplay.innerHTML = `Name: ${name}`;
  });
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial clock update
  updateClock();
  