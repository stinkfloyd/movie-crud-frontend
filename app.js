document.addEventListener(`DOMContentLoaded`, () => {
  // NAME ALL THE BUTTONS
  let homeButton = document.getElementById(`homeButton`)
  let moviesButton = document.getElementById(`moviesButton`)
  // NAME ALL THE DIVS
  let homeDiv = document.getElementById(`homeDiv`)
  let tableDiv = document.getElementById(`tableDiv`)
  let inputFormDiv = document.getElementById(`inputFormDiv`)
  let tableBody = document.getElementById(`tableBody`)

  // BUILDS A TABLE OF ALL MOVIES IN THE DATABASE
  const buildTable = () => {
    // clear out the movies tbody
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild)
    }
    axios.get(`https://tzavaras-movie-db.herokuapp.com/movies`)
      .then((movies) => {
        movies.data.forEach((movie) => {
          let tr = document.createElement(`tr`)
          let title = document.createElement(`td`)
          let director = document.createElement(`td`)
          let year = document.createElement(`td`)
          let rating = document.createElement(`td`)
          let deleteTd = document.createElement(`td`)
          let delButton = document.createElement(`button`)
          let editTd = document.createElement(`td`)
          let editButton = document.createElement(`button`)
          // Fills in the row's data
          title.innerText = movie.title
          director.innerText = movie.director
          year.innerText = movie.year
          rating.innerText = movie.rating
          // Add delete button to each row
          delButton.innerText = `Delete Movie`
          delButton.classList.add(`btn`)
          delButton.classList.add(`btn-danger`)
          delButton.setAttribute(`data-id`, movie.id)
          delButton.addEventListener(`click`, (event) => {
            let movieId = event.target.getAttribute('data-id')
            // DELETE THIS RECORD
            axios.delete(`https://tzavaras-movie-db.herokuapp.com/movies/${movieId}`)
              .then((response) => {
                event.target.parentElement.parentElement.remove()
              })
              .catch((err) => {
                throw err
              })
          })
          editButton.innerText = `Edit Movie`
          editButton.classList.add(`btn`)
          editButton.classList.add(`btn-warning`)
          editButton.setAttribute(`data-id`, movie.id)
          editButton.addEventListener(`click`, (event) => {
            console.log(event.target)
          })
          tr.appendChild(title)
          tr.appendChild(director)
          tr.appendChild(year)
          tr.appendChild(rating)
          deleteTd.appendChild(delButton)
          tr.appendChild(deleteTd)
          editTd.appendChild(editButton)
          tr.appendChild(editTd)
          tableBody.appendChild(tr)
        })
      })
      .catch((err) => {
        throw err
      })
  }
  // HANDLES ALL CLICKS ON THE NAV BUTTONS
  const navButtonClicked = (event) => {
    switch (event.target.id) {
      case `homeButton`:
        // Hide the other divs and show the correct one.
        homeDiv.style.display = `block`
        tableDiv.style.display = `none`
        inputFormDiv.style.display = `none`
        break;
      case `moviesButton`:
        // Hide the other divs and show the correct one.
        homeDiv.style.display = `none`
        tableDiv.style.display = `block`
        inputFormDiv.style.display = `none`
        buildTable();
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