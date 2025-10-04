// Step 1: Define the asynchronous function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the container element
  const dataContainer = document.getElementById('api-data');

  // Step 4: Use try-catch for async fetching and error handling
  try {
    // Fetch the data
    const response = await fetch(apiUrl);

    // Convert to JSON
    const users = await response.json();

    // Step 5: Clear the "Loading..." message
    dataContainer.innerHTML = '';

    // Step 6: Create a <ul> element to hold user names
    const userList = document.createElement('ul');

    // Step 7: Loop through users and create list items
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 8: Append the user list to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 9: Handle fetch errors
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Step 10: Invoke fetchUserData when DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
