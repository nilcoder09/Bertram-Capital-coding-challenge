
  // Function to display a name (Replace this with your actual logic)
  function displayName() {
    if (names.length === 0) {
      names = initialNames.slice(); // Reset the list if all names have been displayed
    }
  
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
    names = names.filter(name => name !== selectedName); // Remove displayed name from the list
    return selectedName;
  }
  
  // Function to update the clock and date in the footer
  function updateClock() {
    const now = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const dayOfWeek = daysOfWeek[now.getDay()];
    const formattedDate = `${year}-${month}-${day} (${dayOfWeek})`;
    
    document.getElementById('clock').innerHTML = `Time: ${formattedTime}`;
    document.getElementById('date').innerHTML = `Date: ${formattedDate}`;
  }
  
  // Event listener for the display button
  document.getElementById('displayButton').addEventListener('click', function() {
    const nameDisplay = document.getElementById('nameDisplay');
    const name = displayName();
    // Display the name
    nameDisplay.innerHTML = `Name: ${name}`;
  });
  
  // Update the clock and date every second
  setInterval(updateClock, 1000);
  
  // Initial clock and date update
  updateClock();
  
  // Initial list of names
  const initialNames = ["John", "Jane", "Doe"];
  let names = initialNames.slice(); // Copy the initial list
  var myButton = document.getElementById('confirmation');

   myButton.disabled = true;