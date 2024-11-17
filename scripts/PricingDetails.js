document.addEventListener("DOMContentLoaded", () => {
    const pricingTable = document.querySelector(".pricing-table");
    const showHideButton = document.getElementById("toggle-details");
    
    let isTableVisible = false;

    // Ensure the pricing table is hidden initially
    pricingTable.style.display = "none";
    
    showHideButton.addEventListener("click", () => {
        isTableVisible = !isTableVisible;
        
        // Toggle display style based on isTableVisible
        pricingTable.style.display = isTableVisible ? "block" : "none";
        
        // Update button text
        showHideButton.textContent = isTableVisible ? "Hide Pricing  Details" : "Show Pricing Details";
    });
});
