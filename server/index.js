var express = require('express');
const fs = require('fs');
var path = require('path');
var cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());

app.get('/api/getMenus', (req, res) => {
  var menus = require('./public/menus.js');
  const menu = menus.navCatagories;
  res.json(menu);
  console.log('Sent list menus 2 ');
});

// export PORT=5000
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}`));
