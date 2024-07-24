// journal.js

document.addEventListener("DOMContentLoaded", () => {
  displayFavorites();
});

const displayFavorites = () => {
  const favoritesContainer = document.getElementById("favorites-container");
  favoritesContainer.innerHTML = "";

  let favorites = JSON.parse(localStorage.getItem("cart")) || [];

  favoritesContainer.classList.add(
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

  favorites.forEach((movie) => {
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
        <img src="${movie.poster_path}" alt="${
      movie.title
    }" class="w-full h-auto object-cover">
        <div class="px-6 py-4 h-auto w-full">
          <div class="font-bold text-xl mb-2 truncate">${movie.title}</div>
          <div class="font-medium text-m mb-2">Personal Notes:</div>
          <p class="text-gray-700 text-base truncate" id="notes-${movie.id}">${
      movie.notes || "No notes added."
    }</p>
          <textarea id="note-input-${
            movie.id
          }" class="mt-2 p-2 border rounded w-full" placeholder="Add your personal note here"></textarea>
          <button class="save-note bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2" data-id="${
            movie.id
          }">Save Note</button>
        </div>
      `;
    favoritesContainer.appendChild(card);
  });

  // Add event listeners to the save note buttons
  const saveNoteButtons = document.querySelectorAll(".save-note");
  saveNoteButtons.forEach((button) => {
    button.addEventListener("click", saveNote);
  });
};

const saveNote = (event) => {
  const button = event.target;
  const movieId = button.getAttribute("data-id");
  const noteInput = document.getElementById(`note-input-${movieId}`).value;

  // Retrieve favorites from localStorage
  let favorites = JSON.parse(localStorage.getItem("cart")) || [];

  // Find the movie and add the note
  favorites = favorites.map((movie) => {
    if (movie.id === movieId) {
      return { ...movie, notes: noteInput };
    }
    return movie;
  });

  // Save the updated favorites back to localStorage
  localStorage.setItem("cart", JSON.stringify(favorites));

  // Update the displayed note
  document.getElementById(`notes-${movieId}`).innerText =
    noteInput || "No notes added.";

  // Clear the textarea after saving the note
  document.getElementById(`note-input-${movieId}`).value = "";

  // Display a success message
  alert("Your note has been saved!");
};
