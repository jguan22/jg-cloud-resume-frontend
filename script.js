async function updateCounter() {
    const counterElement = document.getElementById('counter');
    const apiUrl = "https://sxhyoqf9nf.execute-api.us-east-1.amazonaws.com/Prod/counter";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        counterElement.innerHTML = data.views;
    } catch (error) {
        console.error("Error fetching counter:", error);
        counterElement.innerHTML = "Unavailable";
    }
}

updateCounter();