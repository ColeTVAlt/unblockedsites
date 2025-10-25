function filterGames() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const games = document.querySelectorAll(".game");

  games.forEach(game => {
    const title = game.querySelector("h2").textContent.toLowerCase();
    game.style.display = title.includes(input) ? "" : "none";
  });
}

function openGame(url) {
  const modal = document.getElementById("gameModal");
  const frame = document.getElementById("gameFrame");
  frame.src = url;
  modal.classList.add("show");
}

function closeGame() {
  const modal = document.getElementById("gameModal");
  const frame = document.getElementById("gameFrame");
  frame.src = "";
  modal.classList.remove("show");
}
