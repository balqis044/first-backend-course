const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

let arr = [
    { id: "1", missionname: "Able 1", age: "20" },
    { id: "2", missionname: "Apollol", age: "21" },
    { id: "3", missionname: "AirSTAR", age: "22" },
    { id: "4", missionname: "Apollol", age: "23" }
];

app.get('/users', (req, res) => {
    res.json(arr);
});

app.get("/users/:id", (req, res) => {
    const user = arr.find((user) => user.id === req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.post("/users", (req, res) => {
    const { id, missionname, age } = req.body;

    if (!id || !missionname || !age) {
        return res.status(400).send("Missing required fields");
    }

    arr.push({ id, missionname, age });
    res.send("User created successfully");
});

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    let userFound = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            arr[i] = { ...arr[i], ...req.body };
            userFound = true;
            break;
        }
    }

    if (userFound) {
        res.send("User updated successfully");
    } else {
        res.status(404).send("User not found");
    }
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const newArr = arr.filter((item) => item.id !== id);

    if (newArr.length === arr.length) {
        return res.status(404).send("User not found");
    }

    arr = newArr;
    res.send("User deleted successfully");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
