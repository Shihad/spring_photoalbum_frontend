const app = require('express')()
const host = '127.0.0.1'
const port = 5000

let users = [
  {
    "id":1,
    "login":"Vvasya",
    "email":"vvasya@mail.com",
    "avatar":"img/1.jpg"
  },
  {
    "id":2,
    "login":"Petya",
    "email":"petya@mail.com",
    "avatar":"img/2.jpg"
  },
  {
    "id":3,
    "login":"Olya",
    "email":"yaolya@mail.com",
    "avatar":"img/3.jpg"
  }
]

let albums = [
  {
    "id":1,
    "name":"Ужасы Гондураса",
    "user_id":1,
    "photos":[
      {"comment":"Красивое озеро",
      "path":"canada.jpg"},
      {"comment":"Нефтедобыча открытым способом",
      "path":"tarsands.jpg"}
    ]
  }
]

//добавить несколько фотографий

app.get('/api/users', (req, res,next) => {
  res.status(200).type('text/plain')
  res.send('Its main page')
});

app.get('/api/albums', (req, res,next) => {
  res.header({
        'Access-Control-Allow-Origin': '*',
      });
  res.json(albums)
});
app.get('/api/albums/:a_id', (req, res,next) => {
  let a_id = req.params.a_id-1;
  res.header({
        'Access-Control-Allow-Origin': '*',
      });
  res.json(albums[a_id])
});

//Добавить endpoint для photos и users

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})
