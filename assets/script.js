// First, tell us your name 
let yourName = "James Area" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function(){
    console.log('Gingerbread + was clicked!')
})

// Event listener for clicks on the "-" button for Gingerbread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    
    console.log('Gingerbread - was clicked!')
})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {

    console.log('Chocolate Chip + button was clicked!')

})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    
    console.log('Chocolate Chip - button was clicked!')

})

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    
    console.log('Sugar Sprinkle + button was clicked!')

})

// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
document.getElementById('minus-sugar').addEventListener('click', function() {
    
    console.log('Sugar Sprinkle - button was clicked!')

})
