// Initialize the current step
var currentStep = 1;
    
// Function to show the current step
function showStep(step) {
    $("fieldset").hide(); // Hide all fieldsets
    $("fieldset.fs-" + step).show(); // Show the current step
}
    
// Show the initial step
showStep(currentStep);
    
// Function to handle the next button click
$("input[name='next']").click(function() {
    if (currentStep < 4) {
        currentStep++;
        showStep(currentStep);
    }
});
    
// Function to handle the previous button click
$("input[name='previous']").click(function() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
});
