const thankYouSection = document.querySelector(".thank-you-state-rating");
const ratingSection = document.querySelector(".rating-state-start");
const submit = document.querySelector(".submit");
const ratingList = document.querySelectorAll(".rating li");
let thankYouRating = document.querySelector(".submit-rating");

let rating = 0;

ratingList.forEach((el, index) => {
    let prevElem = index == 0 ? 0 : ratingList[index - 1];
    el.addEventListener("click", () => {
        el.classList.remove("is-selected-rating");
        rating = el.textContent;
        el.classList.add("is-selected-rating");
    })
    el.addEventListener("mouseover", () => {
        if (index > 0)
            prevElem.style.opacity = "1";
        el.style.opacity = "1";
    })
    el.addEventListener("mouseout", () => {
        prevElem.style.opacity = "0.5";
        el.style.opacity = "0.5";
    })
})

submit.addEventListener("click", () => {
    console.log(rating);
    thankYouRating.innerHTML = rating;
    thankYouSection.classList.remove("hidden");
    ratingSection.classList.add("hidden");
})