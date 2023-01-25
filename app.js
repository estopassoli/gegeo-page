require("dotenv").config();
const compression = require('compression')
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
var session = require("express-session");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
app.use(compression())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, "./public"), { index: false }));
app.set("views", path.join(__dirname, "./public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.listen(PORT, () => {
    console.log("Server running in http://localhost:" + PORT);
});

app.get("/", (req, res) => {
    res.render("index.html");
});
app.get("/alterar-pagina", (req, res) => {
    res.render("upload.html");
});
app.post('/upload/html/file', (req, res) => {
    console.log(req.body)
    const { codigo, senha } = req.body;
    if (senha == '13170104a') {
        fs.writeFileSync('./public/index.html', codigo);
        const antiga = fs.readFileSync('./public/index.html', 'utf8');
        /* salvar backup de antiga */
        fs.writeFileSync('./public/backup.html', antiga);
        res.send('Pronto! código atualizado. <3')
    } else {
        res.send('Senha incorreta! :(')
    }
})