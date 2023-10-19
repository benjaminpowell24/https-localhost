require("dotenv").config();

import express from "express";
import https from "https";
import fs from "fs";
import cors from "cors";
import helmet from "helmet";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());
app.use(helmet());

const options = {
    key: fs.readFileSync('{PATH/TO/CERTIFICATE-KEY-FILENAME}.pem'),
    cert: fs.readFileSync('{PATH/TO/CERTIFICATE-FILENAME}.pem')
}

const server = https.createServer(options, app)


app.get('/', (req, res) => {
    res.send('server up and running');
});

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});