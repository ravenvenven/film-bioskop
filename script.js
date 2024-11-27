// Mock movie data for genres
const movies = {
    Action: [
      { title: "black phanter", poster: "black-panther.jpg" },
      { title: "transformer", poster: "transformer.jpg" },
      { title: "jhon wick" , poster: "th.jpeg"},
      { title: "gladiator" , poster: "gladiator-ii.webp"},
      { title: "the dark knight" , poster: "the dark knight.jpg"}
    ],
    Drama: [
      { title: "The Shawshank Redemption", poster: "the shawshank.jpeg" },
      { title: "Forrest Gump", poster: "forrest gump.jpeg" }
    ],
    Comedy: [
      { title: "The Hangover", poster: "hangover.jpg" },
      { title: "Superbad", poster: "superbad.jpg" }
    ],
    "Sci-Fi": [
      { title: "Interstellar", poster: "interstellar.jpg" },
      { title: "Inception", poster: "inception.jpg" }
    ],
    Horror: [
      { title: "The Conjuring", poster: "conjuring.jpg" },
      { title: "It", poster: "it.jpg" }
    ]
  };
  
  // Show movies for a selected genre
  function showMovies(genre, description) {
    // Update genre title and description
    document.getElementById("genre-title").textContent = genre;
    document.getElementById("genre-description").textContent = description;
  
    // Generate movie grid
    const movieGrid = document.querySelector(".movie-grid");
    movieGrid.innerHTML = ""; // Clear existing content
    movies[genre].forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
      `;
      movieGrid.appendChild(movieDiv);
    });
  
    // Show movie list and hide genre cards
    document.querySelector(".genre-container").classList.add("hidden");
    document.getElementById("movie-list").classList.remove("hidden");
  }
  
  // Hide movie list and show genre cards
  function hideMovies() {
    document.querySelector(".genre-container").classList.remove("hidden");
    document.getElementById("movie-list").classList.add("hidden");
  }
  