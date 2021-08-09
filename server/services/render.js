const axios = require("axios");
const baseUrl = process.env.baseURL || "http://localhost:9090"

exports.homeRoutes = (req, res) => {
  axios
    .get(`${baseUrl}/api/users`)
    .then((response) => {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  
  res.render("add_user");
};

exports.update_user = (req, res) => {
  axios
    .get(`${baseUrl}/api/users`, {params : {id: req.query.id}})
    .then((response) => {
      res.render("update_user", { user: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

// exports.delete_user = (req, res) => {
//   console.log("Hello");
//   axios
//     .delete(`http://localhost:9090/api/user/${req.query.id}`)
//     .then((response) => {
//       res.redirect('/');
      
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };
