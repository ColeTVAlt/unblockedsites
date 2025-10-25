function filterGames() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const games = document.querySelectorAll(".game");

  games.forEach(game => {
    const title = game.querySelector("h2").textContent.toLowerCase();
    game.style.display = title.includes(input) ? "" : "none";
  });
}
