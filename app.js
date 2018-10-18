document.addEventListener(`DOMContentLoaded`, () => {
  // NAME ALL THE BUTTONS
  let homeButton = document.getElementById(`homeButton`)
  let moviesButton = document.getElementById(`moviesButton`)
  // NAME ALL THE DIVS
  let homeDiv = document.getElementById(`homeDiv`)
  let tableDiv = document.getElementById(`tableDiv`)
  let inputFormDiv = document.getElementById(`inputFormDiv`)
  // HANDLES ALL CLICKS ON THE NAV BUTTONS
  const navButtonClicked = (event) => {
    switch (event.target.id) {
      case `homeButton`:
        console.log(`home`);
        homeDiv.style.display = `block`
        tableDiv.style.display = `none`
        inputFormDiv.style.display = `none`
        break;
      case `moviesButton`:
        console.log(`all`);
        homeDiv.style.display = `none`
        tableDiv.style.display = `block`
        inputFormDiv.style.display = `none`
        break;
      default:
        console.log(`default`);
    }
  }
  // ADD EVENTLISTENERS
  // homeButton addEventListener
  homeButton.addEventListener(`click`, navButtonClicked)
  // moviesButton BUTTON addEventListener
  moviesButton.addEventListener(`click`, navButtonClicked)



  // axios.get(`https://tzavaras-movie-db.herokuapp.com/movies`)
  //   .then(result => console.log(result))
})