require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const db = require('./src/models')
const app = express();

var corsOptions = {
    origin: ['*']
};

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Restart database
// db.sequelize.sync({force: true}).then(()=>{
//     console.log("Drop and resync db.")
// });

app.get('/', (req, res) => {
    res.json({
        response: "Hello Bloomier world"
    });
})

require("./src/routes/photo.routes")(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Bloomier Server is running in the port ${PORT}`);
})
