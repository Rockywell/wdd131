const reviewsSubmitted = document.getElementById("reviewCounter");
reviewsSubmitted.textContent = localStorage.getItem("reviewCounter") || 0;