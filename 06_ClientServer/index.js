const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})

//static folder is client folder
app.use(express.static(path.join(__dirname, "client")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "home.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "home.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "home.html"));
});



const songs = [
    { id: 1, name: "Yesterday", artist: "The Beatles" },
    { id: 2, name: "Bohemian Rhapsody", artist: "Queen" },
    { id: 3, name: "Wake Me Up", artist: "Avicii" }
];

app.get("/api/songs", (req, res) => {
    res.json(songs);
});

