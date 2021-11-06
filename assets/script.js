let yourName = "James Area" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Additional variables
var gbQuantity;
var ccQuantity;
var ssQuantity;
var total = 0;


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function () {

    if (gb >= 0) {
        gb++

        gbQuantity = document.getElementById('qty-gb');
        gbQuantity.textContent = gb;
        totalQuantity = document.getElementById('qty-total');
        total = total + 1;
        totalQuantity.textContent = total;
        console.log('Gingerbread + was clicked!')
    }

})

// Event listener for clicks on the "-" button for Gingerbread cookies
document.getElementById('minus-gb').addEventListener('click', function () {

    if (gb > 0) {
        gb--

        gbQuantity = document.getElementById('qty-gb');
        gbQuantity.textContent = gb;
        totalQuantity = document.getElementById('qty-total');
        total = total - 1;
        totalQuantity.textContent = total;
        console.log('Gingerbread - was clicked!')
    }

})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function () {

    if (cc >= 0) {
        cc++

        ccQuantity = document.getElementById('qty-cc');
        ccQuantity.textContent = cc;
        totalQuantity = document.getElementById('qty-total');
        total = total + 1;
        totalQuantity.textContent = total;
        console.log('Chocolate Chip + was clicked!')
    }

})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function () {

    if (cc > 0) {
        cc--

        ccQuantity = document.getElementById('qty-cc');
        ccQuantity.textContent = cc;
        totalQuantity = document.getElementById('qty-total');
        total = total - 1;
        totalQuantity.textContent = total;
        console.log('Chocolate Chip - button was clicked!')
    }

})

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function () {

    if (sugar >= 0) {
        sugar++

        ssQuantity = document.getElementById('qty-sugar');
        ssQuantity.textContent = sugar;
        totalQuantity = document.getElementById('qty-total');
        total = total + 1;
        totalQuantity.textContent = total;
        console.log('Sugar Sprinkle + button was clicked!')
    }
})

// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
document.getElementById('minus-sugar').addEventListener('click', function () {

    if (sugar > 0) {
        sugar--

        ssQuantity = document.getElementById('qty-sugar');
        ssQuantity.textContent = sugar;
        totalQuantity = document.getElementById('qty-total');
        total = total - 1;
        totalQuantity.textContent = total;
        console.log('Sugar Sprinkle - button was clicked!')
    }

})
