/**
 * Fetches the current visitor count from the AWS SAM backend 
 * and updates the DOM element.
 */
async function updateCounter() {
    const counterElement = document.getElementById('counter');
    const apiUrl = "https://sxhyoqf9nf.execute-api.us-east-1.amazonaws.com/Prod/counter";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Update the display with the 'views' count from the API response
        counterElement.innerHTML = data.views;
    } catch (error) {
        console.error("Error fetching counter:", error);
        counterElement.innerHTML = "Unavailable";
    }
}

// Initialize the counter on page load
updateCounter();