const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 8000;
app.get('/productdetail', async (req, res) => {
  const response = await fetch('https://api.mercadolibre.com/items/MLA875029375')
  const json = await response.json();
  res.json({
    "author": {
      "name": "Yamil",
      "lastname": "Lasso"
    },
    "item":{
      "id": json.id,
      "title": json.title,
      "price": json.price,
      "sold": json.sold_quantity,
      "condition": json.condition,
      "picture": json.thumbnail
    }
  }
);
},)

app.get('/productdescription', async (req, res) => {
  const response = await fetch('https://api.mercadolibre.com/items/MLA875029375/description')
  const json = await response.json();
  res.json({
    "author": {
      "name": "Yamil",
      "lastname": "Lasso"
    },
    "item_description":{
      "description": json.plain_text
    }
  }
);
},)

app.get('/search', async (req, res) => {
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=:ipad')
    const json = await response.json();
    res.json({
      "author": {
        "name": "Yamil",
        "lastname": "Lasso"
      },
      "items": {
          "data": json.results
      }
    }
  );
  },)
app.listen(port);
module.exports = app;