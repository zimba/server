import * as express from "express";

const app = express();
const port = 4000;

const concepts = [
    {
        label: "label 1",
        children: 3
    },
    {
        label: "label 2",
        children: 0
    }
]

app.get("/api/results", (req, res) => res.json(concepts));

app.listen(port, () => console.log(`Server running on port ${ port }`));