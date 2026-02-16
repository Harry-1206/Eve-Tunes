const songList = document.getElementById("songList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

let filteredSongs = [...songs];

function renderSongs(list) {
  songList.innerHTML = "";

  list.forEach(song => {
    const li = document.createElement("li");
    li.className = "song-item";

    li.innerHTML = `
      <a class="song-title"
         href="${song.youtubeUrl || '#'}"
         target="_blank"
         rel="noopener noreferrer">
        ${song.title}
      </a>
      <div class="song-meta">
        ${song.releaseDate} / ${song.album}
      </div>
    `;

    songList.appendChild(li);
  });
}

function handleSearch() {
  const keyword = searchInput.value.toLowerCase();

  filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(keyword)
  );

  renderSongs(filteredSongs);
}

function handleSort() {
  const value = sortSelect.value;

  if (value === "title") {
    filteredSongs.sort((a, b) =>
      a.title.localeCompare(b.title, "ja")
    );
  }

  if (value === "date") {
    filteredSongs.sort((a, b) =>
      new Date(a.releaseDate) - new Date(b.releaseDate)
    );
  }

  renderSongs(filteredSongs);
}

searchInput.addEventListener("input", handleSearch);
sortSelect.addEventListener("change", handleSort);

renderSongs(filteredSongs);