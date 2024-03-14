const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Pozdrav od Express poslužitelja!")
});

app.get("/animalName", (req,res) => {
    res.send("Daisy the Pug")
})

const info = {
    "Date of Birth": "16. prosinca, 2023.",
    "Address": "Splitska kućica 7, Split",
    "Contact Number": "021 222 222",
}

app.get("/info", (req,res) => {
    res.send(info)
})

app.get("/skills", (req,res) => {
    var skills = Array.from({length: 3}, () => Math.floor(Math.random() * 100));
    res.send(skills);
})


app.listen(PORT, () => {
    console.log(`Server sluša zahtjeve na portu ${PORT}`);
})
