const express = require('express');
const cors = require('cors');
const db = require('./app/models')

const app = express();

const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./app/routes/tutorial.routes')(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('server listening on port 8080');
});

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.log('cannot connect to teh database : ', err);
        process.exit();
    })
