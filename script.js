const submitButton = document.querySelector('.submit');
const container = document.querySelector('.container');
const thankYouContainer = document.querySelector('.thank-you-container');
const selectedRatingElement = document.querySelector('.selected-rating');
let selectedRating = '';


submitButton.addEventListener('click', () => {
    if(selectedRating){
        container.style.display = 'none';
        thankYouContainer.style.display = 'block';
        selectedRatingElement.textContent = `You selected ${selectedRating} out of 5`;
    }
});



const choosenRating = document.querySelectorAll('.num-circle');
choosenRating.forEach((rating) => {
    rating.addEventListener('click', function() {
        selectedRating = this.getAttribute('data-value');

    /* to keep the other ratings from changing */
        choosenRating.forEach((rating) => {
            rating.style.backgroundColor = 'hsl(213, 19%, 24%)';
            rating.style.color = 'hsl(217, 12%, 63%)';
        });
        
    /* to change the selected rating to the active effect */
        this.style.backgroundColor = 'hsl(217, 12%, 63%)';
        this.style.color = 'white';

    });

    /* function to listen for hover */
    rating.addEventListener('mouseenter', function() {

    /* checks if this is the selected rating, if its the hover doesnt get activated */

        if (this.getAttribute('data-value') !== selectedRating) {
            this.style.backgroundColor = 'hsl(25, 97%, 53%)';
        }
    });
        /* checks if this is the selected rating, if its the hover doesnt get activated */

    /* function to listen for unhover */
    rating.addEventListener('mouseleave', function() {

        /* checks if this is the selected rating, if its the hover doesnt get activated, rest of the ratings return to its original color since its a mouseleave function */

        if (this.getAttribute('data-value') !== selectedRating) {
            this.style.backgroundColor = 'hsl(213, 19%, 24%)';
        }
    });
});
