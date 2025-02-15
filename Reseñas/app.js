const stars = document.querySelectorAll(".star");


stars.forEach(function (star, index) {
  star.addEventListener("click", function () {

    const rating = index + 1;

    localStorage.setItem("rating", rating);

    updateStarRating(rating);
  });
});

function updateStarRating(rating) {

  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("checked");
  }

  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("checked");
  }
}