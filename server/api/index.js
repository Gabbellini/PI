const http = require("http");
const fs = require("fs");
const path = require("path");

const URL = require("url");

let newspapper = require("./news.json");

const endpoints = ["/api/news", "/api/new"];

/* init the server and listennig at 5000 */
http
  .createServer((req, res) => {
    if (!endpoints.includes(req.url)) {
      res.writeHead(404, "Not found");
      return res.end("Not found");
    }

    const method = req.method;

    switch (method) {
      case "GET":
        handleGetRequests(req, res);
        break;
      case "POST":
        handlePostRequests(req, res);
        break;
      case "DELETE":
        handleDeleteRequests(req, res);
        break;
    }
  })
  .listen(5000, () => console.log("api is running..."));

async function handlePostRequests(req, res) {
  let data = "";

  /* listenning when recive some chunk of data */
  await req.on("data", (chunk) => {
    data += chunk;
  });

  /* verify if the post has data */
  if (data.length) {
    /* after data be loaded */
    req.on("end", () => {
      /* recive data and make it an object */
      const { _new } = JSON.parse(data);

      addIDToNew(_new);

      /* add _new to news */
      newspapper.news.push(_new);

      /* save the new _new at news.json file */
      writeFile((message) => {
        res.end(JSON.stringify({ message }));
      });
    });
  } else {
    console.log("POST WITHOUT DATA");
  }
}

function handleGetRequests(req, res) {
  const query = URL.parse(req.url).query;

  if (query) {
    let [id] = query.match(/\d+/g);
    id = parseInt(id);
  }

  return res.end(JSON.stringify(newspapper));
}

function handleDeleteRequests(req, res) {
  const query = URL.parse(req.url).query;

    if(!query) {
        res.writeHead(400, 'Bad Request');
        return res.end();
    }

  let [id] = query.match(/\d+/g);
  id = parseInt(id);
  newspapper.news = newspapper.news.filter((_new) => _new.id !== id);

  writeFile((message) => res.end(JSON.stringify(message)));
}

function writeFile(callback) {
  fs.writeFile(
    /* path where is the news */
    path.join(__dirname, "news.json"),

    /* data that must be added to the file, this data will overwritte all current data*/
    JSON.stringify(newspapper, null, 2),

    /* after do it all, verify is it was a success or and error and handle with it */
    (err) => {
      if (err) {
        /* call the callback function passing by param the message */
        callback("Erro");
        throw err;
      } else {
        /* call the callback function passing by param the message */
        callback("Sucesso");
      }
    }
  );
}

function addIDToNew(_new) {
  /* get the last new registered */
  const lastNew = newspapper.news[newspapper.news.length - 1];

  /* verify if it realy has a new registered and attribute an id to the new */
  if (lastNew ?? false) {
    _new.id = lastNew.id + 1;
  } else {
    _new.id = 1;
  }
}
