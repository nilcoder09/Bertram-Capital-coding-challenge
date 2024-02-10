# Bertram-Capital-coding-challenge

Access here : https://nilcoder09.github.io/Bertram-Capital-coding-challenge/

#Who's Paying for Coffee Today?

This simple website helps you keep track of who paid for coffee in a group setting. It uses JavaScript and HTML to generate random names from a list, display them on the page, and record whether or not they have paid for coffee. The website removes the name of the person who has paid from the list until everyone else pays at least once. It displays this information on the screen, providing a fun way to track coffee payments in a group.

##Features

Random Name Display: Click the "Click here to knwo who's paying!" button to display a randomly selected name from the group.
Payment Confirmation: After someone pays for coffee, click the "Did the person pay for coffee? Click Here!" button to confirm the payment. The paid person's name will be removed from the list.
Restoration: Once everyone has paid at least once, the list is restored, allowing the process to begin again.

##Usage

button "Did the person pay for coffee? Click Here!" stays disabled until a name is displayed by clicking "who's paying" button. Once the name is displayed you can regenerate by clicking "Click here to knwo who's paying!" button or confirm by clicking "Did the person pay for coffee? Click Here!" button. If confirmed the "Did the person pay for coffee? Click Here!" button will be disabled once again until the "Click here to knwo who's paying!" button is clicked and new name is displayed.
Display a Name:
Click the "Click here to know who's paying!" button.
Confirm Payment:
After someone pays for coffee, click the "Did the person pay for coffee? Click Here!" button.
Restoration:
When everyone has paid at least once, the list is restored automatically for the next round.

##Website Structure

###Navbar: Displays the website title and a link to contact the developer.

###Content Section: Lists the members of the group. Displays a list of favorite coffees with their prices.

###Button Section: Contains buttons for displaying a random name, confirming payment, and displaying the payer's name.

###Payday Section: Displays the name of the person who paid for coffee today.

###Description Section: Provides a brief description of the website's functionality.

###Footer: Includes a live clock and date at the bottom of the page.

##Technical Details

The website is built using HTML, CSS (linked from an external file), and JavaScript. JavaScript is responsible for generating random names, updating the clock and date, handling user interactions, and managing the list of names.

##Installation

No installation is required. Website is published on github  pages.


Assumptions made:
•	The biggest assumption is that every coffee drink price lis nearly same and paying one day for everyone will not hurt one person’s budget.
•	The logic assumes that people in the group drink coffee regularly.
•	The initial list of names (initialNames) represents a fixed group of people. The code assumes that the group remains the same, and there's no provision for dynamically adding or removing names.
•	The logic assumes that everyone in the group should pay for coffee at least once before the list is restored. It doesn't consider scenarios where some members might not participate or where different individuals contribute varying amounts.
•	The "Click here to know who's paying!" button uses a random selection to pick a name. The assumption is that this randomness adds an element of surprise, and there's no specific order in which people pay.
•	The logic assumes that the payment confirmation is a manual process triggered by the user clicking the "Did the person pay for coffee? Click Here!" button. There's no automated tracking of actual payments or financial transactions.


Enjoy your coffee tracking experience! 
