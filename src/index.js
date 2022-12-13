const Express = require('express')
import {PrismaClient} from 'prisma/prisma-client'
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const prisma = new PrismaClient();

const app = Express()

app.use(Express.json());

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//config view engine
viewEngine(app);

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`);
});

//init all web routes
initWebRoutes(app);