//On pageload calls the fetch
document.addEventListener("DOMContentLoaded", async () => {
  const apikey = "fddc45029159988c8c3aca4c9d7c477e";
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
  //Fetching Movies data
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Network issue, ${response.status}`);
    }
    data = await response.json();
    console.log(data);
    fetchData(data.results);
  } catch (error) {
    console.log("Fetch Error", error);
  }
  document.getElementById("searchMovie").addEventListener("click", () => {
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();
    searchData(searchTerm);
  });
});
const fetchData = (movies) => {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = "";
  moviesContainer.classList.add(
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "lg:grid-cols-4",
    "gap-x-4",
    "gap-y-4",
    "px-2",
    "py-10",
    "mx-auto",
    "mt-8",
    "mb-8",
    "md:ml-10",
    "md:mr-10",
    "justify-items-center",
    "items-center"
  );
  movies.forEach((movie) => {
    console.log(movie);
    const title = movie.title;
    const thumbNail = movie.poster_path;
    const overview = movie.overview;
    const uniqueId = movie.id;
    const releaseDate = movie.release_date;
    const card = document.createElement("div");
    card.classList.add(
      "max-w-md",
      "rounded-lg",
      "shadow-lg",
      "m-2",
      "h-auto",
      "w-full"
    );
    card.innerHTML = `
    <img src= "${`https://image.tmdb.org/t/p/w500${thumbNail}`}" alt="${title}" class="w-full h-auto object-cover">
    <div class="px-6 py-4 h-auto w-full">
     <div class="font-bold text-xl mb-2 truncate">${title}</div>
    <p class="text-gray-700 text-base truncate">${overview}</p>
    <div class="font-bold text-l mb-2">Releasing on: ${releaseDate}</div>
    <button class="add-to-cart bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"  data-poster-path="https://image.tmdb.org/t/p/w500/${thumbNail}" data-id="${uniqueId}" data-title="${title}">Add to Favorite</button>
    </div>
   `;
    moviesContainer.appendChild(card);
  });
  // Add event listeners to the buttons
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });
};
function addToCart(event) {
  const button = event.target;
  const movieId = button.getAttribute("data-id");
  const movieTitle = button.getAttribute("data-title");
  const posterPath =
    button.getAttribute("data-poster-path") || "placeholder-image-url";

  // Retrieve cart from localStorage or initialize an empty array
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the movie is already in the cart based on its ID
  if (cart.some((movie) => movie.id === movieId)) {
    alert(`${movieTitle} is already in your Favorite!`);
    return;
  }

  // Add the movie to the cart
  cart.push({ id: movieId, poster_path: posterPath, title: movieTitle });

  // Save the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Display a success message
  alert(`${movieTitle} has been added to your Favorite!`);
}
const searchData = (searchTerm) => {
  const filteredMovies = data.results.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  if (filteredMovies.length > 0) {
    fetchData(filteredMovies);
  } else {
    alert("No movies found matching your search.");
  }
};
