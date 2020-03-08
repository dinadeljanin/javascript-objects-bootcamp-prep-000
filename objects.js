let playlist = new Object();

playlist = {
 artistName: "Sasha",
 songTitle: "Xpander"
}

function updatePlaylist(playlist, artistName, songTitle) {
  // Add the song and artist as a key-value pair and then return the whole playlist
  Object.assign(
    {},
    artistName,
    songTitle
    ); 
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}