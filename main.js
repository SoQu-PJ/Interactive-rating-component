const THANK_YOU_SECTION = document.querySelector(".thank-you-state-rating");
const RATING_SECTION = document.querySelector(".rating-state-start");
const SUBMIT = document.querySelector(".submit");
const RATING_LIST = document.querySelectorAll(".rating label");
let thankYouRating = document.querySelector(".submit-rating");

// Find radio value
function findSelection(field) {
    var test = document.getElementsByName(field);
    var sizes = test.length;
    for (i = 0; i < sizes; i++) {
        if (test[i].checked == true) {
            return test[i].value;
        }
    }
}

RATING_LIST.forEach((el, index) => {
    let prevElem = index == 0 ? 0 : RATING_LIST[index - 1];
    // Animation Rating mouseOver/mouseOut START
    el.addEventListener("mouseover", () => {
        if (index > 0)
            prevElem.style.opacity = "1";
        el.style.opacity = "1";
    })
    el.addEventListener("mouseout", () => {
        if (index > 0)
            prevElem.style.opacity = "0.5";
        el.style.opacity = "0.5";
    })
    // Animation Rating mouseOver/mouseOut END
})

// Submit Button Animation and Submitting a rating START
SUBMIT.addEventListener("click", (e) => {
    e.preventDefault();
    // Sumbit rating
    thankYouRating.innerHTML = findSelection("rating");

    // Hidden rating_section 
    RATING_SECTION.style.animation = "hiddenRatingSection 0.5s"
    RATING_SECTION.addEventListener("animationend", () => {
        // Show thank_you_section 
        THANK_YOU_SECTION.style.animation = "visibleRatingSection 0.5s"
        THANK_YOU_SECTION.classList.remove("hidden");
        RATING_SECTION.classList.add("hidden");
    })
})
// // Submit Button Animation and Submitting a rating END