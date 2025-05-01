document.getElementById("nav_home").addEventListener("click", function() {
    window.location.href = "../sites/index.html";
});
document.getElementById("nav_products").addEventListener("click", function() {
    window.location.href = "../sites/products.html";
});
document.getElementById("nav_recipes").addEventListener("click", function() {
    window.location.href = "../sites/recipes.html";
});
document.getElementById("nav_aboutus").addEventListener("click", function() {
    window.location.href = "../sites/aboutus.html";
});
document.getElementById("nav_contactus").addEventListener("click", function() {
    window.location.href = "../sites/contactus.html";
});

// Get all elements with the 'item_con' class
const clickableElements = document.querySelectorAll('.item_con');

// Add click event to each element
clickableElements.forEach(element => {
    element.addEventListener('click', function() {
        const divs = this.querySelectorAll('div');
        
        const log = {
            eventType: "click",
            text: divs.length > 0 ? divs[divs.length - 1].textContent : 'No div Found',
            timestamp: new Date().toLocaleString(),
            page: window.location.href,
            userAgent: navigator.userAgent,
            screenWidth: screen.width,
            screenHeight: screen.height
        };
        console.log(log);
    });
});