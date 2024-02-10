
  // Function to display a name
  function displayName() {
    let names = initialNames.slice(); // Copy the initial list
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
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
    const username = displayName();
    // Display the name
    nameDisplay.innerHTML = `${username}`;
    document.getElementById("confirmation").disabled = false;

  });

  document.getElementById( "confirmation" ).addEventListener( "click", function(){
    const displayedName = document.getElementById('nameDisplay').textContent;
    const index = initialNames.indexOf(displayedName);
    const removedName = initialNames.splice(index, 1)[0];
    const whopaid = document.getElementById("day1");
    whopaid.innerHTML = `Today's coffee was paid by : ${removedName}`;
    document.getElementById("confirmation").disabled = true;
    if(initialNames.length === 0){
        initialNames = restorNames.slice();
        console.log("Array restored:", initialNames);
    }

  });
  
  // Update the clock and date every second
  setInterval(updateClock, 1000);
  
  // Initial clock and date update
  updateClock();
  
  // Initial list of names
  let initialNames = ["Bob", "Jeremy", "Ethan", "Lucas", "Mason", "Oliver"];
  const restorNames = ["Bob", "Jeremy", "Ethan", "Lucas", "Mason", "Oliver"];
  
  var myButton = document.getElementById('confirmation');

   myButton.disabled = true;





