const { urlencoded, json } = require('express');
const express = require('express');
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());  

const missions = [
    { 
        id: "1",
        missionname: "Able 1",
        astronaut: ["khattab", "joa", "balqees"],
        progress: 34
    },
    { 
        id: "2",
        missionname: "Apollol", 
        astronaut: ["khattab", "ali", "balqees"],
        progress: 34
    },
    { 
        id: "3", 
        missionname: "AirSTAR",
        astronaut: ["khattab", "ali", "balqees"], 
        progress: 34
    },
    { 
        id: "4",
        missionname: "Apollol", 
        astronaut: ["khattab", "ali", "balqis"], 
        progress: 34
    }
];

app.post('/missions', (req, res) => {
    const data = req.body;
    data.astronaut = JSON.parse(data.astronaut); 
    missions.push(data);
    console.log(req.body); 
    res.send("create mission");
});

app.get('/missions', (req, res) => {
    res.send(missions);
});

app.get("/missions/:id", (req, res) => {
    const paramsId = req.params.id;
    for (let i = 0; i < missions.length; i++) {
        if (missions[i].id === paramsId) {
            return res.send(missions[i]);
        }
    }
    res.send("mission is not found");
});

app.put('/missions/:id', (req, res) => {
    const data = req.body;
    data.astronaut = JSON.parse(data.astronaut); 

    console.log(data);

    for (let i = 0; i < missions.length; i++) {
        if (missions[i].id === data.id) {
            missions[i] = data;  
            return res.send("update the mission");
        }
    }
    res.send("mission is not found");
});

app.delete("/missions/:id", (req, res) => {
    const paramsId = req.params.id;
    for (let i = 0; i < missions.length; i++) {
        if (missions[i].id === paramsId) {
            missions = missions.filter((item) => item.id !== paramsId);  
            return res.send(missions[i]);
        }
    }
    res.send("mission is not found");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
