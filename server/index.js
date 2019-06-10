const Joi = require('joi');
var express = require('express');
//   path = require('path');
var app = express();
// app.server = require('http').createServer(app);
app.use(express.json());
var menus = require('./public/menus.js');
const menu = menus.navCatagories[0].include_in_menu;
// menus.navCatagories[0].children_data[0];
console.log(menu);
// app.get('/public/css/app.css', function(req, res) {
//   res.sendFile(path.join(__dirname + '/public/css/app.css'));
// });
// app.use(express.static(yourPublicPath));
//app.use(express.static('menus'));
// app.use('/public', express.static(__dirname + '/public'));
// const menus = [
//   { id: 1, name: 'menu1' },
//   { id: 2, name: 'menu2' },
//   { id: 3, name: 'menu3' }
// ];
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/api/public/menus', (req, res) => {
  res.send(menus);
});
// req.params return a "string"
// const menu = menus.find(m => m.url_path === parseInt(req.params.url_path));
app.get('/api/public/menus/:url_path', (req, res) => {
  const menu = menus.find((m) => m.url_path === req.params.url_path);
  if (!menu) res.status(404).send('The menu item was not found.');
  res.send(menu);
});
app.put('/api/public/menus/:url_path', (req, res) => {
  const menu = menus.find((m) => m.url_path === req.params.url_path);
  if (!menu) return res.status(404).send('The menu item was not found.');
//   {
//       res.status(404).send('The menu item was not found.');
//       return;
//     }

  // const result = validateMenu(req.body);  Only interested in result.error
  // prop of target obj {} validateMenu has 2 props error & menu
  const { error } = validateMenu(req.body); // same as result.error
  //   if (result.error) {
  //     res.status(400).send(result.error.details[0].message);
  if (error) return res.status(400).send(error.details[0].message);


  menu.name = req.body.menu;
  res.send(menu);
});
function validateMenu(menu) {
  const schema = {
    navCatagories: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(menu, schema);
}
app.post('/api/public/menus', (req, res) => {
  const { error } = validateMenu(req.body); // same as result.error
    res.status(400).send(error.details[0].message);
    return;
  }
  const menus = [];
  const menu = [
    {
      navCatagories: menus.length + 1,
      children_data: req.body.children_data
    }
  ];
  menus.push(menu);
  res.send(menu); // return id to client
});
// Powering a block menus/posts/2019/6?sortBy=name
//  Essential Route res.send(req.params.id);
// QueryString (optional) Param add in the url ?sortBy=name
// app.get('/api/menus/posts/:year/:month', (req, res) => {
//   res.send(req.query);
// });
// var http = require('http');
// var app = http.createServer(function(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify({ a: 1 }));
// });
// app.set('title', 'My Site');
// app.get('title');
//  res.json({"foo": "bar"});
// export PORT=5000
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}`));
