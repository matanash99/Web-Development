
let song1 = {
  "title": "Shape of You",
  "artist": "Ed Sheeran",
  "duration": 233,
  "genre": "Pop"
}

let song2 = Object.assign(song1);
console.log(song2["title"]);
console.log(song1.title);

let {title, duration,genre} = song2;



for (let key in song1){
    console.log(`${key}: ${song1[key]}`);
}


let playlist = {
  "playlistName": "My Favorites",
  "createdBy": "John",
  "songs": [
    {
      "title": "Shape of You",
      "artist": "Ed Sheeran",
      "duration": 233
    },
    {
      "title": "Blinding Lights",
      "artist": "The Weeknd",
      "duration": 200
    }
  ]
}

let addSong = {
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "duration": 233
};

playlist.songs.push(addSong);



// Iterate and print song titles
playlist.songs.forEach(song => {
  console.log(`Title: ${song.title}, Artist: ${song.artist}`);
});





//Turn json to text
const jsonText = JSON.stringify(playlist);

//Turn string to json
let playlist2 = JSON.parse(jsonText);


//Save the playlist text as key in browser client local storage
localStorage.setItem("asdf", jsonText)

//Get the playlist text with key
let storageText = localStorage.getItem("asdf")
let playlist3 = JSON.parse(storageText)

