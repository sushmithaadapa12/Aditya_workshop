// PROMISES AND ASYNC/AWAIT EXAMPLES IN JAVASCRIPT

// Example 1: Using Promises
// Simulating an asynchronous operation where we "order a book."
// The book might either be delivered (fulfilled) or lost in the mail (rejected).

function orderBook() {
    return new Promise((resolve, reject) => {
      // Simulating a delay of 2 seconds to mimic async operation
      setTimeout(() => {
        const isDelivered = Math.random() > 0.5; // Randomly decide if book is delivered
        if (isDelivered) {
          resolve("Book delivered!"); // If delivered, promise resolves successfully
        } else {
          reject("Book lost in the mail."); // If not, promise rejects with an error
        }
      }, 2000);
    });
  }
  
  // Calling orderBook() with Promise handling using .then() and .catch()
  orderBook()
    .then((message) => {
      console.log("Success:", message); // Logs if promise resolves (fulfilled)
    })
    .catch((error) => {
      console.error("Error:", error); // Logs if promise rejects (rejected)
    });
  
  
  // Example 2: Using Async/Await
  // Async/await is another way to handle promises in a cleaner, more readable way.
  // We’ll rewrite the orderBook example using async/await.
  
  async function placeOrder() {
    try {
      const message = await orderBook(); // Waits until orderBook() resolves or rejects
      console.log("Success:", message); // Logs if promise resolves (fulfilled)
    } catch (error) {
      console.error("Error:", error); // Logs if promise rejects (rejected)
    }
  }
  
  placeOrder(); // Calls the async function
  
  
  // Real-World Example: Fetching Data from an API
  // Imagine we need to fetch user data from an API endpoint
  // We'll demonstrate this with both Promises and Async/Await
  
  // Using Promises to fetch data from an API
  function fetchUserDataWithPromises() {
    // The fetch API returns a promise
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // Converts the response to JSON, which also returns a promise
      .then((data) => {
        console.log("User Data with Promises:", data); // Logs the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data with Promises:", error); // Catches and logs any fetch or JSON conversion errors
      });
  }
  
  // Uncomment below to call the fetch function with promises
  // fetchUserDataWithPromises();
  
  
  // Using Async/Await to fetch data from an API
  async function fetchUserDataWithAsyncAwait() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Waits for fetch to complete
      const data = await response.json(); // Waits for JSON conversion
      console.log("User Data with Async/Await:", data); // Logs the fetched data
    } catch (error) {
      console.error("Error fetching data with Async/Await:", error); // Catches and logs any errors
    }
  }
  
  // Uncomment below to call the fetch function with async/await
  // fetchUserDataWithAsyncAwait();
  
  