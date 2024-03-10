function makeAlbum(artist, albumTitle, numTracks) {
    var albumInfo = {
        artist: artist,
        albumTitle: albumTitle,
    };
    if (numTracks !== undefined) {
        albumInfo.numTracks = numTracks;
    }
    return albumInfo;
}
// Example usage:
var album1 = makeAlbum("Coldplay", "A Rush of Blood to the Head");
var album2 = makeAlbum("Taylor Swift", "Fearless", 16);
var album3 = makeAlbum("Imagine Dragons", "Night Visions", 12);
console.log(album1); // { artist: 'Coldplay', albumTitle: 'A Rush of Blood to the Head' }
console.log(album2); // { artist: 'Taylor Swift', albumTitle: 'Fearless', numTracks: 16 }
console.log(album3); // { artist: 'Imagine Dragons', albumTitle: 'Night Visions', numTracks: 12 }
