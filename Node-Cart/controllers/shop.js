const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("shop/index", {
        prods: rows,
        pageTitle: "Sponsers",
        path: "/sponsors",
      });
    })
    .catch((err) => console.log(err));
};
